# Forest Canopy — Slide Design Style Guide

> Theme: **Forest Canopy** — Natural, grounded, scholarly.
> For: React 19 + TypeScript + Vite + Tailwind CSS 4 presentation project.

---

## 1. Color Palette

Use these exact hex values consistently across all slides. Define them as CSS variables in `index.css` for easy reference:

```css
:root {
  --color-forest-green: #2d4a2b;  /* Primary dark — headers, emphasis */
  --color-sage:         #7d8471;  /* Muted accent — secondary text, borders */
  --color-olive:        #a4ac86;  /* Light accent — highlights, data points */
  --color-ivory:        #faf9f6;  /* Background — main slide canvas */
}
```

### Usage Rules

| Element | Color | Notes |
|---|---|---|
| Slide background | `#faf9f6` (Ivory) | Always the base canvas |
| Primary headings | `#2d4a2b` (Forest Green) | H1, H2, section titles |
| Body text | `#2d4a2b` at 85% opacity | Ensure readability on ivory |
| Secondary / caption text | `#7d8471` (Sage) | Footnotes, sources, labels |
| Accent elements | `#a4ac86` (Olive) | Highlight bars, bullet markers, data emphasis |
| Borders / dividers | `#7d8471` at 40% opacity | Subtle separators |
| Links / interactive | `#2d4a2b` with underline or `#a4ac86` on hover | Clear affordance |

### Tailwind Utility Mapping

If using Tailwind's arbitrary value syntax:

```
bg-[#faf9f6]         /* background */
text-[#2d4a2b]       /* primary text */
text-[#7d8471]       /* secondary text */
text-[#a4ac86]       /* accent text */
border-[#7d8471]/40  /* subtle divider */
bg-[#2d4a2b]         /* solid accent block */
bg-[#a4ac86]         /* highlight bar */
```

---

## 2. Typography

| Role | Font | Weight | Size (slide context) |
|---|---|---|---|
| **Headings (H1)** | FreeSerif Bold | 700 | 48–60px |
| **Subheadings (H2/H3)** | FreeSerif Bold | 700 | 32–40px |
| **Body text** | FreeSans | 400 | 18–24px |
| **Captions / footnotes** | FreeSans | 400 | 14–16px |
| **Code / monospace** | FreeMono | 400 | 16px |

### Font Import

Add to your project's CSS or HTML:

```css
/* If using Google Fonts alternatives with similar feel: */
@import url('https://fonts.googleapis.com/css2?family=EB+Serif:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@400;600&display=swap');

/* Fallback stack: */
/* Headings: FreeSerif Bold → "EB Serif", Georgia, "Times New Roman", serif */
/* Body: FreeSans → "Source Sans 3", "Helvetica Neue", Arial, sans-serif */
```

Or, if FreeSerif/FreeSans are installed locally:

```css
.font-heading {
  font-family: 'FreeSerif', 'EB Serif', Georgia, serif;
  font-weight: 700;
}

.font-body {
  font-family: 'FreeSans', 'Source Sans 3', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
}
```

### Tailwind Config Extension

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        heading: ['FreeSerif', 'EB Serif', 'Georgia', 'serif'],
        body: ['FreeSans', 'Source Sans 3', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['FreeMono', 'Consolas', 'monospace'],
      },
      colors: {
        forest: '#2d4a2b',
        sage: '#7d8471',
        olive: '#a4ac86',
        ivory: '#faf9f6',
      },
    },
  },
}
```

---

## 3. Slide Layout Principles

### Structure

- **Generous whitespace** — Forest Canopy breathes. Never crowd slides.
- **Single-column dominance** — Primary content flows vertically. Two-column only for side-by-side data comparison.
- **Clear hierarchy** — One H1 per slide. H2 for subsections. Body in clear hierarchy steps.

### Spacing

```
Slide padding:      48px (all sides minimum)
Between sections:   32px
Between paragraphs: 16px
Line height:        1.6–1.8 for body text
```

### Divider Style

Use thin sage-colored lines at 40% opacity:

```html
<hr class="border-[#7d8471]/40 my-8" />
```

---

## 4. Data Visualization Guidelines

### Charts & Graphs

- **Primary data series**: `#2d4a2b` (Forest Green)
- **Secondary series**: `#a4ac86` (Olive)
- **Tertiary series**: `#7d8471` (Sage)
- **Background**: `#faf9f6` (Ivory)
- **Grid lines**: `#7d8471` at 20% opacity
- **Axis labels**: `#7d8471` (Sage), 14px

