"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Languages,
  ShieldCheck,
  Rocket,
  GraduationCap,
  Compass,
  UserCheck,
  FolderKanban,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const features = [
  {
    icon: BrainCircuit,
    title: "AI عملي مش نظري",
    desc: "أدوات حقيقية يستخدمها المحترفين، مش مجرد محاضرات.",
  },
  {
    icon: Languages,
    title: "تعليم بالعربي",
    desc: "محتوى موجّه للطالب العربي، بأمثلة من بيئته.",
  },
  {
    icon: ShieldCheck,
    title: "بيئة آمنة",
    desc: "مجموعات صغيرة، إشراف كامل، محتوى مناسب للعمر.",
  },
  {
    icon: Rocket,
    title: "مشاريع حقيقية",
    desc: "مش تمارين ورقية — منتجات وأعمال يقدر يعرضها.",
  },
  {
    icon: GraduationCap,
    title: "أسلوب تعليم حديث",
    desc: "تفاعلي، ممتع، مبني على الإبداع لا الحفظ.",
  },
  {
    icon: Compass,
    title: "مهارات مستقبلية",
    desc: "تجهّز ابنك لسوق عمل بيتغير بسرعة الضوء.",
  },
  {
    icon: UserCheck,
    title: "متابعة فردية",
    desc: "اهتمام بكل طالب، مش فصل مزدحم.",
  },
  {
    icon: FolderKanban,
    title: "محفظة أعمال",
    desc: "يخرج بأعمال يقدمها للجامعة والمستقبل.",
  },
];

export function WhyChoose() {
  return (
    <section id="why" className="relative py-20 md:py-28" aria-labelledby="why-heading">
      <div className="container">
        <SectionHeader
          eyebrow="ليه بديع؟"
          title={
            <span id="why-heading">
              مش مجرد كورس… <span className="gradient-text">تجربة بتغيّر حياة ابنك</span>
            </span>
          }
          description="كل تفصيلة في بديع مصممة عشان تطلع ابنك من البرنامج إنسان مختلف — أذكى، أكثر ثقة، مستعد للمستقبل."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-electric-500/0 to-gold-400/0 group-hover:from-primary/10 group-hover:via-electric-500/5 group-hover:to-gold-400/10 transition-all duration-500" />
              <span className="relative inline-grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-electric-500/20 border border-white/10 text-electric-400 mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="relative font-bold text-lg text-foreground">{f.title}</h3>
              <p className="relative text-sm text-muted-foreground mt-1.5 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
