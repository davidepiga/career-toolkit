---
title: "Career Gap to Sprint Workflow"
description: "A two-prompt AI workflow that produces a structured fit-and-gap analysis from your CV and a vacancy, then converts the gaps into a 30-day calendar-blocked development sprint."
type: framework
dimension: Pursuit
dimension_type: stage
presenter: "Rolf Reinhardt"
agency: "LinkedIn"
session: "AI for Your Career, Practical Tools and Prompts"
session_slug: "cw-day-3-session-3"
session_date: 2026-05-06
language: en
tags:
  - framework
  - pursuit
  - ai
  - application-strategy
  - sprint
aliases:
  - AI Fit-Analysis to Sprint
  - Two-Prompt Career Development Workflow
related:
  - 3es-of-development
  - seventy-percent-fit-threshold
  - third-eye-principle
  - jd-vs-profile-comparison
status: published
last_updated: 2026-05-09
---

# Career Gap to Sprint Workflow

*Dimension: [[pursuit|Pursuit]] · Type: Stage*

A two-prompt AI workflow that produces a structured fit-and-gap analysis from your CV and a vacancy, then converts the gaps into a 30-day calendar-blocked development sprint.

Introduced by Rolf Reinhardt (LinkedIn) at the [[sessions/cw-day-3-session-3|AI for Your Career, Practical Tools and Prompts]] session of the UN Inter-Agency Career Week 2026, on 6 May 2026. Rolf demonstrated both prompts live during the session. The two-prompt design and the ICS export trick are his.

## The framework

The workflow takes a real vacancy and your CV, produces a gap map, and then converts that map into a calendar-ready sprint. The point is to convert a vague "should I apply?" into a concrete plan.

### When to use it

- When you have spotted a vacancy that is close to your profile but not a clean match, and you want to test whether the gap is closeable in 30 days.
- When you want to stop applying haphazardly and start building a small set of high-quality applications.
- When you are stalling on applications because the fit feels uncertain and you want a more honest read.

### What you need

The job description, copied as text or as a Word/PDF document. Your current CV, also as text or document, or your LinkedIn profile downloaded as PDF. Access to any general-purpose AI assistant (ChatGPT, Claude, Copilot, Gemini). A calendar app that accepts ICS files (Outlook, Google Calendar, Apple Calendar). Roughly one hour for the first run, then 30 minutes for subsequent runs.

### The two prompts in sequence

**Prompt 1. Structured Fit Analysis.** The first prompt asks the AI to analyse your CV against the vacancy and produce a structured, multi-step output:

1. **Input analysis.** Confirm the AI has parsed both documents and understood the role's core responsibilities.
2. **Fit analysis.** For each requirement, classify your match as *clearly demonstrated*, *partially aligned*, or *missing*. The recruiter view: which gap would actually stop a CV from moving forward.
3. **Gap identification.** Name the specific competencies, experiences, or signals that are missing.
4. **Specific development actions.** What you would need to do, concretely, to close each gap.
5. **UN-language translation.** Re-express the most important parts of your profile in the terminology used in the JD, so your LinkedIn and CV match the language UN AI screening tools and recruiters look for.
6. **Overall assessment score.** A numerical fit score, with a target of above 90% before you apply.

The output is not a green light. It is a *gap map*. The decision (apply now, run a sprint first, do not apply) is yours to make on the back of it.

**Prompt 2. 30-Day Career Sprint.** Once the gap analysis is in place, the second prompt converts it into a calendar-ready development sprint. The sprint is asked to be:

