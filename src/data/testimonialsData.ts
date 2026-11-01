export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  location_hi: string;
  service: string;
  service_hi: string;
  category: 'all' | 'numerology' | 'watch' | 'salt' | 'chakra' | 'vastu';
  quote: string;
  quote_hi: string;
  rating: number;
  date: string;
  date_hi: string;
  helpfulCount?: number;
  verified?: boolean;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Ananya Sharma",
    location: "Dehradun, India",
    location_hi: "देहरादून, भारत",
    service: "Vedic Numerology & Life Path",
    service_hi: "वैदिक अंक ज्योतिष एवं मूलांक-भाग्यांक",
    category: "numerology",
    quote: "Dr. Pooja ji’s Mulank and Bhagyank breakdown was astoundingly precise. She didn’t just recite numbers; she helped me understand why my career stalled and gave me practical adjustments that yielded a senior leadership offer within 3 months.",
    quote_hi: "डॉ. पूजा जी का मूलांक और भाग्यांक विश्लेषण अविश्वसनीय रूप से सटीक था। उन्होंने केवल अंक नहीं बताए, बल्कि यह समझाया कि मेरे करियर में रुकावट क्यों थी। उनके दिए व्यावहारिक उपायों से मुझे 3 महीने के भीतर वरिष्ठ नेतृत्व का उच्च पद प्राप्त हुआ।",
    rating: 5,
    date: "February 2026",
    date_hi: "फरवरी 2026",
    helpfulCount: 42,
    verified: true
  },
  {
    id: "rev-2",
    name: "Rohit Khandelwal",
    location: "Jaipur, Rajasthan",
    location_hi: "जयपुर, राजस्थान",
    service: "Watch Therapy & Time Energy",
    service_hi: "वॉच थेरेपी एवं समय ऊर्जा संतुलन",
    category: "watch",
    quote: "I was skeptical about Watch Therapy until Dr. Pooja Awasthi analyzed my wristwatch dial, strap color, and time vibration. Within 4 weeks of switching to the recommended dial shape and metallic frequency, my pending financial deals cleared effortlessly!",
    quote_hi: "वॉच थेरेपी पर मुझे पहले संशय था, लेकिन डॉ. पूजा अवस्थी जी ने मेरी कलाई घड़ी के डायल, स्ट्रैप के रंग और समय की ऊर्जा का विश्लेषण किया। उनके बताए अनुसार सही डायल और धातु की घड़ी पहनने के मात्र ४ सप्ताह में मेरी वर्षों से अटकी कारोबारी पेमेंट बिना बाधा के प्राप्त हो गई!",
    rating: 5,
    date: "March 2026",
    date_hi: "मार्च 2026",
    helpfulCount: 38,
    verified: true
  },
  {
    id: "rev-3",
    name: "Dr. Meenakshi Iyer",
    location: "Bengaluru, India",
    location_hi: "बेंगलुरु, भारत",
    service: "Aura Cleansing & Salt Therapy",
    service_hi: "सॉल्ट थेरेपी एवं औरा शुद्धि",
    category: "salt",
    quote: "Living with chronic heaviness and sleeplessness, Dr. Pooja advised me a specific Himalayan rock salt energy bath ritual combined with sacred bedroom grid positioning. My sleep restored on night two, and the heavy energetic fog completely lifted.",
    quote_hi: "लंबे समय से अनिद्रा और मानसिक भारीपन से जूझने के बाद डॉ. पूजा जी ने मुझे विशिष्ट सेंधा नमक स्नान और ऊर्जा शुद्धि विधान बताया। दूसरे ही दिन से मुझे गहरी नींद आने लगी और घर का भारीपन चमत्कारिक रूप से शांत हो गया।",
    rating: 5,
    date: "January 2026",
    date_hi: "जनवरी 2026",
    helpfulCount: 29,
    verified: true
  },
  {
    id: "rev-4",
    name: "Vikram Malhotra",
    location: "Mumbai, India",
    location_hi: "मुंबई, भारत",
    service: "Tarot Reading & Distance Energy Healing",
    service_hi: "टैरो मार्गदर्शन एवं चक्र हीलिंग",
    category: "chakra",
    quote: "I came to Pooja ji during the most emotionally painful chapter of my life. Her tarot session brought me instant tears of relief and deep clarity. The distance energy healing calmed my chest anxiety like nothing else could.",
    quote_hi: "मैं अपने जीवन के सबसे कठिन भावनात्मक दौर में डॉ. पूजा जी के पास आया था। उनके टैरो सत्र ने मुझे गहरी शांति और स्पष्टता दी। उनके दूरस्थ ऊर्जा उपचार ने मेरी चिंता को पूरी तरह शांत कर दिया।",
    rating: 5,
    date: "January 2026",
    date_hi: "जनवरी 2026",
    helpfulCount: 51,
    verified: true
  },
  {
    id: "rev-5",
    name: "Pooja & Sameer Deshmukh",
    location: "Pune, India",
    location_hi: "पुणे, भारत",
    service: "36 Gun Milan & Kundali Alignment",
    service_hi: "३६ गुण मिलान एवं दांपत्य हीलिंग",
    category: "numerology",
    quote: "Our families were anxious about nadi dosha in our marriage proposal. Dr. Pooja provided the most compassionate, authentic Vedic counter-remedies without demanding expensive rituals. Today we are happily married with supreme harmony.",
    quote_hi: "हमारे विवाह प्रस्ताव में नाड़ी दोष को लेकर दोनों परिवार चिंतित थे। डॉ. पूजा जी ने बिना किसी महंगे आडंबर के अत्यंत सरल और प्रामाणिक वैदिक परिहार बताए। आज हम अत्यंत सुखी और सामंजस्यपूर्ण दांपत्य जीवन जी रहे हैं।",
    rating: 5,
    date: "February 2026",
    date_hi: "फरवरी 2026",
    helpfulCount: 34,
    verified: true
  },
  {
    id: "rev-6",
    name: "Gaurav Singhal",
    location: "Dubai, UAE",
    location_hi: "दुबई, यूएई",
    service: "Lucky Mobile Number & Name Correction",
    service_hi: "लकी मोबाइल नंबर एवं नाम वर्तनी सुधार",
    category: "numerology",
    quote: "Operating a logistics business in Dubai, Dr. Pooja optimized my business phone number compound vibration and adjusted one letter in my trading brand name. The incoming inquiry volume grew by 200% within two months!",
    quote_hi: "दुबई में लॉजिस्टिक्स व्यापार करते हुए मैंने डॉ. पूजा जी से अपने व्यावसायिक मोबाइल नंबर और कंपनी के नाम के अक्षरों का कंपन ठीक कराया। मात्र दो महीने में क्लाइंट्स की इन्क्वायरी दोगुनी हो गई। उनका गणितीय और आध्यात्मिक अनुभव अद्वितीय है।",
    rating: 5,
    date: "March 2026",
    date_hi: "मार्च 2026",
    helpfulCount: 46,
    verified: true
  },
  {
    id: "rev-7",
    name: "Sunita & Rajeev Aggarwal",
    location: "Delhi NCR, India",
    location_hi: "दिल्ली एनसीआर, भारत",
    service: "Vastu Energy & Crystal Grid",
    service_hi: "वास्तु दोष निवारण एवं क्रिस्टल ग्रिड",
    category: "vastu",
    quote: "Our newly purchased villa had severe North-East toilet cut defect. Dr. Pooja resolved it non-destructively through brass helixes and natural crystal pyramid grids. Peace returned to our home instantly.",
    quote_hi: "हमारे नए विला में ईशान कोण का गंभीर वास्तु दोष था। डॉ. पूजा जी ने बिना किसी तोड़-फोड़ के ब्रास हेलिक्स और शुद्ध क्रिस्टल पिरामिड ग्रिड से ऊर्जा को संतुलित किया। हमारे घर में तुरंत सुख-शांति का संचार हुआ।",
    rating: 5,
    date: "December 2025",
    date_hi: "दिसंबर 2025",
    helpfulCount: 27,
    verified: true
  }
];
