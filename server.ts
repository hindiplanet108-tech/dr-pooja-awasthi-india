import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import multer from 'multer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

function getArg(flag: string): string | undefined {
  const idx = process.argv.indexOf(flag);
  return idx !== -1 && idx + 1 < process.argv.length ? process.argv[idx + 1] : undefined;
}
const portArg = getArg('--port') || getArg('-p');
// In AI Studio, nginx listens on 8080 and forwards traffic to 3000.
// Thus the Node dev server must always bind to port 3000 (never 8080).
const PORT = portArg
  ? parseInt(portArg, 10)
  : (process.env.PORT && process.env.PORT !== '8080' ? parseInt(process.env.PORT, 10) : 3000);
const HOST = '0.0.0.0';

// Ensure data/cms and public/uploads directories exist
const DATA_DIR = path.resolve(__dirname, 'data/cms');
const UPLOADS_DIR = path.resolve(__dirname, 'public/uploads');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const AUTH_FILE = path.join(DATA_DIR, 'auth.json');
const PAGES_FILE = path.join(DATA_DIR, 'pages.json');
const MEDIA_FILE = path.join(DATA_DIR, 'media.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');
const SITE_CONTENT_FILE = path.join(DATA_DIR, 'siteContent.json');
const REVIEWS_FILE = path.join(DATA_DIR, 'reviews.json');

// Helper functions for JSON storage
function readJsonFile<T>(filePath: string, defaultValue: T): T {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2), 'utf-8');
      return defaultValue;
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as T;
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return defaultValue;
  }
}

function writeJsonFile<T>(filePath: string, data: T): boolean {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
    return false;
  }
}

// Password hashing & session token management
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'pooja_spiritual_cms_secret_key_2026_vedic_divine';

function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
}

function verifyPassword(password: string, salt: string, storedHash: string): boolean {
  const calcHash = hashPassword(password, salt);
  const bufA = Buffer.from(calcHash, 'hex');
  const bufB = Buffer.from(storedHash, 'hex');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

function generateToken(payload: { email: string; timestamp: number }): string {
  const dataB64 = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto.createHmac('sha256', SESSION_SECRET).update(dataB64).digest('base64url');
  return `${dataB64}.${signature}`;
}

function verifyToken(token: string): { email: string; timestamp: number } | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 2) return null;
    const [dataB64, signature] = parts;
    const expectedSig = crypto.createHmac('sha256', SESSION_SECRET).update(dataB64).digest('base64url');
    if (expectedSig !== signature) return null;
    const data = Buffer.from(dataB64, 'base64url').toString('utf-8');
    const payload = JSON.parse(data);
    // 7 days expiration
    const maxAge = 7 * 24 * 60 * 60 * 1000;
    if (Date.now() - payload.timestamp > maxAge) return null;
    return payload;
  } catch {
    return null;
  }
}

// Authentication middleware
interface AuthRequest extends Request {
  adminEmail?: string;
}

function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
  }
  const token = authHeader.split(' ')[1];
  const payload = verifyToken(token);
  if (!payload) {
    return res.status(401).json({ error: 'Unauthorized: Session expired or invalid' });
  }
  req.adminEmail = payload.email;
  next();
}

// Multer upload config
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const cleanName = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e4)}`;
    cb(null, `${cleanName}_${uniqueSuffix}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB max (supports video)
  },
  fileFilter: (_req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp|gif|svg|mp4|webm|quicktime/;
    const extname = allowed.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowed.test(file.mimetype);
    if (extname || mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only images (JPEG, PNG, WEBP, SVG, GIF) and videos (MP4, WEBM) are supported'));
    }
  },
});

// Express middlewares
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Serve static uploads
app.use('/uploads', express.static(UPLOADS_DIR));

// ==========================================
// 1. AUTHENTICATION APIS
// ==========================================

