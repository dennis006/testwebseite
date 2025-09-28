# AI-Anweisungen für Pulse Landing Page

## Projektübersicht
Pulse ist eine moderne Landing Page für eine Dating-App, entwickelt mit React, TypeScript und Vite. Die Seite nutzt Tailwind CSS für das Styling und shadcn/ui für die Komponenten-Architektur.

## Architektur & Komponenten-Struktur

### Seiten-Sektionen (`src/sections/`)
- Jede visuelle Sektion ist eine eigenständige Komponente
- Sektionen importieren UI-Komponenten aus `components/ui/`
- Beispiel: `hero-section.tsx` → Haupt-Hero mit Live-Profil-Panel

### UI-Komponenten (`src/components/ui/`)
- Basiert auf shadcn/ui Design-System
- Komponenten sind atomic und wiederverwendbar
- Beispiel Pattern:
```tsx
// components/ui/button.tsx
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(...)
```

### Animationen
- Framer Motion für komplexe Animationen
- Tailwind-animate für einfache Transitions
- Beispiel in `avatar-orbit-section.tsx`

## Entwicklungs-Workflows

### Setup & Installation
```bash
npm install
npm run dev
```

### Build & Deploy
```bash
npm run build    # TypeScript-Check + Production Build
npm run preview  # Lokale Vorschau des Builds
```

### Styling-Konventionen
- Tailwind Utility-Klassen für direktes Styling
- Custom Theme in `tailwind.config.ts`
- CSS-Variablen für globale Styles in `src/styles/globals.css`

### Komponenten-Patterns
- Neue UI-Komponenten unter `components/ui/`
- Neue Sektionen unter `sections/`
- TypeScript Props-Interface für jede Komponente
- React.forwardRef für Komponenten mit Ref-Support

## Externe Abhängigkeiten
- Radix UI (^1.0.0) für zugängliche Primitives
- Lucide React für Icons
- Framer Motion für Animationen
- TypeScript strikt konfiguriert

## Pro-Tipps
- Nutze die vorhandenen shadcn/ui Komponenten als Basis
- Framer Motion für komplexe Animationen, Tailwind für einfache
- Teste responsive Designs mit Tailwind Breakpoints (2xl: 1280px)
- Nutze die Utils aus `src/lib/utils.ts` für gemeinsame Funktionen