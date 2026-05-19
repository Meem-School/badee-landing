"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Microscope, BookCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { INSTRUCTOR } from "@/lib/constants";

const partners = ["Microsoft", "AUC", "OpenAI", "Anthropic", "I-Tech"];

const stats = [
  { label: "سنوات خبرة", value: "+5" },
  { label: "طلاب تعلموا معانا", value: "+200" },
  { label: "مشاريع AI", value: "+50" },
  { label: "نسبة رضا الأهل", value: "98%" },
];

const credentials = [
  { icon: Briefcase, label: "AI Engineer", desc: "خبرة عملية بشركات تقنية كبرى." },
  { icon: Microscope, label: "Researcher at AUC", desc: "بحث وتدريس في الجامعة الأمريكية." },
  { icon: Award, label: "Microsoft & I-Tech", desc: "خبرة تطوير حقيقية في الميدان." },
  { icon: BookCheck, label: "AI Certifications", desc: "شهادات معتمدة في الذكاء الاصطناعي." },
];

export function Trust() {
  return (
    <section className="relative py-20 md:py-28" aria-labelledby="trust-heading">
      <div className="container">
        <SectionHeader
          eyebrow="ثقة تستحقها"
          title={
            <span id="trust-heading">
              ابنك في إيدين <span className="gradient-text">خبيرة فعلاً</span>
            </span>
          }
          description="بديع مش جلسات يوتيوب — البرنامج بيقدمه مهندس AI شغّال في الميدان وبيدرّس في أعرق جامعة عربية."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 relative rounded-3xl glass-strong p-6 md:p-10 overflow-hidden"
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
              <h3 className="mt-5 font-display font-black text-2xl">{INSTRUCTOR.name}</h3>
              <p className="text-electric-400 font-bold">{INSTRUCTOR.title}</p>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
              {credentials.map((c) => (
                <div key={c.label} className="flex items-start gap-3 rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                  <span className="grid place-items-center h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-primary/30 to-electric-500/30 text-electric-400">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{c.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center glass rounded-2xl p-5"
            >
              <p className="font-display font-black text-3xl md:text-4xl gradient-text">
                {s.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">
            بمحتوى مستوحى من
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-70">
            {partners.map((p) => (
              <span
                key={p}
                className="font-display font-black text-xl md:text-2xl text-foreground/60 hover:text-foreground transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
