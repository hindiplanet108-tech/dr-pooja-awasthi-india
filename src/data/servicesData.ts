export interface CoreService {
  id: string;
  title: string;
  title_hi: string;
  tagline: string;
  tagline_hi: string;
  summary: string;
  summary_hi: string;
  fullDescription: string;
  fullDescription_hi: string;
  benefits: string[];
  benefits_hi: string[];
  deliverables: string[];
  deliverables_hi: string[];
  sessionDuration: string;
  sessionDuration_hi: string;
  whoIsThisFor: string;
  whoIsThisFor_hi: string;
  image: string;
  baseFee: string;
}

export interface CatalogServiceItem {
  id: string;
  number: number;
  title: string;
  title_en: string;
  fee: number;
  feeFormatted: string;
  duration?: string;
  duration_en?: string;
  description: string;
  description_en: string;
  category: 'healing' | 'numerology' | 'therapy' | 'regression';
  categoryLabel_hi: string;
  categoryLabel_en: string;
  badge?: string;
  badge_en?: string;
  importantDisclaimer?: string;
  importantDisclaimer_en?: string;
  image?: string;
}

export const CORE_SERVICES: CoreService[] = [
  {
    id: "numerology",
    title: "Vedic Numerology",
    title_hi: "वैदिक अंकशास्त्र",
    tagline: "Understand the hidden meaning of your birth date and name",
    tagline_hi: "अपनी जन्मतिथि और नाम में छिपे शुभ संकेतों को जानें",
    summary: "Discover your Birth Number (Mulank) and Destiny Number (Bhagyank) to make clear, confident decisions in career, relationships, and business.",
    summary_hi: "अपने मूलांक और भाग्यांक का अर्थ समझें और करियर, शादी, बिजनेस व जीवन में सही फैसले लें।",
    fullDescription: "Vedic Numerology connects the energy of numbers with your life. By studying your birth date and the spelling of your name, Dr. Pooja Awasthi helps you understand your natural strengths, life opportunities, and the best time to take big steps in life.",
    fullDescription_hi: "वैदिक अंकशास्त्र आपकी जन्मतिथि और नाम के अक्षरों का आसान अध्ययन है। डॉ. पूजा अवस्थी आपकी जन्मतिथि को देखकर आपकी ताकत, सही दिशा और जीवन में आगे बढ़ने का सबसे अच्छा समय बताती हैं।",
    benefits: [
      "Know your natural strengths, talents, and true life purpose",
      "Check your name spelling to match lucky vibrations",
      "Find the best career path and favorable time for new work",
      "Plan important events with your yearly and monthly lucky cycles",
      "Simple daily remedies (lucky colors, lucky days, mantras, and gemstones)"
    ],
    benefits_hi: [
      "अपनी खास ताकत, गुण और जीवन की सही दिशा पहचानें",
      "नाम की स्पेलिंग का सही संतुलन ताकि किस्मत और काम में साथ मिले",
      "करियर में तरक्की और नया काम शुरू करने का सही समय जानें",
      "साल और महीने के शुभ दिनों के हिसाब से जरूरी काम की योजना बनाएं",
      "आसान और असरदार उपाय (शुभ रंग, शुभ दिन, मंत्र व रत्न सलाह)"
    ],
    deliverables: [
      "60-minute private 1-on-1 consultation with Dr. Pooja Awasthi",
      "Easy-to-read personal numerology summary",
      "List of your lucky numbers, colors, dates, and personalized remedies"
    ],
    deliverables_hi: [
      "डॉ. पूजा अवस्थी के साथ 60 मिनट की सीधी व्यक्तिगत बातचीत",
      "सरल भाषा में आपकी पूरी अंकशास्त्र रिपोर्ट",
      "आपके शुभ अंक, शुभ रंग, अच्छी तारीखें और आसान उपाय"
    ],
    sessionDuration: "60 minutes",
    sessionDuration_hi: "60 मिनट",
    whoIsThisFor: "Anyone seeking clarity on career direction, marriage compatibility, business naming, or overcoming repeated obstacles.",
    whoIsThisFor_hi: "जो लोग करियर, शादी/रिश्तों, बिजनेस के नाम या बार-बार आने वाली रुकावटों का हल चाहते हैं।",
    image: "/assets/images/vedic_numerology_sacred_cosmos_1792557572243.jpg",
    baseFee: "₹5,100"
  },
  {
    id: "tarot",
    title: "Tarot Guidance",
    title_hi: "टैरो कार्ड मार्गदर्शन",
    tagline: "Clear guidance to understand your choices and move forward with peace",
    tagline_hi: "मन की उलझन दूर कर सही फैसला लेने का आसान मार्गदर्शन",
    summary: "Intuitive card readings to uncover hidden truths in relationships, emotional confusion, career choices, and upcoming opportunities.",
    summary_hi: "रिश्तों की उलझन, मन की बेचैनी, करियर के विकल्प और आने वाले मौकों को समझने के लिए सटीक टैरो कार्ड रीडिंग।",
    fullDescription: "Tarot is not about creating fear or making blind predictions. It acts as an honest mirror to your thoughts and feelings. Dr. Pooja Awasthi gently uses tarot cards to help you see where you stand, clear up confusion, and choose the most peaceful and positive way forward.",
    fullDescription_hi: "टैरो किसी डर या अंधविश्वास पर आधारित नहीं है, बल्कि आपके मन और हालात का सच्चा आईना है। डॉ. पूजा अवस्थी कार्ड्स के जरिए आपकी स्थिति को साफ समझाती हैं और सही व शांत रास्ता चुनने में मदद करती हैं।",
    benefits: [
      "Clear understanding of relationship questions and feelings",
      "Direct guidance when facing urgent life choices or transitions",
      "Identify negative thought patterns and emotional blocks",
      "Feel peaceful, confident, and back in control of your life",
      "Simple, practical advice you can use in daily life"
    ],
    benefits_hi: [
      "रिश्तों की उलझनों और मन के सवालों पर साफ जवाब",
      "मुश्किल फैसलों और जीवन के बदलावों में सही दिशा",
      "नकारात्मक सोच और चिंता के कारणों को समझना",
      "मन का हल्कापन और खुद पर फिर से पक्का भरोसा",
      "रोजमर्रा के जीवन में काम आने वाली आसान सलाह"
    ],
    deliverables: [
      "45 to 60-minute caring intuitive reading session",
      "Custom card spread for your specific question or situation",
      "Video or audio call with high-resolution photos of your cards"
    ],
    deliverables_hi: [
      "45 से 60 मिनट का निजी और गोपनीय टैरो सेशन",
      "आपके सवाल या स्थिति के हिसाब से निकाले गए खास कार्ड",
      "वीडियो या ऑडियो कॉल और आपके कार्ड्स की साफ तस्वीरें"
    ],
    sessionDuration: "45 - 60 minutes",
    sessionDuration_hi: "45 - 60 मिनट",
    whoIsThisFor: "Anyone feeling stuck, uncertain about a relationship, worried about career decisions, or needing friendly, honest guidance.",
    whoIsThisFor_hi: "जो लोग रिश्तों, करियर या भविष्य के फैसलों को लेकर उलझन में हैं और ईमानदार सलाह चाहते हैं।",
    image: "/assets/images/tarot_intuitive_cards_luxury_1792557573151.jpg",
    baseFee: "₹5,100"
  },
  {
    id: "healing",
    title: "Energy Chakras & Healing",
    title_hi: "ऑरा व चक्र हीलिंग",
    tagline: "Clear heavy energy and bring deep peace to your mind and body",
    tagline_hi: "नकारात्मक ऊर्जा हटाकर मन और शरीर में शांति व ताजगी लाएं",
    summary: "Chakra alignment, aura cleansing, and distance healing to release stress, dissolve anxiety, and restore emotional calm.",
    summary_hi: "चक्र संतुलन, ऑरा की सफाई और हीलिंग द्वारा तनाव कम करना और मन को शांत व हल्का बनाना।",
    fullDescription: "Daily stress, worries, and toxic environments can make us feel tired, heavy, and overwhelmed. Through guided meditation, breathing techniques, and distance energy healing, Dr. Pooja Awasthi helps clear away negative vibrations and restore your natural peace and vitality.",
    fullDescription_hi: "रोजमर्रा की चिंता, तनाव और गलत माहौल हमारे मन व शरीर को थका देते हैं। पूजा जी ध्यान, गहरी सांस के अभ्यास और हीलिंग से नकारात्मक ऊर्जा को हटाकर आपकी ताजगी और मन की शांति लौटाती हैं।",
    benefits: [
      "Relief from chronic mental tiredness, stress, and anxiety",
      "Balance the 7 main energy chakras so you feel refreshed and healthy",
      "Clear negative energy around you to feel light and protected",
      "Let go of painful past memories and draining emotional attachments",
      "Enjoy deeper, restful sleep and a calm, happy mind"
    ],
    benefits_hi: [
      "लगातार रहने वाले मानसिक तनाव, घबराहट और थकान से राहत",
      "शरीर के 7 मुख्य चक्रों का संतुलन जिससे मन खुश और तरोताजा रहे",
      "आसपास की भारी व नकारात्मक ऊर्जा हटाकर हल्का महसूस करना",
      "पुरानी दुखद यादों और तनाव देने वाले रिश्तों से मन की मुक्ति",
      "अच्छी, गहरी नींद और दिनभर मन में सुकून"
    ],
    deliverables: [
      "Assessment of your energy flow and 7 chakras",
      "Guided distance energy healing and breathwork session",
      "Simple daily habits to protect your energy and stay calm"
    ],
    deliverables_hi: [
      "आपकी ऊर्जा और 7 चक्रों की स्थिति की जांच",
      "डिस्टेंस ऊर्जा हीलिंग और शांत सांस अभ्यास का सत्र",
      "सकारात्मक ऊर्जा बनाए रखने के आसान रोज के नियम"
    ],
    sessionDuration: "50 minutes",
    sessionDuration_hi: "50 मिनट",
    whoIsThisFor: "Anyone feeling tired, emotionally drained, anxious, or recovering from a difficult time in life.",
    whoIsThisFor_hi: "जो लोग थका हुआ, परेशान, चिंतित या तनावग्रस्त महसूस कर रहे हैं और नई शांति चाहते हैं।",
    image: "/assets/images/chakras_aura_energy_flow_1792557572576.jpg",
    baseFee: "₹5,100"
  },
  {
    id: "coaching",
    title: "Life Coaching & Mentorship",
    title_hi: "सजग जीवन मार्गदर्शन",
    tagline: "Simple steps to build self-confidence and live a happy, purposeful life",
    tagline_hi: "आत्मविश्वास बढ़ाने और खुशहाल जीवन जीने के आसान कदम",
    summary: "Caring 1-on-1 mentoring to help you overcome self-doubt, build good habits, set healthy boundaries, and achieve your goals.",
    summary_hi: "सीधी बातचीत जो नकारात्मक सोच बदलने, आत्मविश्वास जगाने और जीवन के लक्ष्य पूरे करने में मदद करती है।",
    fullDescription: "Real transformation happens when honest self-reflection is combined with small, steady daily actions. Dr. Pooja Awasthi provides a warm, supportive space where you can share openly, understand what is holding you back, and take practical steps toward the life you truly want.",
    fullDescription_hi: "असली बदलाव तब आता है जब हम अपनी सोच को समझते हैं और रोज छोटे-छोटे अच्छे कदम उठाते हैं। पूजा जी एक सुरक्षित और अपनेपन भरा माहौल देती हैं जहाँ आप खुलकर अपनी बात कह सकते हैं और जीवन में आगे बढ़ सकते हैं।",
    benefits: [
      "Stop overthinking and negative self-talk",
      "Set clear, realistic goals for personal life, career, and family",
      "Build deep inner calm and lasting self-confidence",
      "Learn to communicate calmly and set healthy personal boundaries",
      "Caring support and encouragement to keep you on track"
    ],
    benefits_hi: [
      "ज्यादा सोचने (ओवरथिंकिंग) की आदत छोड़ना और आत्मविश्वास बढ़ाना",
      "करियर, परिवार और जीवन के लिए साफ व आसान लक्ष्य बनाना",
      "अंदरूनी शांति और पक्का आत्मविश्वास हासिल करना",
      "शांत तरीके से अपनी बात रखना और सही सीमाएं तय करना",
      "आगे बढ़ने के लिए लगातार सहारा और हिम्मत मिलना"
    ],
    deliverables: [
      "Structured 1-on-1 coaching call with clear action steps",
      "Simple action sheet and reflection guide to practice at home",
      "Follow-up support via messaging"
    ],
    deliverables_hi: [
      "साफ लक्ष्यों के साथ सीधी जीवन मार्गदर्शन बातचीत",
      "घर पर अभ्यास के लिए आसान कार्य-योजना",
      "सेशन के बाद व्हाट्सएप पर जरूरी सहयोग व सलाह"
    ],
    sessionDuration: "60 minutes",
    sessionDuration_hi: "60 मिनट",
    whoIsThisFor: "Anyone wanting personal growth, better self-control, and a clear, happy direction in life.",
    whoIsThisFor_hi: "जो लोग खुद को निखारना, आत्मविश्वास बढ़ाना और जीवन में खुशहाल दिशा पाना चाहते हैं।",
    image: "/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg",
    baseFee: "₹5,100"
  }
];

