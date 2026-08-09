# ABTalks

ABTalks is a mobile-first prototype for a 60-day public coding challenge for Indian college students. Each day, a student builds something, commits code to GitHub, and shares what they learned on LinkedIn. The product turns daily consistency into a visible proof chain.

This repository is a hackathon submission prototype. It uses local mock data only—there is no authentication, real database, or external platform integration.

## Product focus

- Help students understand and start the 60-day challenge.
- Give an active student a mission-first command center.
- Make GitHub and LinkedIn evidence feel like a connected public record.
- Present a focused, technically formatted challenge-day workflow.
- Handle first-day, missed-day, empty-profile, and incomplete-proof states gracefully.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | First-time landing page explaining the challenge, daily loop, and proof model. |
| `/dashboard` | Personal command center with streak, current mission, Proof Chain, and achievements. |
| `/day/12` | Day 12 challenge details, build checklist, proof verification, and local completion state. |

### Mock-state review URLs

These query parameters are included solely to demonstrate edge states without a backend:

| URL | State |
| --- | --- |
| `/dashboard?scenario=first-day` | Zero-day streak and first challenge state. |
| `/dashboard?scenario=missed-day` | Encouraging missed-day recovery state. |
| `/dashboard?scenario=empty-profile` | Graceful empty-profile state. |
| `/day/12?proof=missing` | GitHub proof present, LinkedIn proof missing. |

The default `/day/12` route shows both proofs complete. Selecting **Complete day 12** displays a client-side completion state only; it does not persist after refresh.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React icons
- Local TypeScript mock data

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a production build:

```bash
npm run build
```

Run the production server after building:

```bash
npm run start
```

## Project structure

```text
src/
├── app/
│   ├── dashboard/page.tsx     # Command-center dashboard and mock scenarios
│   ├── day/[day]/page.tsx    # Interactive daily challenge experience
│   ├── globals.css           # Global visual-system styles
│   ├── layout.tsx            # Root metadata and app layout
│   └── page.tsx              # Landing page
├── components/
│   ├── app-shell.tsx         # Shared header and application shell
│   ├── bottom-nav.tsx        # Mobile bottom navigation
│   └── ui.tsx                # Reusable visual-system primitives
└── lib/
    └── mock-data.ts          # Student, challenge, proof, and achievement mock data
```

## Design system

The interface is designed primarily for a 390px-wide viewport and scales naturally upward.

- Dark graphite foundation with warm off-white text
- Restrained electric-lime signal color for actionable or verified states
- Thin square borders and subtle surface elevation
- Editorial display type paired with mono telemetry labels
- Compact system metadata such as `DAY 12 / 60`, `11D`, and proof status
- Mobile-safe fixed bottom navigation with visible keyboard focus states
- Minimal motion for progress, active status, and controls; reduced-motion preferences are respected

Reusable primitives include buttons, badges, cards, progress bars, status indicators, telemetry values, streak indicators, challenge-day indicators, and navigation.

## What is intentionally not included

- Authentication or user accounts
- Real GitHub or LinkedIn connections
- Database or backend persistence
- Recruiter, admin, or analytics dashboards
- Real-time activity, notifications, or payment flows

## Verification

The project has been checked with:

```bash
npm run build
```

The production build compiles the landing page, dashboard, and dynamic day route successfully.
