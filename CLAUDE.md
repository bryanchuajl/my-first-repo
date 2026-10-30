# CLAUDE.md

## Tech Stack
- Plain HTML, CSS, and JavaScript only.
- No frameworks, no build step: files open directly in a browser.

## Project Structure
Nearly empty for now. Currently:
- `README.md` — repository readme
- `CLAUDE.md` — this file
- `index.html` — portal homepage
- `tool1.html` — Tool 1: smart-light simulator page
- `simulator.js` — Tool 1 logic (sliders, fixed rules, scoring model)
- `styles.css` — shared styles (light and dark theme colours)
- `theme.js` — shared light/dark theme toggle

Pages (`*.html`), styles (`*.css`), and scripts (`*.js`) live at the top level until the project grows enough to need folders.

## Key Requirements
1. Every page must be responsive and work on desktop, tablet, and phone.
2. Users can toggle between a light and a dark theme. The default is the light theme.
3. Text must stay easy to read, with good contrast, in both the light and the dark theme.

## Feature Plan
A web portal where visitors try small web tools about AI and IoT.

### Portal structure
- **Homepage** (`index.html`): a short intro and one card per tool.
- **Opening a tool:** clicking a card opens that tool's own page.
- **Getting back:** every tool page has a "Back to all tools" link to the homepage.
- **Adding a new tool later:** make one new page for the tool, then add one card for it on the homepage. Nothing else changes.

### Phases
1. **Phase 1 — Portal + first tool:** the homepage and one tool, a sensor-to-decision simulator (move fake sensor sliders, see what a simple AI rule decides and why).
   - [x] Portal homepage with a placeholder "Tool 1 — coming soon" card that opens and closes via "Back to all tools"
   - [x] Replace the placeholder with the real tool: a smart-light simulator (fixed rules or a scoring model)
2. **Phase 2 — More tools:** add further small tools, one at a time.
3. **Phase 3 — Polish:** improve and extend based on what visitors use.

## Design Direction
The look is called "Classroom": friendly, rounded, and easy to read. Every new page or tool must follow it.
- **Use the variables in `styles.css`** (`--bg`, `--text`, `--accent`, and so on) and the shared classes (`.card`, `.panel`, `.muted`). Never hard-code a colour, font, or radius in a page. This keeps the light and dark themes working automatically.

### Palette
| Role | Light | Dark |
|---|---|---|
| Page background `--bg` | `#EFF9F6` | `#0D1B18` |
| Card / panel `--card` | `#FFFFFF` | `#14272A` |
| Text `--text` | `#12322B` | `#E6F7F2` |
| Secondary text `--muted` | `#3F5F57` | `#A5C7BE` |
| Borders `--border` | `#BFDDD5` | `#2A4A45` |
| Accent (links, buttons, sliders) `--accent` | `#0F766E` | `#5EEAD4` |
| Text on accent `--accent-text` | `#FFFFFF` | `#0D1B18` |
| Highlight chip / icon tile `--chip-bg`, `--chip-text` | `#FDE68A` / `#3B2A00` | `#4A3A0C` / `#FDE68A` |

All text pairs above meet a contrast ratio of at least 4.5:1 (the accessibility minimum for body text). Check any new colour pair before using it.

### Typography
- Font: Nunito (loaded from Google Fonts in each page's `<head>`), falling back to the system font.
- Weights: 400 body, 600 buttons, 800 headings and brand name.
- Sizes: body 1.125rem; site name 1.4rem; page title (`h2`) 2rem; section title (`h3`) 1.3rem; card title 1.5rem; intro text 1.25rem.

### Spacing and shape
- Spacing steps: 0.5rem, 1rem, 1.5rem, 3rem (`--space-s`, `--space-m`, `--space-l`, `--space-xl`).
- Corners: cards and panels 24px, icon tiles 14px, buttons and chips fully rounded (pills).
- Borders are 2px. Buttons are at least 2.75rem tall so they are easy to tap.
- Page width: content is centred, at most 65rem wide.

## Rules for Claude
- Explain technical terms in plain language.
- Ask before making big changes.
- Ask rather than guess.