// Login
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const authData = readJsonFile(AUTH_FILE, {
    email: 'admin@poojaawasthi.com',
    name: 'Dr. Pooja Awasthi',
    salt: 'b304e297c201b5ed941be9262b9df995',
    hash: 'a36f10647936b59282f9b411a20758a76f80c92762569bb1952c4d00ddde10515f6828115d82a2df796b09811dc21669336897cb14069d9b049cf413169b1290',
  });

  const normalizedInputEmail = String(email).trim().toLowerCase();
  const storedEmail = String(authData.email).trim().toLowerCase();
  // Also accept user email hindiplanet108@gmail.com
  const isEmailMatch = normalizedInputEmail === storedEmail || normalizedInputEmail === 'hindiplanet108@gmail.com' || normalizedInputEmail === 'admin';

  if (!isEmailMatch || !verifyPassword(String(password).trim(), authData.salt, authData.hash)) {
    return res.status(401).json({ error: 'अमान्य ईमेल या पासवर्ड (Invalid email or password)' });
  }

  const token = generateToken({ email: authData.email, timestamp: Date.now() });
  return res.json({
    token,
    user: {
      email: authData.email,
      name: authData.name,
      role: 'admin',
    },
    message: 'सफलतापूर्वक लॉगिन किया गया (Login successful)',
  });
});

// Current user profile check
app.get('/api/auth/me', requireAuth, (req: AuthRequest, res: Response) => {
  const authData = readJsonFile(AUTH_FILE, {
    email: 'admin@poojaawasthi.com',
    name: 'Dr. Pooja Awasthi',
  });
  return res.json({
    user: {
      email: authData.email,
      name: authData.name,
      role: 'admin',
    },
  });
});

interface AuthData {
  email: string;
  name: string;
  salt: string;
  hash: string;
  updatedAt?: string;
}

// Change Password & Email
app.post('/api/auth/change-password', requireAuth, (req: AuthRequest, res: Response) => {
  const { currentPassword, newPassword, newEmail, name } = req.body;
  if (!currentPassword || !newPassword) {
    return res.status(400).json({ error: 'Current password and new password are required' });
  }

  const authData = readJsonFile<AuthData>(AUTH_FILE, {
    email: 'admin@poojaawasthi.com',
    name: 'Dr. Pooja Awasthi',
    salt: '',
    hash: '',
    updatedAt: new Date().toISOString(),
  });

  if (!verifyPassword(String(currentPassword).trim(), authData.salt, authData.hash)) {
    return res.status(400).json({ error: 'वर्तमान पासवर्ड गलत है (Current password is incorrect)' });
  }

  if (newPassword.length < 6) {
    return res.status(400).json({ error: 'नया पासवर्ड कम से कम 6 अक्षरों का होना चाहिए' });
  }

  const newSalt = crypto.randomBytes(16).toString('hex');
  const newHash = hashPassword(newPassword, newSalt);

  authData.salt = newSalt;
  authData.hash = newHash;
  if (newEmail) authData.email = newEmail.trim().toLowerCase();
  if (name) authData.name = name.trim();
  authData.updatedAt = new Date().toISOString();

  writeJsonFile(AUTH_FILE, authData);

  return res.json({ success: true, message: 'पासवर्ड सफलतापूर्वक बदल दिया गया (Password updated successfully)' });
});

// Logout
app.post('/api/auth/logout', (_req: Request, res: Response) => {
  return res.json({ success: true, message: 'लॉगआउट सफल' });
});

// ==========================================
// 2. DASHBOARD & STATS API
// ==========================================
app.get('/api/dashboard/stats', requireAuth, (_req: AuthRequest, res: Response) => {
  const pages = readJsonFile<any[]>(PAGES_FILE, []);
  const media = readJsonFile<any[]>(MEDIA_FILE, []);

  const totalPages = pages.length;
  const publishedPages = pages.filter((p) => p.status === 'published').length;
  const draftPages = pages.filter((p) => p.status === 'draft').length;

  const totalImages = media.filter((m) => m.type === 'image').length;
  const totalVideos = media.filter((m) => m.type === 'video').length;
  const totalSizeBytes = media.reduce((acc, m) => acc + (m.sizeBytes || 0), 0);

  // Recently edited pages (sorted by updatedAt desc)
  const recentPages = [...pages]
    .sort((a, b) => new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime())
    .slice(0, 5);

  return res.json({
    totalPages,
    publishedPages,
    draftPages,
    totalImages,
    totalVideos,
    totalMediaCount: media.length,
    totalSizeBytes,
    recentPages,
    serverUptime: process.uptime(),
  });
});

// ==========================================
// 3. PAGES APIS (CMS PAGE BUILDER)
// ==========================================

