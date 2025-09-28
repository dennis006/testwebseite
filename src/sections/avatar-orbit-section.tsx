import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const avatars = [
  {
    name: "Lina",
    description: "Astro-Artist",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=256&q=80",
    vibe: "Mondlicht",
    accent:
      "from-[rgba(244,114,182,0.55)] via-[rgba(244,114,182,0.22)] to-transparent",
  },
  {
    name: "Amir",
    description: "Sound Designer",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80",
    vibe: "Deep House",
    accent:
      "from-[rgba(99,102,241,0.5)] via-[rgba(99,102,241,0.18)] to-transparent",
  },
  {
    name: "Nia",
    description: "Story Curator",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    vibe: "Cinematisch",
    accent:
      "from-[rgba(56,189,248,0.55)] via-[rgba(56,189,248,0.2)] to-transparent",
  },
  {
    name: "Jasper",
    description: "Biohacker",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    vibe: "Glow Rush",
    accent:
      "from-[rgba(129,140,248,0.45)] via-[rgba(244,114,182,0.25)] to-transparent",
  },
  {
    name: "Tara",
    description: "Digital Nomad",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
    vibe: "Sunset Muse",
    accent:
      "from-[rgba(244,114,182,0.55)] via-[rgba(99,102,241,0.2)] to-transparent",
  },
];

function useResponsiveOrbitConfig() {
  const [config, setConfig] = useState(() => ({
    radius: 200,
    ringThickness: 36,
    itemSize: 88,
    innerInset: 12,
  }));

  useEffect(() => {
    const queries = [
      { query: "(min-width: 1280px)", value: { radius: 220, ringThickness: 40, itemSize: 96, innerInset: 14 } },
      { query: "(min-width: 1024px)", value: { radius: 210, ringThickness: 38, itemSize: 92, innerInset: 13 } },
      { query: "(min-width: 640px)", value: { radius: 190, ringThickness: 34, itemSize: 84, innerInset: 12 } },
    ];

    const getConfig = () => {
      if (typeof window === "undefined") {
        return;
      }

      for (const entry of queries) {
        if (window.matchMedia(entry.query).matches) {
          setConfig(entry.value);
          return;
        }
      }

      setConfig({ radius: 180, ringThickness: 32, itemSize: 80, innerInset: 11 });
    };

    getConfig();

    if (typeof window === "undefined") {
      return;
    }

    const listeners = queries.map((entry) => {
      const mediaQuery = window.matchMedia(entry.query);
      const handler = () => getConfig();
      mediaQuery.addEventListener("change", handler);
      return { mediaQuery, handler };
    });

    return () => {
      listeners.forEach(({ mediaQuery, handler }) => {
        mediaQuery.removeEventListener("change", handler);
      });
    };
  }, []);

  return config;
}

