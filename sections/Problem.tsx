"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Frown, Smartphone, Clock, ArrowLeft } from "lucide-react";
import { Sparkles, Brain, Rocket, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { FloatingRobot } from "@/components/FloatingRobot";

const problems = [
  { icon: Clock, title: "ساعات ضايعة", desc: "وقت طويل على الشاشات بدون فايدة حقيقية." },
  { icon: Smartphone, title: "إدمان وعزلة", desc: "تفاعل سطحي يقلل التركيز ويضعف الثقة." },
  { icon: Frown, title: "محتوى مستهلَك", desc: "بيتفرج بس… ما بيصنعش حاجة بنفسه." },
  { icon: AlertTriangle, title: "متأخر عن جيله", desc: "العالم بيتغير بسرعة وهو واقف مكانه." },
];

const solutions = [
  { icon: Brain, title: "تعلّم عملي للـ AI", desc: "أدوات حقيقية تُستخدم في الشركات اليوم." },
  { icon: Rocket, title: "إبداع وإنتاج", desc: "يبني مواقع، مشاريع، ومحفظة أعمال." },
  { icon: ShieldCheck, title: "بيئة آمنة", desc: "إشراف مدرّبين، محتوى مناسب للعمر." },
  { icon: Sparkles, title: "ثقة ومستقبل", desc: "مهارات تخليه متميز ومستعد للجامعة وسوق العمل." },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-20 md:py-28" aria-labelledby="problem-heading">
      <div className="container">
        <SectionHeader
          eyebrow="المشكلة الحقيقية"
          title={
            <span id="problem-heading">
              ابنك بيقضي ساعات على الموبايل… <br className="hidden md:inline" />
              <span className="gradient-text">والنتيجة؟</span>
            </span>
          }
          description="كل أم بتحس بنفس القلق: وقت بيضيع، فرص بتروح، ومستقبل غامض. بديع جه يحوّل ده كله."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-red-500/20 bg-red-500/[0.03] p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-red-500/15 text-red-400">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <h3 className="font-display font-black text-2xl">المشكلة</h3>
            </div>
            <ul className="space-y-3">
              {problems.map((p) => (
                <li
                  key={p.title}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                >
                  <span className="grid place-items-center h-9 w-9 shrink-0 rounded-lg bg-red-500/10 text-red-400">
                    <p.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{p.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-3xl border border-electric-500/30 bg-electric-500/[0.04] p-6 md:p-8 overflow-hidden"
          >
            <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-electric-500/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-electric-500/20 text-electric-400">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h3 className="font-display font-black text-2xl">الحل: بديع</h3>
              </div>
              <ul className="space-y-3">
                {solutions.map((s) => (
                  <li
                    key={s.title}
                    className="flex items-start gap-3 p-4 rounded-2xl glass"
                  >
                    <span className="grid place-items-center h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br from-primary to-electric-500 text-white">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-bold text-foreground">{s.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid place-items-center h-16 w-16 rounded-full bg-gradient-to-br from-primary to-electric-500 shadow-2xl shadow-primary/40"
          >
            <ArrowLeft className="h-7 w-7 text-white" />
          </motion.div>
        </div>

        <div className="absolute -bottom-10 right-4 hidden md:block pointer-events-none">
          <FloatingRobot
            variant="cyan"
            size="sm"
            message="بدل ما يضيع وقته… خليه يصنع حاجة حقيقية ✨"
            bubbleSide="right"
          />
        </div>
      </div>
    </section>
  );
}
