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
  endDate: "18 / 7",
  /** ISO target for the countdown timer. Year is 2026. */
  startDateISO: "2026-06-16T18:00:00+02:00",
  endDateISO: "2026-07-18T20:00:00+02:00",
  originalPrice: 4000,
  discountedPrice: 2250,
  discountPercent: 45,
  seatsAvailable: 10,
  currency: "EGP",
  currencyLabel: "جنيه",
} as const;

const WHATSAPP_RAW = "201063275860";
export const WHATSAPP_NUMBER_DISPLAY = "+20 10 63275860";

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

export const TEAM = {
  name: "فريق ميم",
  tagline: "فريق متخصص في الذكاء الاصطناعي والتعليم التقني",
  description:
    "نحن فريق من المهندسين والباحثين والمعلمين، مهمتنا تبسيط الذكاء الاصطناعي وتعليمه للشباب العربي بأسلوب حديث وآمن.",
  highlights: [
    {
      label: "خبرة أكثر من 3 سنوات",
      desc: "في تطوير حلول AI حقيقية للسوق التعليمي والتجاري.",
    },
    {
      label: "باحثون في AUC",
      desc: "نشترك في أبحاث الذكاء الاصطناعي بالجامعة الأمريكية بالقاهرة.",
    },
    {
      label: "AI Engineering فعلي",
      desc: "خبرة عملية مع منصات وشركات تقنية رائدة.",
    },
    {
      label: "+400 طالب تدرّبوا معانا",
      desc: "على منصات تعليمية متعددة وبنتائج ملموسة.",
    },
    {
      label: "تعليم تقني حديث",
      desc: "مناهج مبنية على المشاريع، مش على الحفظ.",
    },
    {
      label: "تبسيط AI للشباب العربي",
      desc: "محتوى بالعربي يخاطب طالب 2026، مش 2010.",
    },
  ],
} as const;

export const NAV_LINKS = [
  { href: "#problem", label: "المشكلة" },
  { href: "#offer", label: "العرض" },
  { href: "#why", label: "ليه بديع؟" },
  { href: "#outputs", label: "النتائج" },
  { href: "#faq", label: "أسئلة شائعة" },
] as const;
