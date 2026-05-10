---
title: "How to Build a Career AI Agent"
description: "A field-by-field walkthrough for setting up a custom AI agent for a recurring career-development task. Most of the work happens in the instructions field."
type: framework
dimension: Capability
dimension_type: foundation
presenter: "Laura Rubio"
agency: "UNAIDS"
session: "Construye tu Asistente de Carrera con IA"
session_slug: "cw-day-3-session-6"
session_date: 2026-05-06
language: es
tags:
  - framework
  - capability
  - ai-agents
  - tutorial
  - prompting
aliases:
  - Custom AI Agent Setup
  - Career Agent Tutorial
related:
  - when-to-build-an-ai-agent
  - four-prompting-principles
  - five-ai-tool-categories
  - ai-use-as-skill
status: published
last_updated: 2026-05-09
---

# How to Build a Career AI Agent

*Dimension: [[capability|Capability]] · Type: Foundation*

A field-by-field walkthrough for setting up a custom AI agent for a recurring career-development task. Works on ChatGPT, Copilot, Gemini, and similar platforms with minor variations. Most of the work happens in the instructions field, not anywhere else.

Introduced by Laura Rubio (HR Specialist in Learning & Organizational Development, UNAIDS) at the [[sessions/cw-day-3-session-6|Construye tu Asistente de Carrera con IA]] session of the UN Inter-Agency Career Week 2026, on 6 May 2026, delivered in Spanish. Laura demonstrated the build live on ChatGPT and Copilot during the session, walking through every field.

## The framework

The build flow is the same across platforms, with minor naming differences. The eight-component instruction structure below is the load-bearing part.

### When to use it

- After you have decided to build an agent using the [[when-to-build-an-ai-agent|When to Build an AI Agent]] criteria.
- When you have built one agent and want a structured way to build the next.
- When you are training someone else to build agents.

### Where to find the agent builder

| Platform | Path |
|----------|------|
| ChatGPT | Sidebar menu, "GPTs" or "Explore GPTs", then "Create" button (top right). May require a paid plan as of mid-2026. |
| Copilot | "New Agent" option in the agent panel. Free in most enterprise tiers. |
| Gemini | "Gems" section, "Create New Gem". Free tier supports it. |

If a path has changed or is missing, check the platform's documentation. The fields below are common across all of them, with minor naming differences.

### The fields, in order

**Name.** Short, descriptive. The agent's calling card. Examples: "CV Reviewer (UN Competencies)", "Career Reflection Companion", "Interview Practice (Competency-Based)".

**Description.** A short user-facing label. Important when sharing the agent with others; less important if it is for your own use only. Keep it to one or two sentences. This is not where the prompting work happens. The description is a tag, not the brain.

**Instructions (the brain).** The prompt that defines everything the agent does. This is where 90% of the build time goes. The character limit varies by platform, with ChatGPT around 8,000 characters as of writing.

A serviceable structure for the instructions field:

1. **Role.** "You are a career-reflection companion specialised in supporting UN system staff."
2. **Context and objective.** "Your purpose is to help the user explore career options aligned with their values, profile, and current activities."
3. **What you will help the user do.** Concrete list. Reflect on goals, surface options, identify gaps, draft an action plan.
4. **Level of autonomy.** "You may identify patterns and surface insights, but you do not invent experiences, qualifications, or organisational details. When information is missing, ask."
5. **Conversation flow.** Step-by-step. "First, ask about the user's current role and main activities. Second, ask about their non-negotiable values. Third, ask about their interpersonal strengths. Fourth, synthesise a comparison table of three to five role options."
6. **Format of responses.** "Use comparison tables for option lists; use numbered lists for steps; use prose for reflective questions. Keep responses concise. Avoid filler."
7. **What to do on continuation.** "If the user returns in a new conversation, ask whether they want to continue from where they left off or start fresh."
8. **Safeguards.** "Do not assume the user's gender, age, family situation, or nationality. Do not recommend roles based on stereotypes. Base recommendations on the explicit information the user provides; if you draw on broader knowledge, say so explicitly. Do not provide legal, medical, or financial advice."

The eight components are a starting structure. Every agent needs the first six; the last two become more important as the agent does more sensitive work.

**Conversation starters.** The suggested prompts that appear when a user opens the agent for the first time. Three to five short prompts in the user's voice. Examples:

- "Help me explore my career direction and next steps."
- "Walk me through a structured reflection on what I value most at work."
- "Help me prepare for a competency-based interview."

If the agent supports multiple languages, conversation starters in each language are fine; the same instructions can serve all of them, since the underlying model handles the languages.

