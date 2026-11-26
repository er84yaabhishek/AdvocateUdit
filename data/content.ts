/**
 * Site ke saare text yahan hain — English (default) aur Hindi.
 * Naya text add karna ho to dono locales me daalein.
 */

export type Locale = 'en' | 'hi'

export interface PracticeAreaText {
  title: string
  desc: string
  icon: string
}

export interface FaqText {
  q: string
  a: string
}

export interface Content {
  nav: { home: string; about: string; practiceAreas: string; contact: string }
  header: {
    subline: string
    call: string
    whatsapp: string
    openMenu: string
    closeMenu: string
    homeLabel: string
    langLabel: string
  }
  footer: {
    blurb: string
    pages: string
    contact: string
    enrolment: string
    rights: string
    disclaimer: string
    whatsapp: string
  }
  cta: { eyebrow: string; title: string; body: string }
  home: {
    eyebrow: string
    title: string
    intro: string
    primary: string
    secondary: string
    stats: { court: string; experience: string; languages: string; enrolment: string }
    aboutEyebrow: string
    aboutTitle: string
    aboutP1: string
    aboutP2: string
    creds: string[]
    profileLink: string
    practiceEyebrow: string
    practiceTitle: string
    viewAll: string
    faqEyebrow: string
    faqTitle: string
    faqNote: string
    chamberEyebrow: string
    chamberTitle: string
    chamberLink: string
  }
  about: {
    eyebrow: string
    title: string
    intro: string
    practiceHeading: string
    p1: string
    p2: string
    approachHeading: string
    approach: Array<{ title: string; desc: string }>
    backgroundHeading: string
    b1: string
    b2: string
    note: string
    detailsHeading: string
    labels: {
      court: string
      city: string
      enrolment: string
      languages: string
      consultation: string
    }
    boxText: string
    boxLink: string
  }
  practice: {
    eyebrow: string
    title: string
    intro: string
    beforeEyebrow: string
    beforeTitle: string
    beforeIntro: string
    notes: string[]
    disclaimer: string
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    directHeading: string
    labels: { phone: string; email: string; whatsapp: string }
    whatsappValue: string
    chamberLabel: string
    timingsLabel: string
    timingsNote: string
    emergencyLabel: string
    emergencyText: string
    mapCaption: string
    directions: string
    mapTitle: string
    bringTitle: string
    bring: string[]
    formNote: string
  }
  error: {
    notFoundTitle: string
    genericTitle: string
    body: string
    home: string
    metaTitle: string
  }
  practiceAreas: PracticeAreaText[]
  faqs: FaqText[]
}

