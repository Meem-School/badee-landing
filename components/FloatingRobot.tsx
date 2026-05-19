"use client";

import { motion } from "framer-motion";
import { Robot } from "./Robot";
import { cn } from "@/lib/utils";

interface FloatingRobotProps {
  variant?: "blue" | "cyan" | "gold" | "purple";
  message?: string;
  className?: string;
  bubbleSide?: "right" | "left";
  delay?: number;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-20 md:w-24",
  md: "w-28 md:w-36",
  lg: "w-36 md:w-48",
};

export function FloatingRobot({
  variant = "blue",
  message,
  className,
  bubbleSide = "left",
  delay = 0,
  size = "md",
}: FloatingRobotProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={cn("relative pointer-events-none select-none", className)}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className={cn(sizes[size], "relative")}
      >
        <Robot variant={variant} />
      </motion.div>

      {message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
          className={cn(
            "absolute top-2 max-w-[200px] md:max-w-[260px] glass-strong rounded-2xl px-4 py-2.5 text-xs md:text-sm font-semibold text-foreground leading-snug",
            bubbleSide === "left"
              ? "right-full mr-3 rounded-br-sm"
              : "left-full ml-3 rounded-bl-sm",
          )}
          aria-hidden="true"
        >
          {message}
          <span
            className={cn(
              "absolute top-3 w-3 h-3 glass-strong rotate-45",
              bubbleSide === "left"
                ? "right-[-6px] border-l-0 border-b-0"
                : "left-[-6px] border-r-0 border-t-0",
            )}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
