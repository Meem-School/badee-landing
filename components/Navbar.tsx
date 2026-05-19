"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2 group" aria-label="بديع">
          <span className="relative grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-electric-500 font-black text-white text-lg shadow-lg shadow-primary/30">
            ب
          </span>
          <span className="font-display font-black text-lg leading-none tracking-tight">
            {SITE.shortName}
            <span className="block text-[10px] font-medium text-muted-foreground">
              {SITE.tagline}
            </span>
          </span>
        </a>

        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="التنقل الأساسي"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsAppButton size="sm" label="احجز" className="text-sm" />
      </div>
    </motion.header>
  );
}
