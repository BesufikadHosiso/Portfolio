import projectShow from '../assets/adelphosHome.webm';
import levelgitDemo from '../assets/levelgit-demo.webm';
import habeshaskills from '../assets/habeshaskills.webm';

export const projects = [
    {
        id: 1,
        title: "HabeshaSkills",
        role: "Full Stack Developer",
        image: habeshaskills,
        tech: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Supabase (Postgres, Auth, Realtime)", "Server Actions"],
        description: "A venture-building platform connecting Ethiopian traditional-skill practitioners with the youth builders and investors who can turn their knowledge into real ventures. Unlike a course platform or job board, HabeshaSkills routes real problems through a structured pipeline — submitted, validated, built, and funded — with three fully separate role-based experiences for Practitioners, Youth, and Investors. Built solo from the database up: a designed Postgres schema with row-level security, server-side auth with Server Actions, and real-time team chat, all running on Next.js and Supabase.",
        features: [
            "Three role-based dashboards — Practitioner, Youth, and Investor, each with its own flows and permissions",
            "Full problem pipeline — submit, validate, publish as a challenge, apply, accept, and build, end to end",
            "Real-time team chat via Supabase Realtime, so accepted teams can coordinate live",
            "Investor tools — venture discovery with filtering, saved opportunities, and expressed interest tracked separately",
            "Admin review panel with an email-allowlist pattern for approving or rejecting submitted problems",
            "Row-level security enforced at the database level, not just in the UI — every role only sees and touches what it's permitted to"
        ],
        liveLink: "https://habeshaskills.vercel.app",
        githubLink: "https://habeshaskills.vercel.app"
    },
    {
        id: 2,
        title: "Adelphos High School",
        role: "Frontend Developer",
        image: projectShow,
        tech: ["React", "Tailwind CSS", "FormSubmit", "Responsive Design"],
        description: "A comprehensive information platform for Adelphos High School students and alumni. Features include event calendars, school announcements, a feedback section that sends directly to the school's email, and easy navigation for both current and former students. Built with React and Tailwind CSS, with FormSubmit integrated for seamless email handling — no backend server required.",
        features: [
            "Real-time event calendar",
            "Student feedback system",
            "Responsive design for all devices",
            "Email integration with FormSubmit",
            "Dynamic content management"
        ],
        liveLink: "https://adelphoshighschool.vercel.app",
        githubLink: "https://github.com/besufikadhosiso/adelphos-high-school"
    },
    {
        id: 3,
        title: "Dollar Birr Tracker",
        role: "Frontend Developer (Real-time API Integration)",
        image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=600&q=80",
        tech: ["JavaScript", "HTML", "CSS", "Real-time APIs", "Responsive Design"],
        description: "A real-time dashboard built to close the information gap in the currency market. It lets users track the fluctuating exchange rate between the US Dollar (USD) and Ethiopian Birr (ETB) instantly, pulling live data through third-party APIs and turning it into something people can actually read at a glance. The interface compares live market trends against official banking rates, built responsive from the ground up.",
        features: [
            "Real-time exchange rate updates",
            "Interactive market trend visualization",
            "Parallel vs. Official rate comparison",
            "Quick USD to ETB converter",
            "Daily statistics (High/Low/Change)",
            "Market insights and summaries"
        ],
        liveLink: "https://besufikadhosiso.github.io/dollar-birr-tracker/",
        githubLink: "https://github.com/besufikadhosiso/dollar-birr-tracker"
    },
    {
        id: 4,
        title: "LevelGit",
        role: "Frontend Developer (React + State Architecture)",
        image: levelgitDemo,
        tech: ["React 19", "Tailwind CSS v4", "React Router", "Context API", "useReducer", "localStorage"],
        description: "A developer productivity and learning consistency app built for developers who keep starting over. LevelGit combines a GitHub-style coding streak tracker, a distraction-free focus timer, a personal commit log, growth stats, and a learning path tracker into one daily habit — no account, no server, no friction. State is managed globally with AppContext and useReducer, and persisted automatically through localStorage, so the whole app runs fully offline with zero backend.",
        features: [
            "GitHub-style streak heatmap tracking daily learning consistency",
            "Mood-aware focus timer — adapts session length to how you feel",
            "Personal commit log — write one insight per session, build your learning memory",
            "Growth stats with stack breakdown — derived entirely from existing state",
            "Learning path tracker with milestone progress bars",
            "LocalStorage — zero backend, data persists via localStorage"
        ],
        liveLink: "https://levelgit.vercel.app",
        githubLink: "https://github.com/besufikadhosiso/levelgit"
    },
];
