"use client";

import { motion } from "framer-motion";
import { Flame, Calendar, Clock, Users, GraduationCap, Check } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PROGRAM } from "@/lib/constants";

const features = [
  { icon: Calendar, label: "بداية", value: PROGRAM.startDate },
  { icon: Calendar, label: "نهاية", value: PROGRAM.endDate },
  { icon: Clock, label: "المدة", value: PROGRAM.duration },
  { icon: GraduationCap, label: "عدد الجلسات", value: `${PROGRAM.sessions} جلسات` },
  { icon: Users, label: "الفئة العمرية", value: PROGRAM.audience },
  { icon: Flame, label: "المقاعد", value: `${PROGRAM.seatsAvailable} طلاب فقط` },
];

const includes = [
  "10 جلسات تفاعلية أونلاين",
  "تعلم Prompt Engineering عملياً",
  "بناء موقع حقيقي بالذكاء الاصطناعي",
  "مشاريع AI متعددة + محفظة أعمال",
  "مجموعة دعم خاصة بعد كل جلسة",
  "شهادة إتمام البرنامج",
];

export function Offer() {
  return (
    <section
      id="offer"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="offer-heading"
    >
      <div className="container">
        <SectionHeader
          eyebrow="عرض الإطلاق"
          title={
            <span id="offer-heading">
              عرض الدفعة الأولى — <span className="gradient-text">خصم {PROGRAM.discountPercent}%</span>
            </span>
          }
          description="مقاعد محدودة جداً. الأم اللي تحجز دلوقتي، ابنها هيكون من أوائل اللي يدخلوا عالم AI صح."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-primary via-electric-500 to-gold-400 opacity-50 blur-md" />

          <div className="relative gradient-border p-6 md:p-10 rounded-[2rem] glow-shadow">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 px-3 py-1 text-xs font-bold mb-5">
                  <Flame className="h-3.5 w-3.5" />
                  مقاعد محدودة — تنتهي قريباً
                </div>

                <h3 className="font-display font-black text-3xl md:text-4xl leading-tight">
                  برنامج <span className="gradient-text">بديع</span> — الدفعة الأولى
                </h3>

                <div className="mt-6 flex items-end gap-3 flex-wrap">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-5xl md:text-6xl text-foreground">
                      {PROGRAM.discountedPrice.toLocaleString("ar-EG")}
                    </span>
                    <span className="text-lg font-bold text-muted-foreground">
                      {PROGRAM.currencyLabel}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground line-through decoration-red-400/70 decoration-2">
                      {PROGRAM.originalPrice.toLocaleString("ar-EG")} {PROGRAM.currencyLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-300 px-2.5 py-0.5 text-xs font-bold mt-1 w-fit">
                      وفّر {PROGRAM.discountPercent}%
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {features.map((f) => (
                    <div
                      key={f.label}
                      className="rounded-xl bg-white/[0.03] border border-white/10 p-3"
                    >
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <f.icon className="h-3.5 w-3.5 text-electric-400" />
                        {f.label}
                      </span>
                      <p className="font-bold text-foreground mt-1">{f.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <WhatsAppButton size="lg" label="احجز مقعد ابنك الآن" />
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl glass-strong p-6">
                  <h4 className="font-display font-black text-lg mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-electric-400" />
                    البرنامج يشمل
                  </h4>
                  <ul className="space-y-3">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                        <span className="grid place-items-center h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-primary to-electric-500 text-white mt-0.5">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-foreground/90 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
