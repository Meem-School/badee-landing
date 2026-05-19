"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CountdownProps {
  /** ISO 8601 target date */
  target: string;
  className?: string;
  /** Optional title shown above the timer */
  title?: string;
}

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(targetMs: number): Parts {
  const now = Date.now();
  const ms = Math.max(0, targetMs - now);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

const labels = [
  { key: "days", label: "يوم" },
  { key: "hours", label: "ساعة" },
  { key: "minutes", label: "دقيقة" },
  { key: "seconds", label: "ثانية" },
] as const;

export function Countdown({ target, className, title }: CountdownProps) {
  const targetMs = new Date(target).getTime();
  // Start with null on both server + first client render → no hydration mismatch
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(diff(targetMs));
    const id = window.setInterval(() => {
      setParts(diff(targetMs));
    }, 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  const finished = parts !== null && parts.days + parts.hours + parts.minutes + parts.seconds === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={cn("inline-flex flex-col items-center", className)}
      aria-live="polite"
      aria-atomic="true"
    >
      {title && (
        <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-electric-400 mb-3">
          {title}
        </p>
      )}

      <div
        role="timer"
        aria-label={`الوقت المتبقي حتى انطلاق البرنامج`}
        className="flex items-center gap-2 md:gap-3"
      >
        {labels.map(({ key, label }, idx) => {
          const value = parts ? parts[key] : null;
          return (
            <div key={key} className="flex items-center gap-2 md:gap-3">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/40 via-electric-500/30 to-gold-400/30 blur-sm opacity-70" />
                <div className="relative min-w-[58px] md:min-w-[78px] rounded-2xl glass-strong px-2 py-3 md:px-3 md:py-4 text-center">
                  <span
                    className="font-display font-black text-2xl md:text-4xl leading-none tabular-nums text-foreground"
                    aria-hidden={value === null}
                  >
                    {value === null ? "--" : value.toString().padStart(2, "0")}
                  </span>
                  <span className="block mt-1 text-[10px] md:text-xs font-bold text-muted-foreground">
                    {label}
                  </span>
                </div>
              </div>
              {idx < labels.length - 1 && (
                <span
                  className="font-display font-black text-electric-400/60 text-xl md:text-2xl"
                  aria-hidden="true"
                >
                  :
                </span>
              )}
            </div>
          );
        })}
      </div>

      {finished && (
        <p className="mt-3 text-sm font-bold text-gold-400">انطلق البرنامج! 🚀</p>
      )}
    </motion.div>
  );
}