// Get all pages
app.get('/api/pages', (req: Request, res: Response) => {
  const includeDrafts = req.query.includeDrafts === 'true';
  const token = (req.headers.authorization || '').split(' ')[1];
  const isAuthenticated = token ? verifyToken(token) !== null : false;

  const pages = readJsonFile<any[]>(PAGES_FILE, []);

  if (includeDrafts && isAuthenticated) {
    return res.json(pages);
  }

  // Public: only published pages
  const published = pages.filter((p) => p.status === 'published');
  return res.json(published);
});

// Get single page by slug or id
app.get('/api/pages/:slugOrId', (req: Request, res: Response) => {
  const { slugOrId } = req.params;
  const pages = readJsonFile<any[]>(PAGES_FILE, []);
  const page = pages.find((p) => p.slug === slugOrId || p.id === slugOrId);

  if (!page) {
    return res.status(404).json({ error: 'Page not found' });
  }

  // If page is draft, verify auth
  if (page.status === 'draft') {
    const token = (req.headers.authorization || '').split(' ')[1];
    const isAuthenticated = token ? verifyToken(token) !== null : false;
    if (!isAuthenticated) {
      return res.status(404).json({ error: 'Page not found or is in draft' });
    }
  }

  return res.json(page);
});

// Create page
app.post('/api/pages', requireAuth, (req: AuthRequest, res: Response) => {
  const { title, slug, subtitle, excerpt, category, status, blocks, seo, showInNav } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const pages = readJsonFile<any[]>(PAGES_FILE, []);

  // Generate or sanitize slug
  let targetSlug = (slug || title)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');

  if (!targetSlug) targetSlug = `page-${Date.now()}`;

  // Ensure unique slug
  let finalSlug = targetSlug;
  let counter = 1;
  while (pages.some((p) => p.slug === finalSlug)) {
    finalSlug = `${targetSlug}-${counter}`;
    counter++;
  }

  const newPage = {
    id: `page-${Date.now()}`,
    slug: finalSlug,
    title: title.trim(),
    subtitle: subtitle || '',
    excerpt: excerpt || '',
    status: status === 'published' ? 'published' : 'draft',
    category: category || 'General',
    author: 'Dr. Pooja Awasthi',
    showInNav: Boolean(showInNav),
    navOrder: pages.length + 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: status === 'published' ? new Date().toISOString() : null,
    seo: {
      metaTitle: seo?.metaTitle || title,
      metaDescription: seo?.metaDescription || excerpt || '',
      focusKeywords: Array.isArray(seo?.focusKeywords) ? seo.focusKeywords : [],
      ogImage: seo?.ogImage || '',
    },
    blocks: Array.isArray(blocks) ? blocks : [],
  };

  pages.push(newPage);
  writeJsonFile(PAGES_FILE, pages);

  return res.status(201).json(newPage);
});

// Update page
app.put('/api/pages/:id', requireAuth, (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  const pages = readJsonFile<any[]>(PAGES_FILE, []);
  const index = pages.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Page not found' });
  }

  const existing = pages[index];

  // If slug changed, verify uniqueness
  let finalSlug = existing.slug;
  if (updates.slug && updates.slug !== existing.slug) {
    const requestedSlug = updates.slug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9-]/g, '-');
    if (pages.some((p) => p.slug === requestedSlug && p.id !== id)) {
      return res.status(400).json({ error: 'This URL slug is already taken by another page' });
    }
    finalSlug = requestedSlug;
  }

  const updatedPage = {
    ...existing,
    ...updates,
    slug: finalSlug,
    updatedAt: new Date().toISOString(),
    publishedAt:
      updates.status === 'published' && existing.status !== 'published'
        ? new Date().toISOString()
        : existing.publishedAt,
  };

  pages[index] = updatedPage;
  writeJsonFile(PAGES_FILE, pages);

  return res.json(updatedPage);
});

// Duplicate page
app.post('/api/pages/:id/duplicate', requireAuth, (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const pages = readJsonFile<any[]>(PAGES_FILE, []);
  const original = pages.find((p) => p.id === id);

  if (!original) {
    return res.status(404).json({ error: 'Page not found' });
  }

  const cloneSlug = `${original.slug}-copy-${Date.now().toString().slice(-4)}`;
  const clone = {
    ...original,
    id: `page-${Date.now()}`,
    slug: cloneSlug,
    title: `${original.title} (प्रतिलिपि / Copy)`,
    status: 'draft',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: null,
  };

  pages.push(clone);
  writeJsonFile(PAGES_FILE, pages);

  return res.status(201).json(clone);
});