### Recommended Chart Libraries

For React 19 compatibility:
- **Recharts** — best for standard charts (line, bar, area, pie)
- **Chart.js** (via react-chartjs-2) — good alternative
- **D3.js** — for custom visualizations

### Chart Style Example (Recharts)

```tsx
const chartTheme = {
  primary: '#2d4a2b',
  secondary: '#a4ac86',
  tertiary: '#7d8471',
  grid: 'rgba(125, 132, 113, 0.2)',
  text: '#7d8471',
  background: '#faf9f6',
};
```

### Tables

- Header row: `bg-[#2d4a2b] text-[#faf9f6]`
- Alternating rows: no stripe, use subtle bottom borders
- Cell borders: `border-[#7d8471]/20`
- Padding: `px-4 py-2`
- Font: FreeSans, 16px

---

## 5. Component Patterns

### Slide Container

```tsx
function Slide({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`min-h-screen bg-[#faf9f6] p-12 font-body text-[#2d4a2b] ${className}`}>
      {children}
    </div>
  );
}
```

### Section Title

```tsx
function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h1 className="font-heading text-5xl text-[#2d4a2b]">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-xl text-[#7d8471]">{subtitle}</p>
      )}
      <hr className="mt-4 border-[#7d8471]/40" />
    </div>
  );
}
```

### Bullet List

```tsx
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#a4ac86]" />
          <span className="text-lg leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
```

### Highlight Card

```tsx
function HighlightCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-[#7d8471]/20 bg-[#faf9f6] p-6 shadow-sm">
      {children}
    </div>
  );
}
```

### Quote / Callout

```tsx
function Callout({ text, source }: { text: string; source?: string }) {
  return (
    <blockquote className="border-l-4 border-[#a4ac86] pl-6 italic">
      <p className="text-xl text-[#2d4a2b]/90">{text}</p>
      {source && <cite className="mt-2 block text-sm text-[#7d8471]">{source}</cite>}
    </blockquote>
  );
}
```

---

## 6. Transition & Animation Guidelines

### Philosophy

Keep transitions **restrained and purposeful**. Academic presentations should feel composed, not theatrical.

### Recommended Patterns

- **Slide enter**: Fade in, 300ms, ease-out
- **Content reveal**: Stagger fade, 200ms per element, 100ms delay between
- **Data animation**: Chart draw, 600ms, ease-in-out

### Implementation (CSS-only)

```css
.slide-enter {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.stagger-1 { animation-delay: 0ms; }
.stagger-2 { animation-delay: 100ms; }
.stagger-3 { animation-delay: 200ms; }
```

---

## 7. What to Avoid

- No bright/neon accent colors — stick to the Forest Canopy palette
- No purple/blue gradients — they conflict with the earth tone identity
- No heavy drop shadows — keep elevation subtle (shadow-sm at most)
- No decorative icons or illustrations that feel cartoonish
- No dense text blocks — if content is long, split across slides
- No animated transitions that bounce, spin, or use 3D effects
- No rounded corners larger than `rounded-lg` — keep geometry clean

---

## 8. Quick Reference Card

```
PRIMARY    #2d4a2b  Forest Green  → headings, primary data
ACCENT     #a4ac86  Olive         → highlights, bullets, emphasis
SECONDARY  #7d8471  Sage          → captions, labels, dividers
BACKGROUND #faf9f6  Ivory         → all slide backgrounds

HEADING    FreeSerif Bold
BODY       FreeSans
CODE       FreeMono
```

---

## 9. Project File Structure Suggestion

```
src/
  components/
    Slide.tsx          # Base slide wrapper
    SectionTitle.tsx   # Title component
    BulletList.tsx     # Bullet list
    HighlightCard.tsx  # Card component
    Callout.tsx        # Quote/callout
    ChartWrapper.tsx   # Chart theme wrapper
  slides/
    01-intro.tsx
    02-background.tsx
    ...
  styles/
    index.css          # CSS variables + animations
  App.tsx
  main.tsx
```

---

*This style guide is derived from the Forest Canopy theme specification.*
*Source: theme-factory skill — themes/forest-canopy.md*
