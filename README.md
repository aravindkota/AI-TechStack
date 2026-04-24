# AI TechStack Career Dashboard

A React + Vite dashboard that helps learners explore AI career paths, recommended GitHub repositories, and project ideas by skill level.

The app presents 10 AI-related roles and lets users switch between:
- Tech stack recommendations
- Curated GitHub repos
- Portfolio project ideas

## Features

- 10 AI roles (AI Engineer, AI Researcher, Agentic AI Developer, and more)
- 3 progressive levels: Beginner, Intermediate, Advanced
- Searchable role sidebar
- Tabbed role detail view:
  - Tech Stack
  - GitHub Repos
  - Project Ideas
- Curated repository metadata (type + approximate stars)
- Single-page UI built with React

## Tech Stack

- React 19
- Vite 8
- JavaScript (JSX)
- Inline styling (component-level style objects)

## Project Structure

```text
AI-TechStack/
|- ai-dashboard/                # Main runnable Vite app
|  |- src/
|  |  |- App.jsx                # Dashboard data + UI
|  |  |- main.jsx               # React entry point
|  |- package.json
|  |- index.html
|- ai-career-dashboard.jsx      # Standalone source version
|- ai-career-dashboard-v2.jsx   # Updated standalone source version
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Run locally

```bash
cd ai-dashboard
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

### Build for production

```bash
cd ai-dashboard
npm run build
npm run preview
```

## Notes

- The main app to run is inside `ai-dashboard/`.
- `ai-career-dashboard.jsx` and `ai-career-dashboard-v2.jsx` are standalone file versions kept at repo root.
- Repository stars listed in the UI are approximate and reflect the curation time.

## Push to GitHub

If this folder is not already a Git repository, run:

```bash
git init
git add .
git commit -m "Add AI TechStack dashboard project"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

If your repo already exists locally, just commit and push:

```bash
git add .
git commit -m "Update project README"
git push
```

## Future Improvements

- Add screenshots or GIF demo to this README
- Move role data into separate JSON modules
- Add tests for filtering and tab logic
- Add responsive/mobile layout refinements
