export interface AwardItem {
  id: string;
  filename: string;
  imageUrl?: string;
  category: 'felicitation' | 'conclave' | 'memento' | 'press';
  caption: string;
  caption_en?: string;
  event: string;
  event_hi: string;
  alt: string;
}

export const AWARDS_DATA: AwardItem[] = [
  {
    id: "award-1",
    filename: "National_director_of_Nafeed-2.jpeg",
    imageUrl: "/assets/aistudio/__________________National_director_of_Nafeed-2_f0142bbc.jpeg",
    category: "felicitation",
    caption: "माननीय अशोक ठाकुर National Director of Nafeed द्वारा सम्मानित",
    caption_en: "Honored by Shri Ashok Thakur, National Director of NAFED at Dynamic Excellence Awards 2025",
    event: "Dynamic Excellence Awards 2025",
    event_hi: "डायनामिक एक्सीलेंस अवार्ड्स 2025",
    alt: "Dr. Pooja Awasthi honored by Hon. Ashok Thakur, National Director of NAFED at Dynamic Excellence Awards 2025"
  },
  {
    id: "award-2",
    filename: "4444.jpeg",
    category: "felicitation",
    caption: "लीजेंडरी पीस अवार्ड्स काउंसिल द्वारा पावन सम्मान एवं प्रशस्ति पत्र अर्पण",
    event: "Legendary Peace Awards Council - Award Presentation",
    event_hi: "लीजेंडरी पीस अवार्ड्स काउंसिल - सम्मान अर्पण",
    alt: "Stage felicitation with certificate and ceremonial shawl"
  },
  {
    id: "award-3",
    filename: "mahakal_ujjain_dinesh_ji_indore.jpeg",
    imageUrl: "/mahakal_ujjain_dinesh_ji_indore.jpeg",
    category: "conclave",
    caption: "माननीय दिनेश जी (महाकाल उज्जैन के प्रधान पुरोहित ) का आशीर्वाद प्राप्त हुआ. जय महाकाल 🙏",
    caption_en: "Blessed by Hon. Dinesh Ji, Head Priest of Mahakal Ujjain at 40th Jyotish Sammelan, Indore",
    event: "40th Jyotish Sammelan, Hotel Park Palace, Indore",
    event_hi: "40वाँ ज्योतिष सम्मेलन, होटल पार्क पैलेस, इन्दौर",
    alt: "Dr. Pooja Awasthi receiving sacred blessings from Pt. Dinesh Ji, Head Priest of Mahakal Ujjain at Hotel Park Palace, Indore"
  },
  {
    id: "award-4",
    filename: "bhu_varanasi_acharya_chandramouli_upadhyay.jpeg",
    imageUrl: "/assets/aistudio/_______________________________________________________________________________________________-_7_cfe480d3.jpeg",
    category: "conclave",
    caption: "बनारस हिंदू विश्वविद्यालय (BHU) के ज्योतिष विभाग के प्रमुख, आचार्य चंद्रमौली उपाध्याय जी द्वारा सम्मानित। 🙏🏆",
    caption_en: "Conferred with Honour by Prof. Acharya Chandramouli Upadhyay, Head of Jyotish Dept., Banaras Hindu University (BHU), Varanasi",
    event: "International Jyotish & Vastu Sammelan, BHU Varanasi",
    event_hi: "अन्तर्राष्ट्रीय ज्योतिष एवं वास्तु सम्मेलन, काशी हिन्दू विश्वविद्यालय, वाराणसी",
    alt: "Dr. Pooja Awasthi receiving certificate of honour from Acharya Chandramouli Upadhyay at Banaras Hindu University (BHU)"
  },
  {
    id: "award-5",
    filename: "bhu_keynote_address_pooja_awasthi.jpeg",
    imageUrl: "/assets/aistudio/_______________________________________________________________________________________________-_4_a4b581f7.jpeg",
    category: "conclave",
    caption: "बनारस हिंदू विश्वविद्यालय (BHU) के ज्योतिष विभाग के प्रमुख, आचार्य चंद्रमौली उपाध्याय जी द्वारा सम्मानित। 🙏🏆",
    caption_en: "Keynote Address by Dr. Pooja Awasthi at International Jyotish & Vastu Sammelan, Banaras Hindu University (BHU)",
    event: "Keynote Address at International Jyotish & Vastu Sammelan",
    event_hi: "अन्तर्राष्ट्रीय ज्योतिष एवं वास्तु सम्मेलन में मंच संबोधन",
    alt: "Dr. Pooja Awasthi delivering keynote speech at International Jyotish & Vastu Sammelan, BHU Varanasi"
  },
  {
    id: "award-6",
    filename: "uttarakhand_governor_gurmeet_singh_award.jpeg",
    imageUrl: "/assets/aistudio/___________________________________________________________________________________________-5_cf9c055f.jpeg",
    category: "felicitation",
    caption: "अमर उजाला ज्योतिष महाकुम्भ में उत्तराखंड के माननीय राज्यपाल ले. ज. गुरमीत सिंह द्वारा सम्मानित",
    caption_en: "Felicitation by Hon. Governor of Uttarakhand, Lt. Gen. Gurmeet Singh at Amar Ujala Jyotish Mahakumbh",
    event: "Honoured by Lt. Gen. Gurmeet Singh, Hon. Governor of Uttarakhand",
    event_hi: "माननीय राज्यपाल ले. ज. गुरमीत सिंह द्वारा सम्मान अर्पण",
    alt: "Dr. Pooja Awasthi honored on stage by Hon. Governor of Uttarakhand Lt. Gen. Gurmeet Singh"
  },
  {
    id: "award-7",
    filename: "pooja (4).jpeg",
    category: "conclave",
    caption: "अमर उजाला ज्योतिष महाकुम्भ में उत्तराखंड के माननीय राज्यपाल ले. ज. गुरमीत सिंह द्वारा सम्मानित",
    event: "Distinguished Panelist at Jyotish Mahakumbh",
    event_hi: "ज्योतिष महाकुंभ में विशिष्ट पैनलिस्ट संबोधन",
    alt: "Dr. Pooja Awasthi addressing panel on dais"
  },
  {
    id: "award-8",
    filename: "pooja (5).jpeg",
    category: "conclave",
    caption: "अमर उजाला ज्योतिष महाकुम्भ में उत्तराखंड के माननीय राज्यपाल ले. ज. गुरमीत सिंह द्वारा सम्मानित",
    event: "Amar Ujala & Graphic Era University - Jyotish Mahakumbh 2026",
    event_hi: "अमर उजाला एवं ग्राफिक एरा विश्वविद्यालय - ज्योतिष महाकुंभ 2026",
    alt: "Grand dais felicitation ceremony at Graphic Era University"
  },
  {
    id: "award-9",
    filename: "pooja (6).jpeg",
    category: "felicitation",
    caption: "माननीय गुलाब चंद कटारिया द्वारा सम्मानित",
    event: "Jyotish Prangan - URJA Jyotish Samman 2026",
    event_hi: "ज्योतिष प्रांगण - ऊर्जा ज्योतिष सम्मान 2026",
    alt: "Receiving Jyotish Prangan Award for Excellence"
  },
  {
    id: "award-10",
    filename: "pooja (7).jpeg",
    category: "memento",
    caption: "काशी हिन्दू विश्वविद्यालय, वाराणसी द्वारा प्रदत्त विशिष्ट स्मृति चिन्ह",
    event: "Commemorative Memento - Kashi Hindu Vishwavidyalaya, Varanasi",
    event_hi: "स्मृति चिन्ह - काशी हिन्दू विश्वविद्यालय, वाराणसी",
    alt: "Prestigious commemorative trophy from BHU Varanasi"
  },
  {
    id: "award-11",
    filename: "WhatsApp Image 2026-09-16 at 12.04.06 PM.jpeg",
    category: "conclave",
    caption: "बनारस हिंदू विश्वविद्यालय (BHU) के ज्योतिष विभाग के प्रमुख, आचार्य चंद्रमौली उपाध्याय जी द्वारा सम्मानित। 🙏🏆",
    event: "Sacred Conclave with Vedic Scholars",
    event_hi: "वैदिक विद्वानों के साथ पावन सम्मेलन",
    alt: "Dr. Pooja Awasthi in traditional attire with esteemed scholar"
  },
  {
    id: "award-12",
    filename: "WhatsApp Image 2026-09-16 at 12.09.21 PM.jpeg",
    category: "press",
    caption: "अमर उजाला ज्योतिष महाकुम्भ में उत्तराखंड के माननीय राज्यपाल ले. ज. गुरमीत सिंह द्वारा सम्मानित",
    event: "Press Coverage: Consultations at Jyotish Mahotsav",
    event_hi: "समाचार पत्र कवरेज: परामर्श स्टॉल पर जनसैलाब",
    alt: "Newspaper clipping featuring Dr. Pooja Awasthi providing consultations"
  },
  {
    id: "award-13",
    filename: "WhatsApp Image 2026-09-16 at 12.09.22 PM.jpeg",
    category: "felicitation",
    caption: "अमर उजाला ज्योतिष महाकुम्भ में उत्तराखंड के माननीय राज्यपाल ले. ज. गुरमीत सिंह द्वारा सम्मानित",
    event: "Ceremonial Group Felicitation with Hon. Governor",
    event_hi: "माननीय राज्यपाल के साथ सामूहिक सम्मान समारोह",
    alt: "Group photograph with Governor and prominent astrologers"
  },
  {
    id: "award-14",
    filename: "WhatsApp Image 2026-09-16 at 12.14.58 PM.jpeg",
    category: "felicitation",
    caption: "माननीय अशोक ठाकुर National Director of Nafeed",
    event: "Floral Welcome & Felicitation at National Conclave",
    event_hi: "राष्ट्रीय सम्मेलन में पुष्पगुच्छ भेंट एवं अभिनंदन",
    alt: "Floral felicitation at national awards ceremony"
  },
  {
    id: "award-15",
    filename: "WhatsApp Image 2026-09-16 at 12.17.13 PM.jpeg",
    category: "press",
    caption: "मुख्य अतिथि के रूप में सम्मानित।",
    event: "Chief Guests & Dignitaries - India International Centre",
    event_hi: "विशिष्ट अतिथि एवं मुख्य वक्ता - इंडिया इंटरनेशनल सेन्टर",
    alt: "Official conference poster featuring Dr. Pooja Awasthi as Chief Guest"
  },
  {
    id: "award-16",
    filename: "WhatsApp Image 2026-09-16 at 12.17.40 PM.jpeg",
    category: "felicitation",
    caption: "माननीय दिनेश जी (महाकाल उज्जैन के प्रधान पुरोहित ) का आशीर्वाद प्राप्त हुआ. जय महाकाल 🙏",
    event: "Conferment of Dynamic Excellence Award 2025",
    event_hi: "डायनामिक एक्सीलेंस सम्मान अर्पण",
    alt: "Receiving memento and citation from panel of dignitaries"
  },
  {
    id: "award-17",
    filename: "WhatsApp Image 2026-09-16 at 12.17.41 PM.jpeg",
    category: "felicitation",
    caption: "श्रीमती अंजना पवार (केंद्रीय निगरानी समिति) के साथ पावन भेंट",
    event: "With Smt. Anjana Pawar (Central Monitoring Committee)",
    event_hi: "श्रीमती अंजना पवार (केंद्रीय निगरानी समिति) के साथ",
    alt: "Dr. Pooja Awasthi with Central Monitoring Committee representative"
  },
  {
    id: "award-18",
    filename: "WhatsApp Image 2026-09-16 at 12.21.22 PM.jpeg",
    category: "conclave",
    caption: "माँ शारदा ज्योतिष अनुसंधान केंद्र द्वारा आयोजित राष्ट्रीय ज्योतिष महासम्मेलन",
    event: "Jyotish Mahasammelan at Maa Sharda Jyotish Anusandhan",
    event_hi: "माँ शारदा ज्योतिष अनुसंधान महासम्मेलन",
    alt: "Dr. Pooja Awasthi with revered Guru"
  },
  {
    id: "award-19",
    filename: "WhatsApp Image 2026-09-16 at 12.21.23 PM.jpeg",
    category: "conclave",
    caption: "माननीय दिनेश जी (महाकाल उज्जैन के प्रधान पुरोहित ) का आशीर्वाद प्राप्त हुआ. जय महाकाल 🙏",
    event: "Receiving Divine Blessings (Aashirwad) on Stage",
    event_hi: "मंच पर पूज्य गुरुदेव से पावन आशीर्वाद ग्रहण",
    alt: "Dr. Pooja Awasthi receiving sacred blessings on stage"
  },
  {
    id: "award-20",
    filename: "001.jpeg",
    category: "felicitation",
    caption: "भारत के शीर्ष 10 उपलब्धि पुरस्कारों में सम्मानित 🏆, बाबा महाकाल की पावन नगरी उज्जैन से , बाबा महाकाल के पावन आशीर्वाद से 🙏🔱",
    event: "India Top 10 Achievement Award Presentation, Ujjain",
    event_hi: "इंडिया टॉप 10 अचीवमेंट अवार्ड सम्मान अर्पण, उज्जैन",
    alt: "Dr. Pooja Awasthi receiving India Top 10 Achievement Award on stage in Ujjain"
  },
  {
    id: "award-21",
    filename: "002.jpeg",
    category: "memento",
    caption: "भारत के शीर्ष 10 उपलब्धि पुरस्कारों में सम्मानित 🏆, बाबा महाकाल की पावन नगरी उज्जैन से , बाबा महाकाल के पावन आशीर्वाद से 🙏🔱",
    event: "India Top 10 Achievement Award Trophy - Ujjain Mahasammelan",
    event_hi: "इंडिया टॉप 10 अचीवमेंट अवार्ड स्वर्ण स्मृति चिन्ह - उज्जैन महासम्मेलन",
    alt: "Prestigious India Top 10 Achievement Award trophy from Ujjain conclave"
  },
  {
    id: "award-22",
    filename: "003.jpeg",
    category: "conclave",
    caption: "भारत के शीर्ष 10 उपलब्धि पुरस्कारों में सम्मानित 🏆, बाबा महाकाल की पावन नगरी उज्जैन से , बाबा महाकाल के पावन आशीर्वाद से 🙏🔱",
    event: "Keynote Address at 40th International Jyotish Mahasammelan, Ujjain",
    event_hi: "40वाँ अन्तर्राष्ट्रीय ज्योतिष महासम्मेलन में मुख्य वक्ता संबोधन, उज्जैन",
    alt: "Dr. Pooja Awasthi addressing distinguished audience at Maa Sharda Jyotish podium"
  },
  {
    id: "award-23",
    filename: "004.jpeg",
    category: "felicitation",
    caption: "भारत के शीर्ष 10 उपलब्धि पुरस्कारों में सम्मानित 🏆, बाबा महाकाल की पावन नगरी उज्जैन से , बाबा महाकाल के पावन आशीर्वाद से 🙏🔱",
    event: "Conferment of India Top Ten Award 2026 Certificate & Citation",
    event_hi: "इंडिया टॉप टेन अवार्ड 2026 प्रशस्ति पत्र एवं सम्मान अर्पण",
    alt: "Group on stage presenting India Top Ten Award certificate and trophy"
  },
  {
    id: "award-24",
    filename: "005.jpeg",
    category: "felicitation",
    caption: "भारत के शीर्ष 10 उपलब्धि पुरस्कारों में सम्मानित 🏆, बाबा महाकाल की पावन नगरी उज्जैन से , बाबा महाकाल के पावन आशीर्वाद से 🙏🔱",
    event: "Ceremonial Garland Felicitation by Esteemed Dignitaries, Ujjain",
    event_hi: "पूज्य संतों एवं अतिथियों द्वारा विशाल पुष्पमाला से सम्मान, उज्जैन",
    alt: "Grand floral garland felicitation ceremony on stage"
  },
  {
    id: "award-25",
    filename: "006.jpeg",
    category: "conclave",
    caption: "भारत के शीर्ष 10 उपलब्धि पुरस्कारों में सम्मानित 🏆, बाबा महाकाल की पावन नगरी उज्जैन से , बाबा महाकाल के पावन आशीर्वाद से 🙏🔱",
    event: "Dignitaries & Scholars Conclave on Dais - Hotel Park Palace, Ujjain",
    event_hi: "विद्वत परिषद एवं विशिष्ट मनीषी मंच - होटल पार्क पैलेस, उज्जैन",
    alt: "Dr. Pooja Awasthi seated on dais with eminent scholars and dignitaries"
  },
  {
    id: "award-26",
    filename: "007.jpeg",
    category: "felicitation",
    caption: "भारत के शीर्ष 10 उपलब्धि पुरस्कारों में सम्मानित 🏆, बाबा महाकाल की पावन नगरी उज्जैन से , बाबा महाकाल के पावन आशीर्वाद से 🙏🔱",
    event: "Grand Felicitation - India Top Ten Award, Ujjain Mahakal Nagari",
    event_hi: "भव्य सम्मान अर्पण - इंडिया टॉप टेन अवार्ड, महाकाल पावन नगरी उज्जैन",
    alt: "Presentation of India Top Ten Award citation and trophy in Ujjain"
  }
];
