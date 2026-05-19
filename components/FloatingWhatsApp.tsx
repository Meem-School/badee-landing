"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل عبر واتساب"
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 30 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-5 left-5 z-50 group"
        >
          <span className="absolute inset-0 rounded-full bg-green-500/60 animate-ping opacity-75" />
          <span className="relative flex items-center gap-2 rounded-full bg-gradient-to-l from-green-500 to-emerald-500 px-5 py-3.5 text-white shadow-2xl shadow-green-500/40 transition-transform group-hover:scale-105">
            <WhatsAppIcon className="h-6 w-6" />
            <span className="hidden sm:inline font-bold">احجز الآن</span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
