---
title: "Construye tu Asistente de Carrera con IA"
description: "Cómo construir tu propio asistente de carrera con IA, desde definir tus criterios hasta dar instrucciones útiles a un agente."
type: session
slug: cw-day-3-session-6
day: 3
session_number: 6
session_date: 2026-05-06
session_time: "16:30 CEST"
language: es
hosted_by:
  - "UNAIDS"
speakers:
  - name: "Laura Rubio"
    role: "HR Specialist in Learning & Organizational Development"
    agency: "UNAIDS (Bonn)"
    bio_url: "https://learning.unog.ch/node/25706"
primary_dimension: capability
secondary_dimensions:
  - pursuit
  - mindset
frameworks:
  - when-to-build-an-ai-agent
  - five-ai-tool-categories
  - four-prompting-principles
  - how-to-build-a-career-ai-agent
session_url: "https://learning.unog.ch/node/25746"
tags:
  - session
  - day-3
  - capability
  - pursuit
  - mindset
status: published
last_updated: 2026-05-10
---

**Date** · Wednesday, 6 May 2026, 16:30 to 17:30 CEST  
**Hosted by** · UNAIDS  
**Session page** · [UNOG learning](https://learning.unog.ch/node/25746)

**Speakers**

- **Laura Rubio** · HR Specialist in Learning & Organizational Development, UNAIDS (Bonn) · [Bio](https://learning.unog.ch/node/25706)

---

En esta sesión práctica y dinámica, descubrirás cómo utilizar la inteligencia artificial para acompañar tu desarrollo profesional de manera más intencional y estructurada. Exploraremos distintas formas en las que la IA puede apoyar diversas necesidades de carrera, desde la reflexión sobre tu perfil y objetivos, hasta la investigación, el desarrollo de habilidades o la preparación de postulaciones. A partir de estas posibilidades, la sesión introduce los principios clave del prompting para obtener mejores resultados, y avanza hacia la creación de asistentes personalizados que te permitan organizar tu pensamiento, automatizar procesos y dar seguimiento a tus próximos pasos.

## Key takeaways

- Construye un agente cuando vayas a repetir el mismo tipo de tarea, cuando necesites precargar mucho contexto, cuando trabajes con un marco específico, o cuando quieras un flujo de trabajo secuencial definido.
- Los cuatro principios de prompting efectivo son: dar contexto, iterar, calibrar la libertad del modelo, y especificar el formato del output.
- El campo "instrucciones" de un agente es donde ocurre todo el trabajo real de prompting; la "descripción" es solo una etiqueta visible para el usuario.
- Copilot y Gemini permiten crear agentes en su versión gratuita; ChatGPT puede haber restringido esta función a planes de pago.
- Incluye salvaguardas explícitas en las instrucciones: qué no debe asumir el modelo, qué sesgos evitar, en qué fuentes debe basarse.
- El panorama de plataformas y capacidades cambia rápidamente; lo que es cierto hoy puede ser distinto en pocos meses.

### Laura Rubio

Laura Rubio estructuró la sesión alrededor de una tesis central: la pregunta ya no es si usar la IA, sino cómo usarla de forma estratégica. A partir de eso, ofreció tanto un marco conceptual como una demostración práctica de cómo construir asistentes de IA personalizados para el desarrollo profesional.

Empezó mapeando las cuatro formas principales en que la IA puede apoyar una carrera: reflexión sobre objetivos y metas (la IA como compañero de pensamiento), posicionamiento y marca personal, desarrollo de habilidades y práctica (incluida la práctica de idiomas y entrevistas), y preparación de postulaciones, incluyendo el análisis de brechas entre el propio perfil y una vacante. Esto sirve como mapa de uso antes de entrar en cualquier herramienta específica.

A continuación presentó una comparación de las principales plataformas de IA (ChatGPT, Copilot, Gemini, Claude) en función de sus fortalezas y limitaciones para distintos tipos de tareas. Su punto fue práctico: no todos los modelos son igual de buenos para todo, y conviene elegir en función de lo que se quiere hacer. Señaló también que este panorama cambia rápidamente y vale la pena revisarlo con regularidad.

El núcleo instructivo de la sesión fueron los principios de prompting. Laura los organizó en cuatro: dar contexto (cuanto más específica y situada sea la pregunta, mejor la respuesta), iterar (el uso efectivo de la IA es un proceso de ida y vuelta, no un comando único), calibrar la libertad que se le da al modelo (según si se busca exploración creativa o un output acotado y preciso), y especificar el formato del resultado (tablas, prosa, listas) en lugar de dejarlo al criterio del modelo.

Dedicó una parte importante de la sesión a un criterio de decisión concreto: cuándo conviene construir un agente dedicado en vez de usar el chat estándar. La respuesta es clara: cuando vas a necesitar el mismo tipo de prompt repetidamente, cuando la tarea requiere mucho contexto que sería tedioso volver a introducir cada vez, cuando se trabaja con marcos específicos (como las competencias de la ONU para entrevistas, o un esquema de feedback para CVs), o cuando se quiere que la IA siga un flujo de trabajo secuencial definido. Ejemplificó esto con agentes que ella misma construyó en UNAIDS: uno para revisión de CVs con criterios específicos, uno para práctica de entrevistas basadas en competencias, y la "Brújula de Carrera", un agente que guía a los empleados a explorar opciones profesionales en el mercado a partir de su perfil, valores y actividades. Este último lo mostró en vivo, incluyendo el flujo de preguntas que definió para que el agente construya su conocimiento del usuario paso a paso antes de dar recomendaciones.

La segunda mitad fue un tutorial en vivo de creación de un agente de reflexión profesional en ChatGPT y Copilot. Recorrió cada campo: nombre, descripción (opcional, útil principalmente si se comparte con otros), instrucciones (el prompt central, el "cerebro" del agente, donde se define su rol, flujo, formato de respuesta y salvaguardas), conversational starters, archivos de conocimiento y configuración de capacidades. Hizo una distinción importante: la descripción es solo una etiqueta visible para el usuario; las instrucciones son donde ocurre todo el trabajo real de prompting. Señaló además que ambas plataformas tienen un límite de caracteres en el campo de instrucciones (ChatGPT ronda los 8.000), lo que impone una restricción práctica a la complejidad de un agente individual; cuando la lógica es demasiado extensa, conviene dividirla en varios agentes especializados.

También incluyó una nota sobre salvaguardas: es importante especificar en las instrucciones qué sesgos se quiere evitar, qué no debe asumir el modelo, y en qué fuentes debe basarse para sus recomendaciones. La IA no está libre de sesgos, y la forma de mitigarlos es ser explícito al respecto en el prompt.

## Frameworks and models

| Name | What it stands for | How to use it |
|------|--------------------|---------------|
| Comparación de plataformas de IA por función *(reference table, no framework page)* | Tabla que cruza los principales modelos (ChatGPT, Copilot, Gemini, Claude) con sus fortalezas y limitaciones para distintos tipos de tareas | Usarla para elegir la plataforma adecuada según la tarea. *(Considered for promotion to a framework page but not promoted: this is a fast-moving reference snapshot rather than a transferable tool. The platform landscape changes too rapidly to commit to a static page; the decision logic for choosing a tool is captured in [[frameworks/when-to-build-an-ai-agent\|When to Build an AI Agent]] and [[frameworks/five-ai-tool-categories\|Five AI Tool Categories]] instead.)* |
| [[frameworks/when-to-build-an-ai-agent\|When to Build an AI Agent (vs Use the Chat)]] | Four-criterion decision rule for deciding whether to invest in a custom agent or stay in standard chat | Apply when you find yourself rewriting the same long prompt, when the task requires substantial context, when working with a specific framework, or when you want a defined sequential workflow |
| [[frameworks/four-prompting-principles\|Four Prompting Principles]] | Context, Iteration, Freedom, Format | Use for any prompt that matters; also use as the structure inside an agent's instructions field |
| [[frameworks/how-to-build-a-career-ai-agent\|How to Build a Career AI Agent]] | Field-by-field walkthrough for setting up a custom AI agent (name, description, instructions, conversation starters, knowledge files, capabilities) | Apply after the When-to-Build decision has produced a yes; most of the work happens in the instructions field |

## Resources

| Resource | What it is / What it's for | Link |
|----------|-----------------------------|------|
| Herramientas de trabajo: Construye tu asistente de carrera con IA | Documento de trabajo de la sesión con los campos para construir un agente paso a paso y texto de prompt sugerido para cada uno | [[Resources/Herramientadetrabajo-ConstruyetuasistentedecarreraconIA.pdf]] |

---

*Last updated 2026-05-10.*
