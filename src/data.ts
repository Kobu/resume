import { EducationEntryProps, EmploymentEntryProps, EnumerationEntry, ProjectEntryProps, SkillEntryProps } from "./types";

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

  fnz_icon: "images/fnz-icon.png",
  adacta_icon: "images/adacta-icon.jpg",

  pull_request_icon: "images/pull-request-icon.png",
  issues_icon: "images/issues-icon.png",
  commit_icon: "images/commit-icon.png",
} as const;

export const employments: EmploymentEntryProps[] = [
  {
    institute: "Adacta Fintech",
    from: new Date(2023, 8),
    to: new Date(2024, 8),
    description: [
      "technologies: C#, SQL, Javascript, ActiveMQ",
      "implementing technical side of life insurance",
      "responsible for system integration with data-warehouse",
      "performance optimalizations of data-warehouse system",
      "interviewing job candidates"
    ],
    position: "Software Developer",
    icon: images.adacta_icon,
  },
  {
    institute: "FNZ Group",
    from: new Date(2022, 5),
    to: new Date(2023, 8),
    description: [
      "technologies: C#, SQL, REST, SOAP",
      "implementing scalable insurance and banking solutions",
      "performance optimalizations of database system",
      "providing mentorship for new joiners",
    ],
    position: "Analyst Developer",
    icon: images.fnz_icon,
  },

];

export const hobbies: EnumerationEntry[] = [
  {
    title: "Brazilian Jiu Jitsu",
    description: [

      "Training since September 2023",
      "Currently a white belt",
    ]
  },
  {
    title: "Chess",
    description: [

      "Competively played for couple years",
      "Highest online rating reached is around 2100 elo",
    ]
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
  {
    link: "https://discord.com/users/598822325898706954",
    label: "kobu19",
    image: images.discord_icon,
  },
];

export const projects: ProjectEntryProps[] = [
  {
    repositry: "https://github.com/Kobu-Labs/nowaster-web",
    name: "nowaster",
    description: [
      "technologies: React, TS, Nextjs, Tailwind, Python",
      "tool for students to track time spent studying",
      "designed with minimal software overhead in mind",
      "allows interacting via CLI or a web app",
    ]
  },
  {
    repositry: "https://github.com/Kobu-Labs/plutus",
    name: "plutus",
    description: [
      "technologies: Nextjs, React, RabbitMQ, Prisma",
      "proof-of-concept management tool for minecraft bots",
      "allows for distributed hosting of bots",
      "implemented various path-finding algorithm",
      "bot can be integrated with AI and used for traning"
    ]
  },
  {
    repositry: "https://github.com/Kobu/git-timewarp",
    name: "git-timewarp",
    description: [
      "technologies: Python, Bash",
      "utility tool for changing author dates of git commits",
    ]
  }
];


export const achievements: EnumerationEntry[] = [
  {
    title: "Contest for Talented Students FI MUNI",
    description: [
      "Winner of year 2021",
      "Annual contest on Faculty of Informatics, MUNI",
      "Offered to work in research laboratories",
    ]
  },
  {
    title: "RedHat Annual Bug Hunting ",
    description: [
      "Achieved 3rd place in a fierce competition",
    ]
  },
  {
    title: "Mensa IQ Slovakia",
    description: ["Scored among the top 0.1%"]
  }
];

export const education: EducationEntryProps[] = [
  {
    insititute: "Grammar School",
    from: new Date(2014, 8),
    to: new Date(2018, 6),
    address: "Gymnazium 1. Maja, Malacky, Slovakia",
  },
  {
    insititute: "General Medicine",
    address: "Faculty of Medicine, Masaryk University, Brno, Czech Republic",
    from: new Date(2018, 8),
    to: new Date(2019, 7),
  },
  {
    insititute: "Computer Science",
    address: "Faculty of Informatics, Masaryk University, Brno, Czech Republic",
    from: new Date(2021, 8),
    to: new Date(2024, 11),
  }
];

export const skills: SkillEntryProps[] = [
  {
    name: "C#",
    icon: images.csharp_icon,
    rating: 4,
    description: [
      "used on regular basis in a professional setting",
      "advance knowledge of the C# ecosystem",
    ]
  },
  {
    name: "Python",
    icon: images.python_icon,
    rating: 4,
    description: [
      "proficient knowledge",
      "used to automate and script numerous tasks",
      "several times used in a medium sized project"

    ]
  },
  {
    name: "Typescript",
    icon: images.typescript_icon,
    rating: 4,
    description: [
      "intermediate knowledge of the TS/JS ecosystem",
      "loving the type system",
      "typescript enthusiast"
    ]
  },
  {
    name: "SQL",
    icon: images.sql_icon,
    rating: 3,
    description: [
      "used almost daily in a professional setting",
      "comfortable using SQL even in bigger projects"

    ]
  },
  {
    name: "Git, GitHub and GitLab",
    icon: images.git_icon,
    rating: 4,
    description: [
      "advanced knowledge of git",
      "comfortable doing even the non-trivial git tasks"
    ]
  },
  {
    name: "Haskell",
    icon: images.haskell_icon,
    rating: 2,
    description: [
      "one of my favorite languages",
      "basic knowledge of core principles",
      "fan of functional programming"

    ]
  },
  {
    name: "React",
    icon: images.react_icon,
    rating: 3,
    description: [
      "intermediate knowledge of react ecosystem",
      "comfortable and exited to code in react with TS",
      "fan of T3-stack"
    ]
  }
];
