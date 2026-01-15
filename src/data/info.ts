export const info = {
  baseUrl: "https://reecerose.com",
  name: "Reece Rose",
  jobDescription: "Full-stack Developer",
  about: `
  As a versatile software developer, my expertise spans both backend and frontend development, enabling me to architect comprehensive web solutions that seamlessly integrate functionality with captivating design. While my core proficiency lies in backend development, I've honed my frontend skills to ensure a holistic approach to crafting compelling user experiences.
  I'm particularly passionate about exploring new technologies, often incorporating them into my side projects to stay at the forefront of innovation. Driven by a fervent passion for technology and an innate sense of design, I am committed to engineering immersive user experiences that captivate and inspire. With each project, I harmonize technical prowess with creative finesse, ensuring that every facet of the software ecosystem aligns to deliver exceptional results.`,
  experience: [
    {
      name: "Software Developer",
      company: "Miovision",
      location: "Kitchener, ON, Canada",
      startDate: "July 2021",
      endDate: "Present",
      description: [
        "✓ Designed and built high-traffic backend services using TypeScript, Node.js, Go, and Kotlin to power smart city and traffic management solutions.",
        "✓ Led technical initiatives to improve system performance and reduce infrastructure costs.",
        "✓ Led the software initiative for new hardware products, driving development from concept to release.",
        "✓ Collaborated across teams to architect scalable data pipelines processing millions of traffic events.",
        "✓ Mentored team members and drove best practices for backend development and code quality.",
      ],
    },
    {
      name: "Full-stack Developer",
      company: "Senstar",
      location: "Kitchener, ON, Canada",
      startDate: "January 2020",
      endDate: "July 2021",
      description: [
        "✓ Implemented innovative features for 3 products using a combination of C#, Knockout, React.JS, and Python technologies.",
        "✓ Successfully ported hardware changes to a new platform.",
        "✓ Provided technical support to ensure seamless operation for clients.",
        "✓ Collaborated with cross-functional teams to deliver high-quality products through the entire software development life cycle.",
      ],
    },
  ],

  education: [
    {
      name: "Software Development (Co-op Program)",
      company: "Sheridan College",
      location: "Oakville, ON, Canada",
      startDate: "September 2016",
      endDate: "December 2019",
      description: [
        "Advanced Diploma of Computer Systems Technology – Information Systems Engineering",
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/reecerose",
    email: "mailto:reecerose18@gmail.com",
    linkedin: "https://www.linkedin.com/in/reece-rose-5b2864116/",
  },

  projects: [
    {
      title: "Benchwarmer Analytics",
      thumbnail: "/assets/images/line-chemistry.svg",
      githubUrl: "",
      liveUrl: "",
      description:
        "A hockey analytics app exploring NHL line combinations, player chemistry, and shot maps. Analysis from the cheap seats.",
      tech: [
        { title: ".NET 9", colour: "bg-purple-700" },
        { title: "React", colour: "bg-sky-500" },
        { title: "PostgreSQL", colour: "bg-blue-800" },
        { title: "Azure", colour: "bg-sky-600" },
      ],
      status: "coming-soon",
    }, 
    {
      title: "Boop Labs",
      thumbnail: "/assets/images/boop-labs.svg",
      githubUrl: "",
      liveUrl: "https://boop-labs.reecerose.com",
      description:
        "An AI-powered platform that transforms pet photos into artistic portraits with 21 art styles, themed collections, and print-quality output.",
      tech: [
        { title: "Next.js", colour: "bg-neutral-800" },
        { title: "Stripe", colour: "bg-purple-600" },
        { title: "OpenRouter", colour: "bg-emerald-600" },
      ],
      status: "alpha",
    },
    {
      title: "QRealtr",
      thumbnail: "/assets/images/qrealtr.svg",
      githubUrl: "",
      liveUrl: "https://www.qrealtr.com/landing",
      description:
        "A QR code platform for real estate professionals featuring customizable profiles, property listings, AI-powered importing, and analytics tracking.",
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
        "A free goal tracking app with GitHub-style contribution charts, streak monitoring, and weekly recaps to help build consistent habits.",
      tech: [
        { title: "React", colour: "bg-sky-500" },
        { title: "TypeScript", colour: "bg-blue-600" },
        { title: "Next.js", colour: "bg-neutral-800" },
      ],
    },
  ],
};
