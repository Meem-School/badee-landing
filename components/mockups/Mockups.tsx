import { cn } from "@/lib/utils";

const ChromeBar = ({ url }: { url?: string }) => (
  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-white/[0.03]">
    <span className="h-2 w-2 rounded-full bg-red-400/70" />
    <span className="h-2 w-2 rounded-full bg-gold-400/70" />
    <span className="h-2 w-2 rounded-full bg-green-400/70" />
    {url && (
      <span className="mr-auto ml-2 text-[9px] text-muted-foreground/60 font-mono truncate max-w-[150px]">
        {url}
      </span>
    )}
  </div>
);

interface MockupShellProps {
  children: React.ReactNode;
  url?: string;
  className?: string;
}

export function MockupShell({ children, url, className }: MockupShellProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950 border border-white/10 shadow-2xl",
        className,
      )}
    >
      <ChromeBar url={url} />
      <div className="p-3 relative">{children}</div>
    </div>
  );
}

/* ---------------- WEBSITE MOCKUP ---------------- */
export function WebsiteMockup() {
  return (
    <MockupShell url="my-portfolio.dev">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="h-2 w-12 rounded bg-electric-400/80" />
          <div className="flex gap-1">
            <div className="h-1.5 w-6 rounded bg-white/20" />
            <div className="h-1.5 w-6 rounded bg-white/20" />
            <div className="h-1.5 w-6 rounded bg-white/20" />
          </div>
        </div>
        <div className="rounded-md bg-gradient-to-br from-primary/30 to-electric-500/20 p-3 space-y-1.5">
          <div className="h-3 w-3/4 rounded bg-white/50" />
          <div className="h-2 w-full rounded bg-white/20" />
          <div className="h-2 w-2/3 rounded bg-white/20" />
          <div className="h-4 w-16 rounded-md bg-gold-400/80 mt-2" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-8 rounded bg-white/[0.06] border border-white/5" />
          <div className="h-8 rounded bg-white/[0.06] border border-white/5" />
          <div className="h-8 rounded bg-white/[0.06] border border-white/5" />
        </div>
      </div>
    </MockupShell>
  );
}

/* ---------------- AI CHAT MOCKUP ---------------- */
export function AIChatMockup() {
  return (
    <MockupShell url="chat.ai">
      <div className="space-y-2">
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-sm bg-primary/40 px-2.5 py-1.5 max-w-[70%]">
            <div className="h-1.5 w-16 rounded bg-white/60 mb-1" />
            <div className="h-1.5 w-12 rounded bg-white/60" />
          </div>
        </div>
        <div className="flex items-start gap-1.5">
          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-electric-400 to-primary shrink-0" />
          <div className="rounded-2xl rounded-tl-sm bg-white/[0.08] px-2.5 py-1.5 flex-1">
            <div className="h-1.5 w-full rounded bg-white/40 mb-1" />
            <div className="h-1.5 w-5/6 rounded bg-white/40 mb-1" />
            <div className="h-1.5 w-2/3 rounded bg-white/40" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-sm bg-primary/40 px-2.5 py-1.5 max-w-[50%]">
            <div className="h-1.5 w-10 rounded bg-white/60" />
          </div>
        </div>
        <div className="rounded-lg bg-white/[0.04] border border-white/10 px-2 py-1.5 flex items-center gap-1.5">
          <div className="h-1.5 flex-1 rounded bg-white/10" />
          <div className="h-4 w-4 rounded-md bg-gradient-to-br from-electric-400 to-primary" />
        </div>
      </div>
    </MockupShell>
  );
}

