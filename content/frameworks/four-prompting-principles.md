---
title: "Four Prompting Principles"
description: "Four dimensions for structuring any prompt to a general-purpose AI assistant: give context, iterate, calibrate the freedom you give the model, and specify the output format."
type: framework
dimension: Pursuit
dimension_type: stage
presenter: "Laura Rubio"
agency: "UNAIDS"
session: "Construye tu Asistente de Carrera con IA"
session_slug: "cw-day-3-session-6"
session_date: 2026-05-06
language: es
tags:
  - framework
  - pursuit
  - ai
  - prompting
aliases:
  - Context Iteration Freedom Format
  - Laura's Prompting Principles
related:
  - ai-prompting-for-learning
  - career-gap-to-sprint-workflow
  - when-to-build-an-ai-agent
  - how-to-build-a-career-ai-agent
status: published
last_updated: 2026-05-09
---

# Four Prompting Principles

*Dimension: [[pursuit|Pursuit]] · Type: Stage*

Four dimensions for structuring any prompt to a general-purpose AI assistant: give context, iterate, calibrate the freedom you give the model, and specify the output format.

Introduced by Laura Rubio (UNAIDS) at the [[sessions/cw-day-3-session-6|Construye tu Asistente de Carrera con IA]] session of the UN Inter-Agency Career Week 2026, on 6 May 2026, delivered in Spanish. Laura presented the four principles as the instructional core of the session, before moving into the agent-building tutorial. The principles are platform-agnostic; she demonstrated them on ChatGPT and Copilot but they apply to any general-purpose AI assistant.

## The framework

The principles work for one-off chats and for the instructions you write inside a custom AI agent.

### When to use it

- Whenever you sit down to ask an AI assistant something that matters.
- When you are writing the instructions field of a custom AI agent (see [[when-to-build-an-ai-agent|When to Build an AI Agent]] and [[how-to-build-a-career-ai-agent|How to Build a Career AI Agent]]).
- When you have used AI before but the outputs feel generic and you want to find out why.

### What you need

A specific task you want the AI to help with. Awareness of how much creative latitude is appropriate for that task. 5 to 10 minutes per prompt for the first runs; faster as the principles become habit.

### The four principles

**1. Context.** Give the AI the situation, not just the question.

A weak prompt: *"Generate an image of a boat."* The output could be a yacht, a rowing boat, a cruise ship; you cannot predict.

A strong prompt: *"Generate an image of a small wooden rowing boat with two oars, on a calm lake at dawn, photorealistic, side angle."* The context constrains the output to what you actually want.

For career-development prompts, context typically includes: who you are professionally (role, level, sector), what you are trying to do, the constraint or goal that gives the task its purpose, any relevant background documents or references.

**2. Iteration.** The mechanism is back-and-forth, not single-shot. Send the prompt, read the output, ask the AI to adjust or refine. Most useful AI work happens in the third or fourth turn, not the first.

Specifically: when the first output is wrong or too generic, do not start over. Tell the AI what was off, what you want instead, and what to keep. The model is better at adjusting an existing draft than at producing a perfect one from cold.

**3. Freedom.** Calibrate how much latitude you give the AI based on what the task needs.

- *Creative exploration*: high freedom. *"Suggest five different career directions I might consider given this profile, including unconventional options."* The aim is variance.
- *Bounded precision*: low freedom. *"Identify the exact match and gap between my CV and this JD. Do not infer experience that is not in the document; do not invent qualifications."* The aim is accuracy.

The same task can need different freedom levels at different points. The early phase of a career exploration benefits from high freedom; the late phase of a fit analysis needs low freedom.

**4. Format.** Specify the output format you want, in advance.

If you do not specify, you get the AI's default (usually long prose). For most career-development tasks, that is the wrong format.

Concrete formats worth requesting: *"Return as a comparison table with these columns..."*, *"Return as a numbered list of five items, each one sentence long"*, *"Return as a structured JSON with these keys..."*, *"Return as a one-paragraph executive summary plus a bullet list of the supporting evidence"*.

The format choice is also a thinking choice. Asking for a comparison table forces the AI to make distinctions explicit. Asking for a structured list forces it to commit to specific items rather than hedge.

### Steps

1. **Name the task.** What do you actually want the AI to produce or help with?
2. **Add context.** Role, situation, constraint, purpose. The more specific, the better the output.
3. **Decide the freedom level.** Are you exploring or converging?
4. **Specify the format.** Pick the output structure that fits the task.
5. **Send the prompt.** Read the output critically.
6. **Iterate.** Tell the AI what to keep, what to change, and what to add. Repeat until the output is useful.

### Worked example

A programme officer wants to use AI to think through her next career move. She works through the four principles.

Weak first prompt: *"What should I do next in my career?"*

The output is generic motivational advice. She rewrites using the principles.

Strong prompt:

> *Context.* I am a P-3 programme officer at a UN agency, ten years of experience in WASH and adjacent public-health programming. I am considering whether to pursue a senior specialist role in the same domain, pivot toward climate-and-health work, or move to an INGO. I have one year of personal flexibility for relocation; family situation supports international moves.
>
> *Freedom.* High freedom. I want exploration of options I have not considered, not validation of the three I already named.
>
> *Format.* Return a comparison table with five rows (one per option, including options I have not named) and four columns: option name, why it might fit my profile, what the realistic 24-month path looks like, the single biggest risk.

The output is now a structured comparison with two options she had not considered (climate-resilience programming at a regional bank, M&E specialism at a multilateral fund), each with a concrete path and risk.

She iterates: *"Take the climate-resilience option. Walk me through the specific skills I would need to build over the next 12 months to make a credible application. Format: numbered list, max five items, with one concrete development action per item."*

The third turn produces a usable starting plan.

### Pitfalls

- **Skipping context to save typing.** A 30-second context block saves three iterations later. The cost of explicitness is far lower than the cost of generic output.
- **Single-shot mode.** Treating the AI like a search engine that returns the right answer on the first query. The work is in the iteration; expect three to five turns.
- **Defaulting to high freedom for every task.** High freedom on a fit analysis produces fluffy hallucinations. Match the freedom level to the task.
- **Leaving format unspecified.** Long prose is rarely the most useful output. Tables, lists, and structured outputs force the AI to commit.
- **Confusing prompting principles with prompting tricks.** Prompt-engineering tips ("act as a senior recruiter", "think step by step") have their place, but the four principles are the load-bearing structure underneath. Get them right and the tricks become marginal.
- **Pasting sensitive data into public AI tools.** The principles do not change the privacy rules. Strip personally identifiable information and confidential context before pasting.

### When not to use it

When the task is sensitive enough that no AI involvement is appropriate (confidential personnel matters, identifying details of colleagues, classified content). The principles do not legitimise the use; they only improve outputs when AI use is already appropriate.

## How I use it

*Personal note pending. Davide to fill.*

## Related frameworks

- [[ai-prompting-for-learning|AI Prompting for Learning]], Tom Frohner's three principles for the specific case of learning support, which complement the broader four here.
- [[career-gap-to-sprint-workflow|Career Gap to Sprint Workflow]], the career-specific application of structured prompting.
- [[when-to-build-an-ai-agent|When to Build an AI Agent]], the decision criterion for whether to embed these principles into a reusable agent.
- [[how-to-build-a-career-ai-agent|How to Build a Career AI Agent]], the tutorial structure that uses the principles in the instructions field.

---

*Notes compiled by [[about|Davide Piga]]. Last updated 2026-05-09.*
