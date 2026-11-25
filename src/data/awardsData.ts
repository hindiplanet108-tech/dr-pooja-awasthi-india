export interface AwardItem {
  id: string;
  filename: string;
  imageUrl?: string;
  category: 'felicitation' | 'conclave' | 'memento' | 'press';
  eventGroup: 'iimt_meerut' | 'lucknow' | 'ujjain_indore' | 'uttarakhand_governor' | 'bhu_varanasi' | 'portraits';
  eventGroup_hi: string;
  caption: string;
  caption_en?: string;
  event: string;
  event_hi: string;
  dignitaries?: string;
  venue?: string;
  alt: string;
}

export const AWARDS_DATA: AwardItem[] = [
  // ==========================================
  // GROUP 1: आईआईएमटी विश्वविद्यालय, मेरठ (IIMT University Meerut)
  // ==========================================
  {
    id: "iimt-1",
    filename: "IMMT-6.jpeg",
    imageUrl: "/assets/awards/IMMT-6.jpeg",
    category: "memento",
    eventGroup: "iimt_meerut",
    eventGroup_hi: "आईआईएमटी विश्वविद्यालय मेरठ",
    caption: "आईआईएमटी विश्वविद्यालय, मेरठ द्वारा ज्योतिष शास्त्र एवं भारतीय ज्ञान परंपरा में आजीवन योगदान के लिए 'लाइफटाइम अचीवमेंट अवार्ड' (सम्मान पत्र)।",
    caption_en: "Official Lifetime Achievement Award Certificate conferred by IIMT University, Meerut for Distinguished Contribution to Jyotish Shastra and Indian Knowledge System.",
    event: "IIMT University, Meerut - Lifetime Achievement Award Certificate",
    event_hi: "आईआईएमटी विश्वविद्यालय मेरठ - लाइफटाइम अचीवमेंट सम्मान पत्र",
    dignitaries: "परम पूज्य श्री सौरभ सागर जी महाराज (जैनाचार्य 108), कुलाधिपति श्री योगेश मोहनजी गुप्ता, कुलपति प्रो. (डॉ.) दीपा शर्मा",
    venue: "आईआईएमटी विश्वविद्यालय, मेरठ",
    alt: "Official Lifetime Achievement Award Certificate from IIMT University Meerut to Dr. Pooja Awasthi"
  },
  {
    id: "iimt-2",
    filename: "IMMT-5.jpeg",
    imageUrl: "/assets/awards/IMMT-5.jpeg",
    category: "felicitation",
    eventGroup: "iimt_meerut",
    eventGroup_hi: "आईआईएमटी विश्वविद्यालय मेरठ",
    caption: "पूज्य जैनाचार्य 108 श्री सौरभ सागर जी महाराज के सानिध्य में मंच पर 'लाइफटाइम अचीवमेंट अवार्ड' ट्रॉफी और सम्मान पत्र लेते हुए डॉ. पूजा अवस्थी।",
    caption_en: "Dr. Pooja Awasthi receiving the Lifetime Achievement Award memento and citation in the sacred presence of Jainacharya 108 Saurabh Sagar Ji Maharaj.",
    event: "Conferment of Lifetime Achievement Trophy at IIMT Meerut",
    event_hi: "आईआईएमटी मेरठ - लाइफटाइम अचीवमेंट स्वर्ण ट्रॉफी सम्मान",
    dignitaries: "परम पूज्य जैनाचार्य 108 श्री सौरभ सागर जी महाराज, विशिष्ट अतिथिगण",
    venue: "आईआईएमटी सभागार, मेरठ",
    alt: "Dr. Pooja Awasthi receiving trophy and certificate on stage at IIMT Meerut"
  },
  {
    id: "iimt-3",
    filename: "IMMT.jpeg",
    imageUrl: "/assets/awards/IMMT.jpeg",
    category: "felicitation",
    eventGroup: "iimt_meerut",
    eventGroup_hi: "आईआईएमटी विश्वविद्यालय मेरठ",
    caption: "आईआईएमटी विश्वविद्यालय के ज्योतिष महासमागम में पारंपरिक गुलाबी साफा (पगड़ी) बांधकर डॉ. पूजा अवस्थी का खास सम्मान किया गया।",
    caption_en: "Traditional Ceremonial Turban (Safa) felicitation of Dr. Pooja Awasthi at IIMT Jyotish Mahasamagam.",
    event: "Ceremonial Turban (Safa) Felicitation at IIMT Meerut",
    event_hi: "आईआईएमटी मेरठ - पारंपरिक साफा (पगड़ी) सम्मान",
    dignitaries: "विश्वविद्यालय मंच एवं वरिष्ठ ज्योतिषाचार्य",
    venue: "आईआईएमटी विश्वविद्यालय परिसर, मेरठ",
    alt: "Traditional pink turban being tied on Dr. Pooja Awasthi as ceremonial honour"
  },
  {
    id: "iimt-4",
    filename: "IMMT-2.jpeg",
    imageUrl: "/assets/awards/IMMT-2.jpeg",
    category: "memento",
    eventGroup: "iimt_meerut",
    eventGroup_hi: "आईआईएमटी विश्वविद्यालय मेरठ",
    caption: "ज्योतिष महासमागम के मंच पर सुनहरी ट्रॉफी और प्रमाणपत्र के साथ डॉ. पूजा अवस्थी।",
    caption_en: "Dr. Pooja Awasthi with the commemorative gold memento and certificate on dais.",
    event: "Commemorative Memento Presentation - IIMT Jyotish Mahasamagam",
    event_hi: "आईआईएमटी महासमागम - स्मृति चिन्ह सम्मान",
    dignitaries: "विद्वत परिषद एवं विश्वविद्यालय प्रबंधन",
    venue: "आईआईएमटी विश्वविद्यालय, मेरठ",
    alt: "Dr. Pooja Awasthi holding the IIMT Lifetime Achievement trophy"
  },
  {
    id: "iimt-5",
    filename: "IMMT-3.jpeg",
    imageUrl: "/assets/awards/IMMT-5.jpeg",
    category: "conclave",
    eventGroup: "iimt_meerut",
    eventGroup_hi: "आईआईएमटी विश्वविद्यालय मेरठ",
    caption: "देश-विदेश के 90+ प्रसिद्ध ज्योतिष विशेषज्ञों के मंच पर खास अतिथियों के साथ डॉ. पूजा अवस्थी।",
    caption_en: "With distinguished dignitaries and scholars on stage at the National Jyotish Summit, IIMT University.",
    event: "National Astrologers Conclave - 90+ Renowned Experts Gathering",
    event_hi: "राष्ट्रीय ज्योतिष महासमागम - 90+ विद्वानों की उपस्थिति",
    dignitaries: "देश के प्रमुख ज्योतिषाचार्य एवं शोधकर्ता",
    venue: "आईआईएमटी विश्वविद्यालय, मेरठ",
    alt: "Dr. Pooja Awasthi standing with eminent scholars on stage at IIMT"
  },
  {
    id: "iimt-6",
    filename: "IMMT-4.jpeg",
    imageUrl: "/assets/awards/IMMT-6.jpeg",
    category: "conclave",
    eventGroup: "iimt_meerut",
    eventGroup_hi: "आईआईएमटी विश्वविद्यालय मेरठ",
    caption: "पूज्य जैनाचार्य 108 सौरभ सागर जी महाराज के मंच पर उपस्थित डॉ. पूजा अवस्थी।",
    caption_en: "Seated on the sacred dais under the grace of Param Pujya Jainacharya 108 Saurabh Sagar Ji Maharaj.",
    event: "Dais of Honour - IIMT University Meerut",
    event_hi: "मुख्य मंच - आईआईएमटी मेरठ",
    dignitaries: "परम पूज्य जैनाचार्य 108 श्री सौरभ सागर जी महाराज",
    venue: "आईआईएमटी विश्वविद्यालय मुख्य सभागार, मेरठ",
    alt: "Dr. Pooja Awasthi seated on dais at IIMT Meerut ceremony"
  },

  // ==========================================
  // GROUP 2: राष्ट्रीय धर्म ज्योतिष सम्मेलन 2026, लखनऊ
  // ==========================================
  {
    id: "lucknow-1",
    filename: "Lucknow mahopadhyay award-7.jpeg",
    imageUrl: "/assets/awards/Lucknow_mahopadhyay_award_7.jpeg",
    category: "memento",
    eventGroup: "lucknow",
    eventGroup_hi: "राष्ट्रीय सम्मेलन लखनऊ",
    caption: "राष्ट्रीय धर्म ज्योतिष सम्मेलन 2026 में डॉ. पूजा अवस्थी को मिला 'ज्योतिष महोपाध्याय सम्मान' सुनहरी ट्रॉफी।",
    caption_en: "Prestigious 'Jyotish Mahopadhyaya Award' Sun-shaped Golden Trophy conferred upon Dr. Pooja Awasthi at Lucknow Conclave.",
    event: "Jyotish Mahopadhyaya Award 2026 - Sun-Shaped Golden Shield",
    event_hi: "ज्योतिष महोपाध्याय सम्मान 2026 - स्वर्ण शील्ड",
    dignitaries: "माँ अष्टभुज राष्ट्रीय धर्म ज्योतिष केंद्र, डॉ. रजनी अवस्थी (मुख्य संयोजक)",
    venue: "राय उमानाथ बली प्रेक्षागृह, भातखंडे संस्कृति विश्वविद्यालय परिसर, कैसरबाग, लखनऊ",
    alt: "Sun-shaped Golden Trophy: Jyotish Mahopadhyaya Award to Dr. Pooja Awasthi"
  },

  // ==========================================
  // GROUP 3: माँ शारदा ज्योतिष महासम्मेलन एवं महाकाल उज्जैन
  // ==========================================
  {
    id: "ujjain-1",
    filename: "भारत के शीर्ष 10 उपलब्धि पुरस्कारों में सम्मानित होने का गौरव। बाबा महाकाल की पावन नगरी उज्जैन में, बाबा महाकाल के असीम आशीर्वाद से यह सम्मान प्राप्त हुआ। हर-हर महादेव.jpeg",
    imageUrl: "/assets/awards/ujjain_top_10_trophy.jpeg",
    category: "memento",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "महाकाल की नगरी उज्जैन में 40वें अंतर्राष्ट्रीय महासम्मेलन में मिला 'इंडिया टॉप 10 अचीवमेंट अवार्ड' गोल्डन ट्रॉफी।",
    caption_en: "Prestigious 'India Top 10 Achievement Award' crystal globe golden trophy conferred in the holy city of Ujjain, blessed by Baba Mahakal.",
    event: "India Top 10 Achievement Award Trophy - Holy City of Ujjain",
    event_hi: "इंडिया टॉप 10 अचीवमेंट अवार्ड - उज्जैन",
    dignitaries: "आयोजक पं. दिनेश गुरूजी, माँ शारदा ज्योतिषधाम अनुसंधान संस्थानम् (रजि.) इन्दौर",
    venue: "होटल पार्क पैलेस, इन्दौर रोड, उज्जैन (म.प्र.) [19-20 जुलाई 2026]",
    alt: "India Top 10 Achievement Award Golden Trophy with Crystal Globe, Ujjain"
  },
  {
    id: "ujjain-2",
    filename: "ज्योतिष वास्तु एवं आयुर्वेद सम्मेलन इंदौर 2026 - 1.jpeg",
    imageUrl: "/assets/awards/ujjain_top_10_trophy.jpeg",
    category: "felicitation",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "ज्योतिष, वास्तु और आयुर्वेद सम्मेलन के मुख्य मंच पर 'इंडिया टॉप टेन अवार्ड 2026' ट्रॉफी और सम्मान पत्र लेते हुए।",
    caption_en: "Dr. Pooja Awasthi receiving India Top Ten Award 2026 certificate and memento on stage.",
    event: "India Top Ten Award 2026 Conferment on Dais",
    event_hi: "इंडिया टॉप टेन अवार्ड 2026 - मंच सम्मान",
    dignitaries: "प. दिनेश गुरूजी एवं वरिष्ठ विद्वत परिषद",
    venue: "होटल पार्क पैलेस, इन्दौर-उज्जैन",
    alt: "Dr. Pooja Awasthi receiving India Top Ten Award on stage"
  },
  {
    id: "ujjain-3",
    filename: "ज्योतिष वास्तु एवं आयुर्वेद सम्मेलन इंदौर 2026 - 2.jpeg",
    imageUrl: "/assets/awards/ujjain_top_10_trophy.jpeg",
    category: "felicitation",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "40वें महासम्मेलन में संतों और खास अतिथियों द्वारा ट्रॉफी व सम्मान पत्र भेंट किया गया।",
    caption_en: "Grand stage conferment of India Top Ten Award with distinguished priests and patrons.",
    event: "Grand Dais Felicitation - Jyotish Vastu Ayurveda Mahasammelan",
    event_hi: "मंच सम्मान - ज्योतिष वास्तु आयुर्वेद महासम्मेलन",
    dignitaries: "माँ शारदा ज्योतिषधाम के प्रमुख संत व अतिथि",
    venue: "होटल पार्क पैलेस, उज्जैन (म.प्र.)",
    alt: "Group presentation of India Top 10 Award to Dr. Pooja Awasthi"
  },
  {
    id: "ujjain-4",
    filename: "ज्योतिष वास्तु एवं आयुर्वेद सम्मेलन इंदौर 2026 - 3.jpeg",
    imageUrl: "/assets/awards/ujjain_top_10_trophy.jpeg",
    category: "felicitation",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "उज्जैन-इन्दौर राष्ट्रीय सम्मेलन में सम्मान पत्र और विशेष सम्मान।",
    caption_en: "Reading of citation and felicitation ceremony at the Indore-Ujjain national convention.",
    event: "India Top 10 Award Presentation Ceremony",
    event_hi: "इंडिया टॉप 10 अवार्ड सम्मान समारोह",
    dignitaries: "सम्मेलन संचालन समिति",
    venue: "उज्जैन (म.प्र.)",
    alt: "India Top 10 award citation reading and presentation"
  },
  {
    id: "ujjain-5",
    filename: "ज्योतिष वास्तु एवं आयुर्वेद सम्मेलन इंदौर 2026 - 4.jpeg",
    imageUrl: "/assets/awards/ujjain_top_10_trophy.jpeg",
    category: "conclave",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "होटल पार्क पैलेस, उज्जैन के मुख्य मंच पर देश के नामी ज्योतिष आचार्यों के साथ डॉ. पूजा अवस्थी।",
    caption_en: "Seated on the main dais alongside esteemed astrological scholars and luminaries.",
    event: "Scholars Conclave on Dais - Hotel Park Palace, Ujjain",
    event_hi: "मुख्य मंच - होटल पार्क पैलेस, उज्जैन",
    dignitaries: "देश के प्रसिद्ध वैदिक ज्योतिषाचार्य",
    venue: "होटल पार्क पैलेस, इन्दौर रोड, उज्जैन",
    alt: "Dr. Pooja Awasthi seated with eminent scholars on dais in Ujjain"
  },
  {
    id: "ujjain-6",
    filename: "ज्योतिष वास्तु एवं आयुर्वेद सम्मेलन इंदौर 2026 - 5.jpeg",
    imageUrl: "/assets/awards/ujjain_top_10_trophy.jpeg",
    category: "felicitation",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "40वें महासम्मेलन में बड़ी गेंदा फूलों की माला पहनाकर डॉ. पूजा अवस्थी का भव्य स्वागत व सम्मान।",
    caption_en: "Grand traditional marigold garland felicitation honoring Dr. Pooja Awasthi.",
    event: "Grand Floral Garland Felicitation by Scholars",
    event_hi: "पुष्पमाला स्वागत व सम्मान",
    dignitaries: "सम्मेलन के मुख्य संरक्षक एवं अतिथि",
    venue: "होटल पार्क पैलेस, उज्जैन",
    alt: "Grand garland felicitation ceremony of Dr. Pooja Awasthi"
  },
  {
    id: "ujjain-7",
    filename: "ज्योतिष वास्तु एवं आयुर्वेद सम्मेलन इंदौर 2026 - 6.jpeg",
    imageUrl: "/assets/awards/ujjain_top_10_trophy.jpeg",
    category: "conclave",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "माँ शारदा ज्योतिषधाम के मंच से ज्योतिष और जीवन मार्गदर्शन पर डॉ. पूजा अवस्थी का मुख्य भाषण।",
    caption_en: "Keynote lecture by Dr. Pooja Awasthi from the Maa Sharda Jyotishdham podium.",
    event: "Keynote Address at 40th International Jyotish Mahasammelan",
    event_hi: "40वें महासम्मेलन में मुख्य वक्ता संबोधन",
    dignitaries: "विद्वत परिषद एवं उपस्थित साधक",
    venue: "होटल पार्क पैलेस, उज्जैन (म.प्र.)",
    alt: "Dr. Pooja Awasthi speaking at Maa Sharda Jyotishdham podium in Ujjain"
  },
  {
    id: "ujjain-8",
    filename: "माननीय दिनेश ji महाकाल उज्जैन के प्रधान पुरोहित का आशीर्वाद प्राप्त हुआ. जय महाकाल-3.jpeg",
    imageUrl: "/assets/awards/mahakal_ujjain_dinesh_ji_indore.jpeg",
    category: "felicitation",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "माननीय दिनेश जी (महाकाल उज्जैन के मुख्य पुजारी) का पावन आशीर्वाद मिला। जय महाकाल 🙏",
    caption_en: "Blessed by Hon. Pt. Dinesh Ji, Head Priest of Mahakal Temple Ujjain at 40th Jyotish Sammelan.",
    event: "Divine Blessings from Pt. Dinesh Ji, Head Priest of Mahakal Ujjain",
    event_hi: "महाकाल उज्जैन के मुख्य पुजारी माननीय दिनेश जी का आशीर्वाद",
    dignitaries: "माननीय दिनेश जी (प्रधान पुरोहित, महाकाल मंदिर उज्जैन)",
    venue: "होटल पार्क पैलेस, इन्दौर",
    alt: "Dr. Pooja Awasthi with Pt. Dinesh Ji, Head Priest of Mahakal Ujjain"
  },
  {
    id: "ujjain-9",
    filename: "माननीय दिनेश ji महाकाल उज्जैन के प्रधान पुरोहित-का आशीर्वाद प्राप्त हुआ. जय महाकाल1.jpeg",
    imageUrl: "/assets/aistudio/_____________ji________________________________________________________.__________-3_22283800.jpeg",
    category: "felicitation",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "महाकाल उज्जैन के मुख्य पुजारी माननीय दिनेश जी द्वारा मंच पर सिर पर हाथ रखकर आशीर्वाद देते हुए। जय महाकाल 🙏🔱",
    caption_en: "Pt. Dinesh Ji, Head Priest of Mahakal Ujjain, placing his hands in blessing on Dr. Pooja Awasthi's head.",
    event: "Sacred Shiro-Aashirwad from Head Priest of Mahakal Ujjain",
    event_hi: "मंच पर महाकाल मुख्य पुजारी का आशीर्वाद",
    dignitaries: "माननीय दिनेश जी (प्रधान पुरोहित, महाकाल उज्जैन)",
    venue: "होटल पार्क पैलेस, इन्दौर",
    alt: "Pt. Dinesh Ji placing his hand in blessing on Dr. Pooja Awasthi's head"
  },

  // ==========================================
  // GROUP 4: अमर उजाला ज्योतिष महाकुंभ - माननीय राज्यपाल ले. ज. गुरमीत सिंह
  // ==========================================
  {
    id: "gov-1",
    filename: "अमर उजाला ज्योतिष महाकुम्भ मै उत्तराखंड के माननीय राजयपाल ले ज गुरुमीत सिंह द्वारा सम्मानित-5.jpeg",
    imageUrl: "/assets/awards/uttarakhand_governor_gurmeet_singh_award.jpeg",
    category: "felicitation",
    eventGroup: "uttarakhand_governor",
    eventGroup_hi: "उत्तराखंड राजभवन व अमर उजाला",
    caption: "अमर उजाला ज्योतिष महाकुम्भ 2026 में उत्तराखंड के माननीय राज्यपाल ले. ज. गुरमीत सिंह द्वारा मंच पर डॉ. पूजा अवस्थी को विशेष सम्मान व शील्ड अर्पण।",
    caption_en: "Felicitation of Dr. Pooja Awasthi on stage by Hon. Governor of Uttarakhand, Lt. Gen. Gurmeet Singh at Jyotish Mahakumbh 2026.",
    event: "Honoured by Lt. Gen. Gurmeet Singh, Hon. Governor of Uttarakhand",
    event_hi: "उत्तराखंड के माननीय राज्यपाल ले. ज. गुरमीत सिंह द्वारा मंच सम्मान",
    dignitaries: "ले. ज. गुरमीत सिंह (पीवीएसएम, यूवाईएसएम, एवीएसएम, वीएसएम - माननीय राज्यपाल उत्तराखंड)",
    venue: "ग्राफिक एरा विश्वविद्यालय प्रेक्षागृह, देहरादून",
    alt: "Hon. Governor of Uttarakhand Lt. Gen. Gurmeet Singh honoring Dr. Pooja Awasthi"
  },
  {
    id: "gov-2",
    filename: "अमर उजाला ज्योतिष महाकुम्भ मै उत्तराखंड के माननीय राजयपाल ले ज गुरुमीत सिंह द्वारा सम्मानित-2.jpeg",
    imageUrl: "/assets/awards/uttarakhand_governor_gurmeet_singh_award.jpeg",
    category: "felicitation",
    eventGroup: "uttarakhand_governor",
    eventGroup_hi: "उत्तराखंड राजभवन व अमर उजाला",
    caption: "अमर उजाला एवं ग्राफिक एरा विश्वविद्यालय ज्योतिष महाकुंभ 2026 के भव्य मंच पर माननीय राज्यपाल के साथ सामूहिक सम्मान समारोह।",
    caption_en: "Grand stage group ceremony with Hon. Governor of Uttarakhand at Graphic Era University.",
    event: "Ceremonial Stage Presentation with Hon. Governor - Dehradun",
    event_hi: "माननीय राज्यपाल के साथ सामूहिक सम्मान मंच - देहरादून",
    dignitaries: "ले. ज. गुरमीत सिंह (राज्यपाल) एवं अमर उजाला संपादक मंडल",
    venue: "ग्राफिक एरा विश्वविद्यालय, देहरादून",
    alt: "Grand dais felicitation ceremony with Governor of Uttarakhand"
  },
  {
    id: "gov-3",
    filename: "अमर उजाला ज्योतिष महाकुम्भ मै उत्तराखंड के माननीय राजयपाल ले ज गुरुमीत सिंह द्वारा सम्मानित-3.jpeg",
    imageUrl: "/assets/awards/uttarakhand_governor_gurmeet_singh_award.jpeg",
    category: "conclave",
    eventGroup: "uttarakhand_governor",
    eventGroup_hi: "उत्तराखंड राजभवन व अमर उजाला",
    caption: "अमर उजाला ज्योतिष महाकुंभ में विशिष्ट पैनलिस्ट के रूप में मुख्य मंच से वैदिक विज्ञान पर उद्बोधन देती डॉ. पूजा अवस्थी।",
    caption_en: "Dr. Pooja Awasthi addressing panel on dais as distinguished speaker at Jyotish Mahakumbh.",
    event: "Distinguished Panelist at Amar Ujala Jyotish Mahakumbh",
    event_hi: "ज्योतिष महाकुंभ में विशिष्ट पैनलिस्ट संबोधन",
    dignitaries: "विशिष्ट शोधकर्ता एवं ज्योतिष मनीषी",
    venue: "देहरादून",
    alt: "Dr. Pooja Awasthi speaking on panel at Graphic Era University auditorium"
  },
  {
    id: "gov-4",
    filename: "अमर उजाला ज्योतिष महाकुम्भ मै उत्तराखंड के माननीय राजयपाल ले ज गुरुमीत सिंह द्वारा सम्मानित-1.jpeg",
    imageUrl: "/assets/awards/uttarakhand_governor_gurmeet_singh_award.jpeg",
    category: "felicitation",
    eventGroup: "uttarakhand_governor",
    eventGroup_hi: "उत्तराखंड राजभवन व अमर उजाला",
    caption: "माननीय राज्यपाल ले. ज. गुरमीत सिंह द्वारा डॉ. पूजा अवस्थी को शॉल एवं सम्मान पत्र भेंट।",
    caption_en: "Presentation of ceremonial shawl and award plaque by Hon. Governor.",
    event: "Governor's Award Plaque & Ceremonial Shawl Presentation",
    event_hi: "राज्यपाल महोदय द्वारा शॉल व सम्मान पत्र अर्पण",
    dignitaries: "ले. ज. गुरमीत सिंह (राज्यपाल उत्तराखंड)",
    venue: "ग्राफिक एरा विश्वविद्यालय, देहरादून",
    alt: "Governor Gurmeet Singh handing award plaque to Dr. Pooja Awasthi"
  },
  {
    id: "gov-5",
    filename: "अमर उजाला ज्योतिष महाकुम्भ मै उत्तराखंड के माननीय राजयपाल ले ज गुरुमीत सिंह द्वारा सम्मानित-4.jpeg",
    imageUrl: "/assets/awards/uttarakhand_governor_gurmeet_singh_award.jpeg",
    category: "press",
    eventGroup: "uttarakhand_governor",
    eventGroup_hi: "उत्तराखंड राजभवन व अमर उजाला",
    caption: "अमर उजाला समाचार पत्र में प्रकाशित समाचार: 'परामर्श के लिए डॉ. पूजा अवस्थी के स्टाल पर उमड़ी भीड़' - सैकड़ों साधकों का प्रत्यक्ष मार्गदर्शन।",
    caption_en: "Amar Ujala newspaper report highlighting the massive public queue at Dr. Pooja Awasthi's consultation stall.",
    event: "Press Coverage: Consultations at Jyotish Mahotsav - Amar Ujala",
    event_hi: "समाचार पत्र कवरेज: परामर्श स्टॉल पर जनसैलाब - अमर उजाला",
    dignitaries: "अमर उजाला समाचार पत्र",
    venue: "देहरादून",
    alt: "Newspaper article showing crowds at Dr. Pooja Awasthi's consultation stall"
  },

  // ==========================================
  // GROUP 5: काशी हिन्दू विश्वविद्यालय (BHU), वाराणसी
  // ==========================================
  {
    id: "bhu-1",
    filename: "बनारस हिंदू विश्वविद्यालय के ज्योतिष विभागाध्यक्ष आचार्य चंद्रमौली उपाध्याय जी द्वारा सम्मानित - 7.jpeg",
    imageUrl: "/assets/awards/bhu_varanasi_acharya_chandramouli_upadhyay.jpeg",
    category: "felicitation",
    eventGroup: "bhu_varanasi",
    eventGroup_hi: "बीएचयू वाराणसी महासम्मेलन",
    caption: "बनारस हिंदू विश्वविद्यालय (BHU) के ज्योतिष विभाग के प्रमुख, आचार्य चंद्रमौली उपाध्याय जी द्वारा सम्मानित। 🙏🏆",
    caption_en: "Conferred with Honour by Prof. Acharya Chandramouli Upadhyay, Head of Jyotish Dept., Banaras Hindu University (BHU), Varanasi.",
    event: "International Jyotish & Vastu Sammelan, BHU Varanasi",
    event_hi: "अन्तर्राष्ट्रीय ज्योतिष एवं वास्तु सम्मेलन, काशी हिन्दू विश्वविद्यालय, वाराणसी",
    dignitaries: "आचार्य चंद्रमौली उपाध्याय (ज्योतिष विभागाध्यक्ष, BHU वाराणसी)",
    venue: "संस्कृत विद्या धर्म विज्ञान संकाय, काशी हिन्दू विश्वविद्यालय, वाराणसी",
    alt: "Dr. Pooja Awasthi receiving certificate of honour from Acharya Chandramouli Upadhyay at BHU"
  },
  {
    id: "bhu-2",
    filename: "बनारस हिंदू विश्वविद्यालय के ज्योतिष विभागाध्यक्ष आचार्य चंद्रमौली उपाध्याय जी द्वारा सम्मानित - 4.jpeg",
    imageUrl: "/assets/awards/bhu_keynote_address_pooja_awasthi.jpeg",
    category: "conclave",
    eventGroup: "bhu_varanasi",
    eventGroup_hi: "बीएचयू वाराणसी महासम्मेलन",
    caption: "काशी हिन्दू विश्वविद्यालय (BHU) के अन्तर्राष्ट्रीय ज्योतिष एवं वास्तु सम्मेलन में मंच से शोधपरक मुख्य वक्ता संबोधन देतीं डॉ. पूजा अवस्थी।",
    caption_en: "Keynote Address by Dr. Pooja Awasthi at International Jyotish & Vastu Sammelan, Banaras Hindu University (BHU).",
    event: "Keynote Address at International Jyotish & Vastu Sammelan, BHU",
    event_hi: "बीएचयू अन्तर्राष्ट्रीय सम्मेलन में मुख्य वक्ता शोध व्याख्यान",
    dignitaries: "संस्कृत विद्या धर्म विज्ञान संकाय, BHU",
    venue: "काशी हिन्दू विश्वविद्यालय, वाराणसी",
    alt: "Dr. Pooja Awasthi delivering keynote speech at BHU Varanasi"
  },

  // ==========================================
  // GROUP 8: आधिकारिक व्यक्तित्व एवं प्रोफाइल चित्र (Official Portrait)
  // ==========================================
  {
    id: "portrait-1",
    filename: "POOJA.jpg",
    imageUrl: "/assets/awards/pooja_portrait.jpeg",
    category: "press",
    eventGroup: "portraits",
    eventGroup_hi: "आधिकारिक व्यक्तित्व चित्र",
    caption: "डॉ. पूजा अवस्थी - आधुनिक सोच, गहरी समझ और वैदिक ज्ञान का सुंदर संगम।",
    caption_en: "Dr. Pooja Awasthi - Blending ancient Vedic wisdom with conscious contemporary clarity.",
    event: "Dr. Pooja Awasthi - Official Contemporary Portrait",
    event_hi: "डॉ. पूजा अवस्थी - आधिकारिक तस्वीर",
    dignitaries: "डॉ. पूजा अवस्थी",
    venue: "देहरादून, उत्तराखण्ड",
    alt: "Contemporary portrait of Dr. Pooja Awasthi"
  }
];
