import {
  EducationEntryProps,
  EmploymentEntryProps,
  EnumerationEntry,
  ProjectEntryProps,
  SkillEntryProps,
} from "./types";

export const images = {
  github_icon: "images/github-icon.png",
  me: "images/my-face.jpg",
  linkedin_icon: "images/linkedin-icon.png",
  gmail_icon: "images/gmail-icon.png",
  discord_icon: "images/discord-icon.png",

  python_icon: "images/python-icon.png",
  typescript_icon: "images/typescript-icon.png",
  linux_icon: "images/linux-icon.png",
  csharp_icon: "images/csharp-icon.png",
  java_icon: "images/java-icon.png",
  haskell_icon: "images/haskell-icon.png",
  sql_icon: "images/sql-icon.png",
  git_icon: "images/git-icon.png",
  react_icon: "images/react-icon.png",

  oracle_icon: "images/oracle.png",
  fnz_icon: "images/fnz-icon.png",
  adacta_icon: "images/adacta-icon.jpg",

  pull_request_icon: "images/pull-request-icon.png",
  issues_icon: "images/issues-icon.png",
  commit_icon: "images/commit-icon.png",
} as const;

export const employments: EmploymentEntryProps[] = [
  {
    institute: "Oracle",
    from: new Date(2024, 8),
    position: "Senior Software Engineer",
    team: "Infrastructure Team",
    icon: images.oracle_icon,
    technologies: ["OCI", "Kubernetes", "Docker", "Java", "Python", "SQL"],
    description: [
      "orchestrating schema migrations across tens of thousands of production databases",
      "handling non-trivial migration pipelines at scale",
      "working with OCI-native services for scheduling, monitoring and execution",
      "building resilient services that keep systems reliable at massive scale",
    ],
  },
  {
    institute: "Adacta Fintech",
    from: new Date(2023, 8),
    to: new Date(2024, 8),
    technologies: ["C#", "SQL", "Javascript", "ActiveMQ"],
    description: [
      "implementing technical side of life insurance",
      "responsible for ETL pipelines, reporting and data sync with data-warehouse",
      "performance optimizations of data-warehouse system",
      "interviewing job candidates",
    ],
    position: "Junior Software Developer",
    team: "Product Team",
    icon: images.adacta_icon,
  },
  {
    institute: "FNZ Group",
    from: new Date(2022, 5),
    to: new Date(2023, 8),
    technologies: ["C#", "SQL", "REST", "SOAP"],
    description: [
      "implementing insurance and banking solutions using CQRS",
      "diagnosing and fixing slow query and performance issues across the database system",
      "providing mentorship for new joiners",
    ],
    position: "Intern Software Developer",
    team: "Product Team",
    icon: images.fnz_icon,
  },
];

export const hobbies: EnumerationEntry[] = [
  {
    title: "Brazilian Jiu Jitsu",
    description: ["Training since September 2023", "Currently a white belt"],
  },
  {
    title: "Chess",
    description: [
      "Competitively played for a couple of years",
      "Highest online rating reached is around 2100 elo",
    ],
  },
];

export const socialsLinks = [
  {
    link: "https://github.com/Kobu",
    label: "Kobu",
    image: images.github_icon,
  },
  {
    link: "thekobu@gmail.com",
    label: "thekobu@gmail.com",
    image: images.gmail_icon,
  },
  {
    link: "https://www.linkedin.com/in/jakub-jakubec-a38642240/",
    label: "Jakub Jakubec",
    image: images.linkedin_icon,
  },
];

