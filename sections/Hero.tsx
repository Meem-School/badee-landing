"use client";

import { motion } from "framer-motion";
import { Sparkles, ChevronLeft, ShieldCheck, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FloatingRobot } from "@/components/FloatingRobot";
import { Countdown } from "@/components/Countdown";
import { PROGRAM } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen pt-28 md:pt-32 pb-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-hero-glow -z-10" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs md:text-sm font-bold mb-6"
            >
              <Sparkles className="h-4 w-4 text-gold-400" />
              <span>الدفعة الأولى — {PROGRAM.seatsAvailable} طلاب فقط</span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display font-black tracking-tight text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
            >
              حوّل وقت ابنك قدّام الشاشات…{" "}
              <span className="gradient-text">إلى مهارة تبني مستقبله</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 text-balance"
            >
              برنامج <span className="font-bold text-foreground">بديع</span> بيعلّم
              المراهقين من <span className="font-bold text-foreground">12 لـ 18</span>{" "}
              يستخدموا الذكاء الاصطناعي عملياً — يبنوا مواقع، مشاريع، ومهارات تخليهم
              متقدمين على جيلهم.
            </motion.p>

            <div className="mt-8">
              <Countdown
                target={PROGRAM.startDateISO}
                title={`الانطلاق ${PROGRAM.startDate}`}
                className="lg:items-start"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <WhatsAppButton size="xl" label="احجز عبر واتساب" />
              <Button asChild size="xl" variant="outline">
                <a href="#offer">
                  اكتشف البرنامج
                  <ChevronLeft className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start text-xs md:text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-electric-400" />
                بيئة آمنة 100%
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4 text-electric-400" />
                مجموعات صغيرة (10 طلاب)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-electric-400" />
                مشاريع حقيقية
              </span>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative h-[400px] md:h-[520px]">
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 grid place-items-center"
            >
              <div className="h-[320px] w-[320px] md:h-[440px] md:w-[440px] rounded-full border border-white/10" />
            </motion.div>
            <motion.div
              aria-hidden="true"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 grid place-items-center"
            >
              <div className="h-[220px] w-[220px] md:h-[320px] md:w-[320px] rounded-full border border-electric-500/20" />
            </motion.div>

            <div className="absolute inset-0 grid place-items-center">
              <FloatingRobot
                variant="blue"
                size="lg"
                message="جاهز تبني أول موقع بالذكاء الاصطناعي؟ 🤖"
                bubbleSide="left"
              />
            </div>

            <div className="absolute top-4 right-0 hidden md:block">
              <FloatingRobot variant="gold" size="sm" delay={0.6} />
            </div>
            <div className="absolute bottom-0 left-0 hidden md:block">
              <FloatingRobot variant="cyan" size="sm" delay={0.9} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