export const CATALOG_SERVICES: CatalogServiceItem[] = [
  {
    id: "aura-cleaning",
    number: 1,
    title: "ऑरा क्लीनिंग (ऊर्जा की सफाई)",
    title_en: "Aura Cleansing (Energy Balance)",
    fee: 5100,
    feeFormatted: "₹5,100",
    duration: "20 मिनट",
    duration_en: "20 minutes",
    description: "ऑरा की सफाई आपके आसपास की नेगेटिव ऊर्जा को हटाकर मन को शांत, हल्का और पॉजिटिव बनाती है।",
    description_en: "A gentle session to clear negative energy around you, bring peace of mind, and refresh your inner strength.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा व हीलिंग",
    categoryLabel_en: "Energy & Healing",
    image: "/assets/images/chakras_aura_energy_flow_1792557572576.jpg"
  },
  {
    id: "negativity-healing",
    number: 2,
    title: "सॉल्ट थेरेपी (नमक से नेगेटिविटी दूर करना)",
    title_en: "Negativity Release & Salt Healing",
    fee: 5100,
    feeFormatted: "₹5,100",
    duration: "30 मिनट",
    duration_en: "30 minutes",
    description: "यह सत्र मन के नेगेटिव विचारों, तनाव, नजर दोष और भारीपन को दूर कर सच्ची शांति व सुरक्षा देता है।",
    description_en: "Helps you let go of negative thoughts, stress, and emotional heaviness to feel light, calm, and protected.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा व हीलिंग",
    categoryLabel_en: "Energy & Healing",
    badge: "आसान व प्राकृतिक शुद्धि",
    badge_en: "Salt Cleansing",
    image: "/assets/images/salt_therapy_cleansing_1793624554656.jpg"
  },
  {
    id: "chakra-healing",
    number: 3,
    title: "7 चक्र हीलिंग (7 दिन का ध्यान व बैलेंस सत्र)",
    title_en: "Chakra Healing (7-Day Guided Session)",
    fee: 31000,
    feeFormatted: "₹31,000",
    duration: "7 दिन",
    duration_en: "7 Days",
    description: "शरीर के 7 मुख्य चक्रों को संतुलित करने की 7 दिन की आसान प्रक्रिया, जिससे तन-मन में नई ऊर्जा, अच्छी सेहत और शांति आती है।",
    description_en: "A 7-day guided healing process to balance all 7 body chakras, helping you feel peaceful, healthy, and energetically renewed.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा व हीलिंग",
    categoryLabel_en: "Energy & Healing",
    badge: "7 दिन का खास सत्र",
    badge_en: "7-Day Guided",
    image: "/assets/images/chakras_aura_energy_flow_1792557572576.jpg"
  },
  {
    id: "mobile-number-correction",
    number: 4,
    title: "लकी मोबाइल नंबर सुधार",
    title_en: "Mobile Number Numerology",
    fee: 5100,
    feeFormatted: "₹5,100",
    duration: "45 मिनट",
    duration_en: "45 mins",
    description: "अपनी जन्मतिथि के हिसाब से अपने मोबाइल नंबर के अंकों को लकी बनाएं, ताकि आपके काम और कारोबार में अच्छी ऊर्जा बढ़े।",
    description_en: "Find the best numbers for your mobile phone according to your date of birth, helping attract positive energy and good luck.",
    category: "numerology",
    categoryLabel_hi: "अंकशास्त्र सुधार",
    categoryLabel_en: "Numerology",
    image: "/assets/images/vedic_numerology_sacred_cosmos_1792557572243.jpg"
  },
  {
    id: "name-correction",
    number: 5,
    title: "नाम की स्पेलिंग सुधार (लकी नेम स्पेलिंग)",
    title_en: "Name Spelling Correction",
    fee: 5100,
    feeFormatted: "₹5,100/-",
    duration: "30 मिनट",
    duration_en: "30 mins",
    description: "अपने नाम के अक्षरों में आसान और शुभ बदलाव, जिससे आपके नाम की ऊर्जा जीवन में सफलता और मान-सम्मान लाए।",
    description_en: "Simple, positive adjustments to your name's spelling according to numerology to bring better luck, confidence, and harmony.",
    category: "numerology",
    categoryLabel_hi: "अंकशास्त्र सुधार",
    categoryLabel_en: "Numerology",
    image: "/assets/images/vedic_numerology_sacred_cosmos_1792557572243.jpg"
  },
  {
    id: "relationship-healing",
    number: 6,
    title: "रिश्तों में मिठास व हीलिंग (आपसी समझ सुधार)",
    title_en: "Relationship Healing & Harmony",
    fee: 11000,
    feeFormatted: "₹11,000",
    duration: "60 मिनट",
    duration_en: "60 mins",
    description: "परिवार, पति-पत्नी या अपनों के बीच अनबन और गलतफहमियों को दूर कर आपसी प्यार, समझ और भरोसा बढ़ाने का सत्र।",
    description_en: "Helps heal misunderstandings in relationships, reduce conflicts, and rebuild love, trust, and peaceful communication.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा व हीलिंग",
    categoryLabel_en: "Energy & Healing",
    badge: "रिश्तों में शांति",
    badge_en: "Relationship Calm",
    image: "/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg"
  },
  {
    id: "sound-healing",
    number: 7,
    title: "क्रिस्टल हीलिंग व चार्जिंग (Crystal Healing and Charging)",
    title_en: "Crystal Healing and Charging",
    fee: 11000,
    feeFormatted: "₹11,000/-",
    duration: "45 मिनट",
    duration_en: "45 mins",
    description: "आपकी ऊर्जा और जन्मतिथि के हिसाब से असली क्रिस्टल का चुनाव, शुद्ध चार्जिंग और खास हीलिंग परामर्श।",
    description_en: "Personalized natural crystal healing, sacred energy charging, and resonance alignment tailored to your energetic frequency.",
    category: "therapy",
    categoryLabel_hi: "क्रिस्टल हीलिंग व चार्जिंग",
    categoryLabel_en: "Crystal Healing & Charging",
    badge: "ऊर्जा चार्जिंग",
    badge_en: "Crystal Healing & Charging",
    image: "/assets/images/crystal_gemstones_healing_1793624595121.jpg"
  },
  {
    id: "anxiety-depression-support",
    number: 8,
    title: "वास्तु सुधार (बिना तोड़-फोड़ के घर में सुख-शांति)",
    title_en: "Vastu Harmonization & Spatial Energy",
    fee: 11000,
    feeFormatted: "₹11,000/-",
    duration: "40–60 मिनट",
    duration_en: "40-60 Mins",
    description: "घर, दुकान और ऑफिस में बिना किसी तोड़-फोड़ के वास्तु दोष दूर करना और पॉजिटिव ऊर्जा बढ़ाना।",
    description_en: "Spatial harmony without demolition, balancing five elements and sacred Sri Yantra energies in your home or workspace.",
    category: "therapy",
    categoryLabel_hi: "वास्तु ऊर्जा",
    categoryLabel_en: "Vastu Energy",
    badge: "बिना तोड़-फोड़",
    badge_en: "Non-Destructive Vastu",
    image: "/assets/images/vastu_sacred_yantra_1793624613612.jpg"
  },
  {
    id: "plr-session",
    number: 9,
    title: "पास्ट लाइफ रिग्रेशन (पिछले जन्म की यादें व PLR सत्र)",
    title_en: "Past Life Exploration (PLR)",
    fee: 21000,
    feeFormatted: "₹21,000/-",
    duration: "90–120 मिनट",
    duration_en: "90–120 mins",
    description: "गहरे ध्यान के जरिए मन की पुरानी दबी यादों और पैटर्न को समझना, ताकि आज के जीवन के डर और उलझनों से आराम मिल सके।",
    description_en: "A gentle guided meditation exploring deep soul memories to understand recurring life patterns and heal current obstacles.",
    badge: "खास सत्र",
    badge_en: "Special Session",
    category: "regression",
    categoryLabel_hi: "गहरा ध्यान",
    categoryLabel_en: "Soul Journey",
    image: "/assets/images/tarot_intuitive_cards_luxury_1792557573151.jpg"
  },
  {
    id: "mind-peace-therapy",
    number: 10,
    title: "कॉर्ड कटिंग (पुराने तनाव व कड़वी यादों से आजादी)",
    title_en: "Karma Cord Cutting & Emotional Liberation",
    fee: 11000,
    feeFormatted: "₹11,000/-",
    duration: "30–40 मिनट",
    duration_en: "30-40 Mins",
    description: "पुराने दुख देने वाले रिश्तों, कड़वी यादों और मानसिक दबाव से मन को पूरी तरह हल्का व शांत करने का सत्र।",
    description_en: "Clearing draining energetic cords from past relationships and painful memories to restore peace and inner freedom.",
    category: "therapy",
    categoryLabel_hi: "मन की शांति",
    categoryLabel_en: "Emotional Liberation",
    badge: "गहरी शांति",
    badge_en: "Deep Liberation",
    image: "/assets/images/salt_therapy_cleansing_1793624554656.jpg"
  }
];

