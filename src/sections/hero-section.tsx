import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const stats = [
  { label: "Matches in Echtzeit", value: "+120K" },
  { label: "Beta-Mitglieder", value: "42 Länder" },
  { label: "Dates vermittelt", value: "3.5 Mio" },
];

export function HeroSection() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid" aria-hidden />
      <div className="absolute -top-32 right-0 h-[460px] w-[460px] rounded-full bg-primary/40 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 left-[-10%] h-[380px] w-[380px] rounded-full bg-secondary/40 blur-3xl" aria-hidden />

      <div className="relative container flex flex-col items-center gap-8 pb-24 pt-28 text-center sm:pt-32">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-white/70">
          <Star className="h-4 w-4 text-primary" />
          <span>PULSE BETA</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          Fühle den Rhythmus echter Chemie – entdecke Matches, die mit dir schwingen.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl text-base text-white/70 sm:text-lg"
        >
          Pulse kombiniert emotionale Resonanz mit intelligentem Matching. Dank Live-Profilen, Mood-Audio und Reaktionskarten lernst du Menschen kennen, bevor ihr das erste Wort schreibt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="gap-2">
            Jetzt Beta testen
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="lg" className="gap-2">
            Live-Demo ansehen
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/60"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-sm font-semibold text-white/90">{stat.value}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          className="relative mt-12 w-full max-w-4xl rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-glow backdrop-blur-xl"
        >
          <Badge variant="glow" className="mb-4 inline-flex items-center gap-2 text-xs">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
            </span>
            Live Session
          </Badge>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass-panel flex flex-col gap-3 rounded-2xl p-6 text-left">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=96&q=80"
                  alt="Profil"
                  className="h-12 w-12 rounded-full border-2 border-white/20 object-cover"
                />
                <div>
                  <p className="font-semibold">Noah, 27</p>
                  <p className="text-xs text-white/60">Mood: Sonnenaufgang in Lissabon</p>
                </div>
              </div>
              <p className="text-sm text-white/70">
                „Ich liebe Menschen, die spontan sind. Lass uns für einen Kaffee am Wasser treffen und sehen, wohin die Vibes gehen.“
              </p>
              <div className="flex gap-2">
                <Badge variant="outline">Audio-Vibe</Badge>
                <Badge variant="outline">Real-Time</Badge>
              </div>
            </div>
            <div className="relative flex flex-col justify-between gap-4 rounded-2xl bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-slate-950/80 p-6 text-left">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white/80">Chemie-Prognose</p>
                <span className="text-lg font-semibold text-primary">92%</span>
              </div>
              <p className="text-sm text-white/70">
                Basierend auf euren Energy-Checks, Musik-Vibes und Social Resonance.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex flex-1 flex-col gap-2">
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-primary via-secondary to-accent-500" />
                  </div>
                  <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/50">
                    <span>Emotion</span>
                    <span>82%</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="h-24 w-24 rounded-full border border-white/10 bg-white/5 p-2">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary/40 via-secondary/30 to-accent-500/40 text-sm font-semibold text-white">
                      Synced
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
