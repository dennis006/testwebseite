import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stories = [
  {
    quote:
      "Pulse hat mich mit Menschen verbunden, die meine Neugier teilen. Wir haben uns in einem Energy Room getroffen und spontan ein Straßenkunst-Projekt gestartet.",
    author: "Mira, 29",
    location: "Berlin",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
  },
  {
    quote:
      "Ich liebe das Onboarding. Es fühlt sich eher wie ein Moodboard an als wie ein Profilformular. Wir planen jetzt gemeinsame City Quests in Paris.",
    author: "Alex & Noah",
    location: "Paris",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=256&q=80",
  },
  {
    quote:
      "Durch die Ritual Packs hatten wir sofort ein gemeinsames Erlebnis. Kein awkward Smalltalk – nur echte Vibes.",
    author: "Sofia, 26",
    location: "Lissabon",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
  },
];

export function StoriesSection() {
  return (
    <section className="section-padding">
      <div className="container space-y-12">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="gradient-text text-sm font-semibold uppercase tracking-[0.35em]"
          >
            Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
            className="mt-4 font-display text-3xl leading-tight sm:text-4xl"
          >
            Begegnungen, die Resonanz erzeugen.
          </motion.h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map((story, index) => (
            <motion.div
              key={story.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="glass-panel flex flex-col gap-4 p-6"
            >
              <div className="flex items-center gap-3">
                <img
                  src={story.image}
                  alt={story.author}
                  className="h-12 w-12 rounded-full border border-white/10 object-cover"
                />
                <div className="text-sm text-white/70">
                  <p className="font-semibold text-white">{story.author}</p>
                  <p>{story.location}</p>
                </div>
              </div>
              <p className="text-sm text-white/70">
                <Quote className="mr-2 inline h-4 w-4 text-primary" />
                {story.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
