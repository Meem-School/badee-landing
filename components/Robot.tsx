import { cn } from "@/lib/utils";

type Variant = "blue" | "cyan" | "gold" | "purple";

const palettes: Record<
  Variant,
  { body: string; accent: string; eye: string; glow: string }
> = {
  blue: { body: "#1c3aa8", accent: "#4a6cf7", eye: "#22d3ee", glow: "#4a6cf7" },
  cyan: { body: "#0e7490", accent: "#22d3ee", eye: "#fde68a", glow: "#22d3ee" },
  gold: { body: "#b45309", accent: "#facc15", eye: "#fff", glow: "#facc15" },
  purple: { body: "#5b21b6", accent: "#a78bfa", eye: "#22d3ee", glow: "#a78bfa" },
};

interface RobotProps {
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
}

export function Robot({
  variant = "blue",
  className,
  ariaLabel = "روبوت بديع",
}: RobotProps) {
  const c = palettes[variant];
  return (
    <svg
      viewBox="0 0 200 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
      className={cn("drop-shadow-2xl", className)}
    >
      <defs>
        <linearGradient id={`grad-body-${variant}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={c.accent} stopOpacity="0.95" />
          <stop offset="100%" stopColor={c.body} stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id={`grad-glow-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={c.glow} stopOpacity="0.5" />
          <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="100" cy="200" rx="60" ry="8" fill="#000" opacity="0.25" />
      <circle cx="100" cy="100" r="90" fill={`url(#grad-glow-${variant})`} />

      <rect x="93" y="20" width="14" height="20" rx="4" fill={c.accent} />
      <circle cx="100" cy="18" r="6" fill={c.eye}>
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      <rect
        x="55"
        y="45"
        width="90"
        height="80"
        rx="22"
        fill={`url(#grad-body-${variant})`}
        stroke="#fff"
        strokeOpacity="0.15"
        strokeWidth="1.5"
      />

      <rect
        x="68"
        y="65"
        width="64"
        height="40"
        rx="14"
        fill="#020616"
        stroke={c.accent}
        strokeOpacity="0.6"
        strokeWidth="1.2"
      />

      <circle cx="84" cy="85" r="6.5" fill={c.eye}>
        <animate
          attributeName="r"
          values="6.5;5;6.5"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="116" cy="85" r="6.5" fill={c.eye}>
        <animate
          attributeName="r"
          values="6.5;5;6.5"
          dur="3.5s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </circle>

      <rect x="40" y="55" width="14" height="38" rx="6" fill={c.body} />
      <circle cx="47" cy="74" r="4" fill={c.accent} />
      <rect x="146" y="55" width="14" height="38" rx="6" fill={c.body} />
      <circle cx="153" cy="74" r="4" fill={c.accent} />

      <rect
        x="60"
        y="130"
        width="80"
        height="60"
        rx="16"
        fill={`url(#grad-body-${variant})`}
        stroke="#fff"
        strokeOpacity="0.15"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="160" r="10" fill={c.eye} opacity="0.85">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>

      <rect x="36" y="135" width="20" height="38" rx="8" fill={c.body} />
      <rect x="144" y="135" width="20" height="38" rx="8" fill={c.body} />

      <path
        d="M75 95 Q100 108 125 95"
        stroke={c.accent}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}
