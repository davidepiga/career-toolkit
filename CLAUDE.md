# Career Navigation Toolkit, Claude Code Operating Instructions

## What this repo is

The Career Navigation Toolkit, a public reference of frameworks for navigating a career in international development and humanitarian work. Built by Davide Piga from the IACW 2026 sessions.

Stack: Obsidian (authoring) + Quartz (static site) + Cloudflare Pages (deploy).

## Source of truth

The canonical content, design specs, agent prompts, and voice rules live OUTSIDE this repo, in:

`/Users/davide/Library/CloudStorage/GoogleDrive-piga.davide@gmail.com/My Drive/Learning/Learn Career/UN Career Week 2026/`

Do NOT copy or duplicate anything from there into this repo. Read by absolute path.

Key references:

- Framework source: `<DRIVE>/Frameworks/*.md`
- Session source: `<DRIVE>/Sessions/*.md`
- Career Navigation Model: `<DRIVE>/System/Career Navigation Model.md`
- Event Coverage Analysis: `<DRIVE>/System/Agenda Coverage Audit.md`
- Frameworks Library Audit: `<DRIVE>/System/Frameworks Library Audit.md`
- Toolkit design specs: `<DRIVE>/System/Toolkit/01 to 06.md`
- Agent prompts: `<DRIVE>/System/Toolkit/Agents/*.md`
- Voice rules: `<DRIVE>/Purposea/VOICE.md`
- Author and product treatment: `<DRIVE>/System/Toolkit/04 - Author and Product Treatment.md`
- Publish-ready drafts: `<DRIVE>/System/Toolkit/Toolkit Articles/`

Where `<DRIVE>` is the path above.

## Repo layout

- `content/`: the Obsidian vault, the only thing Quartz publishes.
  - `index.md`, `about.md`, `event-coverage-analysis.md`, `dimensions/`, `frameworks/`, `sessions/`
- `quartz/`, `quartz.config.ts`, `quartz.layout.ts`, `package.json`, `tsconfig.json`: Quartz framework. Do not edit unless asked.

## What you typically do here

1. **Migrate a publish-ready draft from Drive to `content/`.** The drafts in `<DRIVE>/System/Toolkit/Toolkit Articles/` are already voice-aligned, with full frontmatter and wikilinks. Copy them into `content/<folder>/<slug>.md`. Verify the frontmatter parses, the wikilinks resolve, and the tags are correct.
2. **Run a build.** `npx quartz build --serve` at the repo root. Open `localhost:8080`.
3. **Apply schema or wikilink fixes ripple-wide.** When the schema in `<DRIVE>/System/Toolkit/06 - Quartz Implementation.md` changes, update every file in `content/` that needs it.
4. **Deploy.** Commit, push to main. Cloudflare Pages or GitHub Pages rebuilds.

## Voice rules

The canonical voice reference is `<DRIVE>/Purposea/VOICE.md`. Read it before editing any prose.

Never:
- Em-dashes (the character "—"). Use commas, colons, sentence breaks.
- Idioms ("cut through the noise", "moving the needle", "circle back").
- Enthusiasm not earned ("great", "amazing", "exciting", exclamation marks).
- Marketing language for the product ("revolutionary", "powerful", "AI-driven").

Always:
- Short sentences.
- Common words.
- First person where Davide speaks. Third person when describing a framework objectively.

## What you do NOT do here

- Compose Home, About, Audit, or dimension pages from scratch. These are narrative work and are authored in Cowork mode by Davide working with the Cowork agent. Drafts arrive in `<DRIVE>/System/Toolkit/Toolkit Articles/Pages/` and `Dimensions/`.
- Hand-craft framework pages from scratch. The first 5-10 gold-standard frameworks are authored in Cowork. After that, you may apply the Markdown Migration Agent prompt at `<DRIVE>/System/Toolkit/Agents/02 - Markdown Migration Agent.md` for the remaining pages, with the gold-standard frameworks attached as few-shot examples.
- Maintain a copy of design specs, voice rules, or context files inside this repo. The Drive folder is canonical.

## When uncertain

Read the relevant design spec in `<DRIVE>/System/Toolkit/`. Files 01 to 06 are sequenced and self-explanatory. If a fact about the product, the audience, or the model is missing, look in the corresponding `<DRIVE>` file.

If you are about to invent a fact (a presenter name, an attribution, a dimension classification), STOP. Flag it for Davide to confirm.