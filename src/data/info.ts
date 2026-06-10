export const info = {
  baseUrl: "https://reecerose.com",
  name: "Reece Rose",
  jobTitle: "Software Engineer",
  jobContext: "Miovision",
  tagline:
    "Backend engineer working in Go, Java, and TypeScript — building high-traffic services by day, side projects by night.",
  availability: "Open to senior backend & platform roles",
  about: `I'm a software engineer with 5+ years of experience, focused on backend development and distributed systems. At Miovision, I design high-traffic services in Go, Java/Kotlin, and TypeScript that power smart city infrastructure.

Outside of work, I build full products from scratch — mostly with JavaScript and React, though I'll reach for .NET when a side project calls for it. I care about writing code that's fast, observable, and easy for teams to maintain.`,

  highlights: [
    {
      title: "Scale",
      description:
        "Architected data pipelines and backend services processing millions of traffic events for smart city infrastructure.",
    },
    {
      title: "Leadership",
      description:
        "Led a hardware product initiative from concept to release and mentored engineers on backend best practices.",
    },
    {
      title: "Full product builder",
      description:
        "Ship side projects end-to-end — React and Next.js frontends, Node APIs, Stripe billing, and the occasional .NET experiment.",
    },
  ],

  experience: [
    {
      name: "Software Developer",
      company: "Miovision",
      location: "Kitchener, ON, Canada",
      startDate: "July 2021",
      endDate: "Present",
      tech: [
        "Go",
        "Java",
        "TypeScript",
        "Node.js",
        "Kotlin",
        "PostgreSQL",
        "Kafka",
        "Kubernetes",
      ],
      description: [
        "Designed and built high-traffic backend services in Go, Java/Kotlin, and TypeScript for smart city infrastructure.",
        "Led technical initiatives to improve system performance and reduce infrastructure costs.",
        "Led the software initiative for new hardware products, driving development from concept to release.",
        "Architected scalable data pipelines processing millions of traffic events.",
        "Mentored team members and drove best practices for backend development and code quality.",
      ],
    },
    {
      name: "Full-stack Developer",
      company: "Senstar",
      location: "Kitchener, ON, Canada",
      startDate: "January 2020",
      endDate: "July 2021",
      tech: ["JavaScript", "React", "TypeScript", "Python"],
      description: [
        "Implemented features across 3 products using JavaScript, React, and Python.",
        "Ported hardware changes to a new platform.",
        "Provided technical support and collaborated across teams through the full SDLC.",
      ],
    },
  ],

  education: {
    degree: "Advanced Diploma, Computer Systems Technology",
    school: "Sheridan College",
    program: "Software Development (Co-op)",
    location: "Oakville, ON, Canada",
    dates: "2016 — 2019",
  },

  skills: [
    "Go",
    "Java",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Kotlin",
    "React",
    "Next.js",
    "PostgreSQL",
    "Kafka",
    "Redis",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Datadog",
  ],

  socialMedia: {
    github: "https://github.com/reecerose",
    email: "mailto:reecerose18@gmail.com",
    linkedin: "https://www.linkedin.com/in/reece-rose-5b2864116/",
  },

  projects: [
    {
      title: "Benchwarmer Analytics",
      thumbnail: "/assets/images/bench-warmer.svg",
      githubUrl: "https://github.com/ReeceRose/benchwarmer-analytics",
      liveUrl: "https://benchwarmer.reecerose.com/",
      description:
        "A hockey analytics platform exploring NHL line combinations, player chemistry, and shot maps. Side project built with a .NET API, React, and PostgreSQL on Azure.",
      tech: [
        { title: ".NET 10", colour: "bg-purple-700" },
        { title: "React", colour: "bg-sky-500" },
        { title: "PostgreSQL", colour: "bg-blue-800" },
        { title: "Azure", colour: "bg-sky-600" },
      ],
      status: "alpha" as const,
      featured: true,
    },
    {
      title: "Boop Labs",
      thumbnail: "/assets/images/boop-labs.svg",
      githubUrl: "",
      liveUrl: "https://boop-labs.reecerose.com",
      description:
        "An AI-powered platform that transforms pet photos into artistic portraits with 21 art styles, themed collections, and print-quality output. Handles payments via Stripe.",
      tech: [
        { title: "Next.js", colour: "bg-neutral-800" },
        { title: "Stripe", colour: "bg-purple-600" },
        { title: "OpenRouter", colour: "bg-emerald-600" },
      ],
      status: "alpha" as const,
      featured: true,
    },
    {
      title: "QRealtr",
      thumbnail: "/assets/images/qrealtr.svg",
      githubUrl: "",
      liveUrl: "https://www.qrealtr.com/landing",
      description:
        "A QR code platform for real estate professionals with customizable profiles, property listings, AI-powered importing, and analytics.",
      tech: [
        { title: "React", colour: "bg-sky-500" },
        { title: "TypeScript", colour: "bg-blue-600" },
        { title: "Next.js", colour: "bg-neutral-800" },
      ],
    },
    {
      title: "Dotti",
      thumbnail: "/assets/images/dotti.svg",
      githubUrl: "",
      liveUrl: "https://dotti.reecerose.com",
      description:
        "A goal tracking app with GitHub-style contribution charts, streak monitoring, and weekly recaps.",
      tech: [
        { title: "React", colour: "bg-sky-500" },
        { title: "TypeScript", colour: "bg-blue-600" },
        { title: "Next.js", colour: "bg-neutral-800" },
      ],
    },
  ],
};
