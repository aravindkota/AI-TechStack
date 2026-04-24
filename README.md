# AI TechStack

Reference repository for AI career roles, roadmaps, curated resources, and project ideas.

---

## Overview

This project organizes existing AI learning resources into a single role-based dashboard so learners can move from exploration to execution.

Each role includes:
- a level-based tech stack (`Beginner`, `Intermediate`, `Advanced`)
- curated GitHub and web references (`Roadmap`, `Projects`, `Resources`, `Papers`)
- portfolio-ready project ideas

## Role Library

| Role | Focus |
| --- | --- |
| AI Engineer | Build and deploy AI-powered products |
| AI Researcher | Advance models through experiments and papers |
| Agentic AI Developer | Build autonomous tool-using agents |
| AI Architect | Design end-to-end AI system architecture |
| Data Scientist | Analyze data and build predictive solutions |
| ML Engineer | Train, optimize, and serve ML models |
| ML Ops Engineer | Build CI/CD and platform pipelines for ML |
| AI Ops Engineer | Operate and monitor production AI systems |
| Prompt Engineer | Design and evaluate robust prompt systems |
| AI Cloud Architect | Architect cloud-native AI platforms |

## Why This Repo

- Role-first structure instead of random resource lists
- Practical progression from fundamentals to advanced depth
- Curated links plus project ideas for portfolio building
- Interactive UI for fast discovery

## Quick Start

```bash
cd ai-dashboard
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Repo Structure

```text
AI-TechStack/
|- ai-dashboard/                # Main runnable React + Vite app
|  |- src/
|  |  |- App.jsx                # Roles, levels, resources, UI logic
|  |  |- main.jsx               # App entry point
|  |- package.json
|- ai-career-dashboard.jsx      # Standalone snapshot
|- ai-career-dashboard-v2.jsx   # Latest standalone snapshot
|- README.md
```

## How To Use

1. Select a role from the sidebar.
2. Pick your level (`Beginner`, `Intermediate`, `Advanced`).
3. Use tabs:
   - `Tech Stack` for what to learn
   - `GitHub Repos` for external references
   - `Project Ideas` for building your portfolio
4. Repeat role-by-role to map your long-term roadmap.

## Curation Notes

- Resource stars and ecosystem trends are time-sensitive.
- This repository curates external resources; it does not replace them.
- Levels are cumulative (advanced assumes beginner + intermediate foundations).

## Roadmap Direction

- Extract role data into structured JSON
- Add role-specific docs in `docs/roles/`
- Add contribution guide for resource updates
- Add screenshots/GIF preview for GitHub
