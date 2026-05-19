"use client";

import { motion } from "framer-motion";
import { Globe, Bot, Presentation, BookOpen, Wand2, Workflow } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { FloatingRobot } from "@/components/FloatingRobot";

const outputs = [
  {
    icon: Globe,
    title: "موقع إلكتروني كامل",
    desc: "يبني موقعه الأول بنفسه باستخدام الذكاء الاصطناعي.",
    tag: "Web",
  },
  {
    icon: Bot,
    title: "مشاريع AI",
    desc: "أدوات وروبوتات تفاعلية بمساعدة الـ AI.",
    tag: "AI Apps",
  },
  {
    icon: Presentation,
    title: "عروض احترافية",
    desc: "بريزنتيشن بأسلوب الشركات بضغطة واحدة.",
    tag: "Slides",
  },
  {
    icon: BookOpen,
    title: "مساعد دراسي ذكي",
    desc: "أداة AI تساعده يذاكر أسرع وأذكى.",
    tag: "Study",
  },
  {
    icon: Wand2,
    title: "محتوى إبداعي",
    desc: "صور، فيديوهات، ومحتوى يقدر ينتجه بنفسه.",
    tag: "Content",
  },
  {
    icon: Workflow,
    title: "Workflows ذكية",
    desc: "يأتمت مهامه اليومية ويوفر وقته.",
    tag: "Automation",
  },
];

export function Outputs() {
  return (
    <section
      id="outputs"
      className="relative py-20 md:py-28"
      aria-labelledby="outputs-heading"
    >
      <div className="container">
        <SectionHeader
          eyebrow="النتائج"
          title={
            <span id="outputs-heading">
              بعد البرنامج… ابنك مش هيكون <span className="gradient-text">مجرد مستخدم</span>
            </span>
          }
          description="هيخرج صانع. عنده مشاريع حقيقية يقدر يعرضها، ومهارات تفتحله أبواب مش هي الأم بنفسها متخيلاها."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {outputs.map((o, i) => (
            <motion.article
              key={o.title}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-3xl glass p-6 md:p-7 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-electric-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-start justify-between gap-3 mb-5">
                <span className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/30 to-electric-500/30 border border-white/10 text-electric-400 group-hover:scale-110 transition-transform">
                  <o.icon className="h-7 w-7" />
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground bg-white/[0.04] border border-white/10 rounded-full px-2.5 py-1">
                  {o.tag}
                </span>
              </div>

              <h3 className="relative font-display font-black text-xl md:text-2xl text-foreground leading-tight">
                {o.title}
              </h3>
              <p className="relative text-sm md:text-base text-muted-foreground mt-2 leading-relaxed">
                {o.desc}
              </p>

              <div className="relative mt-6 h-24 rounded-xl bg-gradient-to-br from-navy-900 to-navy-950 border border-white/5 overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute inset-3 rounded-lg bg-gradient-to-br from-white/[0.05] to-transparent border border-white/5" />
                <div className="absolute top-4 right-4 flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-red-400/60" />
                  <span className="h-2 w-2 rounded-full bg-gold-400/60" />
                  <span className="h-2 w-2 rounded-full bg-green-400/60" />
                </div>
                <div className="absolute bottom-3 right-4 left-4 space-y-1.5">
                  <div className="h-1.5 w-1/2 rounded-full bg-white/20" />
                  <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="hidden lg:block absolute -bottom-8 left-8 pointer-events-none">
          <FloatingRobot
            variant="gold"
            size="sm"
            message="AI مش المستقبل… ده الحاضر 😎"
            bubbleSide="right"
          />
        </div>
      </div>
    </section>
  );
}
