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
    tagline: "Unlock the cosmic codes hidden within your birth date and name",
    tagline_hi: "अपनी जन्मतिथि और नाम में छिपे ब्रह्मांडीय संकेतों को पहचानें",
    summary: "Decode your Mulank (Birth Number) and Bhagyank (Destiny Number) to align career, relationships, and major life decisions with cosmic geometry.",
    summary_hi: "अपने मूलांक और भाग्यांक का रहस्य समझें और करियर, विवाह, रिश्तों व महत्वपूर्ण निर्णयों को ग्रहों के अनुकूल बनाएं।",
    fullDescription: "Vedic Numerology connects planetary vibrations with mathematical patterns governing individual human destiny. Through deep analysis of your birth matrix, name vibrations, and planetary cycles, Dr. Pooja Awasthi reveals your karmic tendencies, innate strengths, and optimal timing for pivotal life milestones.",
    fullDescription_hi: "वैदिक अंकशास्त्र एक सनातन विज्ञान है जो ग्रहों के कंपन को मानवीय चेतना से जोड़ता है। पूजा जी आपकी जन्मतिथि और नाम के अक्षरों का सूक्ष्म विश्लेषण कर आपके कर्म चक्र, प्राकृतिक प्रतिभा और जीवन के स्वर्णिम अवसरों का मार्ग प्रशस्त करती हैं।",
    benefits: [
      "Pinpoint your core strengths, natural talents, and soul purpose",
      "Name vibration analysis and auspicious phonetic balancing",
      "Career trajectory, financial timing, and business partnership compatibility",
      "Yearly & monthly personal cycle predictions to plan major events",
      "Personalized Vedic remedies (colors, days, mantras, and crystals)"
    ],
    benefits_hi: [
      "अपनी आंतरिक शक्तियों, प्रतिभा और जीवन के वास्तविक उद्देश्य को पहचानें",
      "नाम कंपन विश्लेषण और अक्षरों में सूक्ष्म शुभ संतुलन (नेम करेक्शन)",
      "करियर में उन्नति, व्यापारिक अनुकूलता और सही वित्तीय निर्णय लेने का समय",
      "वार्षिक व मासिक व्यक्तिगत चक्रों के अनुसार शुभ कार्य की योजना",
      "सरल और प्रामाणिक वैदिक उपाय (शुभ रंग, शुभ दिन, मंत्र व रत्न मार्गदर्शन)"
    ],
    deliverables: [
      "Comprehensive 60-minute 1-on-1 private consultation",
      "Detailed personalized Vedic Numerology assessment summary",
      "Auspicious numbers, colors, dates, and customized daily remedies"
    ],
    deliverables_hi: [
      "पूजा जी के साथ 60 मिनट का व्यक्तिगत 1-on-1 परामर्श",
      "विस्तृत व्यक्तिगत वैदिक अंकशास्त्र रिपोर्ट सार",
      "शुभ अंक, अनुकूल रंग, महत्वपूर्ण तिथियां व व्यक्तिगत उपाय विवरण"
    ],
    sessionDuration: "60 minutes",
    sessionDuration_hi: "60 मिनट",
    whoIsThisFor: "Anyone standing at life crossroads, seeking clarity on career direction, relationship compatibility, business naming, or understanding recurring obstacles.",
    whoIsThisFor_hi: "जो भी जीवन के चौराहे पर खड़े हैं, करियर में सही दिशा, विवाह/रिश्तों में सामंजस्य या जीवन में बार-बार आने वाली चुनौतियों का समाधान चाहते हैं।",
    image: "/src/assets/images/vedic_numerology_sacred_cosmos_1792557572243.jpg",
    baseFee: "₹5,100"
  },
  {
    id: "tarot",
    title: "Tarot Guidance",
    title_hi: "टैरो कार्ड रीडिंग",
    tagline: "Illuminating the subconscious landscape to guide your immediate next steps",
    tagline_hi: "अवचेतन मन के रहस्यों को उजागर कर सही निर्णय लेने का मार्ग दर्शन",
    summary: "Intuitive card spreads revealing hidden dynamics in relationships, emotional crossroads, career stalemates, and personal evolution.",
    summary_hi: "रिश्तों की छिपी भावनाएं, मानसिक द्वंद्व, करियर की उलझनें और आध्यात्मिक विकास के लिए अंतर्ज्ञानी कार्ड रीडिंग।",
    fullDescription: "Tarot is not fatalistic fortune-telling; it is a sacred intuitive mirror reflecting your subconscious mind, emotional blocks, and latent possibilities. Dr. Pooja Awasthi applies empathetic discernment and archetypal wisdom to uncover root truths, dispel confusion, and illuminate constructive paths forward.",
    fullDescription_hi: "टैरो केवल भविष्य जानने का साधन नहीं, बल्कि आपकी आत्मा और अवचेतन मन का एक पावन दर्पण है। पूजा जी अपनी सहज अंतर्दृष्टि और करुणामयी दृष्टि से आपके सामने वर्तमान ऊर्जाओं, छिपी बाधाओं और आने वाले शुभ अवसरों को स्पष्ट करती हैं।",
    benefits: [
      "Deep emotional clarity regarding complex relationship dilemmas",
      "Direct guidance on urgent choices, partnerships, or transitions",
      "Identification of energetic blind spots and recurring emotional triggers",
      "Empowering insights that restore sovereignty and confidence to your hands",
      "Practical actionable wisdom for emotional peace and harmony"
    ],
    benefits_hi: [
      "रिश्तों की जटिल उलझनों और भावनाओं में गहरी स्पष्टता",
      "करियर परिवर्तन या महत्वपूर्ण व्यक्तिगत निर्णयों में तत्काल मार्गदर्शन",
      "अज्ञात ऊर्जा अवरोधों और नकारात्मक विचारों की पहचान",
      "आत्मविश्वास और संबल प्रदान करने वाले सकारात्मक समाधान",
      "मानसिक शांति और आंतरिक संतुलन के लिए व्यावहारिक सुझाव"
    ],
    deliverables: [
      "Interactive 45-60 minute personalized intuitive reading",
      "Custom multi-card spread (Temporal 3-card, Celtic Cross, or Relationship spread)",
      "Direct audio/video consultation with photo documentation of your cards"
    ],
    deliverables_hi: [
      "45 से 60 मिनट का गहन अंतर्ज्ञानी टैरो सत्र",
      "विशेष कार्ड स्प्रेड (रिश्ते, करियर या त्रि-कालीय कार्ड विश्लेषण)",
      "वीडियो या ऑडियो कॉल सत्र व आपके कार्ड्स की सचित्र प्रतियां"
    ],
    sessionDuration: "45 - 60 minutes",
    sessionDuration_hi: "45 - 60 मिनट",
    whoIsThisFor: "Individuals experiencing uncertainty, relationship impasses, professional crossroads, or requiring compassionate, non-judgmental guidance.",
    whoIsThisFor_hi: "जो अनिश्चितता, रिश्तों में भ्रम, पारिवारिक चिंताओं या करियर के ठहराव से जूझ रहे हैं और एक संवेदनशील, निष्पक्ष परामर्श चाहते हैं।",
    image: "/src/assets/images/tarot_intuitive_cards_luxury_1792557573151.jpg",
    baseFee: "₹5,100"
  },
  {
    id: "healing",
    title: "Energy Chakras & Healing",
    title_hi: "ऊर्जा चक्र व हीलिंग",
    tagline: "Cleanse heavy vibrations and restore the natural balance of your subtle body",
    tagline_hi: "नकारात्मक ऊर्जा को दूर कर अपने सूक्ष्म शरीर व चक्रों में संतुलन लाएं",
    summary: "Chakra alignment, aura cleansing, and distance vibrational healing to dissolve anxiety, release emotional stagnation, and restore tranquility.",
    summary_hi: "चक्र संतुलन, आभा मंडल (ऑरा) की शुद्धि और दूरस्थ ऊर्जा उपचार से तनाव व चिंता का निवारण और शांति की पुनर्स्थापना।",
    fullDescription: "Everyday stress, prolonged emotional conflict, and toxic environments leave static impressions within our subtle energy channels (nadis) and auric field. Through guided energetic harmonizing, distance vibrational work, and meditative alignment, Dr. Pooja Awasthi helps dissolve heaviness and restore your vital Prana.",
    fullDescription_hi: "जीवन का तनाव, पुरानी आहत भावनाएं और नकारात्मक वातावरण हमारी नाड़ियों और ऑरा में अवरोध उत्पन्न करते हैं। पूजा जी ध्यान, सूक्ष्म प्राण ऊर्जा और चक्र शुद्धि के माध्यम से आपकी ऊर्जा को पुनः जीवंत और निर्मल बनाती हैं।",
    benefits: [
      "Dissolve chronic mental fatigue, tension, and emotional depletion",
      "Align the 7 prime subtle energy vortexes for free-flowing vital energy",
      "Aura purification to clear negative environmental accumulation",
      "Release unconscious attachments to draining situations and relationships",
      "Cultivate grounded emotional resilience and deeply restorative sleep"
    ],
    benefits_hi: [
      "दीर्घकालिक मानसिक तनाव, भावनात्मक थकान और चिंता से मुक्ति",
      "7 मुख्य चक्रों का संतुलन जिससे प्राण ऊर्जा का सहज प्रवाह हो",
      "आभा मंडल (ऑरा) की गहरी शुद्धि ताकि नकारात्मकता नष्ट हो",
      "अतीत की दुखद घटनाओं या व्यक्तियों से जुड़े ऊर्जा बंधनों से मुक्ति",
      "गहरी और शांत निद्रा तथा आंतरिक भावनात्मक स्थिरता"
    ],
    deliverables: [
      "Subtle aura and 7-chakra energetic assessment",
      "Distance Energy Healing session with guided breath alignment",
      "Personal spiritual protection protocol and daily grounding practices"
    ],
    deliverables_hi: [
      "ऑरा एवं सातों चक्रों का सूक्ष्म ऊर्जा परीक्षण",
      "दूरस्थ ऊर्जा उपचार सत्र और निर्देशित श्वास-प्राणायाम",
      "दैनिक ऊर्जा संरक्षण व सुरक्षा की व्यावहारिक विधियां"
    ],
    sessionDuration: "50 minutes",
    sessionDuration_hi: "50 मिनट",
    whoIsThisFor: "Seekers feeling energetically drained, emotionally burdened, chronically anxious, or in recovery from challenging transitions.",
    whoIsThisFor_hi: "जो स्वयं को ऊर्जाहीन, भारी, चिंतित या भावनात्मक रूप से थका हुआ महसूस कर रहे हैं और नवीन चेतना चाहते हैं।",
    image: "/src/assets/images/chakras_aura_energy_flow_1792557572576.jpg",
    baseFee: "₹5,100"
  },
  {
    id: "coaching",
    title: "Life Coaching & Mentorship",
    title_hi: "सजग जीवन मार्गदर्शन",
    tagline: "Bridging spiritual self-discovery with grounded, conscious action",
    tagline_hi: "आध्यात्मिक आत्म-ज्ञान को व्यावहारिक दैनिक जीवन में साकार करना",
    summary: "Compassionate 1-on-1 mentoring that helps you break disempowering life patterns, cultivate deep self-worth, and pursue your true purpose.",
    summary_hi: "संवेदनशील व्यक्तिगत मेंटरशिप जो आपको नकारात्मक पैटर्न्स तोड़ने, आत्म-सम्मान जगाने और लक्ष्य प्राप्ति में सक्षम बनाती है।",
    fullDescription: "True transformation occurs when sacred introspection is anchored in practical daily action. Dr. Pooja Awasthi provides a structured, supportive sanctuary where you evaluate subconscious limiting beliefs, re-author inner narratives, and build healthy habits that sustain lasting personal and professional fulfillment.",
    fullDescription_hi: "सच्चा रूपांतरण तब होता है जब आध्यात्मिक विवेक और दैनिक अनुशासन का मिलन होता है। पूजा जी आपको अपनी सीमित सोच को बदलने, स्वस्थ सीमाएं तय करने और जीवन में सचेत आत्मविश्वास के साथ आगे बढ़ने में व्यक्तिगत सहायता प्रदान करती हैं।",
    benefits: [
      "Deconstruct self-sabotaging thought loops and emotional barriers",
      "Formulate coherent personal, career, and spiritual benchmarks",
      "Establish unshakable inner composure grounded in self-awareness",
      "Master mindful communication and establish healthy relational boundaries",
      "Structured accountability and supportive guidance across milestones"
    ],
    benefits_hi: [
      "स्वयं को कम आंकने की आदत और नकारात्मक विचारों से छुटकारा",
      "व्यक्तिगत, पारिवारिक व व्यावसायिक लक्ष्यों की स्पष्ट रूपरेखा",
      "आत्म-बोध पर आधारित अटूट आंतरिक आत्मविश्वास का निर्माण",
      "भावनात्मक संतुलन और दूसरों के साथ स्वस्थ सीमाओं का निर्धारण",
      "निरंतर करुणामयी मार्गदर्शन और सकारात्मक आदतों का विकास"
    ],
    deliverables: [
      "Structured 1-on-1 coaching dialogue with actionable targets",
      "Customized reflection workbook & habit integration worksheet",
      "Follow-up accountability support via messaging"
    ],
    deliverables_hi: [
      "व्यावहारिक लक्ष्यों के साथ 1-on-1 संरचित कोचिंग संवाद",
      "व्यक्तिगत अभ्यास पत्रक एवं आत्म-मंथन प्रश्नमाला",
      "सत्र के उपरांत संदेश द्वारा निरंतर सहयोग एवं मार्गदर्शन"
    ],
    sessionDuration: "60 minutes",
    sessionDuration_hi: "60 मिनट",
    whoIsThisFor: "Seekers, leaders, and professionals wanting meaningful self-actualization, greater emotional self-mastery, and clear purposeful direction.",
    whoIsThisFor_hi: "वे सभी जो व्यक्तिगत विकास, आत्म-नियंत्रण और जीवन में एक स्पष्ट उद्देश्यपूर्ण दिशा प्राप्त करना चाहते हैं।",
    image: "/src/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg",
    baseFee: "₹5,100"
  }
];

