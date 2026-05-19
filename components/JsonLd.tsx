import { PROGRAM, SITE, TEAM } from "@/lib/constants";

const organization = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE.poweredBy,
  alternateName: ["Meem School", "فريق ميم"],
  url: SITE.url,
  logo: `${SITE.url}/Meem-logo.jpeg`,
  description: TEAM.description,
  sameAs: ["https://www.instagram.com/meem.online.school"],
};

const course = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: SITE.name,
  description: SITE.description,
  provider: {
    "@type": "EducationalOrganization",
    name: SITE.poweredBy,
    alternateName: TEAM.name,
    sameAs: SITE.url,
  },
  inLanguage: "ar",
  educationalLevel: "Beginner to Intermediate",
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: PROGRAM.audience,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: `PT${PROGRAM.sessions * 1.5}H`,
    startDate: "2026-06-16",
    endDate: "2026-07-18",
    location: {
      "@type": "VirtualLocation",
      url: SITE.url,
    },
  },
  offers: {
    "@type": "Offer",
    price: PROGRAM.discountedPrice,
    priceCurrency: PROGRAM.currency,
    availability: "https://schema.org/LimitedAvailability",
    validFrom: "2026-05-01",
    url: SITE.url,
  },
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "هل ابني محتاج خبرة سابقة في البرمجة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "لا. البرنامج مصمم خصيصاً للمبتدئين، ويبدأ من الصفر بأسلوب بسيط وعملي.",
      },
    },
    {
      "@type": "Question",
      name: "هل البرنامج آمن للمراهقين؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، الجلسات مباشرة عبر منصة آمنة بإشراف مدرّب طوال الجلسة، ومحتوى مناسب 100% للفئة العمرية 12–18.",
      },
    },
    {
      "@type": "Question",
      name: "هل التعلم أونلاين؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، 10 جلسات تفاعلية أونلاين — جلستين أسبوعياً.",
      },
    },
    {
      "@type": "Question",
      name: "هل يبني الطالب مشاريع حقيقية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، الطالب يبني موقعه الأول بالذكاء الاصطناعي، مشاريع AI متعددة، ومحفظة أعمال جاهزة.",
      },
    },
    {
      "@type": "Question",
      name: "هل فيه متابعة بعد الجلسة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، مجموعة دعم خاصة بالطلاب والإجابة على الأسئلة، ومتابعة المشاريع.",
      },
    },
  ],
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
