# AI Usage Log


This document records the AI-assisted development process used during the
ABTalks hackathon submission.

The prompts below are the actual prompts used during development. Each session
corresponds to a development milestone and the resulting Git commit.

## Session 1 — Project Foundation
Goal:
Initialize the ABTalks redesign and establish the component architecture.

AI assistance:
- Project structure
- TypeScript interfaces
- Mock data
- Reusable UI components

Prompt:
[We are building a hackathon submission called ABTalks.

IMPORTANT:
This is a MOBILE-FIRST product redesign and will be evaluated primarily at 390px width.

Read the provided ABTalks problem statement carefully before writing code.

We are solving Problem 1: Redesign ABTalks.

Required routes:
/
/dashboard
/day/12

The product is a 60-day coding challenge for Indian college students. Students build something every day and maintain a public learning streak using:
- GitHub commit
- LinkedIn post

We are NOT building:
- authentication
- real accounts
- production database
- recruiter dashboard
- admin panel

Use realistic mocked data.

TECH STACK:
- Next.js
- TypeScript
- Tailwind CSS
- Lucide icons
- simple local mock data
- component-based architecture

DESIGN DIRECTION:

Create a premium developer-product aesthetic inspired by modern tools such as Linear, Vercel and high-end developer dashboards.

The interface should feel:
- technical
- sophisticated
- editorial
- minimal
- high-density but readable
- intentional
- production-quality

Avoid:
- generic SaaS templates
- excessive gradients
- cartoon illustrations
- huge rounded cards
- excessive glassmorphism
- generic purple AI aesthetic
- stock imagery

VISUAL LANGUAGE:
- dark graphite / near-black base
- warm/off-white text
- restrained electric accent color
- thin borders
- subtle surface elevation
- monospace typography for technical metadata
- large confident headings
- compact labels
- strong spacing rhythm

Build a reusable design system before building pages.

Create reusable components for:
- Button
- Badge
- Card
- ProgressBar
- Streak indicator
- SectionLabel
- Status indicator
- Bottom navigation
- Challenge day indicator

Create a mock data layer containing:
- student
- current streak
- challenge progress
- daily challenges
- GitHub proof
- LinkedIn proof
- achievements

Do NOT over-engineer.

First make the application compile and create the basic route structure.

Do not build all three pages yet.

Focus on a clean foundation that we can extend incrementally.]

Changes:
- Initialized Next.js application
- Added mock challenge data
- Added shared components
- Added route structure

Commit:
chore: initialize ABTalks redesign

---

## Session 2 — Visual System

Goal:
Establish the visual language for a premium mobile-first developer product.

Prompt:
[Now improve the existing ABTalks foundation by building the visual system.

Do NOT redesign everything from scratch.

We need a highly polished technical visual language optimized for 390px mobile screens.

Create:

1. Typography hierarchy
2. Surface hierarchy
3. Border system
4. Button variants
5. Status badges
6. Progress indicators
7. Streak visualization
8. Challenge-day indicators
9. Navigation
10. Responsive behavior

DESIGN DETAILS:

The UI should feel like a serious developer platform rather than a student education template.

Use:
- strong typography contrast
- compact metadata
- subtle separators
- monospace labels where appropriate
- small technical annotations
- deliberate whitespace
- asymmetrical hierarchy where useful

Introduce a subtle "system" feeling.

For example:

DAY 12 / 60
STREAK 11D
PROGRESS 20%

These should look like product telemetry, not decorative text.

Use animation sparingly:
- progress transitions
- button interaction
- completion state
- navigation transitions

No excessive animations.

Make sure everything works cleanly at 390px.

Do not build the full pages yet.]

Changes:
- Typography system
- Button variants
- Cards
- Badges
- Progress components
- Navigation

Commit:
feat: establish ABTalks visual system

---

## Session 3 — Landing Page

Goal:
Build the first-time student experience.