export const CATALOG_SERVICES: CatalogServiceItem[] = [
  {
    id: "aura-cleaning",
    number: 1,
    title: "ऑरा क्लीनिंग",
    title_en: "Aura Cleansing & Energy Balance",
    fee: 3100,
    feeFormatted: "₹3,100",
    duration: "20 मिनट",
    duration_en: "20 minutes",
    description: "ऑरा क्लीनिंग एक आध्यात्मिक अभ्यास है, जिसमें व्यक्ति की ऊर्जा और आंतरिक संतुलन पर ध्यान केंद्रित किया जाता है। इसका उद्देश्य सकारात्मकता, शांति और आत्म-जागरूकता को बढ़ावा देना है।",
    description_en: "A focused subtle energy practice clearing stagnant environmental vibrations, promoting emotional calm, vitality, and heightened inner clarity.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा एवं हीलिंग",
    categoryLabel_en: "Energy & Healing"
  },
  {
    id: "negativity-healing",
    number: 2,
    title: "नकारात्मकता हीलिंग",
    title_en: "Negativity Dissolution Healing",
    fee: 5100,
    feeFormatted: "₹5,100",
    duration: "30 मिनट",
    duration_en: "30 minutes",
    description: "यह सत्र व्यक्ति को नकारात्मक विचारों, भावनात्मक तनाव और मानसिक बोझ पर सजगता से काम करने में सहयोग प्रदान करता है। इसमें सकारात्मक सोच और आंतरिक शांति से जुड़ी आध्यात्मिक प्रक्रियाओं का उपयोग किया जाता है।",
    description_en: "Consciously dissolves lingering negative thought residue, emotional strain, and psychological heaviness using harmonizing energetic frequencies.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा एवं हीलिंग",
    categoryLabel_en: "Energy & Healing"
  },
  {
    id: "chakra-healing",
    number: 3,
    title: "चक्र हीलिंग (7 दिवसीय गहन अनुष्ठान)",
    title_en: "Chakra Healing (7-Day Intensive Conclave)",
    fee: 31000,
    feeFormatted: "₹31,000",
    duration: "7 दिन",
    duration_en: "7 Days",
    description: "चक्र हीलिंग में शरीर के ऊर्जा केंद्रों पर ध्यान, ध्यान-साधना और अन्य ऊर्जा-आधारित अभ्यासों के माध्यम से कार्य किया जाता है। इसका उद्देश्य आंतरिक संतुलन, आत्म-जागरूकता और आध्यात्मिक विकास को सहयोग देना है।",
    description_en: "A transformative 7-day master alignment protocol working sequentially through each of the 7 subtle chakras with daily meditation, frequency alignment, and karmic unburdening.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा एवं हीलिंग",
    categoryLabel_en: "Energy & Healing",
    badge: "गहन अनुष्ठान (7 दिन)",
    badge_en: "7-Day Intensive"
  },
  {
    id: "mobile-number-correction",
    number: 4,
    title: "मोबाइल नंबर करेक्शन",
    title_en: "Mobile Number Numerology Balancing",
    fee: 5100,
    feeFormatted: "₹5,100",
    description: "अंकशास्त्र के माध्यम से मोबाइल नंबर के अंकों और उनके प्रतीकात्मक अर्थों का अध्ययन किया जाता है। इस सेवा में व्यक्ति की आवश्यकताओं के अनुसार अंक संबंधी मार्गदर्शन प्रदान किया जाता है।",
    description_en: "Vedic numerical frequency assessment of your daily phone digits to harmonize calling vibrations with your personal destiny and wealth frequency.",
    category: "numerology",
    categoryLabel_hi: "अंकशास्त्र शुद्धि",
    categoryLabel_en: "Numerology Corrections"
  },
  {
    id: "name-correction",
    number: 5,
    title: "नाम करेक्शन (स्पेलिंग संतुलन)",
    title_en: "Name Spelling & Vibrational Correction",
    fee: 1100,
    feeFormatted: "₹1,100",
    description: "नाम के अक्षरों और अंकों का अंकशास्त्रीय अध्ययन करके नाम से जुड़े numerological patterns को समझने में सहायता की जाती है। शुभ कंपन संतुलन हेतु निर्देशित।",
    description_en: "Precise Vedic letter-vibration analysis to adjust subtle spelling alphabets, synchronizing the phonetic energy of your name with planetary rulers.",
    category: "numerology",
    categoryLabel_hi: "अंकशास्त्र शुद्धि",
    categoryLabel_en: "Numerology Corrections"
  },
  {
    id: "relationship-healing",
    number: 6,
    title: "रिलेशनशिप हीलिंग",
    title_en: "Relationship & Cord Healing",
    fee: 11000,
    feeFormatted: "₹11,000",
    description: "यह सत्र रिश्तों में उत्पन्न भावनात्मक तनाव, संवाद की चुनौतियों और व्यक्तिगत भावनाओं को समझने के लिए आध्यात्मिक एवं आत्म-जागरूकता आधारित मार्गदर्शन प्रदान करता है।",
    description_en: "Deep relational aura balancing designed to soften conflict cycles, resolve emotional friction, and nurture mutual respect and empathetic listening.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा एवं हीलिंग",
    categoryLabel_en: "Energy & Healing"
  },
  {
    id: "sound-healing",
    number: 7,
    title: "साउंड हीलिंग (पवित्र ध्वनि साधना)",
    title_en: "Sacred Sound & Frequency Healing",
    fee: 11000,
    feeFormatted: "₹11,000",
    description: "साउंड हीलिंग में ध्वनि, संगीत, मंत्र या अन्य ध्वनि-आधारित अभ्यासों का उपयोग विश्राम, ध्यान और आंतरिक शांति के लिए किया जाता है।",
    description_en: "Harnessing sacred Tibetan singing frequencies, Vedic mantras, and meditative resonance to bring restorative cellular calm and nervous system release.",
    category: "healing",
    categoryLabel_hi: "ऊर्जा एवं हीलिंग",
    categoryLabel_en: "Energy & Healing"
  },
  {
    id: "mind-body-relaxation",
    number: 8,
    title: "माइंड एवं बॉडी रिलैक्सेशन थेरेपी",
    title_en: "Mind & Body Relaxation Therapy",
    fee: 5100,
    feeFormatted: "₹5,100",
    description: "यह सत्र शरीर और मन को विश्राम देने, तनाव कम करने तथा ध्यान और श्वास संबंधी अभ्यासों के माध्यम से आत्म-जागरूकता बढ़ाने पर केंद्रित होता है।",
    description_en: "Grounded somatic decompression utilizing conscious Pranayama breath regulation and mindful body scanning to soothe elevated nervous states.",
    category: "therapy",
    categoryLabel_hi: "मानसिक संतुलन व थेरेपी",
    categoryLabel_en: "Mind Balance & Therapy"
  },
  {
    id: "anxiety-depression-support",
    number: 9,
    title: "एंग्जायटी एवं डिप्रेशन सपोर्ट थेरेपी",
    title_en: "Mindful Anxiety & Emotional Support",
    fee: 5100,
    feeFormatted: "₹5,100",
    description: "यह सेवा भावनात्मक तनाव, चिंता और उदासी से जूझ रहे व्यक्तियों को supportive guidance प्रदान करने के लिए है। इसमें ध्यान, विश्राम और आत्म-जागरूकता संबंधी अभ्यास शामिल किए जाते हैं।",
    description_en: "Supportive spiritual companionship focusing on emotional regulation, self-compassion, and gentle mindfulness for seekers navigating turbulent feelings.",
    importantDisclaimer: "महत्वपूर्ण: यह सेवा आध्यात्मिक एवं सजग सहयोग हेतु है और मानसिक स्वास्थ्य संबंधी चिकित्सकीय उपचार या मनोचिकित्सक परामर्श का विकल्प नहीं है।",
    importantDisclaimer_en: "Important: This contemplative service provides spiritual and mindful support. It is not clinical psychotherapy or a substitute for professional psychiatric care.",
    category: "therapy",
    categoryLabel_hi: "मानसिक संतुलन व थेरेपी",
    categoryLabel_en: "Mind Balance & Therapy"
  },
  {
    id: "plr-session",
    number: 10,
    title: "पीएलआर सेशन (Past Life Regression)",
    title_en: "Past Life Regression (PLR) Exploration",
    fee: 15000,
    feeFormatted: "₹15,000",
    description: "Past Life Regression (पिछले जन्मों से संबंधित आध्यात्मिक अनुभवों का अन्वेषण)। इस सत्र में व्यक्ति के अनुभवों, भावनाओं और आध्यात्मिक मान्यताओं पर ध्यान केंद्रित किया जाता है।",
    description_en: "A guided contemplative journey through subconscious archetypes, soul memories, and unresolved karmic imprints to gain perspective on present relationships.",
    badge: "विशेष सत्र",
    badge_en: "Specialized Session",
    category: "regression",
    categoryLabel_hi: "गहन आत्म-अन्वेषण",
    categoryLabel_en: "Soul Exploration"
  },
  {
    id: "mind-peace-therapy",
    number: 11,
    title: "माइंड पीस थेरेपी",
    title_en: "Mind Peace & Stillness Therapy",
    fee: 5100,
    feeFormatted: "₹5,100",
    description: "यह सेवा ध्यान, विश्राम और आत्म-जागरूकता आधारित अभ्यासों के माध्यम से आंतरिक शांति और भावनात्मक संतुलन की दिशा में सहयोग प्रदान करती है।",
    description_en: "Restorative meditative practices cultivating deep quietude, silencing persistent cognitive noise, and reconnecting with natural inner serenity.",
    category: "therapy",
    categoryLabel_hi: "मानसिक संतुलन व थेरेपी",
    categoryLabel_en: "Mind Balance & Therapy"
  }
];