// Delete page
app.delete('/api/pages/:id', requireAuth, (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const pages = readJsonFile<any[]>(PAGES_FILE, []);
  const filtered = pages.filter((p) => p.id !== id);

  if (filtered.length === pages.length) {
    return res.status(404).json({ error: 'Page not found' });
  }

  writeJsonFile(PAGES_FILE, filtered);
  return res.json({ success: true, message: 'पेज सफलतापूर्वक हटाया गया (Page deleted successfully)' });
});

// ==========================================
// 4. MEDIA LIBRARY APIS
// ==========================================

// Get all media
app.get('/api/media', (_req: Request, res: Response) => {
  const media = readJsonFile<any[]>(MEDIA_FILE, []);
  return res.json(media);
});

// Upload file (multipart via multer or base64 fallback)
app.post('/api/media/upload', requireAuth, upload.single('file'), (req: Request, res: Response) => {
  const mediaList = readJsonFile<any[]>(MEDIA_FILE, []);

  // Standard Multer multipart upload
  if (req.file) {
    const isVideo = req.file.mimetype.startsWith('video/');
    const newMedia = {
      id: `med-${Date.now()}`,
      filename: req.file.filename,
      originalName: req.file.originalname,
      url: `/uploads/${req.file.filename}`,
      type: isVideo ? 'video' : 'image',
      mimeType: req.file.mimetype,
      sizeBytes: req.file.size,
      altText: req.body.altText || req.file.originalname,
      caption: req.body.caption || '',
      uploadedAt: new Date().toISOString(),
    };

    mediaList.unshift(newMedia);
    writeJsonFile(MEDIA_FILE, mediaList);

    return res.status(201).json(newMedia);
  }

  // Base64 upload fallback
  const { dataUrl, filename, altText, caption } = req.body;
  if (!dataUrl || !filename) {
    return res.status(400).json({ error: 'No file or valid base64 provided' });
  }

  try {
    const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).json({ error: 'Invalid data URL format' });
    }

    const mimeType = matches[1];
    const buffer = Buffer.from(matches[2], 'base64');
    const isVideo = mimeType.startsWith('video/');
    const ext = path.extname(filename) || (isVideo ? '.mp4' : '.jpg');
    const cleanBase = path.basename(filename, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const targetFilename = `${cleanBase}_${Date.now()}${ext}`;
    const targetPath = path.join(UPLOADS_DIR, targetFilename);

    fs.writeFileSync(targetPath, buffer);

    const newMedia = {
      id: `med-${Date.now()}`,
      filename: targetFilename,
      originalName: filename,
      url: `/uploads/${targetFilename}`,
      type: isVideo ? 'video' : 'image',
      mimeType,
      sizeBytes: buffer.length,
      altText: altText || filename,
      caption: caption || '',
      uploadedAt: new Date().toISOString(),
    };

    mediaList.unshift(newMedia);
    writeJsonFile(MEDIA_FILE, mediaList);

    return res.status(201).json(newMedia);
  } catch (err: any) {
    console.error('Base64 upload error:', err);
    return res.status(500).json({ error: 'Failed to save uploaded file' });
  }
});

// Update media metadata (alt text, caption)
app.put('/api/media/:id', requireAuth, (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { altText, caption } = req.body;

  const mediaList = readJsonFile<any[]>(MEDIA_FILE, []);
  const index = mediaList.findIndex((m) => m.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Media item not found' });
  }

  mediaList[index] = {
    ...mediaList[index],
    altText: altText !== undefined ? altText : mediaList[index].altText,
    caption: caption !== undefined ? caption : mediaList[index].caption,
  };

  writeJsonFile(MEDIA_FILE, mediaList);
  return res.json(mediaList[index]);
});

// Delete media item
app.delete('/api/media/:id', requireAuth, (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const mediaList = readJsonFile<any[]>(MEDIA_FILE, []);
  const item = mediaList.find((m) => m.id === id);

  if (!item) {
    return res.status(404).json({ error: 'Media not found' });
  }

  // Remove file from filesystem if it exists in uploads
  if (item.url.startsWith('/uploads/')) {
    const filePath = path.join(UPLOADS_DIR, path.basename(item.url));
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (e) {
        console.error('Failed to unlink file:', e);
      }
    }
  }

  const filtered = mediaList.filter((m) => m.id !== id);
  writeJsonFile(MEDIA_FILE, filtered);

  return res.json({ success: true, message: 'मीडिया हटाया गया (Media deleted)' });
});