Prompt:
[Now build the ABTalks landing page at /.

This is the first experience for someone who has never heard of ABTalks.

The page must immediately communicate:

1. What ABTalks is
2. Why the 60-day challenge matters
3. What the student actually does
4. Why they should commit

The experience should feel premium and technical.

HERO:

Use the concept:

"60 days.
One proof every day."

Supporting idea:

Build in public.
Ship something every day.
Turn consistency into visible proof.

Create a strong primary CTA:
"Start the 60-Day Challenge"

Add compact credibility metadata such as:
60 DAYS
DAILY BUILDS
PUBLIC PROOF

Do not invent fake company statistics or fake testimonials.

Create a visual representation of the challenge:

DAY 01 → DAY 02 → DAY 03 → ... → DAY 60

Make this feel like a technical progress timeline rather than a generic progress bar.

Explain the daily loop:

BUILD
↓
COMMIT
↓
SHARE
↓
REPEAT

Show GitHub and LinkedIn as the two proof mechanisms.

Add a concise explanation of why this matters:
students build consistency and public evidence of their work.

DESIGN:

Make this look like a premium developer product landing page.

Use:
- editorial typography
- technical labels
- subtle grid/background treatment
- thin dividers
- restrained accent color
- carefully controlled animation

Do NOT use:
- stock photos
- cartoon graphics
- generic startup illustrations
- excessive gradients

The page must be excellent at 390px width.

Desktop should adapt naturally but mobile is the priority.

Do not change /dashboard or /day/12 yet.]

Changes:
- Hero
- 60-day timeline
- Build → Commit → Share loop
- CTA

Commit:
feat: build ABTalks landing experience

---

## Session 4 — Dashboard

Goal:
Build the student command center.

Prompt:
[Now build /dashboard.

This is the most important screen in the product.

The dashboard should feel like a personal command center for a student completing a 60-day engineering challenge.

At the top:

Good evening, Arjun.

Then create a strong streak module:

11 DAY STREAK

DAY 12 / 60

Show progress through the challenge.

The primary content should be TODAY'S MISSION.

Example:

DAY 12

Build your first REST API

~45 MIN
INTERMEDIATE

Give a concise description of what needs to be built.

Primary CTA:
"Start Day 12"

Create a "Proof Chain" section.

This is the main thoughtful product idea.

The Proof Chain visually represents the student's history of completed work.

Example:

09  ✓
10  ✓
11  ✓
12  ●
13  ○
14  ○

Each completed day should conceptually connect to:
- GitHub proof
- LinkedIn proof

Show useful summary metadata:

11 GitHub commits
10 LinkedIn posts
18.3% challenge completion

Add a small achievements section.

Examples:
FIRST COMMIT
7 DAY STREAK
10 PUBLIC BUILDS

Keep achievements believable and based on mocked data.

Include a bottom navigation optimized for mobile.

Navigation:
Home
Challenge
Progress
Profile

The dashboard should NOT feel like a generic analytics dashboard.

It should feel like a developer's daily operating system.

DESIGN PRIORITIES:

1. Today's mission must dominate visually.
2. Streak must feel motivating.
3. Proof Chain must feel unique.
4. Secondary information must remain visually subordinate.
5. Avoid unnecessary cards everywhere.

Use hierarchy instead of decoration.

Make the 390px experience exceptional.

Do not modify /day/12 yet.]

Changes:
- Streak
- Today's mission
- Proof Chain
- Achievements
- Progress

Commit:
feat: build student dashboard

---

## Session 5 — Challenge Day

Goal:
Build the Day 12 execution and proof experience.

Prompt:
[Now build /day/12.

This is the complete experience for one challenge day.

The user should understand the page within five seconds:

WHAT AM I BUILDING?
WHAT DO I NEED TO SUBMIT?
AM I DONE?

Structure:

Header:
← DAY 12

Metadata:
DAY 12 / 60
~45 MIN
INTERMEDIATE

Title:

Build your first REST API

Create a concise explanation of the challenge.

Then:

TODAY'S BUILD

Show exactly what the student needs to implement.

For example:

GET /tasks
POST /tasks
JSON responses
Basic error handling

Use technical formatting for API endpoints and code-like content.

Then create:

YOUR PROOF

GitHub Repository
github.com/arjun/day-12-api

Status:
CONNECTED

LinkedIn Post
linkedin.com/posts/arjun/day-12

Status:
POSTED

The proof section should feel like verification rather than generic input forms.

Add a large final CTA:

COMPLETE DAY 12

When clicked, show a polished completion state:

DAY 12 LOCKED IN

12 DAY STREAK

Your work is now part of your public proof chain.

Make the completion state feel rewarding but not childish.

Include a subtle technical visual treatment such as:
✓ BUILD
✓ COMMIT
✓ SHARE

Do not add real authentication or backend persistence.

Use mocked state.

Make the experience excellent at 390px.]

