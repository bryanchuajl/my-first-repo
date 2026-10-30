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

## Rules for Claude
- Explain technical terms in plain language.
- Ask before making big changes.
- Ask rather than guess.
