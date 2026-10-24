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
}

export const CORE_SERVICES: CoreService[] = [
  {
    id: "numerology",
    title: "Vedic Numerology",
    title_hi: "वैदिक अंकशास्त्र",
    tagline: "Understand the hidden meaning of your birth date and name",
    tagline_hi: "अपनी जन्मतिथि और नाम में छिपे शुभ संकेतों को जानें",
    summary: "Discover your Birth Number (Mulank) and Destiny Number (Bhagyank) to make clear, confident decisions in career, relationships, and business.",
    summary_hi: "अपने जन्म अंक (मूलांक) और भाग्य अंक (भाग्यांक) का अर्थ समझें और करियर, विवाह, व्यापार व जीवन में सही निर्णय लें।",
    fullDescription: "Vedic Numerology connects the energy of numbers with your life. By studying your birth date and the spelling of your name, Dr. Pooja Awasthi helps you understand your natural strengths, life opportunities, and the best time to take big steps in life.",
    fullDescription_hi: "वैदिक अंकशास्त्र आपकी जन्मतिथि और नाम के अक्षरों का सुंदर अध्ययन है। डॉ. पूजा अवस्थी आपकी जन्मतिथि का सरल विश्लेषण करके आपकी प्रतिभा, सही दिशा और जीवन में तरक्की पाने का सबसे अनुकूल समय बताती हैं।",
    benefits: [
      "Know your natural strengths, talents, and true life purpose",
      "Check your name spelling to match lucky vibrations",
      "Find the best career path and favorable time for new work",
      "Plan important events with your yearly and monthly lucky cycles",
      "Simple daily remedies (lucky colors, lucky days, mantras, and gemstones)"
    ],
    benefits_hi: [
      "अपनी प्राकृतिक शक्तियों, प्रतिभा और जीवन के उद्देश्य को पहचानें",
      "नाम के अक्षरों (वर्तनी) का शुभ संतुलन ताकि भाग्य में सकारात्मकता आए",
      "करियर में तरक्की और नए कार्य शुरू करने का सही समय जानें",
      "वार्षिक और मासिक शुभ चक्रों के अनुसार महत्वपूर्ण कार्यों की योजना बनाएं",
      "सरल और असरदार उपाय (शुभ रंग, शुभ दिन, मंत्र व रत्न मार्गदर्शन)"
    ],
    deliverables: [
      "60-minute private 1-on-1 consultation with Dr. Pooja Awasthi",
      "Easy-to-read personal numerology summary",
      "List of your lucky numbers, colors, dates, and personalized remedies"
    ],
    deliverables_hi: [
      "डॉ. पूजा अवस्थी के साथ 60 मिनट का सीधा व्यक्तिगत परामर्श",
      "सरल भाषा में आपकी व्यक्तिगत अंकशास्त्र विवरण तालिका",
      "आपके शुभ अंक, अनुकूल रंग, महत्वपूर्ण तिथियां व सरल उपाय"
    ],
    sessionDuration: "60 minutes",
    sessionDuration_hi: "60 मिनट",
    whoIsThisFor: "Anyone seeking clarity on career direction, marriage compatibility, business naming, or overcoming repeated obstacles.",
    whoIsThisFor_hi: "जो भी करियर में सही दिशा, विवाह/रिश्तों में सामंजस्य, नए काम की शुरुआत या बार-बार आने वाली अड़चनों का समाधान चाहते हैं।",
    image: "/src/assets/images/vedic_numerology_sacred_cosmos_1792557572243.jpg",
    baseFee: "₹5,100"
  },
  {
    id: "tarot",
    title: "Tarot Guidance",
    title_hi: "टैरो कार्ड मार्गदर्शन",
    tagline: "Clear guidance to understand your choices and move forward with peace",
    tagline_hi: "मन के भ्रम को दूर कर सही निर्णय लेने का सरल मार्गदर्शन",
    summary: "Intuitive card readings to uncover hidden truths in relationships, emotional confusion, career choices, and upcoming opportunities.",
    summary_hi: "रिश्तों की उलझनें, मन का द्वंद्व, करियर के विकल्प और आने वाले अवसरों को समझने के लिए अंतर्ज्ञानी टैरो मार्गदर्शन।",
    fullDescription: "Tarot is not about creating fear or making blind predictions. It acts as an honest mirror to your thoughts and feelings. Dr. Pooja Awasthi gently uses tarot cards to help you see where you stand, clear up confusion, and choose the most peaceful and positive way forward.",
    fullDescription_hi: "टैरो कोई अंधविश्वास या डराने वाली भविष्यवाणी नहीं है, बल्कि आपके मन और भावनाओं का एक सच्चा दर्पण है। पूजा जी कार्ड्स के माध्यम से आपकी वर्तमान स्थिति को स्पष्ट करती हैं और आपको सही व शांतिपूर्ण रास्ता चुनने में मदद करती हैं।",
    benefits: [
      "Clear understanding of relationship questions and feelings",
      "Direct guidance when facing urgent life choices or transitions",
      "Identify negative thought patterns and emotional blocks",
      "Feel peaceful, confident, and back in control of your life",
      "Simple, practical advice you can use in daily life"
    ],
    benefits_hi: [
      "रिश्तों की उलझनों और भावनाओं में सच्ची स्पष्टता",
      "कठिन फैसलों और जीवन के बदलावों में सही मार्गदर्शन",
      "नकारात्मक विचारों और चिंता के कारणों को पहचानना",
      "मन का हल्कापन और अपने ऊपर फिर से पूरा विश्वास",
      "दैनिक जीवन के लिए सरल और व्यावहारिक सुझाव"
    ],
    deliverables: [
      "45 to 60-minute caring intuitive reading session",
      "Custom card spread for your specific question or situation",
      "Video or audio call with high-resolution photos of your cards"
    ],
    deliverables_hi: [
      "45 से 60 मिनट का सहज व संवेदनशील टैरो सत्र",
      "आपके प्रश्न या स्थिति के अनुसार विशेष कार्ड विन्यास (कार्ड व्यवस्था)",
      "वीडियो या ऑडियो कॉल और आपके निकाले गए कार्ड्स की स्पष्ट तस्वीरें"
    ],
    sessionDuration: "45 - 60 minutes",
    sessionDuration_hi: "45 - 60 मिनट",
    whoIsThisFor: "Anyone feeling stuck, uncertain about a relationship, worried about career decisions, or needing friendly, honest guidance.",
    whoIsThisFor_hi: "जो रिश्तों में उलझन, करियर में रुकावट या भविष्य को लेकर असमंजस महसूस कर रहे हैं और निष्पक्ष सलाह चाहते हैं।",
    image: "/src/assets/images/tarot_intuitive_cards_luxury_1792557573151.jpg",
    baseFee: "₹5,100"
  },
  {
    id: "healing",
    title: "Energy Chakras & Healing",
    title_hi: "ऊर्जा चक्र व हीलिंग",
    tagline: "Clear heavy energy and bring deep peace to your mind and body",
    tagline_hi: "नकारात्मक ऊर्जा दूर कर तन और मन में शांति व नई ताजगी लाएं",
    summary: "Chakra alignment, aura cleansing, and distance healing to release stress, dissolve anxiety, and restore emotional calm.",
    summary_hi: "चक्र संतुलन, आभा मंडल की पावन शुद्धि और हीलिंग द्वारा तनाव दूर करना और मन को शांत व हल्का बनाना।",
    fullDescription: "Daily stress, worries, and toxic environments can make us feel tired, heavy, and overwhelmed. Through guided meditation, breathing techniques, and distance energy healing, Dr. Pooja Awasthi helps clear away negative vibrations and restore your natural peace and vitality.",
    fullDescription_hi: "रोजमर्रा का तनाव, पुरानी चिंताएं और नकारात्मक माहौल हमारे मन और शरीर को थका देते हैं। पूजा जी ध्यान, श्वास संतुलन और हीलिंग के माध्यम से नकारात्मकता को दूर कर आपकी खोई हुई ऊर्जा और मानसिक शांति को लौटाती हैं।",
    benefits: [
      "Relief from chronic mental tiredness, stress, and anxiety",
      "Balance the 7 main energy chakras so you feel refreshed and healthy",
      "Clear negative energy around you to feel light and protected",
      "Let go of painful past memories and draining emotional attachments",
      "Enjoy deeper, restful sleep and a calm, happy mind"
    ],
    benefits_hi: [
      "लगातार बने रहने वाले मानसिक तनाव और थकान से राहत",
      "शरीर के 7 मुख्य चक्रों का संतुलन जिससे स्फूर्ति और अच्छा स्वास्थ्य रहे",
      "आसपास की नकारात्मक ऊर्जा को दूर कर सुरक्षा और हल्कापन महसूस करना",
      "पुरानी दुखद बातों और तनाव देने वाले बंधनों से मुक्ति",
      "गहरी व आरामदायक नींद और दिनभर मन में शांति"
    ],
    deliverables: [
      "Assessment of your energy flow and 7 chakras",
      "Guided distance energy healing and breathwork session",
      "Simple daily habits to protect your energy and stay calm"
    ],
    deliverables_hi: [
      "आपकी ऊर्जा और 7 चक्रों की स्थिति की समझ",
      "निर्देशित दूरस्थ ऊर्जा उपचार (हीलिंग) और श्वास अभ्यास सत्र",
      "सकारात्मक ऊर्जा बनाए रखने के आसान दैनिक नियम"
    ],
    sessionDuration: "50 minutes",
    sessionDuration_hi: "50 मिनट",
    whoIsThisFor: "Anyone feeling tired, emotionally drained, anxious, or recovering from a difficult time in life.",
    whoIsThisFor_hi: "जो थका हुआ, चिंतित, भारी या भावनात्मक रूप से परेशान महसूस कर रहे हैं और नई ऊर्जा चाहते हैं।",
    image: "/src/assets/images/chakras_aura_energy_flow_1792557572576.jpg",
    baseFee: "₹5,100"
  },
  {
    id: "coaching",
    title: "Life Coaching & Mentorship",
    title_hi: "सजग जीवन मार्गदर्शन",
    tagline: "Simple steps to build self-confidence and live a happy, purposeful life",
    tagline_hi: "आत्मविश्वास बढ़ाने और जीवन में खुशहाली व लक्ष्य पाने के सरल कदम",
    summary: "Caring 1-on-1 mentoring to help you overcome self-doubt, build good habits, set healthy boundaries, and achieve your goals.",
    summary_hi: "व्यक्तिगत आत्मीय संवाद जो आपको नकारात्मक सोच बदलने, आत्मविश्वास जगाने और अपने लक्ष्य पाने में मदद करता है।",
    fullDescription: "Real transformation happens when honest self-reflection is combined with small, steady daily actions. Dr. Pooja Awasthi provides a warm, supportive space where you can share openly, understand what is holding you back, and take practical steps toward the life you truly want.",
    fullDescription_hi: "सच्चा बदलाव तब आता है जब हम अपनी सोच को समझते हैं और रोज छोटे-छोटे सकारात्मक कदम उठाते हैं। पूजा जी एक ऐसा सुरक्षित और दोस्ताना माहौल देती हैं जहाँ आप बिना झिझक अपनी बात रख सकते हैं और जीवन में आगे बढ़ सकते हैं।",
    benefits: [
      "Stop overthinking and negative self-talk",
      "Set clear, realistic goals for personal life, career, and family",
      "Build deep inner calm and lasting self-confidence",
      "Learn to communicate calmly and set healthy personal boundaries",
      "Caring support and encouragement to keep you on track"
    ],
    benefits_hi: [
      "अत्यधिक और व्यर्थ सोचने की आदत छोड़ना तथा आत्मविश्वास बढ़ाना",
      "करियर, परिवार और जीवन के लिए स्पष्ट व आसान लक्ष्य बनाना",
      "अंदरूनी शांति और सच्चा आत्मविश्वास हासिल करना",
      "शालीनता से अपनी बात कहना और सही सीमाएं तय करना",
      "आगे बढ़ने के लिए निरंतर सहयोग और हिम्मत पाना"
    ],
    deliverables: [
      "Structured 1-on-1 coaching call with clear action steps",
      "Simple action sheet and reflection guide to practice at home",
      "Follow-up support via messaging"
    ],
    deliverables_hi: [
      "स्पष्ट लक्ष्यों के साथ व्यक्तिगत जीवन मार्गदर्शन संवाद",
      "घर पर अभ्यास के लिए आसान कार्य-सूची व मार्गदर्शिका",
      "सत्र के बाद व्हाट्सएप पर निरंतर मार्गदर्शन व सहायता"
    ],
    sessionDuration: "60 minutes",
    sessionDuration_hi: "60 मिनट",
    whoIsThisFor: "Anyone wanting personal growth, better self-control, and a clear, happy direction in life.",
    whoIsThisFor_hi: "जो भी अपने व्यक्तित्व को निखारना, आत्मविश्वास बढ़ाना और जीवन में स्पष्ट लक्ष्य पाना चाहते हैं।",
    image: "/src/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg",
    baseFee: "₹5,100"
  }
];

