---
title: "When to Build an AI Agent"
description: "A four-criterion decision rule for choosing between a custom AI agent and the standard chat. Build only when the task warrants the upfront cost."
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
  - decision-rule
  - prompting
aliases:
  - Agent vs Chat Decision
  - AI Agent Use Criteria
related:
  - how-to-build-a-career-ai-agent
  - four-prompting-principles
  - five-ai-tool-categories
  - ai-use-as-skill
status: published
last_updated: 2026-05-09
---

# When to Build an AI Agent

*Dimension: [[capability|Capability]] · Type: Foundation*

A four-criterion decision rule for choosing between a custom AI agent and the standard chat. Most people default to chat for everything; agents are worth the upfront cost in four specific situations.

Introduced by Laura Rubio (HR Specialist in Learning & Organizational Development, UNAIDS) at the [[sessions/cw-day-3-session-6|Construye tu Asistente de Carrera con IA]] session of the UN Inter-Agency Career Week 2026, on 6 May 2026, delivered in Spanish. Laura demonstrated the criteria with three live examples from her work at UNAIDS, including the "Career Compass" agent.

## The framework

Build a dedicated agent when at least one of the four criteria below is true. If none is true, stay in chat.

### When to use it

- When you find yourself rewriting the same long prompt over and over.
- When you are about to start building an agent and want to verify it is the right move.
- When you are advising a team or a colleague on how to structure their AI use.

### The four criteria

**1. You are about to repeat the same type of prompt.**

The strongest case. If you do CV reviews regularly, or run fit analyses against multiple JDs, or run weekly career-reflection sessions, every time you do the task in chat you re-enter the same context, the same instructions, the same format requests. An agent stores all of that and lets you skip to the conversation.

The break-even point is roughly three repetitions. If you will do the task three or more times, the agent earns its setup cost.

**2. The task requires substantial context to be re-loaded each time.**

Large amounts of background documents, reference frameworks, organisational specificities, your own profile, the JD, the competency model. In chat, you paste it all in every time and risk forgetting something. In an agent, you load it once into the knowledge files and the agent always has access.

Examples: an agent for CV reviews using the UN competency framework; an agent for interview practice that has the role's JD and your achievement bank loaded; an agent that has a specific organisation's strategy document and uses it to frame recommendations.

**3. You are working with a specific framework or methodology.**

When the AI's output should always be structured against a particular framework (UN core competencies, the [[basic-achievement-bank|BASIC Achievement Bank]], a specific feedback rubric, the [[jd-colour-coded-breakdown|JD Colour-Coded Breakdown]] categories), an agent codifies the framework once. Every conversation respects it.

Doing this in chat is possible but unreliable; you can forget to include the framework, or include only part of it.

**4. You want a defined sequential workflow.**

When the AI should follow a specific flow (ask question 1 first, then question 2 only after a satisfactory answer, then summarise into a comparison table at the end), an agent enforces the sequence. The chat is single-turn responsive and does not naturally hold a multi-step workflow across the conversation.

Example from the session: Laura's "Career Compass" agent at UNAIDS asks the user about their current role, then activities, then interpersonal skills, then values, then synthesises a comparison table of role options. That sequence is hard to enforce in raw chat; trivial in an agent.

### Steps

1. **Name the AI use case.** What are you trying to do? Be specific.
2. **Run the four criteria.** Repetition? Context-heavy? Specific framework? Sequential workflow? If at least one is yes, an agent makes sense.
3. **Estimate the agent's lifetime use.** A useful agent gets used 10+ times. If you cannot see that happening, stay in chat or write the prompt template into a saved note.
4. **Pick the platform.** ChatGPT, Copilot, Gemini, Claude. The session noted that as of mid-2026, Copilot and Gemini still allow agent creation in their free tiers; ChatGPT may have moved to paid only. Verify before investing setup time.
5. **Build small first.** A focused agent that does one task well beats a sprawling agent that tries to do everything. The instruction-field character limits (around 8,000 characters in ChatGPT) enforce this anyway.
6. **Test, then iterate.** Test with at least two different scenarios. Fix anything that drifts. The first version of an agent is rarely the final version.

### Worked example

Laura at UNAIDS faces three recurring AI use cases. She runs each through the criteria.

**CV reviews against UN competencies.**

- Repetition: yes, dozens of times a year.
- Context: yes, the UN competency framework plus the agency's HR conventions.
- Specific framework: yes, the competency model.
- Sequential workflow: not strongly.

Three of four. Build an agent. She does. The CV-review agent processes individual CVs against the competency framework with a structured output, and saves her hours per week.

**One-off team coaching reflection.**

- Repetition: no, this is a single conversation.
- Context: low, the conversation is improvised.
- Specific framework: no.
- Sequential workflow: no.

None of four. Stay in chat. She does.

**Career exploration for staff at UNAIDS (the "Career Compass").**

- Repetition: yes, every employee can run it.
- Context: yes, the agent should know UNAIDS's organisational map and the broader career options in the international development space.
- Specific framework: yes, the agent uses a defined value-and-fit model.
- Sequential workflow: yes, the agent asks role, activities, interpersonal skills, values in sequence before synthesising.

All four. Build an agent. She did. The Career Compass is the strongest example in the session.

### Pitfalls

- **Building an agent for one-off tasks.** The setup cost wastes time. Use chat with the [[four-prompting-principles|Four Prompting Principles]] instead.
- **Building an oversized agent.** When the instruction field hits character limits, the agent often ignores parts of the logic. Split into smaller specialised agents.
- **Skipping testing.** An agent that has never been tested with two distinct scenarios will fail in subtle ways during real use. Run two or three calibration runs before relying on it.
- **Treating an agent as a one-time build.** Agents drift over time as the underlying model updates and as your needs change. Plan to revisit and refine periodically.
- **Forgetting safeguards.** The session was explicit: agents need explicit instructions about what biases to avoid, what not to assume, and what sources to base recommendations on. Default model behaviour is not bias-free; agents inherit that unless you push back.
- **Confusing agent description with agent instructions.** The description is a label visible to the user. The instructions field is where all the prompting work actually happens. Most setup time goes into instructions.

### When not to use it

When the task is genuinely one-off (a single career conversation, a single application analysis), or when you are still figuring out what you want the AI to do. Build the chat-version first; if you find yourself repeating it, then promote it to an agent.

When you are working with sensitive personal data or confidential organisational content. Public AI agents and even most enterprise agents store some context; do not put data in that should not be there.


## Related frameworks

- [[how-to-build-a-career-ai-agent|How to Build a Career AI Agent]], the practical tutorial that follows from a yes decision here.
- [[four-prompting-principles|Four Prompting Principles]], the principles that go inside the agent's instructions field.
- [[five-ai-tool-categories|Five AI Tool Categories]], the broader taxonomy of where agents fit in the AI-for-applications stack.
- [[ai-use-as-skill|AI Use as a Skill]], the four signals that should run through any AI-assisted output, including agent output.

---

