export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  location_hi: string;
  service: string;
  service_hi: string;
  category: 'all' | 'numerology' | 'salt' | 'chakra' | 'vastu';
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
    service_hi: "वैदिक अंकशास्त्र एवं मूलांक-भाग्यांक",
    category: "numerology",
    quote: "Dr. Pooja ji’s Mulank and Bhagyank breakdown was astoundingly precise. She didn’t just recite numbers; she helped me understand why my career stalled and gave me practical adjustments that yielded a senior leadership offer within 3 months.",
    quote_hi: "डॉ. पूजा जी का मूलांक और भाग्यांक विश्लेषण बिल्कुल सटीक था। उन्होंने सिर्फ नंबर ही नहीं बताए, बल्कि यह भी समझाया कि मेरे करियर में रुकावट क्यों आ रही थी। उनके बताए आसान उपायों से मुझे 3 महीने के अंदर ही बड़ा प्रमोशन और अच्छा पद मिल गया।",
    rating: 5,
    date: "February 2026",
    date_hi: "फरवरी 2026",
    helpfulCount: 42,
    verified: true
  },
  {
    id: "rev-3",
    name: "Dr. Meenakshi Iyer",
    location: "Bengaluru, India",
    location_hi: "बेंगलुरु, भारत",
    service: "Aura Cleansing & Salt Therapy",
    service_hi: "सॉल्ट थेरेपी एवं ऑरा शुद्धि",
    category: "salt",
    quote: "Living with chronic heaviness and sleeplessness, Dr. Pooja advised me a specific Himalayan rock salt energy bath ritual combined with sacred bedroom grid positioning. My sleep restored on night two, and the heavy energetic fog completely lifted.",
    quote_hi: "मैं काफी समय से नींद न आने और मन में भारीपन से परेशान थी। डॉ. पूजा जी ने मुझे सेंधा नमक स्नान और ऊर्जा शुद्धि का आसान तरीका बताया। दूसरे ही दिन से मुझे गहरी नींद आने लगी और घर का माहौल बहुत हल्का व शांत हो गया।",
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
    quote_hi: "मैं अपनी जिंदगी के सबसे मुश्किल दौर में डॉ. पूजा जी से मिला। उनके टैरो सेशन ने मुझे तुरंत साफ रास्ता दिखाया और मन को सुकून मिला। उनकी डिस्टेंस हीलिंग से मेरी घबराहट और चिंता पूरी तरह शांत हो गई।",
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
    service_hi: "36 गुण मिलान एवं रिश्ते में मधुरता",
    category: "numerology",
    quote: "Our families were anxious about nadi dosha in our marriage proposal. Dr. Pooja provided the most compassionate, authentic Vedic counter-remedies without demanding expensive rituals. Today we are happily married with supreme harmony.",
    quote_hi: "हमारी शादी के प्रस्ताव में नाड़ी दोष को लेकर दोनों परिवार काफी चिंतित थे। डॉ. पूजा जी ने बिना किसी महंगे खर्च या दिखावे के बहुत ही सरल और सही वैदिक उपाय बताए। आज हम बहुत खुशहाल और शांतिपूर्ण शादीशुदा जिंदगी जी रहे हैं।",
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
    service_hi: "लकी मोबाइल नंबर एवं नाम स्पेलिंग सुधार",
    category: "numerology",
    quote: "Operating a logistics business in Dubai, Dr. Pooja optimized my business phone number compound vibration and adjusted one letter in my trading brand name. The incoming inquiry volume grew by 200% within two months!",
    quote_hi: "दुबई में बिजनेस चलाते हुए मैंने डॉ. पूजा जी से अपने मोबाइल नंबर और कंपनी के नाम की स्पेलिंग ठीक कराई। सिर्फ दो महीने में मेरे ग्राहकों की संख्या दोगुनी हो गई। अंकशास्त्र पर उनकी पकड़ वाकई कमाल की है।",
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
    quote_hi: "हमारे नए घर में उत्तर-पूर्व (ईशान कोण) का बड़ा वास्तु दोष था। डॉ. पूजा जी ने बिना किसी तोड़-फोड़ के पीतल और असली क्रिस्टल पिरामिड से घर की ऊर्जा संतुलित कर दी। घर में तुरंत सुख और शांति लौट आई।",
    rating: 5,
    date: "December 2025",
    date_hi: "दिसंबर 2025",
    helpfulCount: 27,
    verified: true
  }
];