export function AvatarOrbitSection() {
  const orbitConfig = useResponsiveOrbitConfig();

  const orbitItems = useMemo(() => {
    const angleStep = 360 / avatars.length;
    const angleOffsets = [-12, 8, -4, 14, -10];

    return avatars.map((avatar, index) => {
      const baseAngle = -90 + index * angleStep;
      const angle = baseAngle + (angleOffsets[index] ?? 0);

      return {
        avatar,
        angle,
      };
    });
  }, []);

  const orbitGeometry = useMemo(() => {
    const outerRadius = orbitConfig.radius + orbitConfig.ringThickness / 2;
    const size = outerRadius * 2;
    const center = size / 2;
    const rItem =
      orbitConfig.radius -
      orbitConfig.ringThickness / 2 -
      orbitConfig.itemSize / 2 -
      orbitConfig.innerInset;

    const positionedItems = orbitItems.map((item) => {
      const angleRad = (item.angle * Math.PI) / 180;
      const x = center + rItem * Math.cos(angleRad);
      const y = center + rItem * Math.sin(angleRad);

      return {
        ...item,
        angleRad,
        position: { x, y },
      };
    });

    return {
      size,
      positionedItems,
    };
  }, [orbitConfig.innerInset, orbitConfig.itemSize, orbitConfig.radius, orbitConfig.ringThickness, orbitItems]);

  const { size: orbitSize, positionedItems } = orbitGeometry;

  const avatarDiameter = useMemo(
    () => Math.max(48, Math.round(orbitConfig.itemSize * 0.52)),
    [orbitConfig.itemSize],
  );

  const signalBridges = useMemo(() => {
    return positionedItems.map((current, index) => {
      const next = positionedItems[(index + 1) % positionedItems.length];

      const dx = next.position.x - current.position.x;
      const dy = next.position.y - current.position.y;
      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      const midpoint = {
        x: (current.position.x + next.position.x) / 2,
        y: (current.position.y + next.position.y) / 2,
      };

      return {
        index,
        angle,
        length,
        midpoint,
      };
    });
  }, [positionedItems]);

  return (
    <section className="section-padding">
      <div className="container grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative order-2 flex justify-center lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950/60 to-slate-950/90 shadow-[0_0_80px_rgba(14,165,233,0.35)]"
            style={{ width: orbitSize, height: orbitSize }}
          >
            <div
              className="pointer-events-none absolute rounded-full border border-dashed border-white/10"
              style={{ inset: orbitConfig.ringThickness * 1.4 }}
            />
            <div className="relative h-full w-full rounded-full overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-slate-950/70" />
              <div
                className="absolute inset-0 rounded-full border border-white/20"
                style={{ borderWidth: orbitConfig.ringThickness }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-10"
              >
                <div className="relative h-full w-full">
                  {signalBridges.map((signal) => (
                    <motion.div
                      key={signal.index}
                      className="pointer-events-none absolute h-px origin-center overflow-visible"
                      style={{
                        width: signal.length,
                        transform: `translate(-50%, -50%) rotate(${signal.angle}deg)`,
                        top: signal.midpoint.y,
                        left: signal.midpoint.x,
                      }}
                      animate={{ opacity: [0.2, 0.9, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: signal.index * 0.4 }}
                    >
                      <div className="relative h-full w-full">
                        <span className="absolute inset-0 block bg-gradient-to-r from-cyan-400/0 via-cyan-300/70 to-cyan-400/0" />
                        <motion.span
                          className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(165,243,252,0.65)]"
                          animate={{ left: ["0%", "100%"] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: signal.index * 0.6 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                  {positionedItems.map(({ avatar, position }, index) => (
                    <motion.div
                      key={avatar.name}
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: position.x,
                        top: position.y,
                        width: orbitConfig.itemSize,
                        height: orbitConfig.itemSize,
                      }}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-full border border-white/10 bg-slate-900/70 px-5 text-center text-white/80 backdrop-blur">
                        <div className={`absolute -inset-4 rounded-full bg-gradient-to-br ${avatar.accent} blur-3xl opacity-60`} />
                        <div className="relative z-10 flex flex-col items-center gap-3">
                          <div className="relative">
                            <img
                              src={avatar.image}
                              alt={avatar.name}
                              className="rounded-full border-2 border-white/20 object-cover"
                              style={{ width: avatarDiameter, height: avatarDiameter }}
                            />
                            <motion.span
                              className="absolute inset-[-12px] rounded-full border border-cyan-300/0"
                              animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.08, 1] }}
                              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                              style={{ boxShadow: "0 0 18px rgba(165, 243, 252, 0.35)" }}
                            />
                          </div>
                          <div className="flex flex-col gap-1 leading-tight">
                            <span className="text-xs font-semibold text-white">{avatar.name}</span>
                            <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                              {avatar.vibe}
                            </span>
                            <span className="text-[11px] text-white/60">{avatar.description}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="glass-panel mt-10 flex w-56 flex-col items-center gap-2 p-5 text-center">
            <span className="gradient-text text-xs uppercase tracking-[0.35em]">Orbit Sync</span>
            <p className="text-xs text-white/80">
              Pulse liest Mikrosignale, wenn eure Avatare kollidieren – so fühlt sich Matching organisch an.
            </p>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-cyan-200/80">
              <span className="h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(165,243,252,0.8)]" />
              Live Signals
              <span className="h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(165,243,252,0.8)]" />
            </div>
          </div>
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
