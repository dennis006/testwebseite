import { motion } from "framer-motion";
import { Wand2, Sparkle, Radio, Smile, ArrowRight } from "lucide-react";

import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const steps = [
  {
    icon: Wand2,
    title: "Design deinen Puls",
    description:
      "Erstelle deinen Avatar mit adaptiven Art-Styles, Mood-Playlist und einem 20-Sekunden Vibe-Intro.",
    accent: "from-primary/60 via-secondary/40 to-transparent",
  },
  {
    icon: Radio,
    title: "Check-in in Echtzeit",
    description:
      "Synchronisiere deinen Tagesrhythmus mit AI-gestützten Energy-Checks. Pulse schlägt Matches vor, wenn ihr beide aligned seid.",
    accent: "from-secondary/60 via-accent-500/30 to-transparent",
  },
  {
    icon: Smile,
    title: "Konversationen starten",
    description:
      "Audio-Wellen, Emotion-Widgets und Playful Prompts helfen euch, intuitiv zu connecten – keine Cringe-Momente mehr.",
    accent: "from-accent-500/60 via-primary/30 to-transparent",
  },
];

export function OnboardingJourneySection() {
  return (
    <section className="section-padding">
      <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="gradient-text text-sm font-semibold uppercase tracking-[0.35em]"
          >
            Progressives Onboarding
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
            className="font-display text-3xl leading-tight sm:text-4xl"
          >
            Dein Weg zu besseren Matches fühlt sich wie ein persönliches Ritual an.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="text-base text-white/70"
          >
            Pulse führt dich durch ein dreistufiges Onboarding, das dein Mindset, deine Energie und deine Intentionen erfasst. So entstehen Matches, die nicht nur optisch, sondern emotional passen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-3 text-xs text-white/60"
          >
            <span className="rounded-full border border-white/10 px-3 py-1">Mood-Based Matching</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Intentional Profiles</span>
            <span className="rounded-full border border-white/10 px-3 py-1">AI Resonance Engine</span>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-12 hidden h-32 w-32 rounded-full bg-secondary/30 blur-3xl lg:block" aria-hidden />
          <div className="absolute -right-4 bottom-10 hidden h-24 w-24 rounded-full bg-primary/20 blur-3xl lg:block" aria-hidden />

          <div className="relative grid gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader className="relative">
                      <div className={`absolute -left-12 top-6 h-24 w-24 rounded-full bg-gradient-to-br ${step.accent} blur-3xl opacity-60`} />
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </span>
                        <div>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                          <CardDescription>{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-white/50">
                        <Sparkle className="h-3.5 w-3.5" />
                        <span>+12% bessere Matchqualität bei Beta-Usern</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="mt-8 flex items-center justify-between rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/80 to-slate-950/60 p-6 backdrop-blur-xl"
          >
            <div className="max-w-sm space-y-1 text-sm text-white/70">
              <p className="font-semibold text-white">Pulse Concierge</p>
              <p>Erhalte wöchentliche Szenarien, die dich in neue Social Moments bringen.</p>
            </div>
            <Button variant="outline" className="hidden sm:inline-flex gap-2">
              Jetzt freischalten
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