Changes:
- Challenge instructions
- GitHub proof
- LinkedIn proof
- Completion state

Commit:
feat: build daily challenge experience

---

## Session 6 — Edge Cases

Goal:
Handle realistic student states.

Prompt:
[Now audit the ABTalks product for real-world edge cases.

The brief explicitly requires thoughtful handling of:

- first day with no streak
- missed day
- empty profile

Implement polished states for each.

1. FIRST DAY

Show:

0 DAY STREAK

"Every streak starts at zero."

Make the experience motivating rather than empty.

2. MISSED DAY

Do NOT use harsh failure language.

Use something like:

"Your streak broke yesterday."

Then:

"Your 11 completed days are still yours."

CTA:
"Restart today"

Make it psychologically encouraging while remaining technically honest.

3. EMPTY PROFILE

Create a graceful empty profile state.

Do not make it look broken.

4. COMPLETED DAY

Show the difference between:
- completed
- current
- upcoming

5. PROOF MISSING

If GitHub exists but LinkedIn is missing, clearly show the incomplete proof state.

6. BOTH PROOFS COMPLETE

Show a strong verified state.

Make these states visually consistent with the existing design system.

Do not introduce unnecessary new components if existing components can handle the states.

Keep mobile-first behavior.]

Changes:
- First day
- Missed day
- Empty profile
- Missing proof
- Completed day

Commit:
feat: handle challenge edge states

---

## Session 7 — Polish

Goal:
Perform senior product design review.

Prompt:
[Now act as a senior product designer reviewing this hackathon submission before judging.

Do NOT add major new functionality.

Instead, deeply review the existing implementation for:

- visual hierarchy
- spacing
- typography
- alignment
- consistency
- mobile usability
- interaction states
- information density
- technical credibility
- perceived product quality

Evaluate every route at exactly 390px width.

Fix anything that feels:
- generic
- template-like
- amateur
- overly rounded
- visually noisy
- inconsistent
- unnecessarily verbose
- poorly aligned

Strengthen the product's identity.

The design should communicate:

"This was designed intentionally."

NOT:

"An AI generated a dashboard."

Use subtle details to achieve this:
- precise spacing
- small technical labels
- consistent border treatment
- carefully chosen typography
- restrained accent usage
- meaningful micro-interactions
- deliberate empty space

Pay special attention to the Proof Chain because it is our differentiating idea.

Do not add fake testimonials, fake user counts, fake awards, fake companies, or fabricated metrics.

Do not add unnecessary dependencies.

Keep the implementation simple and understandable.]

Changes:
- Visual hierarchy
- Spacing
- Mobile polish
- Interaction details

Commit:
refactor: polish product experience

---

## Session 8 — QA

Goal:
Final 390px mobile QA.

Prompt:
[Perform a final production-style QA pass.

Do not redesign the product.

Check all three routes:

/
/dashboard
/day/12

Requirements:

- all routes load
- no console errors
- no broken links
- no horizontal overflow
- no content clipped at 390px
- buttons are usable
- typography remains readable
- cards don't overflow
- navigation works
- dark theme is consistent
- loading states don't cause layout jumps
- completed/current/upcoming states are visually clear

Check accessibility basics:
- sufficient text contrast
- semantic headings
- buttons have meaningful labels
- interactive elements have visible states

Check responsive behavior beyond 390px without compromising the 390px design.

Remove unused imports and obvious dead code.

Keep the implementation clean.

Do not add new features.]

Changes:
- Responsive fixes
- Overflow fixes
- Accessibility fixes
- Cleanup

Commit:
fix: final mobile QA