- **High-intensity.** 30 days, not a vague long-term plan.
- **Tied to the specific vacancy.** Generic skill development is not the goal; closing this role's gap is.
- **Mixed across the [[3es-of-development|3 E's of Development]].** Not just learning tasks (Education). Includes mentoring check-ins (Exposure) and practice tasks (Experience).
- **Calendar-ready.** Output in ICS file format. You save the file with a `.ics` extension, double-click, and it imports into Outlook or Google Calendar with each task as a blocked time slot.

Each blocked slot has a specific action labelled (Deep Work, Mentoring, Coaching, Study). The 30 days at the end either closed the gap or made the gap visible enough to decide differently.

### Steps

1. **Run prompt 1 with your CV and the JD.** Read the output carefully. Do not act on the score in isolation.
2. **Decide based on the gap map, not the score.** If the score is below 70% and the gap is in eligibility-critical areas (years of experience, mandatory qualifications), do not apply; this is not a 30-day fix. If the gap is in discretionary areas, continue.
3. **Run prompt 2 to convert the gap map into a sprint.** Save the ICS output and import it to your calendar.
4. **Block the time genuinely.** A sprint that lives only in the calendar is decoration; the slots have to be defended.
5. **Run prompt 1 again on day 28.** Check whether the score has moved. If yes, polish the application using the [[third-eye-principle|Third Eye Principle]] and submit. If no, name what changed and what did not, and decide whether to extend or step back.
6. **Always read the AI output before acting on it.** AI can be wrong; you are responsible for what you submit.

### Worked example

An applicant sees a P-3 Career Development Specialist vacancy in the UN system. She feeds her CV and the JD into Copilot using the structured fit-analysis prompt.

The output classifies five core requirements:

- *Career counselling experience*: clearly demonstrated.
- *Career framework design*: partially aligned, with three concrete examples in her CV but no published methodology.
- *Coaching certification*: missing entirely.
- *Multi-stakeholder programme management*: clearly demonstrated.
- *Adult learning research literacy*: partially aligned.

The score lands at 78%. She runs the second prompt to convert the gap into a 30-day sprint:

- *Days 1 to 7*: document five real career-counselling examples using the [[basic-achievement-bank|BASIC]] model (Deep Work). Identify a coach with ICF accreditation in her network and request a 30-minute conversation (Mentoring).
- *Days 8 to 14*: enrol in a foundational ICF-aligned coaching course on Coursera (Education). Run two informal coaching sessions with peers and request feedback (Experience).
- *Days 15 to 21*: draft a published methodology document, building on her three existing examples (Deep Work). Share with two trusted reviewers (Exposure).
- *Days 22 to 28*: refine the cover letter using the methodology document as a credibility anchor; rerun the fit-analysis prompt; iterate.
- *Day 29*: run the [[third-eye-principle|Third Eye Principle]] review.
- *Day 30*: submit.

The score on day 28 lands at 89%. She submits. The gap that was theoretical is now closed by visible work.

### Pitfalls

- **Treating the score as a decision.** It is a calibration. The decision is yours, drawing on the gap map, the [[seventy-percent-fit-threshold|Seventy Percent Fit Threshold]], and your honest read of the role.
- **Skipping the second prompt.** The first prompt without the second produces awareness without action. Most applicants stop here; the value compounds with the sprint.
- **Building a sprint you cannot defend in your calendar.** A sprint that overlaps with three other priorities will not run. Either protect the time or shorten the sprint.
- **Hiding gaps the prompt surfaces.** If the AI calls out a weak claim or an inflated description, that is the recruiter's view too. Fix it now or accept that it will surface in interview.
- **Submitting without reading the AI output.** AI mistakes are recruiter-visible. Always read what you send.
- **Applying the workflow to roles that fail eligibility gates.** If you do not meet the mandatory requirements (years of experience, languages, education), the workflow's score will be misleading. Use the [[two-phase-job-search|Two-Phase Job Search]] phase one filter first.

### When not to use it

When you are dealing with a sensitive or confidential JD or CV (internal-only vacancies, classified contexts, donor-confidential information). Do not paste sensitive personal data or confidential documents into public AI tools. Use organisation-approved enterprise AI environments instead, or do the analysis manually using the [[jd-colour-coded-breakdown|JD Colour-Coded Breakdown]] and [[jd-vs-profile-comparison|JD vs Profile Comparison]].


## Related frameworks

- [[3es-of-development|3 E's of Development]], the development frame that the sprint output respects.
- [[seventy-percent-fit-threshold|Seventy Percent Fit Threshold]], the upstream filter that determines whether the gap is worth a sprint.
- [[third-eye-principle|Third Eye Principle]], the review pass on the application that comes out of the sprint.
- [[jd-vs-profile-comparison|JD vs Profile Comparison]], the manual version of the gap analysis when AI is not appropriate.

---

