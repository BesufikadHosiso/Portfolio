import projectShow from '../assets/adelphosHome.webm';

export const projects = [
    {
        id: 1,
        title: "Adelphos High School",
        role: "Frontend Developer (with backend integration)",
        image: projectShow,
        tech: ["React", "Tailwind CSS", "FormSubmit", "Responsive Design"],
        description: "A comprehensive information platform for Adelphos High School students and alumni. Features include event calendars, school announcements, contact section with feedback submission directly to school email, and easy navigation for both current and former students. Built with React and Tailwind CSS, integrated FormSubmit for seamless email handling without a backend server.",
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
        id: 2,
        title: "Dollar Birr Tracker",
        role: "Frontend Developer (with Real-time API Integration)",
        image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=600&q=80",
        tech: ["JavaScript", "HTML", "CSS", "Real-time APIs", "Responsive Design"],
        description: "A dedicated real-time dashboard designed to bridge the information gap in the currency market. It allows users to monitor the fluctuating exchange rate between the United States Dollar (USD) and the Ethiopian Birr (ETB) instantly using real-time APIs. This project provides clarity by comparing live market trends with official banking rates within a modern, responsive interface.",
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
    }
];