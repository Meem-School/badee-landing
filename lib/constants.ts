export const SITE = {
  name: "بديع | Badee Program",
  shortName: "بديع",
  tagline: "مبدعون بلا حدود",
  url: "https://badee.meem-online-school.vercel.app",
  description:
    "برنامج بديع لتعليم الذكاء الاصطناعي للمراهقين 12–18 سنة بأسلوب عملي ممتع وآمن. 10 جلسات تفاعلية أونلاين، مشاريع حقيقية، وبناء مهارات المستقبل.",
  locale: "ar_EG",
  poweredBy: "Meem Online School",
} as const;

export const PROGRAM = {
  name: "بديع",
  englishName: "Badee Program",
  audience: "12–18 سنة",
  duration: "10 جلسات",
  sessions: 10,
  mode: "أونلاين تفاعلي",
  webinarDate: "6 / 6",
  startDate: "16 / 6",
  originalPrice: 4000,
  discountedPrice: 2250,
  discountPercent: 45,
  seatsAvailable: 10,
  currency: "EGP",
  currencyLabel: "جنيه",
} as const;

const WHATSAPP_RAW = "201018844656";
export const WHATSAPP_NUMBER_DISPLAY = "01018844656";

const WHATSAPP_MESSAGE = `السلام عليكم 👋✨

أنا مهتم أعرف تفاصيل أكتر عن برنامج بديع للذكاء الاصطناعي 🤖

عرفت عنكم من:
[Landing Page]

الاسم:
السن:
حابب أعرف تفاصيل عن:`;

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const INSTRUCTOR = {
  name: "م. أنس أحمد",
  title: "AI Engineer",
  credentials: [
    "AI Researcher at AUC",
    "3 سنين خبرة في AI Engineering",
    "3 سنين خبرة تدريس",
    "درّب أكثر من 400 طالب على منصات متعددة",
    "خبرة مع Microsoft & iTech Solutions",
  ],
} as const;

export const NAV_LINKS = [
  { href: "#problem", label: "المشكلة" },
  { href: "#offer", label: "العرض" },
  { href: "#why", label: "ليه بديع؟" },
  { href: "#outputs", label: "النتائج" },
  { href: "#faq", label: "أسئلة شائعة" },
] as const;
