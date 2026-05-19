"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const memes = [
  { text: "لما الـ AI يحل الواجب أسرع منك 👀", emoji: "🤖", gradient: "from-pink-500/30 to-purple-500/30" },
  { text: "أول مرة تكتب Prompt صح 😎", emoji: "✨", gradient: "from-electric-500/30 to-primary/30" },
  { text: "مامتك: نام بدري. أنت: لسه prompt واحد 🌙", emoji: "💻", gradient: "from-gold-500/30 to-orange-500/30" },
  { text: "صاحبك: عامل إيه في الموقع؟ أنت: AI 🚀", emoji: "🔥", gradient: "from-cyan-500/30 to-blue-500/30" },
  { text: "AI: تحب أساعدك؟ أنت: أيوه يا صديقي 🤝", emoji: "🧠", gradient: "from-emerald-500/30 to-teal-500/30" },
  { text: "بعد بديع: ابنك بقى مرجع للأهل 🎓", emoji: "👑", gradient: "from-violet-500/30 to-fuchsia-500/30" },
];

export function Fun() {
  return (
    <section className="relative py-20 md:py-28" aria-labelledby="fun-heading">
      <div className="container">
        <SectionHeader
          eyebrow="نضحك شوية 😄"
          title={
            <span id="fun-heading">
              لحظات هتعيشها مع <span className="gradient-text">AI</span>
            </span>
          }
          description="لأن التعلم لما يبقى ممتع… بيدخل في القلب قبل الدماغ."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {memes.map((m, i) => (
            <motion.div
              key={m.text}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4, rotate: 0.5 }}
              className={`relative rounded-2xl glass p-6 overflow-hidden bg-gradient-to-br ${m.gradient}`}
            >
              <span className="absolute -top-2 -right-2 text-7xl opacity-20 select-none">
                {m.emoji}
              </span>
              <div className="relative">
                <div className="text-4xl mb-3">{m.emoji}</div>
                <p className="font-display font-bold text-lg md:text-xl leading-snug text-foreground">
                  {m.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