**Knowledge files.** Documents you upload that the agent can reference. Examples: a UN competency framework PDF, a sample CV, a JD, a values list. The agent uses these as authoritative references rather than inferring from training data.

Practical note: Copilot and similar enterprise agents can connect to organisational systems (email, intranet) and pull live context. This produces more accurate output but raises privacy concerns; verify what the agent has access to before deploying.

**Capabilities.** Toggle which model abilities are active: image generation, code execution, web search, file analysis. Default off for what you do not need; enabling unused capabilities sometimes confuses the model and increases the chance of unexpected behaviour.

For a career-reflection agent, web search is often useful (current job-market context). Image generation is usually not needed.

**Model selection.** If the platform offers it, "automatic" is a reasonable default. For tasks that need precision (fit analyses, structured outputs), pin to a model known for reliability. For exploratory tasks, the automatic selector usually picks adequately.

**Privacy and sharing.** Default to private. Share publicly only when the agent is genuinely meant for others and contains no sensitive context.

### Steps

1. **Name the use case.** One sentence. Specific.
2. **Run the [[four-prompting-principles|Four Prompting Principles]] on the use case.** What context does the agent need? What freedom level? What format? Iterate now, before opening the agent builder.
3. **Open the agent builder on your chosen platform.**
4. **Fill in name, description, and instructions.** Most of the time goes into instructions.
5. **Add 3 to 5 conversation starters.** Keep them short.
6. **Upload knowledge files only if you have them.** A few well-chosen documents beat a long pile.
7. **Configure capabilities.** Disable what is not needed.
8. **Save the agent as private.**
9. **Test with two different scenarios.** Note what drifts. Adjust the instructions.
10. **Use the agent for at least one real task.** Then iterate.

### Worked example

Laura builds a "Reflection Companion" agent live during the session.

- *Name.* "Compañero de reflexión" ("Reflection Companion").
- *Description.* "Helps a UN staff member structure a reflective conversation about career direction." Optional but added because she shares the agent with colleagues.
- *Instructions.* The prompt she had pre-tested. Around 4,000 characters. Includes the eight components above: role, context, helping scope, autonomy limits ("does not invent or assume"), a four-step flow (current role, activities, values, options synthesis), response format (comparison tables for options, prose for reflection), continuation behaviour, and safeguards.
- *Conversation starters.* "Ayúdame a explorar mi carrera profesional y mis siguientes pasos" plus two more in the same vein.
- *Knowledge files.* One sample CV. Not restrictive.
- *Capabilities.* Image generation off, web search on.
- *Privacy.* Private.

The agent saves and immediately runs. Laura tests it; the first conversation respects the four-step flow. She notes that step 3 (interpersonal strengths) sometimes appears before step 2 (values); the order can drift because the instructions are long. She adjusts.

The build takes about 12 minutes once the instructions are pre-drafted. Most of the design work happened before opening the builder.

### Pitfalls

- **Spending most of the time in the wrong field.** The name and description fields are quick. The instructions field is where the design lives. New builders often invert this.
- **Writing instructions in vague language.** "Help the user think about their career" is too vague. "Ask the user about their current role and activities; then ask about non-negotiable values; then synthesise three to five role options in a comparison table" is operational.
- **Hitting the character limit and not splitting.** When instructions get too long, the model starts ignoring parts. Split into specialised agents instead of forcing one monolithic agent.
- **Skipping safeguards.** Default model behaviour is biased in ways that surface when the agent makes recommendations. Explicit anti-bias instructions matter, especially when the agent advises on career direction.
- **No testing before reliance.** An untested agent will fail in subtle ways during a real conversation. Two test scenarios before first real use.
- **Treating the agent as static.** Models update; your needs evolve; conventions shift. Plan to revisit the agent every few months.
- **Pasting confidential or sensitive data into a public agent.** Public agents may share or store context in ways you cannot fully control. Verify the platform's data handling, and never put information in that should not be there.

### When not to use it

When the use case is one-off; the [[when-to-build-an-ai-agent|When to Build an AI Agent]] criteria failed. Build a saved chat prompt instead.

When the agent is going to handle truly sensitive material (personnel decisions, performance dispute documentation, confidential investigations). Use organisation-approved enterprise tools with verified data handling, not consumer agents.


## Related frameworks

- [[when-to-build-an-ai-agent|When to Build an AI Agent]], the upstream decision for whether to build at all.
- [[four-prompting-principles|Four Prompting Principles]], the principles that go inside the instructions field.
- [[five-ai-tool-categories|Five AI Tool Categories]], the taxonomy of where custom agents fit in the broader AI stack.
- [[ai-use-as-skill|AI Use as a Skill]], the four signals that the agent's outputs should also satisfy.

---

