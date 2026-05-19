import Image from "next/image";
import { SITE, NAV_LINKS, TEAM, WHATSAPP_LINK, WHATSAPP_NUMBER_DISPLAY } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const hashtags = ["#بديع", "#مبدعون_بلا_حدود", "#AI_للمراهقين", "#Meem_School"];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950/60 backdrop-blur-xl">
      <div className="container py-14 md:py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <span className="grid place-items-center h-20 w-20 rounded-2xl bg-white shadow-lg shadow-primary/20 ring-1 ring-white/10 overflow-hidden">
                <Image
                  src="/Badee-logo.jpeg"
                  alt="شعار برنامج بديع — مبدعون بلا حدود"
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </span>

              <span aria-hidden="true" className="h-12 w-px bg-white/10" />

              <a
                href="https://www.instagram.com/meem.online.school"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group"
                aria-label={`${TEAM.name} — Meem School`}
              >
                <span className="grid place-items-center h-20 w-20 rounded-2xl bg-white shadow-lg shadow-electric-500/20 ring-1 ring-white/10 overflow-hidden transition-transform group-hover:scale-105">
                  <Image
                    src="/Meem-logo.jpeg"
                    alt="شعار مدرسة ميم — Meem School"
                    width={80}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="hidden sm:block">
                  <span className="font-display font-black text-sm leading-none block">
                    {TEAM.name}
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-1 block">
                    Powered by Meem
                  </span>
                </span>
              </a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-md">
              برنامج بديع — حضانة المبدعين العرب في عالم الذكاء الاصطناعي. نحوّل الشباب
              من مستهلكين إلى صنّاع للمستقبل.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {hashtags.map((h) => (
                <span
                  key={h}
                  className="text-xs font-bold text-electric-400 bg-electric-500/10 border border-electric-500/20 rounded-full px-3 py-1"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-black text-sm uppercase tracking-widest text-foreground/80 mb-4">
              روابط سريعة
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display font-black text-sm uppercase tracking-widest text-foreground/80 mb-4">
              تواصل معنا
            </h4>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-green-500 to-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {WHATSAPP_NUMBER_DISPLAY}
            </a>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              متاحين للرد على استفساراتك يومياً من 10 ص حتى 10 م.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-muted-foreground">
            مُقدَّم من{" "}
            <span className="font-bold text-foreground">{SITE.poweredBy}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