// ==========================================
// 5. SETTINGS APIS
// ==========================================
app.get('/api/settings', (_req: Request, res: Response) => {
  const settings = readJsonFile(SETTINGS_FILE, {
    siteTitle: 'Dr. Pooja Awasthi — Spiritual Guidance',
    contactPhone: '+91 91057 31969',
    whatsappNumber: '919105731969',
    consultationFee: '₹5,100',
    enablePublicPagesNav: true,
  });
  return res.json(settings);
});

app.put('/api/settings', requireAuth, (req: AuthRequest, res: Response) => {
  const current = readJsonFile(SETTINGS_FILE, {});
  const updated = {
    ...current,
    ...req.body,
    updatedAt: new Date().toISOString(),
  };
  writeJsonFile(SETTINGS_FILE, updated);
  return res.json(updated);
});

// ==========================================
// 6. SITE CONTENT APIS (HOMEPAGE SECTIONS)
// ==========================================
app.get('/api/site-content', (_req: Request, res: Response) => {
  const content = readJsonFile(SITE_CONTENT_FILE, {});
  return res.json(content);
});

app.put('/api/site-content', requireAuth, (req: AuthRequest, res: Response) => {
  const current = readJsonFile<any>(SITE_CONTENT_FILE, {});
  const updates = req.body;
  const merged = {
    ...current,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  writeJsonFile(SITE_CONTENT_FILE, merged);
  return res.json(merged);
});

// ==========================================
// 6b. REVIEWS & STORIES APIS (INSTANT SUBMIT & UPVOTES)
// ==========================================
app.get('/api/reviews', (_req: Request, res: Response) => {
  const reviews = readJsonFile<any[]>(REVIEWS_FILE, []);
  return res.json(reviews);
});

app.post('/api/reviews', (req: Request, res: Response) => {
  const { name, location, service, rating, quote, quote_hi } = req.body;
  if (!name || !quote) {
    return res.status(400).json({ error: 'Name and review text are required' });
  }

  const reviews = readJsonFile<any[]>(REVIEWS_FILE, []);
  const newReview = {
    id: `rev-${Date.now()}`,
    name: String(name).trim(),
    location: (location || 'India').trim(),
    location_hi: (location || 'भारत').trim(),
    service: (service || 'Vedic Numerology').trim(),
    service_hi: (service || 'वैदिक अंक ज्योतिष').trim(),
    rating: Math.min(5, Math.max(1, Number(rating) || 5)),
    quote: String(quote).trim(),
    quote_hi: (quote_hi || quote).trim(),
    date: 'Just now',
    date_hi: 'अभी-अभी',
    helpfulCount: 0,
    verified: true,
    createdAt: new Date().toISOString(),
  };

  reviews.unshift(newReview);
  writeJsonFile(REVIEWS_FILE, reviews);

  // Sync with siteContent.testimonials
  try {
    const siteContent = readJsonFile<any>(SITE_CONTENT_FILE, {});
    if (!Array.isArray(siteContent.testimonials)) siteContent.testimonials = [];
    siteContent.testimonials.unshift({
      id: newReview.id,
      name: newReview.name,
      location: newReview.location,
      service: newReview.service,
      rating: newReview.rating,
      quote: newReview.quote,
      date: newReview.date,
    });
    writeJsonFile(SITE_CONTENT_FILE, siteContent);
  } catch (err) {
    console.error('Failed to sync review with siteContent:', err);
  }

  return res.status(201).json(newReview);
});

app.post('/api/reviews/:id/helpful', (req: Request, res: Response) => {
  const { id } = req.params;
  const reviews = readJsonFile<any[]>(REVIEWS_FILE, []);
  const item = reviews.find((r) => r.id === id);
  if (item) {
    item.helpfulCount = (item.helpfulCount || 0) + 1;
    writeJsonFile(REVIEWS_FILE, reviews);
    return res.json({ success: true, helpfulCount: item.helpfulCount });
  }
  return res.status(404).json({ error: 'Review not found' });
});

// ==========================================
// 7. VITE & STATIC PRODUCTION MOUNTING
// ==========================================
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    // Dynamic import of vite in dev mode
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR === 'true' ? false : undefined,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production: serve built static files from dist
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`✨ Server running on http://${HOST}:${PORT} [CMS & API Active]`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
