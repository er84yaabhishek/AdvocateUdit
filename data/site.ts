/**
 * Saara personal/business content yahan hai.
 * Sirf isi file me values badlo — baaki site apne aap update ho jayegi.
 *
 * TODO: neeche diye gaye PLACEHOLDER values ko asli details se replace karo.
 */
export const site = {
  name: 'Udit Chaurasia',
  role: 'Advocate',
  tagline: 'Criminal Defence Lawyer',
  court: 'District & Sessions Court, Meerut',
  city: 'Meerut, Uttar Pradesh',

  // WhatsApp/call number — country code ke saath, bina + ya spaces
  phone: '917505053715',
  phoneDisplay: '+91 75050 53715',

  // TODO: replace with the real email
  email: 'udit.chaurasia@example.com',

  // TODO: replace with the real office address
  address: {
    line1: 'Chamber No. —, Civil Court Compound',
    line2: 'Meerut, Uttar Pradesh 250001',
    mapQuery: 'Civil Court Meerut Uttar Pradesh',
  },

  // TODO: replace with the real bar enrolment number
  enrolment: 'UP/XXXX/2018',

  // TODO: real experience
  experience: '6+ years',

  languages: 'Hindi, English',

  consultation: 'Mon–Sat, 10:00 AM – 6:00 PM',

  practiceAreas: [
    {
      title: 'Bail & Anticipatory Bail',
      desc: 'Regular bail, anticipatory bail aur interim protection ke applications — police station se court tak tatkal guidance.',
      icon: 'shield',
    },
    {
      title: 'Criminal Trials',
      desc: 'Sessions aur Magistrate courts me trial — cross-examination, evidence aur final arguments ki poori taiyari.',
      icon: 'gavel',
    },
    {
      title: 'FIR Quashing',
      desc: 'Galat ya dabaav me darj FIR ko High Court me quash karane ke liye petition aur stay relief.',
      icon: 'file-x',
    },
    {
      title: 'Cheque Bounce (S.138 NI Act)',
      desc: 'Cheque dishonour matters me complainant aur accused dono taraf representation.',
      icon: 'receipt',
    },
    {
      title: 'Cyber Crime',
      desc: 'Online fraud, fake profiles, morphing, aur IT Act ke cases me complaint se charge-sheet tak support.',
      icon: 'monitor',
    },
    {
      title: 'Matrimonial Criminal Matters',
      desc: '498A, domestic violence aur maintenance ke criminal proceedings me balanced representation.',
      icon: 'scale',
    },
  ],

  faqs: [
    {
      q: 'FIR ho gayi hai, sabse pehle kya karna chahiye?',
      a: 'FIR ki copy turant lein, notice ya summons aaye to ignore na karein, aur koi bhi statement dene se pehle ek lawyer se salah lein. Jitni jaldi kanooni salah milti hai, utne zyada options khule rehte hain.',
    },
    {
      q: 'Anticipatory bail kab tak file ki ja sakti hai?',
      a: 'Anticipatory bail arrest se pehle file hoti hai. Jaise hi FIR me naam aaye ya police talab kare, usi waqt application ki taiyari shuru karni chahiye — deadline ka intezaar nahi karna chahiye.',
    },
    {
      q: 'Kya consultation ke liye court aana zaroori hai?',
      a: 'Pehli salah phone ya WhatsApp par bhi ho sakti hai. Documents dekhne aur strategy banane ke liye chamber me milna behtar hota hai — time pehle se fix kar lein.',
    },
    {
      q: 'Naye criminal laws (BNS/BNSS) ka kya asar hai?',
      a: '1 July 2024 se IPC ki jagah BNS aur CrPC ki jagah BNSS lagu hai. Purane cases purane law ke hisaab se chalte hain, naye cases naye provisions ke hisaab se — dono ka pata hona zaroori hai.',
    },
  ],
} as const

export const waLink = `https://wa.me/${site.phone}?text=${encodeURIComponent(
  'Namaste, mujhe criminal matter par legal salah chahiye.',
)}`