export const CATALOG_SERVICES: CatalogServiceItem[] = [
  {
    id: "aura-cleaning",
    number: 1,
    title: "आभा मंडल ऊर्जा शुद्धि (ऑरा क्लीनिंग)",
    title_en: "Aura Cleansing (Energy Balance)",
    fee: 3100,
    feeFormatted: "₹3,100",
    duration: "20 मिनट",
    duration_en: "20 minutes",
    description: "आभा मंडल की ऊर्जा शुद्धि आपके चारों ओर की नकारात्मकता को दूर करके मन को शांत, हल्का और सकारात्मक बनाती है।",
    description_en: "A gentle session to clear negative energy around you, bring peace of mind, and refresh your inner strength.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा एवं हीलिंग",
    categoryLabel_en: "Energy & Healing"
  },
  {
    id: "negativity-healing",
    number: 2,
    title: "नकारात्मकता निवारण व हीलिंग",
    title_en: "Negativity Release & Healing",
    fee: 5100,
    feeFormatted: "₹5,100",
    duration: "30 मिनट",
    duration_en: "30 minutes",
    description: "यह सत्र मन के नकारात्मक विचारों, तनाव और भारीपन को दूर कर मन की सच्ची शांति पाने में मदद करता है।",
    description_en: "Helps you let go of negative thoughts, stress, and emotional heaviness to feel light, calm, and positive.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा एवं हीलिंग",
    categoryLabel_en: "Energy & Healing"
  },
  {
    id: "chakra-healing",
    number: 3,
    title: "सप्त चक्र हीलिंग (7 दिवसीय गहन साधना)",
    title_en: "Chakra Healing (7-Day Guided Session)",
    fee: 31000,
    feeFormatted: "₹31,000",
    duration: "7 दिन",
    duration_en: "7 Days",
    description: "शरीर के 7 मुख्य ऊर्जा चक्रों को संतुलित करने की 7 दिवसीय साधना, जिससे तन-मन में नई ऊर्जा, स्वास्थ्य और शांति आती है।",
    description_en: "A 7-day guided healing process to balance all 7 body chakras, helping you feel peaceful, healthy, and energetically renewed.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा एवं हीलिंग",
    categoryLabel_en: "Energy & Healing",
    badge: "गहन साधना (7 दिन)",
    badge_en: "7-Day Guided"
  },
  {
    id: "mobile-number-correction",
    number: 4,
    title: "मोबाइल नंबर अंक संशोधन",
    title_en: "Mobile Number Numerology",
    fee: 5100,
    feeFormatted: "₹5,100",
    description: "अपनी जन्मतिथि के अनुसार अपने मोबाइल नंबर के अंकों को शुभ बनाएं, ताकि आपके काम और जीवन में सकारात्मक ऊर्जा बढ़े।",
    description_en: "Find the best numbers for your mobile phone according to your date of birth, helping attract positive energy and good luck.",
    category: "numerology",
    categoryLabel_hi: "अंकशास्त्र सुधार",
    categoryLabel_en: "Numerology"
  },
  {
    id: "name-correction",
    number: 5,
    title: "नाम वर्तनी व अंक संशोधन",
    title_en: "Name Spelling Correction",
    fee: 1100,
    feeFormatted: "₹1,100",
    description: "अपने नाम के अक्षरों में सरल और शुभ अंकशास्त्रीय सुधार, जिससे आपके नाम की ऊर्जा जीवन में सफलता और सामंजस्य लाए।",
    description_en: "Simple, positive adjustments to your name's spelling according to numerology to bring better luck, confidence, and harmony.",
    category: "numerology",
    categoryLabel_hi: "अंकशास्त्र सुधार",
    categoryLabel_en: "Numerology"
  },
  {
    id: "relationship-healing",
    number: 6,
    title: "संबंध सौहार्द एवं हीलिंग (रिश्तों में मधुरता)",
    title_en: "Relationship Healing & Harmony",
    fee: 11000,
    feeFormatted: "₹11,000",
    description: "परिवार, पति-पत्नी या प्रियजनों के बीच मनमुटाव और गलतफहमियों को दूर कर आपसी प्रेम, समझ और विश्वास बढ़ाने का सत्र।",
    description_en: "Helps heal misunderstandings in relationships, reduce conflicts, and rebuild love, trust, and peaceful communication.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा एवं हीलिंग",
    categoryLabel_en: "Energy & Healing"
  },
  {
    id: "sound-healing",
    number: 7,
    title: "नाद एवं ध्वनि ध्यान हीलिंग (साउंड हीलिंग)",
    title_en: "Sound Bowl & Mantra Healing",
    fee: 11000,
    feeFormatted: "₹11,000",
    description: "पवित्र ध्वनि, घंटियों और वैदिक मंत्रों की तरंगों द्वारा मन और शरीर को गहरा विश्राम और मानसिक सुकून देने वाला सत्र।",
    description_en: "Healing through singing bowls and gentle mantras to deeply calm your mind, ease anxiety, and relax your whole body.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा एवं हीलिंग",
    categoryLabel_en: "Energy & Healing"
  },
  {
    id: "mind-body-relaxation",
    number: 8,
    title: "तन-मन विश्राम एवं तनाव मुक्ति",
    title_en: "Mind & Body Relaxation",
    fee: 5100,
    feeFormatted: "₹5,100",
    description: "सरल ध्यान और श्वास अभ्यास द्वारा शरीर की थकान और मन के तनाव को दूर कर पूर्ण विश्राम पाने का सत्र।",
    description_en: "Relax your body and mind through deep breathing and gentle meditation to release daily fatigue and stress.",
    category: "therapy",
    categoryLabel_hi: "मानसिक शांति व संतुलन",
    categoryLabel_en: "Mind Balance & Peace"
  },
  {
    id: "anxiety-depression-support",
    number: 9,
    title: "चिंता, अवसाद व तनाव मुक्ति सहायता",
    title_en: "Anxiety & Stress Support",
    fee: 5100,
    feeFormatted: "₹5,100",
    description: "चिंता, घबराहट और उदासी के समय एक संवेदनशील मार्गदर्शन, जो आपको भावनात्मक सहारा और मानसिक मजबूती देता है।",
    description_en: "Compassionate one-on-one emotional support and gentle meditation to help you handle anxiety, sadness, and everyday worries.",
    importantDisclaimer: "महत्वपूर्ण: यह सत्र भावनात्मक और आध्यात्मिक सहारे के लिए है। यह किसी मेडिकल या मनोचिकित्सकीय इलाज का विकल्प नहीं है।",
    importantDisclaimer_en: "Important: This session provides spiritual and emotional comfort. It does not replace medical or psychiatric treatment.",
    category: "therapy",
    categoryLabel_hi: "मानसिक शांति व संतुलन",
    categoryLabel_en: "Mind Balance & Peace"
  },
  {
    id: "plr-session",
    number: 10,
    title: "पूर्व जन्म स्मृति सत्र (पीएलआर)",
    title_en: "Past Life Exploration (PLR)",
    fee: 15000,
    feeFormatted: "₹15,000",
    description: "गहन ध्यान द्वारा आत्मा के पुराने अनुभवों को समझना, ताकि वर्तमान जीवन की उलझनों और डर को सुलझाया जा सके।",
    description_en: "A gentle guided meditation exploring deep soul memories to understand recurring life patterns and heal current relationships.",
    badge: "विशेष सत्र",
    badge_en: "Special Session",
    category: "regression",
    categoryLabel_hi: "आत्म-अन्वेषण",
    categoryLabel_en: "Soul Journey"
  },
  {
    id: "mind-peace-therapy",
    number: 11,
    title: "मानसिक शांति एवं आंतरिक स्थिरता सत्र",
    title_en: "Mind Peace & Calm Therapy",
    fee: 5100,
    feeFormatted: "₹5,100",
    description: "दैनिक चिंताओं और विचारों की भीड़ से मन को शांत कर गहरी शांति और आंतरिक स्थिरता पाने का सत्र।",
    description_en: "Simple meditation and relaxation techniques to quiet a busy mind and bring deep, refreshing inner peace.",
    category: "therapy",
    categoryLabel_hi: "मानसिक शांति व संतुलन",
    categoryLabel_en: "Mind Balance & Peace"
  }
];
