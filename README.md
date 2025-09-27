# Pulse — Progressive Dating Landingpage

Eine moderne, experimentelle Landingpage für eine Dating-App, inspiriert von Plattformen wie Lovoo oder Tinder – jedoch mit eigenständigem Look & Feel. Gebaut mit Vite, React, TypeScript, Tailwind CSS und dem shadcn/ui Komponentenstil.

## Features

- 🎨 **Hero-Erlebnis mit Live-Profil-Panel**: Dynamische Statistiken, animierte Komponenten und interaktive CTA-Elemente.
- 🪐 **Avatar-Orbit Visualisierung**: Animierte Avatare in einer rotierenden Galaxie, die die dynamischen Profile von Pulse zeigen.
- 🧭 **Progressives Onboarding**: Drei Steps mit Glassmorphism-Karten, Icons und Motion-Feedback.
- 🚀 **Experience Showcase**: Grid mit besonderen Dating-Features wie Mood Audio, City Quests und Ritual Packs.
- 💬 **Real Stories**: Testimonials mit animiertem Fade-In.
- 📱 **Floating Call-to-Action**: Beta-Zugang Hinweis mit sanfter Motion.

## Tech-Stack

- [Vite](https://vitejs.dev/) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) mit Custom Theme & Utility-Klassen
- [shadcn/ui](https://ui.shadcn.com/) Komponentenprinzipien (Button, Card, Badge)
- [Framer Motion](https://www.framer.com/motion/) für Animationen
- [Lucide Icons](https://lucide.dev/) für einheitliche Iconography

## Projektstruktur

```
.
├── index.html
├── package.json
├── postcss.config.cjs
├── tailwind.config.ts
├── tsconfig*.json
└── src
    ├── App.tsx
    ├── main.tsx
    ├── styles/
    │   └── globals.css
    ├── lib/
    │   └── utils.ts
    ├── components/
    │   ├── floating-cta.tsx
    │   └── ui/
    │       ├── badge.tsx
    │       ├── button.tsx
    │       └── card.tsx
    └── sections/
        ├── avatar-orbit-section.tsx
        ├── feature-showcase-section.tsx
        ├── footer-section.tsx
        ├── hero-section.tsx
        ├── onboarding-journey-section.tsx
        └── stories-section.tsx
```

## Setup & Entwicklung

> **Hinweis:** Der Container hat keinen Internetzugang, daher sind npm-Installationen hier nicht möglich. Für lokales Testing und Deployment führe die Schritte außerhalb der Umgebung aus.

1. Repository klonen
2. `npm install`
3. `npm run dev`
4. Seite unter `http://localhost:5173` öffnen

## Lizenz

MIT
