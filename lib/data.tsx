import { Github, Linkedin, Mail } from "lucide-react";
import { TimelineItem } from "./type";
const socialLinks = [
    {
        icon: <Github className="h-5 w-5" />,
        url: "https://github.com/phamthanhhang208",
        label: "GitHub",
    },
    {
        icon: <Linkedin className="h-5 w-5" />,
        url: "https://linkedin.com/in/hangpham208",
        label: "LinkedIn",
    },

    {
        icon: <Mail className="h-5 w-5" />,
        url: "mailto:phamthanhhang.208@gmail.com",
        label: "Email",
    },
];

const skills = [
    {
        category: "Frontend",
        items: [
            "HTML/CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
        ],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
    },
    {
        category: "Tools",
        items: ["Git", "GitHub", "VS Code", "Figma"],
    },
];

const timelineItems: TimelineItem[] = [
    {
        year: "2/2025",
        title: "Frontend Developer",
        company: "Kyber Network",
        description: "Developed user dashboard utilizing modern React patterns",
    },
    {
        year: "2022-2024",
        title: "Software Engineer",
        company: "One Mount Group",
        description: "Worked on various projects using OutSystems, TailwindCSS",
    },
    {
        year: "9/2022",
        title: "BSc in Software Engineer",
        company: "Hanoi University of Science And Technology",
        description: "Graduated with 3.43 GPA, with 3 times on Dean's list",
    },
    {
        year: "2018",
        title: "Intern",
        company: "FPT Software",
        description:
            "Started my professional journey building web applications and learning modern frameworks.",
    },
];

const projects = [
    {
        title: "TaroCard",
        description:
            "A modern Tarot card reading web app built with Next.js, Firebase, and Gemini AI.Users can browse tarot cards, draw a spread, and receive AI-generated interpretations.",
        image: "/image/tarocard.png?height=200&width=400",
        tags: ["ReactJS", "Next", "Typescript", "Tailwind CSS", "Firebase"],
        liveLink: "https://taro-card.vercel.app/",
        githubLink: "https://github.com/phamthanhhang208/TaroCard",
    },

    // {
    //     title: "MuseFlow",
    //     description:
    //         "A productivity tool for creating a cozy workspace, includes timer, todolist, customizable background ambient noise",
    //     image: "/placeholder.svg?height=200&width=400",
    //     tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    //     liveLink: "#",
    //     githubLink: "#",
    // },

    {
        title: "Form Builder",
        description:
            "A simple Google Forms clone that lets users create basic forms and collect responses. It covers core features but isn’t as advanced or polished as the original.",
        image: "/placeholder.svg?height=200&width=400",
        tags: ["Next.js", "TypeScript", "MongoDB"],
        liveLink: "#",
        githubLink: "#",
    },
];

const email = "phamthanhhang.208@gmail.com";

const resume =
    "https://drive.google.com/file/d/1oEem-BSNtuRAmQBjuELTDHxOgwmczBfh/view?usp=sharing";

export { socialLinks, skills, timelineItems, projects, email, resume };