export const projects: ProjectEntryProps[] = [
  {
    repositry: "https://github.com/Kobu-Labs/nowaster-web",
    url: "https://nowaster.app",
    name: "nowaster",
    technologies: [
      "AWS S3",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Rust",
      "PostgreSQL",
    ],
    description: [
      "blazingly-fast time tracking app with tens of active monthly users",
      "frontend built with Next.js, backend powered by Rust and Axum",
      "OAuth2 authentication with JWT",
      "sole developer — 40k+ lines of code across 1600+ commits",
      "automated database backups",
      "ephemeral sandbox environments",
    ],
  },
  {
    repositry: "private",
    url: "https://pro-set.sk",
    name: "proset",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "Stripe",
      "Clerk",
    ],
    description: [
      "full-stack web app for a popular tennis club",
      "serving hundreds of active monthly users",
      "court reservation system with real-time availability",
      "admin dashboard for managing members and reservations",
      "payment processing via Stripe",
      "photo gallery with Cloudinary",
    ],
  },
  {
    repositry: "https://github.com/Kobu-Labs/kobuman-compares",
    url: "https://compare.kobuman.dev",
    name: "kobuman/compare",
    technologies: [
      "AWS S3",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
    ],
    description: [
      "Hypixel SkyBlock analytics platform",
      "guild member comparison by networth and level progression",
      "Redis caching and data visualization with charts",
    ],
  },
  {
    repositry: "https://github.com/Kobu/resume",
    name: "this resume :)",
    technologies: ["React", "TypeScript", "react-pdf"],
    description: [
      "you are looking at it right now",
      "PDF generated entirely in React",
      "GitHub Action auto-renders and commits the PDF on update",
    ],
  },
  {
    repositry: "private",
    name: "plutus",
    technologies: ["Next.js", "React", "RabbitMQ", "Prisma"],
    description: [
      "proof-of-concept management tool for minecraft bots",
      "allows for distributed hosting of bots",
      "implemented various path-finding algorithms",
      "bot can be integrated with AI and used for training",
    ],
  },
];

export const achievements: EnumerationEntry[] = [
  {
    title: "Contest for Talented Students FI MUNI",
    description: [
      "Winner of year 2021",
      "Annual contest on Faculty of Informatics, MUNI",
      "Offered to work in research laboratories",
    ],
  },
  {
    title: "RedHat Annual Bug Hunting ",
    description: ["Achieved 3rd place in a fierce competition"],
  },
  {
    title: "Mensa IQ Slovakia",
    description: ["Scored among the top 0.1%"],
  },
];

export const education: EducationEntryProps[] = [
  {
    insititute: "Computer Science",
    address: "Faculty of Informatics, Masaryk University, Brno, Czech Republic",
    from: new Date(2021, 8),
    to: new Date(2024, 11),
  },
  {
    insititute: "General Medicine",
    address: "Faculty of Medicine, Masaryk University, Brno, Czech Republic",
    from: new Date(2018, 8),
    to: new Date(2019, 7),
  },
  {
    insititute: "Grammar School",
    from: new Date(2014, 8),
    to: new Date(2018, 6),
    address: "Gymnazium 1. Maja, Malacky, Slovakia",
  },
];

export const skills: SkillEntryProps[] = [
  {
    name: "C#",
    icon: images.csharp_icon,
    rating: 4,
    description: [
      "used on regular basis in a professional setting",
      "advance knowledge of the C# ecosystem",
    ],
  },
  {
    name: "Python",
    icon: images.python_icon,
    rating: 4,
    description: [
      "proficient knowledge",
      "used to automate and script numerous tasks",
      "several times used in a medium sized project",
    ],
  },
  {
    name: "Typescript",
    icon: images.typescript_icon,
    rating: 4,
    description: [
      "intermediate knowledge of the TS/JS ecosystem",
      "loving the type system",
      "typescript enthusiast",
    ],
  },
  {
    name: "SQL",
    icon: images.sql_icon,
    rating: 3,
    description: [
      "used almost daily in a professional setting",
      "comfortable using SQL even in bigger projects",
    ],
  },
  {
    name: "Git, GitHub and GitLab",
    icon: images.git_icon,
    rating: 4,
    description: [
      "advanced knowledge of git",
      "comfortable doing even the non-trivial git tasks",
    ],
  },
  {
    name: "Haskell",
    icon: images.haskell_icon,
    rating: 2,
    description: [
      "one of my favorite languages",
      "basic knowledge of core principles",
      "fan of functional programming",
    ],
  },
  {
    name: "React",
    icon: images.react_icon,
    rating: 3,
    description: [
      "intermediate knowledge of react ecosystem",
      "comfortable and excited to code in React with TS",
      "fan of T3-stack",
    ],
  },
];
