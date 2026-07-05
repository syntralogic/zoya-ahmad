import {
  Github,
  Linkedin,
  Instagram,
  Dribbble,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react";

export const PROFILE = {
  name: "Arooj Ashfaq",
  titles: ["Full Stack Web Developer", "Cybersecurity Learner"],
  email: "aroojashfaq979@gmail.com",
  // phone: "+92 322 8781212",
  // phoneHref: "+923228781212",
};

export type Social = { label: string; href: string; icon: LucideIcon };

export const SOCIALS: Social[] = [
  { label: "GitHub", href: "https://github.com/Arooj-Ashfaq", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arooj-ashfaq-400538318/", icon: Linkedin },
  { label: "Dribbble", href: "https://dribbble.com/Play_with_designs", icon: Dribbble },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_aroojashfaq_?igsh=cWF6YWRramRzY2lo",
    icon: Instagram,
  },
];

export const CONTACT_METHODS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail },
  // { label: "Phone / WhatsApp", value: PROFILE.phone, href: `https://wa.me/${PROFILE.phoneHref}`, icon: Phone },
];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

/* ---------------- Skills ---------------- */

export type Bar = { name: string; level: number };

export type SkillCard = {
  key: string;
  title: string;
  badge: string;
  badgeTone: "primary" | "gold";
  status: string;
  description: string;
  groups: { label: string; items: string[] }[];
  bars: Bar[];
  link?: { label: string; href: string };
};

export const SKILL_CARDS: SkillCard[] = [
  {
    key: "fullstack",
    title: "Full Stack Development",
    badge: "Certified Full Stack Developer",
    badgeTone: "primary",
    status: "Certified",
    description:
      "Certified Full Stack Developer with expertise in both frontend and backend, building complete, scalable and secure web applications.",
    groups: [
      { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind"] },
      { label: "Backend", items: ["Node.js", "Express.js", "Python", "PHP"] },
      { label: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
      { label: "Tools", items: ["Git", "GitHub", "REST APIs", "Firebase"] },
    ],
    bars: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
    ],
  },
  {
    key: "cyber",
    title: "Cybersecurity",
    badge: "Currently Learning & Building",
    badgeTone: "primary",
    status: "In Progress",
    description:
      "Actively learning and building cybersecurity projects to secure applications, networks and systems.",
    groups: [],
    bars: [
      { name: "Network Security", level: 70 },
      { name: "Kali Linux", level: 75 },
      { name: "Web Application Security", level: 65 },
      { name: "Cryptography Basics", level: 60 },
      { name: "Ethical Hacking Techniques", level: 65 },
      { name: "Security Auditing", level: 60 },
    ],
  },
];

/* ---------------- Portfolio ---------------- */

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  href: string;
  t1: string;
  t2: string;
  status?: string;
};

export type PortfolioCategory = {
  key: string;
  label: string;
  accent: "primary" | "gold";
  projects: Project[];
};

export const PORTFOLIO: PortfolioCategory[] = [
  {
    key: "development",
    label: "Web Development",
    accent: "primary",
    projects: [
      {
        title: "PawDeal - Pet Ecosystem",
        description: "Full-stack pet platform using React/TypeScript, NestJS/Express.js backend, PostgreSQL, Redis caching, and AWS/Docker deployment.",
        tags: ["React", "TypeScript", "NestJS", "Express.js", "PostgreSQL", "Redis", "AWS", "Docker"],
        link: "https://github.com/Arooj-Ashfaq/",
        href: "https://pawdeal-frontend.vercel.app/",
        t1: "Source Code",
        t2: "Live Demo",
      },
      {
        title: "Synergy Social - Social platform",
        description: "Full-stack social community platform enabling users to connect, create, and grow together using React/TypeScript, NestJS/Express.js, PostgreSQL, Redis, and AWS/Docker.",
        tags: ["React", "TypeScript", "NestJS", "Express.js", "PostgreSQL", "Redis", "JWT", "AWS", "Docker"],
        link: "https://github.com/syntralogic",
        href: "https://synergy-social-frontend.vercel.app/",
        t1: "Source Code",
        t2: "Live Demo",
      },
      {
        title: "Other Projects",
        description: "A travel & tourism management system built in C# and C++ providing a console based and graphics based interface.",
        tags: ["C++", "C#", "Windows Form", ".Net"],
        link: "https://github.com/syntralogic",
        href: "https://synergy-social-frontend.vercel.app/",
        t1: "Source Code",
        t2: "Live Demo",
      },

    ],
  },
  {
    key: "cyber",
    label: "Cybersecurity",
    accent: "primary",
    projects: [
      {
        title: "Network Security Lab",
        description: "Hands-on labs exploring network scanning, hardening and traffic analysis with Kali Linux.",
        tags: ["Kali Linux", "Network Security"],
        link: "https://github.com/Arooj-Ashfaq/",
        href: "https://github.com/syntralogic/",
        t1: "Source Code",
        t2: "Live Demo",
        status: "Coming Soon",
      },
      {
        title: "Web App Security Audit",
        description: "A practical project auditing common web vulnerabilities and documenting safe fixes.",
        tags: ["Web Security", "OWASP"],
        link: "https://github.com/Arooj-Ashfaq/",
        href: "https://github.com/syntralogic/",
        t1: "Source Code",
        t2: "Live Demo",
        status: "Coming Soon",
      },
      {
        title: "Crypto Basics Toolkit",
        description: "Exploring cryptography fundamentals through small, well-documented experiments.",
        tags: ["Cryptography", "Python"],
        link: "https://github.com/Arooj-Ashfaq/",
        href: "https://github.com/syntralogic/",
        t1: "Source Code",
        t2: "Live Demo",
        status: "Coming Soon",
      },
    ],
  },
];