export interface DivineServiceItem {
  id: string;
  number: number;
  title: string;
  title_en: string;
  fee: number;
  feeFormatted: string;
  duration: string;
  duration_en: string;
  description: string;
  description_en: string;
  category: 'core' | 'healing' | 'numerology' | 'therapy' | 'regression';
  categoryLabel_hi: string;
  categoryLabel_en: string;
  badge?: string;
  badge_en?: string;
  isSpecialized11: boolean;
  image: string;
}

export const ALL_16_DIVINE_SERVICES: DivineServiceItem[] = [
  // 1. Core Consultation: Vedic Numerology
  {
    id: "core-numerology",
    number: 1,
    title: "वैदिक अंकशास्त्र परामर्श (मूलांक व भाग्यांक जांच)",
    title_en: "Vedic Numerology Consultation (Mulank & Bhagyank)",
    fee: 5100,
    feeFormatted: "₹5,100",
    duration: "60 मिनट",
    duration_en: "60 mins",
    description: "जन्मतिथि और नाम के अक्षरों की पूरी जांच, जिससे आपका सही मूलांक, भाग्यांक, अच्छा समय और करियर का सही रास्ता साफ दिखे।",
    description_en: "In-depth birth date and name matrix analysis uncovering your core Mulank, Bhagyank, career timing, and personal lucky remedies.",
    category: "core",
    categoryLabel_hi: "मुख्य वैदिक परामर्श",
    categoryLabel_en: "Core Consultation",
    badge: "सबसे लोकप्रिय",
    badge_en: "Most Popular",
    isSpecialized11: false,
    image: "/assets/images/vedic_numerology_sacred_cosmos_1792557572243.jpg"
  },
  // 2. Core Consultation: Tarot Reading
  {
    id: "core-tarot",
    number: 2,
    title: "टैरो कार्ड मार्गदर्शन (सटीक सलाह व दिशा सत्र)",
    title_en: "Intuitive Tarot Life Reading & Spiritual Guidance",
    fee: 5100,
    feeFormatted: "₹5,100",
    duration: "45-60 मिनट",
    duration_en: "45-60 mins",
    description: "रिश्तों, नौकरी, बिजनेस या जीवन के बड़े फैसलों में मन की उलझन दूर कर साफ और पॉजिटिव रास्ता दिखाने वाला सत्र।",
    description_en: "Clarity on complex life choices, romantic relationships, career crossroads, and spiritual energy through intuitive tarot spreads.",
    category: "core",
    categoryLabel_hi: "मुख्य वैदिक परामर्श",
    categoryLabel_en: "Core Consultation",
    badge: "सटीक मार्गदर्शन",
    badge_en: "Clarity Session",
    isSpecialized11: false,
    image: "/assets/images/tarot_intuitive_cards_luxury_1792557573151.jpg"
  },
  // 3. Core Consultation: Distance Energy & Chakra Healing
  {
    id: "core-chakra",
    number: 3,
    title: "डिस्टेंस ऊर्जा व चक्र हीलिंग (7 चक्र संतुलन)",
    title_en: "Distance Energy & Chakra Alignment Session",
    fee: 5100,
    feeFormatted: "₹5,100",
    duration: "50 मिनट",
    duration_en: "50 mins",
    description: "मानसिक तनाव, भारीपन और चिंता को कम करने के लिए 7 मुख्य चक्रों का दूर से ऊर्जा बैलेंस और शांत ध्यान सत्र।",
    description_en: "Targeted distance energy healing to unblock 7 primary chakras, dissolve chronic stress, and restore vital prana flow.",
    category: "core",
    categoryLabel_hi: "मुख्य वैदिक परामर्श",
    categoryLabel_en: "Core Consultation",
    badge: "गहरा ऊर्जा बैलेंस",
    badge_en: "Deep Healing",
    isSpecialized11: false,
    image: "/assets/images/chakras_aura_energy_flow_1792557572576.jpg"
  },
  // 4. Core Consultation: Life Coaching & Soul Mentorship
  {
    id: "core-coaching",
    number: 4,
    title: "लाइफ कोचिंग व सही जीवन मार्गदर्शन",
    title_en: "Conscious Life Coaching & Soul Mentorship",
    fee: 5100,
    feeFormatted: "₹5,100",
    duration: "60 मिनट",
    duration_en: "60 mins",
    description: "आत्मविश्वास बढ़ाने, ज्यादा सोचने की आदत कम करने और जीवन के निजी व कामकाजी लक्ष्य पाने के लिए आत्मीय मार्गदर्शन।",
    description_en: "Empowering 1-on-1 mentorship to dissolve overthinking, cultivate resilience, set healthy boundaries, and realize your vision.",
    category: "core",
    categoryLabel_hi: "मुख्य वैदिक परामर्श",
    categoryLabel_en: "Core Consultation",
    badge: "पॉजिटिव बदलाव",
    badge_en: "Empowerment",
    isSpecialized11: false,
    image: "/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg"
  },
  // 5. Signature Comprehensive Consultation
  {
    id: "core-signature",
    number: 5,
    title: "संपूर्ण पर्सनल लाइफ गाइडेंस (लाइफ रोडमैप सत्र)",
    title_en: "Personalized Comprehensive Spiritual Consultation",
    fee: 5100,
    feeFormatted: "₹5,100",
    duration: "60 मिनट",
    duration_en: "60 mins",
    description: "डॉ. पूजा अवस्थी के साथ सीधा 1-on-1 सत्र, जिसमें अंकशास्त्र, टैरो, ऑरा की स्थिति और आसान घरेलू उपाय शामिल हैं।",
    description_en: "Flagship private consultation with Dr. Pooja Awasthi combining numerology blueprint, intuitive reading, and healing prescription.",
    category: "core",
    categoryLabel_hi: "सिग्नेचर परामर्श",
    categoryLabel_en: "Signature Session",
    badge: "100% सीधी बातचीत",
    badge_en: "1-on-1 Direct",
    isSpecialized11: false,
    image: "/assets/images/pooja_awasthi_portrait.jpeg"
  },

  // The Specialized Healing & Correction Services
  {
    id: "spec-aura-cleaning",
    number: 6,
    title: "ऑरा क्लीनिंग (ऊर्जा की त्वरित सफाई)",
    title_en: "Aura Cleansing (Energy Balance - Specialized #1)",
    fee: 5100,
    feeFormatted: "₹5,100",
    duration: "20 मिनट",
    duration_en: "20 mins",
    description: "ऑरा की सफाई आपके आसपास की नेगेटिव ऊर्जा को हटाकर मन को शांत, हल्का और पॉजिटिव बनाती है।",
    description_en: "Rapid cleansing session to strip away external psychic static, restore energetic purity, and ground emotional serenity.",
    category: "healing",
    categoryLabel_hi: "विशेष हीलिंग सेवा #1",
    categoryLabel_en: "Specialized Healing #1",
    badge: "11 विशेष सेवाएं #1",
    badge_en: "Specialized #1",
    isSpecialized11: true,
    image: "/assets/images/chakras_aura_energy_flow_1792557572576.jpg"
  },
  {
    id: "spec-salt-healing",
    number: 7,
    title: "सॉल्ट थेरेपी (नमक से नेगेटिविटी दूर करना)",
    title_en: "Negativity Release & Salt Healing (Specialized #2)",
    fee: 5100,
    feeFormatted: "₹5,100",
    duration: "30 मिनट",
    duration_en: "30 mins",
    description: "यह सत्र मन के नेगेटिव विचारों, तनाव, नजर दोष और भारीपन को दूर कर सच्ची शांति व सुरक्षा देता है।",
    description_en: "Ancient salt vibrational therapy to neutralise heavy domestic toxicity, evil eye (nazar), and persistent fatigue.",
    category: "healing",
    categoryLabel_hi: "विशेष हीलिंग सेवा #2",
    categoryLabel_en: "Specialized Healing #2",
    badge: "11 विशेष सेवाएं #2",
    badge_en: "Specialized #2",
    isSpecialized11: true,
    image: "/assets/images/salt_therapy_cleansing_1793624554656.jpg"
  },
  {
    id: "spec-7day-chakra",
    number: 8,
    title: "7 चक्र हीलिंग (7 दिन की गहन ध्यान व बैलेंस प्रक्रिया)",
    title_en: "7-Day Intensive Chakra Alignment (Specialized #3)",
    fee: 31000,
    feeFormatted: "₹31,000",
    duration: "7 दिन",
    duration_en: "7 Days",
    description: "शरीर के 7 मुख्य ऊर्जा चक्रों को संतुलित करने की 7 दिन की खास प्रक्रिया, जिससे तन-मन में नई ऊर्जा, अच्छी सेहत और शांति आती है।",
    description_en: "Comprehensive 7-day intensive spiritual alignment clearing root-to-crown blockages for profound vitality.",
    category: "healing",
    categoryLabel_hi: "विशेष हीलिंग सेवा #3",
    categoryLabel_en: "Specialized Healing #3",
    badge: "11 विशेष सेवाएं #3",
    badge_en: "Specialized #3",
    isSpecialized11: true,
    image: "/assets/images/chakras_aura_energy_flow_1792557572576.jpg"
  },
  {
    id: "spec-mobile-correction",
    number: 9,
    title: "लकी मोबाइल नंबर सुधार (अंकशास्त्र सुधार)",
    title_en: "Mobile Number Numerology Correction (Specialized #4)",
    fee: 5100,
    feeFormatted: "₹5,100",
    duration: "45 मिनट",
    duration_en: "45 mins",
    description: "अपनी जन्मतिथि के हिसाब से अपने मोबाइल नंबर के अंकों को शुभ बनाएं, ताकि आपके काम और कारोबार में पॉजिटिव ऊर्जा बढ़े।",
    description_en: "Telephonic digit frequency alignment ensuring your active contact number vibrates in complete sync with your wealth numbers.",
    category: "numerology",
    categoryLabel_hi: "विशेष सुधार सेवा #4",
    categoryLabel_en: "Specialized Correction #4",
    badge: "11 विशेष सेवाएं #4",
    badge_en: "Specialized #4",
    isSpecialized11: true,
    image: "/assets/images/vedic_numerology_sacred_cosmos_1792557572243.jpg"
  },
  {
    id: "spec-name-correction",
    number: 10,
    title: "लकी नेम स्पेलिंग सुधार (नाम अक्षरों का संतुलन)",
    title_en: "Name Spelling Vibrational Correction (Specialized #5)",
    fee: 5100,
    feeFormatted: "₹5,100/-",
    duration: "30 मिनट",
    duration_en: "30 mins",
    description: "अपने नाम के अक्षरों में आसान और शुभ अंकशास्त्रीय सुधार, जिससे आपके नाम की ऊर्जा जीवन में सफलता और मान-सम्मान लाए।",
    description_en: "Subtle yet potent letter adjustments in legal or daily spelling to harmonise your compound name number (Namaank).",
    category: "numerology",
    categoryLabel_hi: "विशेष सुधार सेवा #5",
    categoryLabel_en: "Specialized Correction #5",
    badge: "11 विशेष सेवाएं #5",
    badge_en: "Specialized #5",
    isSpecialized11: true,
    image: "/assets/images/vedic_numerology_sacred_cosmos_1792557572243.jpg"
  },
  {
    id: "spec-relationship-harmony",
    number: 11,
    title: "रिश्तों में मिठास व हीलिंग (आपसी समझ सुधार)",
    title_en: "Relationship Healing & Harmony (Specialized #6)",
    fee: 11000,
    feeFormatted: "₹11,000",
    duration: "60 मिनट",
    duration_en: "60 mins",
    description: "परिवार, पति-पत्नी या अपनों के बीच अनबन और गलतफहमियों को दूर कर आपसी प्यार, समझ और भरोसा बढ़ाने का सत्र।",
    description_en: "Spiritual mediation and aura harmonisation dissolving karmic friction between spouses, family members, or business partners.",
    category: "healing",
    categoryLabel_hi: "विशेष हीलिंग सेवा #6",
    categoryLabel_en: "Specialized Healing #6",
    badge: "11 विशेष सेवाएं #6",
    badge_en: "Specialized #6",
    isSpecialized11: true,
    image: "/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg"
  },
  {
    id: "spec-gemstone-resonance",
    number: 12,
    title: "क्रिस्टल हीलिंग व चार्जिंग (Crystal Healing and Charging)",
    title_en: "Crystal Healing and Charging (Specialized #7)",
    fee: 11000,
    feeFormatted: "₹11,000/-",
    duration: "45 मिनट",
    duration_en: "45 mins",
    description: "आपकी जन्मतिथि के हिसाब से आपके लिए सबसे सही और असरदार प्राकृतिक क्रिस्टल, ऊर्जा चार्जिंग व असली रत्न मार्गदर्शन।",
    description_en: "Planetary frequency alignment recommending consecrated natural crystals, energetic charging, and certified gemstones to activate dormant chakras.",
    category: "therapy",
    categoryLabel_hi: "विशेष थेरेपी सेवा #7",
    categoryLabel_en: "Specialized Therapy #7",
    badge: "11 विशेष सेवाएं #7",
    badge_en: "Specialized #7",
    isSpecialized11: true,
    image: "/assets/images/crystal_gemstones_healing_1793624595121.jpg"
  },
  {
    id: "spec-vastu-harmonization",
    number: 13,
    title: "वास्तु सुधार (बिना तोड़-फोड़ के सुख-शांति)",
    title_en: "Vastu Harmonization & Spatial Energy (Specialized #9)",
    fee: 11000,
    feeFormatted: "₹11,000/-",
    duration: "40-60 मिनट",
    duration_en: "40-60 Mins",
    description: "घर, दुकान और ऑफिस में बिना किसी तोड़-फोड़ के वास्तु दोष दूर करना और पॉजिटिव ऊर्जा बढ़ाना।",
    description_en: "Non-destructive energetic remedies, five-element rebalancing, and spatial grid purification for residential and commercial premises.",
    category: "therapy",
    categoryLabel_hi: "विशेष थेरेपी सेवा #9",
    categoryLabel_en: "Specialized Therapy #9",
    badge: "11 विशेष सेवाएं #9",
    badge_en: "Specialized #9",
    isSpecialized11: true,
    image: "/assets/images/vastu_sacred_yantra_1793624613612.jpg"
  },
  {
    id: "spec-plr-session",
    number: 14,
    title: "पास्ट लाइफ रिग्रेशन (पिछले जन्म की यादें व PLR सत्र)",
    title_en: "Past Life Exploration & PLR (Specialized #10)",
    fee: 21000,
    feeFormatted: "₹21,000/-",
    duration: "90-120 मिनट",
    duration_en: "90-120 mins",
    description: "गहरे ध्यान के जरिए मन की पुरानी दबी यादों और पैटर्न को समझना, ताकि आज के जीवन के डर और उलझनों से आराम मिल सके।",
    description_en: "Deep guided subconscious soul journey to discover root causes of recurring phobias, unexplained attachments, and karmic bonds.",
    category: "regression",
    categoryLabel_hi: "विशेष ध्यान सत्र #10",
    categoryLabel_en: "Specialized Regression #10",
    badge: "11 विशेष सेवाएं #10",
    badge_en: "Specialized #10",
    isSpecialized11: true,
    image: "/assets/images/tarot_intuitive_cards_luxury_1792557573151.jpg"
  },
  {
    id: "spec-karma-cord-cutting",
    number: 15,
    title: "कॉर्ड कटिंग (पुराने तनाव व कड़वी यादों से आजादी)",
    title_en: "Karma Cord Cutting & Emotional Liberation (Specialized #11)",
    fee: 11000,
    feeFormatted: "₹11,000/-",
    duration: "30-40 मिनट",
    duration_en: "30-40 Mins",
    description: "पुराने दुख देने वाले रिश्तों, कड़वी यादों और मानसिक दबाव से मन को पूरी तरह हल्का व शांत करने का सत्र।",
    description_en: "Energetic cord severance rituals liberating your psyche from toxic soul ties, emotional baggage, and lingering grief.",
    category: "therapy",
    categoryLabel_hi: "विशेष थेरेपी सेवा #11",
    categoryLabel_en: "Specialized Therapy #11",
    badge: "11 विशेष सेवाएं #11",
    badge_en: "Specialized #11",
    isSpecialized11: true,
    image: "/assets/images/salt_therapy_cleansing_1793624554656.jpg"
  }
];
