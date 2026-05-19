"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/SectionHeader";
import { FloatingRobot } from "@/components/FloatingRobot";

const faqs = [
  {
    q: "هل ابني محتاج خبرة سابقة في البرمجة أو الذكاء الاصطناعي؟",
    a: "أبداً. البرنامج مصمم خصيصاً للمبتدئين، ويبدأ من الصفر بأسلوب بسيط وعملي. لو ابنك بيستخدم الموبايل، يقدر يبدأ معانا.",
  },
  {
    q: "هل البرنامج مناسب لكل المراهقين من 12 لـ 18؟",
    a: "نعم. المحتوى متدرج، والمدرّب بيراعي الفروق العمرية داخل المجموعة الصغيرة (10 طلاب فقط).",
  },
  {
    q: "هل التعلم آمن للأبناء؟",
    a: "آمن 100%. الجلسات أونلاين عبر منصة موثوقة، بإشراف مباشر طوال الجلسة، والمحتوى مفلتر ومناسب للفئة العمرية.",
  },
  {
    q: "هل فيه متابعة بعد الجلسة؟",
    a: "نعم، فيه مجموعة دعم خاصة بالطلاب للإجابة على أسئلتهم، ومراجعة مشاريعهم، ومتابعة تقدمهم.",
  },
  {
    q: "هل البرنامج أونلاين بالكامل؟",
    a: "نعم، 10 جلسات تفاعلية أونلاين على مدار 5 أسابيع — جلستين أسبوعياً.",
  },
  {
    q: "هل ابني هيبني مشاريع حقيقية؟",
    a: "أكيد. هيخرج بموقع كامل من بناءه، عدة مشاريع AI، ومحفظة أعمال يقدر يعرضها للجامعة أو الأهل.",
  },
  {
    q: "إيه اللي بيميز بديع عن أي كورس تاني؟",
    a: "محتوى عربي عملي حديث، مدرب AI Engineer شغال في الميدان، مجموعات صغيرة، ومشاريع حقيقية بدل المحاضرات المكررة.",
  },
  {
    q: "هل فيه شهادة بعد البرنامج؟",
    a: "نعم، شهادة إتمام برنامج بديع — بالإضافة لمحفظة أعماله اللي هي الشهادة الأقوى الحقيقة.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="container">
        <SectionHeader
          eyebrow="أسئلة شائعة"
          title={
            <span id="faq-heading">
              <span className="gradient-text">عندك سؤال؟</span> الإجابة هنا
            </span>
          }
          description="جمعنا أهم الأسئلة اللي بتيجي على بال كل أم قبل ما تقرر."
        />

        <div className="mt-12 max-w-3xl mx-auto relative">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="hidden lg:block absolute -right-32 top-10">
            <FloatingRobot variant="purple" size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
