import { motion } from "framer-motion";
import { Sparkles, Mic2, Map, UsersRound, Rocket } from "lucide-react";

const features = [
  {
    title: "Mood Audio",
    description: "Sende kleine Voice-Waves, die automatisch mit Visualizer und Untertiteln versehen werden.",
    icon: Mic2,
    benefits: ["AI Noise Clean", "Sound-Reactions"],
  },
  {
    title: "City Quests",
    description: "Entdecke kuratierte Pop-up Events in deiner Nähe, die zu deinem Puls-Level passen.",
    icon: Map,
    benefits: ["Local Guides", "Mood-Based Rewards"],
  },
  {
    title: "Energy Rooms",
    description: "Springe in Audio-Räume, in denen maximal 6 Menschen in Echtzeit connecten.",
    icon: UsersRound,
    benefits: ["Chemie-Score", "Host Cards"],
  },
  {
    title: "Launch Rituals",
    description: "Starte Dates mit Playlists, Fragen und Micro-Challenges, die ihr gemeinsam auswählt.",
    icon: Rocket,
    benefits: ["Shared Intent", "Sync Timer"],
  },
];

export function FeatureShowcaseSection() {
  return (
    <section className="section-padding">
      <div className="container space-y-12">
        <div className="flex flex-col gap-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="gradient-text text-sm font-semibold uppercase tracking-[0.35em]"
          >
            Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-3xl font-display text-3xl leading-tight sm:text-4xl"
          >
            Pulse schafft Räume, in denen sich Treffen wie gemeinsame Abenteuer anfühlen.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-base text-white/70"
          >
            Unsere Experiences regen zum Interagieren an und bringen euch in Flow. Statt endloser Chats wartet ein kuratiertes Erlebnis auf euch.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
                className="glass-panel group flex flex-col gap-4 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-primary shadow-neon transition-all group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-2 text-left">
                  <p className="text-lg font-semibold text-white">{feature.title}</p>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-white/40">
                  {feature.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="rounded-full border border-white/10 px-3 py-1"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-4xl flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-950/70 to-slate-950/90 p-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-white/40">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Pulse Ritual Packs</span>
          </div>
          <p className="text-lg text-white/80">
            Wähle euren gemeinsamen Flow: Vision Walk, Neon Arcade oder Rooftop Sunrise. Jedes Ritual enthält Story Prompts, Musik und Challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
