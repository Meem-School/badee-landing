"use client";

import { motion } from "framer-motion";
import {
  Microscope,
  BrainCircuit,
  GraduationCap,
  Users,
  Briefcase,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { INSTRUCTOR } from "@/lib/constants";

const credentials = [
  {
    icon: Microscope,
    label: "AI Researcher at AUC",
    desc: "باحث في الذكاء الاصطناعي بالجامعة الأمريكية بالقاهرة.",
  },
  {
    icon: BrainCircuit,
    label: "3 سنين في AI Engineering",
    desc: "خبرة عملية في بناء حلول AI حقيقية للسوق.",
  },
  {
    icon: GraduationCap,
    label: "3 سنين خبرة تدريس",
    desc: "تدريس وتبسيط مفاهيم AI لكل المستويات.",
  },
  {
    icon: Users,
    label: "+400 طالب تدرّبوا معاه",
    desc: "على منصات تعليمية متعددة بنتائج ملموسة.",
  },
  {
    icon: Briefcase,
    label: "Microsoft & iTech Solutions",
    desc: "خبرة احترافية مع شركات تقنية رائدة.",
  },
];

export function Trust() {
  return (
    <section
      className="relative py-20 md:py-28"
      aria-labelledby="trust-heading"
    >
      <div className="container">
        <SectionHeader
          eyebrow="ثقة تستحقها"
          title={
            <span id="trust-heading">
              ابنك في إيدين <span className="gradient-text">خبيرة فعلاً</span>
            </span>
          }
          description="بديع مش جلسات يوتيوب — البرنامج بيقدمه AI Engineer شغّال في الميدان وباحث في الجامعة الأمريكية بالقاهرة."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 relative max-w-5xl mx-auto rounded-3xl glass-strong p-6 md:p-10 overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl" />

          <div className="relative grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-electric-500 blur-2xl opacity-50" />
                <div className="relative grid place-items-center h-36 w-36 mx-auto rounded-full bg-gradient-to-br from-primary to-electric-500 font-display font-black text-5xl text-white shadow-2xl">
                  أ
                </div>
              </div>
              <h3 className="mt-5 font-display font-black text-2xl">
                {INSTRUCTOR.name}
              </h3>
              <p className="text-electric-400 font-bold">{INSTRUCTOR.title}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                AI Researcher · AUC
              </p>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-3 rounded-2xl bg-white/[0.04] border border-white/10 p-4"
                >
                  <span className="grid place-items-center h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-primary/30 to-electric-500/30 text-electric-400">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{c.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
