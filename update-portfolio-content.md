# Portfolio Content Update — Full Stack Rewrite

BesuHosiso Portfolio — text content changes only, following the site's original section order and structure. All updates keep the original voice; changes reflect the shift from frontend to full stack.

---

## Nav

BesuHosiso | Home | About | Projects | Contact
*(unchanged)*

---

## Hero

**Previous:**
> Available for new projects
>
> I Build Custom, High-Speed Sites That Increase Revenue And Streamline.
>
> Hi, I'm Besufikad Hosiso, a full stack developer who turns messy, complex ideas into smooth, user‑friendly web experiences using clean code and modern design — so your customers stay longer, buy more, and your business grows without the headache.
>
> View Selected Works | Let's Talk

**Updated:**
> Available for new projects
>
> I Build Custom, Full-Stack Products That Increase Revenue And Scale With Your Business.
>
> Hi, I'm Besufikad Hosiso, a full stack developer who turns messy, complex ideas into complete, working products — from the database to the interface — using clean code and modern design, so your customers stay longer, buy more, and your business runs on something solid, not held together with duct tape.
>
> View Selected Works | Let's Talk

---

## About Me

**Previous:**
> I take messy problems and hand you clean, working solutions.
>
> Writing code is the easy part. The real work is understanding what a business actually needs — then building a solution that feels effortless to use. I've taken messy, unclear requests from founders and turned them into clean, working web experiences. Not because I know every framework, but because I listen first, think carefully, and solve the problem that's actually in front of me.
>
> You don't need a developer who just follows orders. You need someone who cares about your results as much as you do. That's me. One year in, many real‑world problems solved — and I'm just getting started. Let's talk about what you need.

**Updated:**
> I take messy problems and hand you complete, working systems.
>
> Writing code is the easy part. The real work is understanding what a business actually needs — then building something that works end to end, from how data moves behind the scenes to how it feels in someone's hands. I've taken messy, unclear requests from founders and turned them into full products: the interface, the logic, the data underneath it — all working together. Not because I know every framework, but because I listen first, think carefully, and solve the problem that's actually in front of me.
>
> You don't need a developer who just follows orders. You need someone who cares about your results as much as you do. That's me. One year in, many real‑world problems solved — and I'm just getting started. Let's talk about what you need.

---

## Tech Stack

**Previous (9 items):**
JavaScript · React · Tailwind CSS v4 · Next.js · TypeScript · UI/UX Design · Firebase · Supabase · Express.js

**Updated (7 items):**
JavaScript · React · Tailwind CSS v4 · Next.js · TypeScript · Firebase & Supabase · Express.js

*(Removed "UI/UX Design" as the only soft-skill entry in an otherwise all-hard-tech list; merged Firebase/Supabase into one paired entry so the stack reads as deliberate range rather than indecision.)*

---

## Selected Works (project cards)

**Previous order:**
1. Adelphos High School — *Full Stack Developer (with backend integration)* — React, Tailwind CSS, FormSubmit
2. Dollar Birr Tracker — *Full Stack Developer (with Real-time API Integration)* — JavaScript, HTML, CSS
3. LevelGit — *Full Stack Frontend Developer (React + State Architecture)* — React 19, Tailwind CSS v4, React Router

**Updated order:**

1. **HabeshaSkills** *(new — lead project)*
   `Full Stack Developer` — Next.js 16 · TypeScript · Tailwind CSS v4 · Supabase (Postgres, Auth, Realtime)
   > A venture-building platform connecting Ethiopian traditional-skill practitioners, youth builders, and investors — three separate role-based dashboards, real-time team chat, and an admin review pipeline, built solo from the database up.

2. **Adelphos High School**
   `Frontend Developer` — React · Tailwind CSS · FormSubmit

3. **Dollar Birr Tracker**
   `Frontend Developer (Real-time API Integration)` — JavaScript · HTML · CSS

4. **LevelGit**
   `Frontend Developer (React + State Architecture)` — React 19 · Tailwind CSS v4 · React Router

*(Relabeled the three prior projects as accurate frontend work — their tags never supported a full-stack claim. HabeshaSkills is the one project with real backend ownership: designed database, auth, and RLS policies, so it now leads as the proof project.)*

---

## Project Detail Pages

### 1. HabeshaSkills *(new)*

**Full Stack Developer**
Next.js 16 · TypeScript · Tailwind CSS v4 · Supabase (Postgres, Auth, Realtime) · Server Actions

> A venture-building platform connecting Ethiopian traditional-skill practitioners with the youth builders and investors who can turn their knowledge into real ventures. Unlike a course platform or job board, HabeshaSkills routes real problems through a structured pipeline — submitted, validated, built, and funded — with three fully separate role-based experiences for Practitioners, Youth, and Investors. Built solo from the database up: a designed Postgres schema with row-level security, server-side auth with Server Actions, and real-time team chat, all running on Next.js and Supabase.

