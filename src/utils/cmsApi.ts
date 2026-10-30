/**
 * Frontend CMS Client and API Integration for Dr. Pooja Awasthi Spiritual CMS
 */

export type ContentBlockType =
  | 'hero'
  | 'richtext'
  | 'heading'
  | 'image'
  | 'gallery'
  | 'video'
  | 'vedic-quote'
  | 'feature-grid'
  | 'cta-button'
  | 'booking-card'
  | 'divider';

export interface BaseBlock {
  id: string;
  type: ContentBlockType;
}

export interface HeroBlock extends BaseBlock {
  type: 'hero';
  title: string;
  subtitle?: string;
  bgImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface RichTextBlock extends BaseBlock {
  type: 'richtext';
  heading?: string;
  content: string; // HTML or markdown formatted paragraphs
}

export interface SingleImageBlock extends BaseBlock {
  type: 'image';
  url: string;
  altText?: string;
  caption?: string;
  alignment?: 'center' | 'left' | 'right' | 'full';
  aspectRatio?: 'video' | 'square' | 'auto';
}

export interface GalleryImage {
  url: string;
  caption?: string;
  altText?: string;
}

export interface GalleryBlock extends BaseBlock {
  type: 'gallery';
  heading?: string;
  columns?: 2 | 3 | 4;
  images: GalleryImage[];
}

export interface VideoBlock extends BaseBlock {
  type: 'video';
  heading?: string;
  videoUrl: string; // YouTube/Vimeo embed or direct /uploads/video.mp4
  caption?: string;
  posterImage?: string;
}

export interface VedicQuoteBlock extends BaseBlock {
  type: 'vedic-quote';
  mantra?: string;
  quote: string;
  author?: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
  badge?: string;
  icon?: string;
}

export interface FeatureGridBlock extends BaseBlock {
  type: 'feature-grid';
  heading?: string;
  features: FeatureItem[];
}

export interface CtaButtonBlock extends BaseBlock {
  type: 'cta-button';
  label: string;
  url: string;
  variant?: 'gold' | 'outline' | 'whatsapp';
  alignment?: 'center' | 'left' | 'right';
  subtext?: string;
}

export interface BookingCardBlock extends BaseBlock {
  type: 'booking-card';
  serviceName: string;
  price?: string;
  duration?: string;
  description?: string;
}

export interface DividerBlock extends BaseBlock {
  type: 'divider';
  style?: 'gold-line' | 'celestial-stars' | 'lotus-symbol';
}

export type ContentBlock =
  | HeroBlock
  | RichTextBlock
  | SingleImageBlock
  | GalleryBlock
  | VideoBlock
  | VedicQuoteBlock
  | FeatureGridBlock
  | CtaButtonBlock
  | BookingCardBlock
  | DividerBlock;

export interface PageSEO {
  metaTitle: string;
  metaDescription: string;
  focusKeywords: string[];
  ogImage?: string;
}

export interface CMSPage {
  id: string;
  slug: string;
  title: string;
  title_en?: string;
  subtitle?: string;
  excerpt?: string;
  status: 'draft' | 'published';
  category: string;
  author: string;
  showInNav: boolean;
  navOrder?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
  seo: PageSEO;
  blocks: ContentBlock[];
}

export interface MediaItem {
  id: string;
  filename: string;
  originalName: string;
  url: string;
  type: 'image' | 'video';
  mimeType: string;
  sizeBytes: number;
  altText: string;
  caption?: string;
  uploadedAt: string;
}

export interface DashboardStats {
  totalPages: number;
  publishedPages: number;
  draftPages: number;
  totalImages: number;
  totalVideos: number;
  totalMediaCount: number;
  totalSizeBytes: number;
  recentPages: CMSPage[];
  serverUptime?: number;
}

export interface AdminUser {
  email: string;
  name: string;
  role: 'admin';
}

export interface CMSSettings {
  siteTitle: string;
  contactPhone: string;
  whatsappNumber: string;
  consultationFee: string;
  enablePublicPagesNav: boolean;
  footerNote?: string;
  updatedAt?: string;
}

// Token management in localStorage
const TOKEN_KEY = 'pooja_cms_auth_token';
const USER_KEY = 'pooja_cms_auth_user';

export function getAdminToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function setAdminAuth(token: string, user: AdminUser): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearAdminAuth(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getStoredAdminUser(): AdminUser | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function isUserAuthenticated(): boolean {
  return !!getAdminToken();
}

// Helper for fetch with auth headers
async function cmsFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getAdminToken();
  const headers = new Headers(options.headers || {});

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  // If body is not FormData, ensure Content-Type is json
  if (options.body && !(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(endpoint, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorMsg = `API request failed with status ${response.status}`;
    try {
      const errData = await response.json();
      if (errData && errData.error) errorMsg = errData.error;
    } catch {
      // fallback
    }

    if (response.status === 401) {
      clearAdminAuth();
    }

    throw new Error(errorMsg);
  }

  return response.json() as Promise<T>;
}

// ==========================================
// API CLIENT CALLS
// ==========================================

export async function loginAdmin(email: string, password: string): Promise<{ token: string; user: AdminUser }> {
  const res = await cmsFetch<{ token: string; user: AdminUser }>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  setAdminAuth(res.token, res.user);
  return res;
}

export async function checkAdminSession(): Promise<AdminUser> {
  const res = await cmsFetch<{ user: AdminUser }>('/api/auth/me');
  return res.user;
}

export async function changeAdminPassword(
  currentPassword: string,
  newPassword: string,
  newEmail?: string,
  name?: string
): Promise<{ success: boolean; message: string }> {
  return cmsFetch<{ success: boolean; message: string }>('/api/auth/change-password', {
    method: 'POST',
    body: JSON.stringify({ currentPassword, newPassword, newEmail, name }),
  });
}

export async function getDashboardStats(): Promise<DashboardStats> {
  return cmsFetch<DashboardStats>('/api/dashboard/stats');
}

export async function getPages(includeDrafts: boolean = false): Promise<CMSPage[]> {
  const query = includeDrafts ? '?includeDrafts=true' : '';
  return cmsFetch<CMSPage[]>(`/api/pages${query}`);
}

export async function getPageBySlug(slugOrId: string): Promise<CMSPage> {
  return cmsFetch<CMSPage>(`/api/pages/${slugOrId}`);
}

export async function createPage(pageData: Partial<CMSPage>): Promise<CMSPage> {
  return cmsFetch<CMSPage>('/api/pages', {
    method: 'POST',
    body: JSON.stringify(pageData),
  });
}

export async function updatePage(id: string, updates: Partial<CMSPage>): Promise<CMSPage> {
  return cmsFetch<CMSPage>(`/api/pages/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updates),
  });
}

export async function duplicatePage(id: string): Promise<CMSPage> {
  return cmsFetch<CMSPage>(`/api/pages/${id}/duplicate`, {
    method: 'POST',
  });
}

export async function deletePage(id: string): Promise<{ success: boolean }> {
  return cmsFetch<{ success: boolean }>(`/api/pages/${id}`, {
    method: 'DELETE',
  });
}

export async function getMediaList(): Promise<MediaItem[]> {
  return cmsFetch<MediaItem[]>('/api/media');
}

export async function uploadMediaFile(file: File, altText?: string, caption?: string): Promise<MediaItem> {
  const formData = new FormData();
  formData.append('file', file);
  if (altText) formData.append('altText', altText);
  if (caption) formData.append('caption', caption);

  return cmsFetch<MediaItem>('/api/media/upload', {
    method: 'POST',
    body: formData,
  });
}

export async function uploadMediaBase64(
  dataUrl: string,
  filename: string,
  altText?: string,
  caption?: string
): Promise<MediaItem> {
  return cmsFetch<MediaItem>('/api/media/upload', {
    method: 'POST',
    body: JSON.stringify({ dataUrl, filename, altText, caption }),
  });
}

export async function updateMediaMetadata(
  id: string,
  metadata: { altText?: string; caption?: string }
): Promise<MediaItem> {
  return cmsFetch<MediaItem>(`/api/media/${id}`, {
    method: 'PUT',
    body: JSON.stringify(metadata),
  });
}

export async function deleteMediaItem(id: string): Promise<{ success: boolean }> {
  return cmsFetch<{ success: boolean }>(`/api/media/${id}`, {
    method: 'DELETE',
  });
}

export async function getCMSSettings(): Promise<CMSSettings> {
  return cmsFetch<CMSSettings>('/api/settings');
}

export async function updateCMSSettings(settings: Partial<CMSSettings>): Promise<CMSSettings> {
  return cmsFetch<CMSSettings>('/api/settings', {
    method: 'PUT',
    body: JSON.stringify(settings),
  });
}

// ==========================================
// SITE CONTENT TYPES & CLIENT CALLS
// ==========================================

export interface SiteHeroContent {
  headline_hi: string;
  headline_en: string;
  motto_hi: string;
  motto_en: string;
  desc_hi: string;
  desc_en: string;
  portrait_photo: string;
  badge_text_hi: string;
  badge_text_en: string;
  cta_primary_hi: string;
  cta_primary_en: string;
  fee_badge: string;
}

export interface SiteAboutContent {
  title_hi: string;
  title_en: string;
  subtitle_hi: string;
  subtitle_en: string;
  p1_hi: string;
  p1_en: string;
  p2_hi: string;
  p2_en: string;
  photo_url: string;
  pillar1_title: string;
  pillar1_desc: string;
  pillar2_title: string;
  pillar2_desc: string;
  pillar3_title: string;
  pillar3_desc: string;
}

export interface SiteVideoSpotlight {
  heading_hi: string;
  heading_en: string;
  video_url: string;
  caption_hi: string;
  caption_en: string;
}

export interface SiteServiceItem {
  id: string;
  number?: number;
  title: string;
  title_hi?: string;
  fee?: number;
  feeFormatted?: string;
  duration?: string;
  category?: string;
  categoryLabel_hi?: string;
  badge?: string;
  description: string;
  image?: string;
}

export interface SiteTestimonialItem {
  id: string;
  name: string;
  location: string;
  service: string;
  quote: string;
  rating: number;
  date: string;
}

export interface SiteFaqItem {
  id: string;
  q: string;
  a: string;
}

export interface SiteContactContent {
  phone: string;
  whatsapp: string;
  email: string;
  consultation_fee: string;
  hours: string;
  address: string;
}

export interface SiteBankUpiContent {
  bank_name: string;
  account_name: string;
  account_number: string;
  ifsc_code: string;
  branch?: string;
  upi_id: string;
  qr_code_image: string;
}

export interface SiteContent {
  hero: SiteHeroContent;
  about: SiteAboutContent;
  videoSpotlight: SiteVideoSpotlight;
  services: SiteServiceItem[];
  testimonials: SiteTestimonialItem[];
  faqs: SiteFaqItem[];
  contact: SiteContactContent;
  bankUpi: SiteBankUpiContent;
  updatedAt?: string;
}

export async function getSiteContent(): Promise<SiteContent> {
  return cmsFetch<SiteContent>('/api/site-content');
}

export async function updateSiteContent(updates: Partial<SiteContent>): Promise<SiteContent> {
  return cmsFetch<SiteContent>('/api/site-content', {
    method: 'PUT',
    body: JSON.stringify(updates),
  });
}