const en: Content = {
  nav: { home: 'Home', about: 'About', practiceAreas: 'Practice Areas', contact: 'Contact' },
  header: {
    subline: 'Advocate · Meerut',
    call: 'Call',
    whatsapp: 'Message on WhatsApp',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    homeLabel: 'Home',
    langLabel: 'Language',
  },
  footer: {
    blurb: 'Criminal defence, bail and trial matters.',
    pages: 'Pages',
    contact: 'Contact',
    enrolment: 'Bar Council enrolment',
    rights: 'All rights reserved.',
    disclaimer:
      'This website is for informational purposes only and does not constitute legal advice or solicitation.',
    whatsapp: 'WhatsApp',
  },
  cta: {
    eyebrow: 'Consultation',
    title: 'The right advice on a criminal matter, before time runs out.',
    body: 'An FIR, an arrest, a notice or a court summons — every day matters. Call or message on WhatsApp to get first guidance, and fix a time to meet at the chamber with your documents.',
  },
  home: {
    eyebrow: 'Advocate · Criminal Defence · Meerut',
    title: 'Clear, practical representation in criminal matters.',
    intro:
      'I am Udit Chaurasia, practising criminal law at the District & Sessions Court, Meerut. From bail to trial, I explain exactly where the case stands, in plain language, so you can take the right decision at the right time.',
    primary: 'How to consult',
    secondary: 'View practice areas',
    stats: { court: 'Court', experience: 'Experience', languages: 'Languages', enrolment: 'Enrolment' },
    aboutEyebrow: 'About the practice',
    aboutTitle: 'Defence work where detail and timing both matter.',
    aboutP1:
      'In criminal matters it is not only the law that decides a case. Procedure and record matter — summoning, evidence, witness statements and filing dates. I read every file the way it will have to be argued at trial.',
    aboutP2:
      'After every hearing I tell you what happened, what comes next, and what you need to do. No jargon — straight answers.',
    creds: [
      'Criminal defence practice before Magistrate and Sessions courts',
      'Bail and anticipatory bail applications on short notice',
      'Drafting and filing of criminal petitions, replies and applications',
      'Client briefings in plain Hindi so decisions stay informed',
    ],
    profileLink: 'Full profile',
    practiceEyebrow: 'Practice areas',
    practiceTitle: 'Matters handled',
    viewAll: 'View all',
    faqEyebrow: 'Common questions',
    faqTitle: 'Frequently asked',
    faqNote:
      'The information above is general and is not legal advice on the facts of any particular case. Please consult for your own matter.',
    chamberEyebrow: 'Chamber',
    chamberTitle: 'Meerut District Court',
    chamberLink: 'Map and timings',
  },
  about: {
    eyebrow: 'Profile',
    title: 'Udit Chaurasia, Advocate',
    intro:
      'Criminal defence practice at the District & Sessions Court, Meerut. Representation in bail, trials and related criminal matters.',
    practiceHeading: 'Practice',
    p1: 'My practice focuses on criminal law — trials before Magistrate and Sessions courts, bail and anticipatory bail applications, FIR quashing petitions, cheque bounce matters and cyber crime cases.',
    p2: 'Criminal proceedings are hardest on the client and the family. So at the start of every case I make two things clear: where the case stands today, and what should happen in the next thirty days. Drafting, filing and arguments follow from the record.',
    approachHeading: 'Approach',
    approach: [
      {
        title: 'Facts before opinion',
        desc: 'I read the FIR, notices, statements and past orders before committing to a position — no tall claims without the record.',
      },
      {
        title: 'An update at every step',
        desc: 'Hearing dates, what happened, what comes next — in simple language. You are never left guessing.',
      },
      {
        title: 'Realistic expectations',
        desc: 'Chances of bail, timelines and risks are stated plainly. I do not promise guaranteed outcomes in any case.',
      },
    ],
    backgroundHeading: 'Background',
    b1: 'Regular appearances at Meerut District Court, with a criminal practice built over years of bail, trial and petition work. Client briefings in Hindi and English.',
    b2: 'Education, law college and enrolment timeline can be added here with the actual details.',
    note: 'Note: replace this line with verified educational and enrolment details.',
    detailsHeading: 'Details',
    labels: {
      court: 'Court',
      city: 'City',
      enrolment: 'Bar enrolment',
      languages: 'Languages',
      consultation: 'Consultation',
    },
    boxText:
      'For legal advice on the facts of a case, book a consultation — by phone, WhatsApp or a chamber visit.',
    boxLink: 'Contact details',
  },
  practice: {
    eyebrow: 'Practice areas',
    title: 'Criminal law matters handled.',
    intro:
      'Criminal practice before the Meerut District & Sessions Court. Representation and drafting in the areas below — every matter turns on its own facts, so a consultation comes first.',
    beforeEyebrow: 'Before you call',
    beforeTitle: 'Keep these ready',
    beforeIntro:
      'The clearer the first conversation, the faster you get usable advice. Where possible, keep these with you:',
    notes: [
      'Take legal advice immediately on an FIR, arrest or notice',
      'A case status update after every hearing',
      'A document checklist is shared at the consultation',
      'FIR copy, court notices, summons or earlier orders (photo or PDF)',
      'Aadhaar or another ID, plus the relevant agreements, cheques or messages',
    ],
    disclaimer:
      'Note: the information on this page is general. Any matter can only be assessed after the facts and documents have been seen.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let us talk — for a consultation.',
    intro:
      'Call or message on WhatsApp with the situation to get first guidance. A time can be fixed to meet at the chamber with documents.',
    directHeading: 'Direct',
    labels: { phone: 'Phone', email: 'Email', whatsapp: 'WhatsApp' },
    whatsappValue: 'Message on chat',
    chamberLabel: 'Chamber',
    timingsLabel: 'Timings',
    timingsNote: 'Availability can differ on hearing days — please call first.',
    emergencyLabel: 'Emergency / arrest:',
    emergencyText:
      'where possible call immediately and send a photo of the FIR or notice on WhatsApp.',
    mapCaption: 'Meerut, Uttar Pradesh',
    directions: 'Directions',
    mapTitle: 'Chamber location map',
    bringTitle: 'What to bring to a consultation',
    bring: [
      'FIR copy, notice or summons (photo or PDF)',
      'Earlier court orders, if any',
      'Cheque, agreement, messages or call records, as relevant',
      'ID proof',
    ],
    formNote:
      'Please do not send case details through a website form — keep the first conversation on phone or WhatsApp.',
  },
  error: {
    notFoundTitle: 'This page could not be found.',
    genericTitle: 'Something went wrong.',
    body: 'The page you are looking for has been moved or the address is incorrect.',
    home: 'Back to home',
    metaTitle: 'Page not found',
  },
  practiceAreas: [
    {
      title: 'Bail & Anticipatory Bail',
      desc: 'Regular bail, anticipatory bail and interim protection applications — urgent guidance from the police station to the court.',
      icon: 'shield',
    },
    {
      title: 'Criminal Trials',
      desc: 'Trials in Sessions and Magistrate courts — cross-examination, evidence and final arguments prepared in full.',
      icon: 'gavel',
    },
    {
      title: 'FIR Quashing',
      desc: 'Petitions and stay relief to quash a false or pressurised FIR before the High Court.',
      icon: 'file-x',
    },
    {
      title: 'Cheque Bounce (S.138 NI Act)',
      desc: 'Representation in cheque dishonour matters for both complainants and accused.',
      icon: 'receipt',
    },
    {
      title: 'Cyber Crime',
      desc: 'Support in online fraud, fake profiles, morphing and IT Act cases, from complaint to charge-sheet.',
      icon: 'monitor',
    },
    {
      title: 'Matrimonial Criminal Matters',
      desc: 'Balanced representation in 498A, domestic violence and maintenance proceedings.',
      icon: 'scale',
    },
  ],
  faqs: [
    {
      q: 'An FIR has been registered. What should I do first?',
      a: 'Get a copy of the FIR at once, do not ignore any notice or summons, and speak to a lawyer before making any statement. The earlier you get legal advice, the more options stay open.',
    },
    {
      q: 'How soon can anticipatory bail be filed?',
      a: 'Anticipatory bail is filed before arrest. As soon as your name appears in an FIR or the police call you, preparation should begin — not when the deadline is at the door.',
    },
    {
      q: 'Do I have to come to court for a consultation?',
      a: 'First guidance can be given on the phone or WhatsApp. Meeting at the chamber is better for examining documents and building a strategy — fix a time in advance.',
    },
    {
      q: 'What difference do the new criminal laws (BNS/BNSS) make?',
      a: 'From 1 July 2024, the BNS replaced the IPC and the BNSS replaced the CrPC. Older cases continue under the older law, new cases under the new provisions — both need to be tracked.',
    },
  ],
}

