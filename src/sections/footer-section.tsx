import { Button } from "../components/ui/button";

const footerLinks = [
  {
    title: "Produkt",
    links: ["Features", "Preise", "Stories", "FAQ"],
  },
  {
    title: "Pulse",
    links: ["Manifest", "Team", "Karriere", "Presse"],
  },
  {
    title: "Support",
    links: ["Help Center", "Community", "Kontakt", "Sicherheit"],
  },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/70">
      <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" aria-hidden />

      <div className="container flex flex-col gap-16 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-lg font-semibold">
              <span className="gradient-text text-2xl font-display">Pulse</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
                Beta
              </span>
            </div>
            <p className="max-w-lg text-sm text-white/70">
              Wir entwickeln Dating neu: tiefgründig, spielerisch und immersiv. Bleib in Bewegung – dein nächstes Abenteuer beginnt in der App.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="sm">iOS Beta</Button>
              <Button variant="secondary" size="sm">
                Android Warteliste
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((column) => (
              <div key={column.title} className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                  {column.title}
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a className="transition hover:text-white" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Pulse. Crafted for Connections.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Datenschutz
            </a>
            <a href="#" className="hover:text-white">
              Impressum
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