**Key Features**
- Three role-based dashboards — Practitioner, Youth, and Investor, each with its own flows and permissions
- Full problem pipeline — submit, validate, publish as a challenge, apply, accept, and build, end to end
- Real-time team chat via Supabase Realtime, so accepted teams can coordinate live
- Investor tools — venture discovery with filtering, saved opportunities, and expressed interest tracked separately
- Admin review panel with an email-allowlist pattern for approving or rejecting submitted problems
- Row-level security enforced at the database level, not just in the UI — every role only sees and touches what it's permitted to

---

### 2. Adelphos High School

**Previous:**
> Full Stack Developer (with backend integration)
> React · Tailwind CSS · FormSubmit · Responsive Design
>
> A comprehensive information platform for Adelphos High School students and alumni. Features include event calendars, school announcements, contact section with feedback submission directly to school email, and easy navigation for both current and former students. Built with React and Tailwind CSS, integrated FormSubmit for seamless email handling without a backend server.

**Updated:**
> **Frontend Developer**
> React · Tailwind CSS · FormSubmit · Responsive Design
>
> A comprehensive information platform for Adelphos High School students and alumni. Features include event calendars, school announcements, a feedback section that sends directly to the school's email, and easy navigation for both current and former students. Built with React and Tailwind CSS, with FormSubmit integrated for seamless email handling — no backend server required.

**Key Features** — unchanged:
- Real-time event calendar
- Student feedback system
- Responsive design for all devices
- Email integration with FormSubmit
- Dynamic content management

---

### 3. Dollar Birr Tracker

**Previous:**
> Full Stack Developer (with Real-time API Integration)
> JavaScript · HTML · CSS · Real-time APIs · Responsive Design
>
> A dedicated real-time dashboard designed to bridge the information gap in the currency market. It allows users to monitor the fluctuating exchange rate between the United States Dollar (USD) and the Ethiopian Birr (ETB) instantly using real-time APIs. This project provides clarity by comparing live market trends with official banking rates within a modern, responsive interface.

**Updated:**
> **Frontend Developer (Real-time API Integration)**
> JavaScript · HTML · CSS · Real-time APIs · Responsive Design
>
> A real-time dashboard built to close the information gap in the currency market. It lets users track the fluctuating exchange rate between the US Dollar (USD) and Ethiopian Birr (ETB) instantly, pulling live data through third-party APIs and turning it into something people can actually read at a glance. The interface compares live market trends against official banking rates, built responsive from the ground up.

**Key Features** — unchanged:
- Real-time exchange rate updates
- Interactive market trend visualization
- Parallel vs. Official rate comparison
- Quick USD to ETB converter
- Daily statistics (High/Low/Change)
- Market insights and summaries

---

### 4. LevelGit

**Previous:**
> Full Stack Frontend Developer (React + State Architecture)
> React 19 · Tailwind CSS v4 · React Router · Context API · useReducer · localStorage
>
> A developer productivity and learning consistency app built for software developers who keep starting over. LevelGit combines a GitHub-style coding streak tracker, a distraction-free focus timer, a personal commit log, growth stats, and a learning path tracker into one daily habit. Built entirely with React and Tailwind CSS — no backend, no database, no account required. The global state is managed with AppContext using useReducer and persisted automatically through localStorage, making the app fully offline-capable.

**Updated:**
> **Frontend Developer (React + State Architecture)**
> React 19 · Tailwind CSS v4 · React Router · Context API · useReducer · localStorage
>
> A developer productivity and learning consistency app built for developers who keep starting over. LevelGit combines a GitHub-style coding streak tracker, a distraction-free focus timer, a personal commit log, growth stats, and a learning path tracker into one daily habit — no account, no server, no friction. State is managed globally with AppContext and useReducer, and persisted automatically through localStorage, so the whole app runs fully offline with zero backend.

**Key Features** — unchanged:
- GitHub-style streak heatmap tracking daily learning consistency
- Mood-aware focus timer — adapts session length to how you feel
- Personal commit log — write one insight per session, build your learning memory
- Growth stats with stack breakdown — derived entirely from existing state
- Learning path tracker with milestone progress bars
- LocalStorage — zero backend, data persists via localStorage

---

## Contact Me

> Your competitors are winning because their strategy is better. Tell me your goals below and I'll build the technical edge you need to leave them behind. Shall we begin?
>
> Your Name | Email Address | Your Message | Send Message

*(Unchanged — kept as-is per your call.)*

---

## Footer

**Previous:**
> © 2026 Besufikad Hosiso. Crafted with 🧡 and modern web technologies.

**Updated:**
> © 2026 Besufikad Hosiso. Built to last, not just to launch.

*(Drops the "crafted with love" convention for something that ties back to the hero/About copy — "solid, not held together with duct tape" — closing the page on the same confident, engineering-first note it opens on.)*
