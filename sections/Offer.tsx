"use client";

import { motion } from "framer-motion";
import {
  Flame,
  Calendar,
  CalendarCheck,
  Users,
  GraduationCap,
  Check,
  TrendingDown,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PROGRAM } from "@/lib/constants";

const features = [
  { icon: Calendar, label: "ويبينار مجاني", value: PROGRAM.webinarDate },
  { icon: CalendarCheck, label: "بداية البرنامج", value: PROGRAM.startDate },
  { icon: GraduationCap, label: "عدد الجلسات", value: `${PROGRAM.sessions} جلسات` },
  { icon: Users, label: "الفئة العمرية", value: PROGRAM.audience },
  { icon: Flame, label: "المقاعد", value: `${PROGRAM.seatsAvailable} طلاب فقط` },
  { icon: TrendingDown, label: "الخصم", value: `${PROGRAM.discountPercent}%` },
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
  const savings = PROGRAM.originalPrice - PROGRAM.discountedPrice;

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
              عرض الدفعة الأولى —{" "}
              <span className="gradient-text">خصم {PROGRAM.discountPercent}%</span>
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

                {/* Premium price block with strong hierarchy */}
                <div className="mt-7 relative rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-5 md:p-6 overflow-hidden">
                  <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gold-400/15 blur-3xl" />
                  <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-electric-500/15 blur-3xl" />

                  <div className="relative">
                    {/* Original price - LARGE and dramatic */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                        السعر الأصلي
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-l from-red-400/40 to-transparent" />
                    </div>
                    <div className="relative inline-flex items-baseline gap-2">
                      <span
                        className="font-display font-black text-4xl md:text-5xl text-muted-foreground/70 relative"
                        aria-label={`السعر الأصلي ${PROGRAM.originalPrice} جنيه`}
                      >
                        {PROGRAM.originalPrice.toLocaleString("ar-EG")}
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-[-6px] top-1/2 h-[3px] bg-red-400 rotate-[-8deg] rounded-full shadow-[0_0_10px_rgba(248,113,113,0.5)]"
                        />
                      </span>
                      <span className="text-base md:text-lg font-bold text-muted-foreground/70">
                        {PROGRAM.currencyLabel}
                      </span>
                    </div>

                    {/* Arrow visual */}
                    <div className="my-3 flex items-center gap-2 text-electric-400">
                      <span className="font-bold text-sm">↓</span>
                      <span className="text-xs font-bold tracking-wider uppercase">
                        سعر الإطلاق
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-l from-electric-400/40 to-transparent" />
                    </div>

                    {/* Discounted price - MASSIVE */}
                    <div className="flex items-end gap-3 flex-wrap">
                      <div className="flex items-baseline gap-2">
                        <span
                          className="font-display font-black text-6xl md:text-7xl gradient-text leading-none"
                          aria-label={`السعر بعد الخصم ${PROGRAM.discountedPrice} جنيه`}
                        >
                          {PROGRAM.discountedPrice.toLocaleString("ar-EG")}
                        </span>
                        <span className="text-xl md:text-2xl font-bold text-foreground">
                          {PROGRAM.currencyLabel}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-l from-gold-400 to-gold-500 text-navy-900 px-3 py-1 text-xs md:text-sm font-black shadow-lg shadow-gold-500/30 mb-2">
                        <Flame className="h-3.5 w-3.5" />
                        وفّر {PROGRAM.discountPercent}%
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-electric-400 font-bold">
                      توفير {savings.toLocaleString("ar-EG")} جنيه للدفعة الأولى فقط
                    </p>
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
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm md:text-base"
                      >
                        <span className="grid place-items-center h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-primary to-electric-500 text-white mt-0.5">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-foreground/90 leading-relaxed">
                          {item}
                        </span>
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
