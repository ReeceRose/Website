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
      description: [],
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
      name: "Systems Analyst Co-op",
      company: "Sheridan College",
      location: "Oakville, ON, Canada",
      startDate: "Sepetember 2016",
      endDate: "December 2019",
      description: [
        "Advanced Diploma of Computer Systems Technology – Systems Analyst",
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
      title: "Rust + HTMX Powered Todo application",
      thumbnail: "/assets/images/htmx.webp",
      githubUrl: "https://github.com/ReeceRose/rust-askama-htmx-tailwind-todo",
      liveUrl:
        "https://rust-askama-htmx-tailwind-todo-production.up.railway.app/",
      description:
        "Rust (Axum) server, powered by askama templates, serving HTMX pages, and styled with Tailwind CSS todo application.",
      tech: [
        {
          title: "HTMX",
          colour: "bg-htmx",
        },
        {
          title: "TailwindCSS",
          colour: "bg-sky-400",
        },
        {
          title: "Rust",
          colour: "bg-orange-400",
        },
        {
          title: "Axum",
          colour: "bg-blue",
        },
        {
          title: "Askama",
          colour: "bg-blue",
        },
        {
          title: "SQLite",
          colour: "bg-sky-500",
        },
      ],
    },
  ],
};