const hi: Content = {
  nav: { home: 'होम', about: 'परिचय', practiceAreas: 'प्रैक्टिस क्षेत्र', contact: 'संपर्क' },
  header: {
    subline: 'अधिवक्ता · मेरठ',
    call: 'कॉल करें',
    whatsapp: 'व्हाट्सएप पर संदेश भेजें',
    openMenu: 'मेन्यू खोलें',
    closeMenu: 'मेन्यू बंद करें',
    homeLabel: 'होम',
    langLabel: 'भाषा',
  },
  footer: {
    blurb: 'आपराधिक प्रतिरक्षा, जमानत और ट्रायल के मामले।',
    pages: 'पेज',
    contact: 'संपर्क',
    enrolment: 'बार काउंसिल नामांकन',
    rights: 'सर्वाधिकार सुरक्षित।',
    disclaimer: 'यह वेबसाइट केवल जानकारी के लिए है और कानूनी सलाह या विज्ञापन नहीं है।',
    whatsapp: 'व्हाट्सएप',
  },
  cta: {
    eyebrow: 'परामर्श',
    title: 'आपराधिक मामले में सही सलाह, समय बीतने से पहले।',
    body: 'एफआईआर, गिरफ्तारी, नोटिस या न्यायालय समन — हर दिन महत्वपूर्ण होता है। फोन या व्हाट्सएप पर स्थिति बताकर पहली सलाह ले सकते हैं, और दस्तावेजों के साथ चैंबर में मिलने का समय तय कर सकते हैं।',
  },
  home: {
    eyebrow: 'अधिवक्ता · आपराधिक प्रतिरक्षा · मेरठ',
    title: 'आपराधिक मामलों में स्पष्ट और व्यावहारिक पैरवी।',
    intro:
      'मैं उदित चौरसिया हूँ — मेरठ जिला एवं सत्र न्यायालय में आपराधिक पक्ष पर प्रैक्टिस। जमानत से लेकर ट्रायल तक, हर चरण पर मुकदमे की स्थिति सरल भाषा में समझाता हूँ, ताकि आप सही समय पर सही निर्णय ले सकें।',
    primary: 'परामर्श कैसे लें',
    secondary: 'प्रैक्टिस क्षेत्र देखें',
    stats: {
      court: 'न्यायालय',
      experience: 'अनुभव',
      languages: 'भाषाएँ',
      enrolment: 'नामांकन',
    },
    aboutEyebrow: 'प्रैक्टिस के बारे में',
    aboutTitle: 'प्रतिरक्षा का काम, जहाँ बारीकी और समय दोनों मायने रखते हैं।',
    aboutP1:
      'आपराधिक मामलों में केवल कानून निर्णायक नहीं होता। प्रक्रिया और रिकॉर्ड मायने रखते हैं — समन, साक्ष्य, गवाहों के बयान और दाखिले की तारीखें। मैं हर फाइल इस तरह पढ़ता हूँ जैसे उसे ट्रायल में बहस करनी हो।',
    aboutP2:
      'हर सुनवाई के बाद मैं बताता हूँ कि क्या हुआ, आगे क्या होना है, और आपको क्या करना है। कोई शब्दजाल नहीं — सीधी बात।',
    creds: [
      'मजिस्ट्रेट और सत्र न्यायालयों में आपराधिक प्रतिरक्षा प्रैक्टिस',
      'कम समय में जमानत और अग्रिम जमानत के आवेदन',
      'आपराधिक याचिकाओं, जवाबों और आवेदनों का प्रारूपण एवं दाखिला',
      'सरल हिंदी में केस की जानकारी, ताकि निर्णय सूचित रहे',
    ],
    profileLink: 'पूरी प्रोफाइल',
    practiceEyebrow: 'प्रैक्टिस क्षेत्र',
    practiceTitle: 'कौन से मामले लेता हूँ',
    viewAll: 'सभी देखें',
    faqEyebrow: 'आम सवाल',
    faqTitle: 'अक्सर पूछी जाने वाली बातें',
    faqNote:
      'ऊपर दी गई जानकारी सामान्य है, किसी मामले के तथ्यों पर कानूनी सलाह नहीं है। अपने मामले के लिए परामर्श लें।',
    chamberEyebrow: 'चैंबर',
    chamberTitle: 'मेरठ जिला न्यायालय',
    chamberLink: 'नक्शा और समय',
  },
  about: {
    eyebrow: 'परिचय',
    title: 'उदित चौरसिया, अधिवक्ता',
    intro:
      'मेरठ जिला एवं सत्र न्यायालय में आपराधिक प्रतिरक्षा प्रैक्टिस। जमानत, ट्रायल और संबंधित आपराधिक मामलों में पैरवी।',
    practiceHeading: 'प्रैक्टिस',
    p1: 'मेरी प्रैक्टिस का केंद्र आपराधिक कानून है — मजिस्ट्रेट और सत्र न्यायालयों में ट्रायल, जमानत और अग्रिम जमानत के आवेदन, एफआईआर रद्द कराने की याचिकाएँ, चेक बाउंस मामले और साइबर अपराध के केस।',
    p2: 'आपराधिक कार्यवाही का दबाव सबसे ज्यादा मुवक्किल और परिवार पर पड़ता है। इसलिए हर केस की शुरुआत में मैं दो बातें साफ करता हूँ: आज मामला किस चरण में है, और अगले तीस दिन में क्या होना चाहिए। उसके बाद प्रारूपण, दाखिला और बहस — रिकॉर्ड के अनुसार।',
    approachHeading: 'कार्यशैली',
    approach: [
      {
        title: 'पहले तथ्य, फिर राय',
        desc: 'एफआईआर, नोटिस, बयान और पुराने आदेश पढ़ने के बाद ही रुख तय करता हूँ — रिकॉर्ड देखे बिना बड़े दावे नहीं।',
      },
      {
        title: 'हर चरण पर जानकारी',
        desc: 'सुनवाई की तारीख, क्या हुआ, आगे क्या होगा — सरल भाषा में। आप अंधेरे में नहीं रहते।',
      },
      {
        title: 'वास्तविक अपेक्षाएँ',
        desc: 'जमानत की संभावना, समय और जोखिम साफ बताता हूँ। किसी भी केस में गारंटी का दावा नहीं करता।',
      },
    ],
    backgroundHeading: 'पृष्ठभूमि',
    b1: 'मेरठ जिला न्यायालय में नियमित उपस्थिति, और जमानत, ट्रायल व याचिकाओं के काम से बनी आपराधिक प्रैक्टिस। हिंदी और अंग्रेज़ी में ब्रीफिंग।',
    b2: 'शिक्षा, लॉ कॉलेज और नामांकन का विवरण यहाँ असली जानकारी के साथ जोड़ें।',
    note: 'नोट: इस पंक्ति को सत्यापित शैक्षणिक और नामांकन विवरण से बदलें।',
    detailsHeading: 'विवरण',
    labels: {
      court: 'न्यायालय',
      city: 'शहर',
      enrolment: 'बार नामांकन',
      languages: 'भाषाएँ',
      consultation: 'परामर्श समय',
    },
    boxText:
      'किसी मामले के तथ्यों पर कानूनी सलाह के लिए परामर्श लें — फोन, व्हाट्सएप या चैंबर में मुलाकात।',
    boxLink: 'संपर्क विवरण',
  },
  practice: {
    eyebrow: 'प्रैक्टिस क्षेत्र',
    title: 'आपराधिक कानून के मामले।',
    intro:
      'मेरठ जिला एवं सत्र न्यायालय में आपराधिक पक्ष की प्रैक्टिस। नीचे दिए क्षेत्रों में पैरवी और प्रारूपण — हर मामला अपने तथ्यों पर टिका होता है, इसलिए पहले परामर्श।',
    beforeEyebrow: 'फोन से पहले',
    beforeTitle: 'ये चीजें तैयार रखें',
    beforeIntro:
      'पहली बातचीत जितनी साफ होगी, सलाह उतनी जल्दी मिलेगी। हो सके तो ये दस्तावेज पास रखें:',
    notes: [
      'एफआईआर, गिरफ्तारी या नोटिस पर तुरंत कानूनी सलाह लें',
      'हर सुनवाई के बाद केस की स्थिति की जानकारी',
      'परामर्श में दस्तावेजों की सूची दी जाती है',
      'एफआईआर की प्रति, न्यायालय नोटिस, समन या पुराने आदेश (फोटो/पीडीएफ)',
      'आधार या कोई पहचान पत्र, और संबंधित एग्रीमेंट, चेक या संदेश',
    ],
    disclaimer:
      'नोट: इस पेज की जानकारी सामान्य है। किसी मामले का आकलन तथ्य और दस्तावेज देखने के बाद ही किया जा सकता है।',
  },
  contact: {
    eyebrow: 'संपर्क',
    title: 'बात करें — परामर्श के लिए।',
    intro:
      'फोन या व्हाट्सएप पर स्थिति बताकर पहली सलाह लें। दस्तावेजों के साथ चैंबर में मिलने का समय तय किया जा सकता है।',
    directHeading: 'सीधा संपर्क',
    labels: { phone: 'फोन', email: 'ईमेल', whatsapp: 'व्हाट्सएप' },
    whatsappValue: 'चैट पर संदेश भेजें',
    chamberLabel: 'चैंबर',
    timingsLabel: 'समय',
    timingsNote: 'सुनवाई के दिन उपलब्धता अलग हो सकती है — पहले कॉल करें।',
    emergencyLabel: 'आपात स्थिति / गिरफ्तारी:',
    emergencyText: 'हो सके तो तुरंत कॉल करें और एफआईआर या नोटिस की फोटो व्हाट्सएप पर भेजें।',
    mapCaption: 'मेरठ, उत्तर प्रदेश',
    directions: 'दिशा-निर्देश',
    mapTitle: 'चैंबर का नक्शा',
    bringTitle: 'परामर्श के लिए क्या लाएँ',
    bring: [
      'एफआईआर की प्रति, नोटिस या समन (फोटो या पीडीएफ)',
      'पहले के न्यायालय आदेश, यदि हों',
      'चेक, एग्रीमेंट, संदेश या कॉल रिकॉर्ड — मामले के अनुसार',
      'पहचान पत्र',
    ],
    formNote:
      'कृपया वेबसाइट फॉर्म से केस की जानकारी न भेजें — पहली बातचीत फोन या व्हाट्सएप पर ही रखें।',
  },
  error: {
    notFoundTitle: 'यह पेज नहीं मिला।',
    genericTitle: 'कुछ गड़बड़ हो गई।',
    body: 'आप जो पेज खोज रहे हैं वह हटा दिया गया है या पता गलत है।',
    home: 'होम पर वापस जाएँ',
    metaTitle: 'पेज नहीं मिला',
  },
  practiceAreas: [
    {
      title: 'जमानत और अग्रिम जमानत',
      desc: 'नियमित जमानत, अग्रिम जमानत और अंतरिम सुरक्षा के आवेदन — थाने से न्यायालय तक तत्काल मार्गदर्शन।',
      icon: 'shield',
    },
    {
      title: 'आपराधिक ट्रायल',
      desc: 'सत्र और मजिस्ट्रेट न्यायालयों में ट्रायल — जिरह, साक्ष्य और अंतिम तर्कों की पूरी तैयारी।',
      icon: 'gavel',
    },
    {
      title: 'एफआईआर रद्द कराना',
      desc: 'झूठी या दबाव में दर्ज एफआईआर को उच्च न्यायालय में रद्द कराने के लिए याचिका और स्थगन राहत।',
      icon: 'file-x',
    },
    {
      title: 'चेक बाउंस (धारा 138 एनआई एक्ट)',
      desc: 'चेक अनादर के मामलों में शिकायतकर्ता और अभियुक्त दोनों पक्षों की पैरवी।',
      icon: 'receipt',
    },
    {
      title: 'साइबर अपराध',
      desc: 'ऑनलाइन धोखाधड़ी, फर्जी प्रोफाइल, मॉर्फिंग और आईटी एक्ट के मामलों में शिकायत से चार्जशीट तक सहयोग।',
      icon: 'monitor',
    },
    {
      title: 'वैवाहिक आपराधिक मामले',
      desc: '498ए, घरेलू हिंसा और भरण-पोषण की आपराधिक कार्यवाही में संतुलित पैरवी।',
      icon: 'scale',
    },
  ],
  faqs: [
    {
      q: 'एफआईआर हो गई है, सबसे पहले क्या करना चाहिए?',
      a: 'एफआईआर की प्रति तुरंत लें, नोटिस या समन आए तो अनदेखा न करें, और कोई भी बयान देने से पहले वकील से सलाह लें। जितनी जल्दी कानूनी सलाह मिलती है, उतने अधिक विकल्प खुले रहते हैं।',
    },
    {
      q: 'अग्रिम जमानत कब तक दाखिल की जा सकती है?',
      a: 'अग्रिम जमानत गिरफ्तारी से पहले दाखिल होती है। जैसे ही एफआईआर में नाम आए या पुलिस तलब करे, उसी समय आवेदन की तैयारी शुरू करनी चाहिए।',
    },
    {
      q: 'क्या परामर्श के लिए न्यायालय आना जरूरी है?',
      a: 'पहली सलाह फोन या व्हाट्सएप पर भी हो सकती है। दस्तावेज देखने और रणनीति बनाने के लिए चैंबर में मिलना बेहतर होता है — समय पहले तय कर लें।',
    },
    {
      q: 'नए आपराधिक कानूनों (बीएनएस/बीएनएसएस) का क्या असर है?',
      a: '1 जुलाई 2024 से आईपीसी की जगह बीएनएस और सीआरपीसी की जगह बीएनएसएस लागू है। पुराने मामले पुराने कानून के अनुसार चलते हैं, नए मामले नए प्रावधानों के अनुसार।',
    },
  ],
}

export const content: Record<Locale, Content> = { en, hi }
