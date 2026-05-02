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
        githubLink: "https://github.com/BesuHosiso/adelphos-high-school"
    },
    {
        id: 2,
        title: "Passport Registration Agency",
        role: "Frontend Developer",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        tech: ["React", "Tailwind CSS", "Payment Integration (Coming)", "Live Call Support"],
        description: "A modern passport registration platform for an agency in Addis Ababa, Ethiopia. Users can submit personal information, upload photos, schedule live calls with agents, and complete payments (coming soon). The frontend is fully responsive and live, with real-time form validation and a seamless user experience.",
        features: [
            "Multi-step form with validation",
            "File upload functionality",
            "Live call scheduling system",
            "Payment integration (in development)",
            "User dashboard (coming soon)"
        ],
        liveLink: "https://passport-registration.vercel.app",
        githubLink: "https://github.com/besufikad17/passport-registration"
    }
];