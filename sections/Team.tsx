"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Microscope,
  BrainCircuit,
  GraduationCap,
  Users,
  Sparkles,
  Globe2,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { TEAM } from "@/lib/constants";

const icons = [Microscope, BrainCircuit, GraduationCap, Users, Sparkles, Globe2];

export function Team() {
  return (
    <section
      id="team"
      className="relative py-20 md:py-28"
      aria-labelledby="team-heading"
    >
      <div className="container">
        <SectionHeader
          eyebrow="فريق ميم"
          title={
            <span id="team-heading">
              فريق متخصص في{" "}
              <span className="gradient-text">الذكاء الاصطناعي والتعليم التقني</span>
            </span>
          }
          description={TEAM.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 relative max-w-6xl mx-auto"
        >
          <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-primary/40 via-electric-500/30 to-gold-400/30 opacity-60 blur-md" />

          <div className="relative gradient-border rounded-[2rem] p-6 md:p-10 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

            <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Identity column */}
              <div className="lg:col-span-4 text-center lg:text-right">
                <div className="relative inline-block mb-5">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-electric-500 blur-2xl opacity-40" />
                  <div className="relative grid place-items-center h-32 w-32 mx-auto lg:mx-0 rounded-3xl bg-white shadow-xl shadow-electric-500/20 ring-1 ring-white/10 overflow-hidden">
                    <Image
                      src="/Meem-logo.jpeg"
                      alt="شعار فريق ميم — Meem School"
                      width={128}
                      height={128}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <h3 className="font-display font-black text-3xl md:text-4xl leading-tight">
                  {TEAM.name}
                </h3>
                <p className="mt-2 text-electric-400 font-bold text-sm md:text-base">
                  {TEAM.tagline}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  فريق نشط من 2022
                </div>
              </div>

              {/* Highlights grid */}
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
                {TEAM.highlights.map((h, i) => {
                  const Icon = icons[i % icons.length];
                  return (
                    <motion.div
                      key={h.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="group flex items-start gap-3 rounded-2xl bg-white/[0.04] border border-white/10 p-4 hover:bg-white/[0.06] hover:border-white/20 transition-colors"
                    >
                      <span className="grid place-items-center h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-primary/30 to-electric-500/30 border border-white/10 text-electric-400 group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-bold text-foreground leading-tight">
                          {h.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {h.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
