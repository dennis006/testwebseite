import { motion } from "framer-motion";
import { useMemo } from "react";

const avatars = [
  {
    name: "Lina",
    description: "Astro-Artist",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=256&q=80",
    vibe: "Mondlicht", 
    accent: "from-primary/60 via-primary/30 to-transparent",
  },
  {
    name: "Amir",
    description: "Sound Designer",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80",
    vibe: "Deep House",
    accent: "from-secondary/60 via-secondary/20 to-transparent",
  },
  {
    name: "Nia",
    description: "Story Curator",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    vibe: "Cinematisch",
    accent: "from-accent-500/70 via-accent-500/20 to-transparent",
  },
  {
    name: "Jasper",
    description: "Biohacker",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    vibe: "Glow Rush",
    accent: "from-secondary/50 via-primary/30 to-transparent",
  },
  {
    name: "Tara",
    description: "Digital Nomad",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
    vibe: "Sunset Muse",
    accent: "from-primary/60 via-secondary/20 to-transparent",
  },
];

const orbitPositions = [
  { x: 0, y: -95 },
  { x: 82, y: -18 },
  { x: 68, y: 82 },
  { x: -82, y: -12 },
  { x: -68, y: 88 },
];

export function AvatarOrbitSection() {
  const pairs = useMemo(
    () =>
      avatars.map((avatar, index) => ({
        avatar,
        position: orbitPositions[index % orbitPositions.length],
      })),
    []
  );

  return (
    <section className="section-padding">
      <div className="container grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative order-2 flex justify-center lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex h-[420px] w-[420px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950/60 to-slate-950/90 shadow-[0_0_80px_rgba(14,165,233,0.35)]"
          >
            <div className="absolute inset-12 rounded-full border border-dashed border-white/10" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6"
            >
              {pairs.map(({ avatar, position }, index) => (
                <motion.div
                  key={avatar.name}
                  className="absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
                  style={{ left: `calc(50% + ${position.x}px)`, top: `calc(50% + ${position.y}px)` }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="relative">
                    <div
                      className={`absolute -inset-3 rounded-full bg-gradient-to-br ${avatar.accent} blur-2xl opacity-70`}
                    />
                    <img
                      src={avatar.image}
                      alt={avatar.name}
                      className="relative h-24 w-24 rounded-full border-2 border-white/20 object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-white">{avatar.name}</span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                      {avatar.vibe}
                    </span>
                    <span className="text-xs text-white/60">{avatar.description}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="glass-panel pointer-events-none absolute -bottom-20 left-1/2 flex w-48 -translate-x-1/2 flex-col items-center gap-2 p-5 text-center">
              <span className="gradient-text text-xs uppercase tracking-[0.35em]">Orbit Sync</span>
              <p className="text-xs text-white/80">
                Pulse liest Mikrosignale, wenn eure Avatare kollidieren – so fühlt sich Matching organisch an.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="order-1 space-y-6 lg:order-2">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="gradient-text text-sm font-semibold uppercase tracking-[0.35em]"
          >
            Lebendige Profile
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
            className="font-display text-3xl leading-snug sm:text-4xl lg:max-w-[28rem]"
          >
            Avatare, die sich bewegen wie du – reagierend auf Stimmung, Zeit und Ort.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="text-base text-white/70"
          >
            Unsere dynamischen Avatare zeigen in Echtzeit, wer du bist – von deiner Lieblingsmusik bis zu deiner aktuellen Energie. Lass andere sehen, wann du offen für neue Connections bist.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            className="grid gap-4 text-sm text-white/80 sm:grid-cols-2"
          >
            <div className="glass-panel space-y-2 p-4">
              <p className="font-semibold">Vibes, nicht Swipes</p>
              <p className="text-white/60">
                Deine Aura aktualisiert sich mit Musik, Wetter und Kalender – so findest du Menschen, die jetzt zu dir passen.
              </p>
            </div>
            <div className="glass-panel space-y-2 p-4">
              <p className="font-semibold">Flow-Konversationen</p>
              <p className="text-white/60">
                Voice-Waves und Prompt-Karten eröffnen Gespräche, die sich intuitiv anfühlen.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
