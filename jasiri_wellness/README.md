🧾 README – Jasiri MindMate Harmony Space
AI Mental-Wellbeing Companion using OSP Graphs + Multi-Agent Jac Architecture
🌱 Project Overview

MindMate Harmony Space is an AI-powered mental-wellbeing companion that understands mood patterns, detects emotional trends, and delivers personalized coping strategies over time.

It uses:
✔ OSP Graphs to model emotions, triggers, habits, and coping strategies
✔ Multi-Agent Design (Jac Walkers + byLLM flows)
✔ Graph reasoning for emotional trend analysis
✔ Spawn() based interactions — NO direct API calls

🧩 System Architecture
🧠 Core Components
| Layer                      | Description                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------- |
| **OSP Graph Layer**        | Stores emotional states, triggers, habits, suggestions, journal entries & weekly resilience score |
| **Agents (Walkers + LLM)** | Analyze mood → update graph → generate supportive recommendations                                 |
| **Jac Client / Frontend**  | Mood logging (emoji/text/voice), journaling, visualization & insights                             |
| **Dataset**                | Sample emotional logs for demo & trend analysis                                                   |
| **Evaluation Module**      | Strategy relevance + mood improvement tracking                                                    |

🤖 Multi-Agent Design (Jac Walkers)

Each agent has a clear responsibility (planner, analyzer, critic, executor).
| Agent / Walker           | Role                                  | Input Trigger             | Output                           |
| ------------------------ | ------------------------------------- | ------------------------- | -------------------------------- |
| `ListenerWalker`         | Capture mood input & detect sentiment | Mood text/voice           | EmotionNode + LLM classification |
| `TrendAnalyzerWalker`    | Detect emotional transitions & risks  | Daily/weekly check        | Mood change summary              |
| `SupportCompanionWalker` | Suggest coping strategies             | If negative mood detected | Breathing, journaling tips       |
| `MentorPlannerWalker`    | Generate weekly emotional growth plan | Every Sunday              | Report + recommended goals       |

🧭 Agent Interaction Flow
User → Spawn(ListenerWalker)
ListenerWalker → calls byLLM (sentiment + extract triggers)
↓
TrendAnalyzerWalker (graph reasoning)
↓
SupportCompanionWalker (generates advice)
↓
MentorPlannerWalker (weekly plan)

🧬 OSP Graph Design
Node Types
| Node Type             | Description                                     |
| --------------------- | ----------------------------------------------- |
| `EmotionNode`         | Stored mood with timestamp + intensity          |
| `TriggerNode`         | Detected cause (weather, social stress, sleep)  |
| `ActivityNode`        | Actions taken (exercise, scrolling, journaling) |
| `SuggestionNode`      | Coping strategy / AI recommendation             |
| `JournalNode`         | User text → analyzed & linked to emotions       |
| `ResilienceScoreNode` | Weekly user progress score                      |

Edge Types
| Edge                  | Meaning                       |
| --------------------- | ----------------------------- |
| `caused_by`           | Emotion ← Trigger             |
| `managed_with`        | Emotion → Suggestion/Activity |
| `related_to`          | Emotion ↔ JournalEntry        |
| `improves_resilience` | Activity → ResilienceScore    |

Why Graph Instead of Plain REST?
| Benefit                   | Graph Advantage                   |
| ------------------------- | --------------------------------- |
| Track emotional journeys  | Traverse EmotionNode history      |
| Find best coping strategy | Path scoring between nodes        |
| Discover hidden patterns  | Graph clustering                  |
| Personalized support      | Shortest path to helpful strategy |

💬 byLLM Integration
✔ 1️⃣ Analytical use
Input: “I'm restless & worried about tomorrow”
LLM Output:
{
  "emotion": "nervousness",
  "intensity": 6,
  "trigger_hint": "uncertainty about future",
  "requires_support": true
}

✔ 2️⃣ Generative use
Generate two calming suggestions for evening anxiety.
Output example:

Try 4-7-8 breathing pattern

Write 3 things that went well today

🖥️ Jac Client / Frontend Flow
Example cURL / Postman Usage
➡ Uses Spawn() (NOT direct API call)
curl -X POST http://localhost:8000/spawn \
     -d '{ "walker": "ListenerWalker", "inputs": {"mood": "I feel anxious"} }'

UI Components

✔ Mood logging (emoji / text / voice)
✔ Journaling with AI-assisted prompts
✔ OSP graph visualization of emotions → triggers → habits
✔ Weekly emotional insights timeline

📀 Data & Evaluation Plan

Seed Dataset:
Sample moods
Journals
Triggers (sleep, traffic, deadlines)
Coping strategy outcomes

Evaluation Metrics
| Metric                             | How It’s Measured                       |
| ---------------------------------- | --------------------------------------- |
| Recommendation relevance           | User feedback (“helpful / not helpful”) |
| Emotional trend detection accuracy | Compare AI vs user-provided labels      |
| User engagement                    | Mood logs per week                      |
| Mood stability score               | Graph transition smoothness             |
