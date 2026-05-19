"use client";

import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FloatingRobot } from "@/components/FloatingRobot";
import { PROGRAM } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-60">
            <FloatingRobot variant="blue" size="md" />
          </div>

          <div className="relative pt-32 md:pt-40">
            <p className="font-bold text-electric-400 mb-4 text-sm md:text-base tracking-wide">
              ⚡ المستقبل بيتغير بسرعة…
            </p>

            <h2
              id="final-cta-heading"
              className="font-display font-black tracking-tight text-3xl sm:text-5xl md:text-6xl leading-[1.1] text-balance"
            >
              السؤال مش هل ابنك هيستخدم AI… <br className="hidden md:inline" />
              <span className="gradient-text">السؤال: هل هيكون مستهلك؟ ولا صانع؟</span>
            </h2>

            <p className="mt-6 text-base md:text-xl text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto">
              في {PROGRAM.duration}، ابنك يقدر يتحول من متفرج… لصاحب مشاريع. القرار في
              إيدك دلوقتي.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppButton size="xl" label="احجز مقعد ابنك الآن" />
            </div>

            <p className="mt-6 text-xs md:text-sm text-muted-foreground">
              المقاعد محدودة — {PROGRAM.seatsAvailable} طلاب فقط في الدفعة الأولى.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