/* ---------------- DASHBOARD MOCKUP ---------------- */
export function DashboardMockup() {
  return (
    <MockupShell url="dashboard">
      <div className="grid grid-cols-3 gap-1.5">
        <div className="rounded-md bg-electric-500/20 border border-electric-500/30 p-1.5">
          <div className="h-1 w-6 rounded bg-electric-400/80 mb-1" />
          <div className="h-3 w-8 rounded bg-electric-400" />
        </div>
        <div className="rounded-md bg-gold-400/20 border border-gold-400/30 p-1.5">
          <div className="h-1 w-6 rounded bg-gold-400/80 mb-1" />
          <div className="h-3 w-8 rounded bg-gold-400" />
        </div>
        <div className="rounded-md bg-primary/20 border border-primary/30 p-1.5">
          <div className="h-1 w-6 rounded bg-primary/80 mb-1" />
          <div className="h-3 w-8 rounded bg-primary" />
        </div>
      </div>
      <div className="mt-2 rounded-md bg-white/[0.03] border border-white/5 p-2 h-16 relative overflow-hidden">
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,25 L10,18 L20,22 L30,12 L40,15 L50,8 L60,11 L70,5 L80,9 L90,3 L100,6 L100,30 L0,30 Z"
            fill="url(#chart-grad)"
          />
          <path
            d="M0,25 L10,18 L20,22 L30,12 L40,15 L50,8 L60,11 L70,5 L80,9 L90,3 L100,6"
            stroke="#22d3ee"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </MockupShell>
  );
}

/* ---------------- SLIDES MOCKUP ---------------- */
export function SlidesMockup() {
  return (
    <MockupShell url="slides.ai">
      <div className="aspect-[16/9] rounded-md bg-gradient-to-br from-primary/30 via-navy-800 to-electric-500/20 p-2.5 flex flex-col justify-between">
        <div className="space-y-1">
          <div className="h-2 w-3/4 rounded bg-white/70" />
          <div className="h-1.5 w-1/2 rounded bg-white/40" />
        </div>
        <div className="flex items-end gap-1">
          <div className="h-6 w-2 rounded-sm bg-electric-400/80" />
          <div className="h-10 w-2 rounded-sm bg-electric-400" />
          <div className="h-4 w-2 rounded-sm bg-electric-400/60" />
          <div className="h-12 w-2 rounded-sm bg-gold-400" />
          <div className="h-8 w-2 rounded-sm bg-gold-400/70" />
        </div>
      </div>
      <div className="mt-2 flex gap-1">
        <div className="h-1.5 w-6 rounded bg-electric-400" />
        <div className="h-1.5 w-3 rounded bg-white/20" />
        <div className="h-1.5 w-3 rounded bg-white/20" />
        <div className="h-1.5 w-3 rounded bg-white/20" />
      </div>
    </MockupShell>
  );
}

/* ---------------- STUDY ASSISTANT MOCKUP ---------------- */
export function StudyMockup() {
  return (
    <MockupShell url="study-buddy">
      <div className="space-y-2">
        <div className="rounded-md bg-gradient-to-l from-gold-400/30 to-gold-500/10 border border-gold-400/20 p-2">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <div className="h-1.5 w-16 rounded bg-gold-300/70" />
          </div>
          <div className="h-1.5 w-full rounded bg-white/30 mb-1" />
          <div className="h-1.5 w-4/5 rounded bg-white/30" />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="rounded-md bg-white/[0.04] border border-white/10 p-1.5 space-y-1">
            <div className="h-1 w-8 rounded bg-electric-400" />
            <div className="h-1.5 w-full rounded bg-white/20" />
            <div className="h-1.5 w-3/4 rounded bg-white/20" />
          </div>
          <div className="rounded-md bg-white/[0.04] border border-white/10 p-1.5 space-y-1">
            <div className="h-1 w-8 rounded bg-primary" />
            <div className="h-1.5 w-full rounded bg-white/20" />
            <div className="h-1.5 w-3/4 rounded bg-white/20" />
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

/* ---------------- WORKFLOW MOCKUP ---------------- */
export function WorkflowMockup() {
  return (
    <MockupShell url="workflow.ai">
      <div className="relative h-24">
        <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="wf-line" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#4a6cf7" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <path d="M30,40 Q70,10 100,40 T170,40" stroke="url(#wf-line)" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
          <circle cx="30" cy="40" r="14" fill="#4a6cf7" />
          <circle cx="100" cy="40" r="14" fill="#1c3aa8" stroke="#22d3ee" strokeWidth="1.5" />
          <circle cx="170" cy="40" r="14" fill="#facc15" />
          <text x="30" y="44" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">A</text>
          <text x="100" y="44" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">AI</text>
          <text x="170" y="44" textAnchor="middle" fontSize="10" fill="#020616" fontWeight="700">✓</text>
        </svg>
      </div>
      <div className="flex justify-between text-[8px] text-muted-foreground px-1 -mt-1">
        <span>Input</span>
        <span>Process</span>
        <span>Output</span>
      </div>
    </MockupShell>
  );
}
