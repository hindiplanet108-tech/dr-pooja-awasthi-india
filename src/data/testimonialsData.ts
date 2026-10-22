export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  location_hi: string;
  service: string;
  service_hi: string;
  quote: string;
  quote_hi: string;
  rating: number;
  date: string;
  date_hi: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    name: "Ananya Sharma",
    location: "Dehradun, India",
    location_hi: "देहरादून, भारत",
    service: "Vedic Numerology & Life Coaching",
    service_hi: "वैदिक अंकशास्त्र एवं लाइफ कोचिंग",
    quote: "Dr. Pooja ji’s Mulank and Bhagyank breakdown was astoundingly precise. She didn’t just recite numbers; she helped me understand why my career stalled and gave me practical adjustments that yielded a senior leadership offer within 3 months.",
    quote_hi: "पूजा जी का मूलांक और भाग्यांक विश्लेषण अविश्वसनीय रूप से सटीक था। उन्होंने केवल अंक नहीं बताए, बल्कि यह समझाया कि मेरे करियर में रुकावट क्यों थी। उनके दिए व्यावहारिक उपायों से मुझे 3 महीने के भीतर सीनियर लीडरशिप का अवसर मिला।",
    rating: 5,
    date: "February 2026",
    date_hi: "फरवरी 2026"
  },
  {
    id: "2",
    name: "Vikram Malhotra",
    location: "Mumbai, India",
    location_hi: "मुंबई, भारत",
    service: "Tarot Reading & Energy Healing",
    service_hi: "टैरो रीडिंग एवं ऊर्जा उपचार",
    quote: "I came to Pooja ji during the most emotionally painful chapter of my life. Her tarot session brought me instant tears of relief and deep clarity. The distance energy healing calmed my chest anxiety like nothing else could.",
    quote_hi: "मैं अपने जीवन के सबसे कठिन भावनात्मक दौर में पूजा जी के पास आया था। उनके टैरो सत्र ने मुझे गहरी शांति और स्पष्टता दी। उनके दूरस्थ ऊर्जा उपचार ने मेरी चिंता को पूरी तरह शांत कर दिया।",
    rating: 5,
    date: "January 2026",
    date_hi: "जनवरी 2026"
  },
  {
    id: "3",
    name: "Priyanka Sen",
    location: "Bengaluru, India",
    location_hi: "बेंगलुरु, भारत",
    service: "Life Coaching & Chakra Alignment",
    service_hi: "लाइफ कोचिंग एवं चक्र संतुलन",
    quote: "Dr. Pooja Awasthi combines genuine spiritual depth with the grounded realism of an executive coach. She held space for my vulnerability while giving me actionable boundaries that transformed my family relationships.",
    quote_hi: "डॉ. पूजा अवस्थी में आध्यात्मिक गहराई और व्यावहारिक दृष्टिकोण का अद्भुत संतुलन है। उन्होंने मुझे समझा और ऐसी स्वस्थ सीमाएं तय करने में मदद की जिससे मेरे पारिवारिक रिश्ते संवर गए।",
    rating: 5,
    date: "December 2025",
    date_hi: "दिसंबर 2025"
  },
  {
    id: "4",
    name: "Rajesh & Meera Verma",
    location: "Jaipur, India",
    location_hi: "जयपुर, भारत",
    service: "Relationship Numerology & Tarot",
    service_hi: "संबंध अंकशास्त्र एवं टैरो रीडिंग",
    quote: "We consulted Pooja ji for relationship compatibility before our business expansion. Her compassionate guidance helped us resolve recurring friction patterns and move forward with total mutual confidence.",
    quote_hi: "हमने व्यापार विस्तार से पहले आपसी तालमेल और अनुकूलता के लिए पूजा जी से परामर्श लिया। उनके करुणामयी मार्गदर्शन से हमारे बीच के मतभेद दूर हुए और आपसी विश्वास मजबूत हुआ।",
    rating: 5,
    date: "March 2026",
    date_hi: "मार्च 2026"
  }
];
