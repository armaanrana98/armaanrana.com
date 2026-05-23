import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Rss } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";

export const DATA = {
  name: "Armaan Rana",
  initials: "AR",
  url: "https://armaanrana.com",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/new+delhi",
  description:
    "Analytics Manager at TravClan. Building applied ML, DS, and AI systems for B2B travel.",
  summary:
    "I lead Analytics, Data Science, and AI at [TravClan](https://travclan.com), India's B2B travel tech platform powering travel agencies across the country. My team builds the systems behind how flights and hotels get priced, how agents are activated and retained, and how AI handles the conversations and quotes that used to require a person. Day to day that means designing dynamic pricing engines, deploying voice and chat AI in support and sales workflows, building agentic systems for ops and CX, and shipping the data infrastructure the rest of the company depends on. Outside work, I write [The International Strategist](https://substack.com/@theintlstrat) on Substack, where I distill global affairs into clear, accessible narratives.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "SQL", icon: Python },
    { name: "LLMs", icon: Python },
    { name: "RAG", icon: Python },
    { name: "GenAI", icon: Python },
    { name: "Machine Learning", icon: Python },
    { name: "AI Agents", icon: Python },
    { name: "Data Engineering", icon: Python },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "armaanrana4436@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/armaanrana98",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/armaan-rana98/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Substack: {
        name: "Substack",
        url: "https://substack.com/@theintlstrat",
        icon: Rss,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://www.linkedin.com/in/armaan-rana98/",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.linkedin.com/in/armaan-rana98/",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:armaanrana4436@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "TravClan",
      href: "https://travclan.com",
      badges: [],
      location: "New Delhi, India",
      title: "Analytics Manager",
      logoUrl: "/travclan.png",
      start: "Oct 2024",
      end: "Present",
      description:
        "Lead a team across flights pricing, agent activation, voice AI, and AI agent deployment, while staying hands-on with Python, SQL, machine learning, and LLM-based systems. Designed and built a dynamic pricing engine deployed across hundreds of partner orgs. Engineered a GenAI quote generation pipeline using retrieval-augmented generation to convert unstructured agent inputs into structured travel quotes. Led the voice AI bot rollout for support and sales calls. Built TravClan's AI Ops function, deploying AI agents that handle flights operations and CX tickets.",
    },
    {
      company: "TravClan",
      href: "https://travclan.com",
      badges: [],
      location: "New Delhi, India",
      title: "Senior Business Analyst",
      logoUrl: "/travclan.png",
      start: "Apr 2023",
      end: "Sep 2024",
      description:
        "Served as the primary analytics point of contact for the Product team, guiding data-driven product development. Designed and implemented a dynamic pricing analysis framework for flights and hotels using Python and SQL, capturing real-time market data. Conducted BI analyses throughout the product lifecycle, from ideation to release. Mentored junior analysts and promoted knowledge sharing within the team.",
    },
    {
      company: "TravClan",
      href: "https://travclan.com",
      badges: [],
      location: "New Delhi, India",
      title: "Business Analyst",
      logoUrl: "/travclan.png",
      start: "Jul 2021",
      end: "Mar 2023",
      description:
        "Led automation projects across operations, streamlining processes and reducing manual effort. Developed interactive dashboards and data visualizations facilitating insights for stakeholders at multiple organizational levels. Created fraud detection models analyzing transactional data. Built SQL reporting pipelines supporting day-to-day data-driven decision making across travel operations.",
    },
    {
      company: "Impact Consulting",
      href: "#",
      badges: [],
      location: "New Delhi, India",
      title: "APAC Consultant",
      logoUrl: "/impact.png",
      start: "Jan 2021",
      end: "Jun 2021",
      description:
        "Freelance consulting engagement across APAC markets, supporting research and analysis projects.",
    },
  ],
  education: [
    {
      school: "SRM Institute of Science and Technology",
      href: "https://www.srmist.edu.in/",
      degree: "B.Tech, Electrical and Electronics Engineering",
      logoUrl: "/srm.png",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Dynamic Pricing Engine",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "Designed and built a dynamic pricing engine deployed across hundreds of B2B partner orgs. Uses agent intent signals to set discount depth and identifies the markup levels at which conversion actually happens. Combines data quality cleanup, intent gating logic, and discount calibration across agent segments.",
      technologies: [
        "Python",
        "SQL",
        "Machine Learning",
        "Pricing Analytics",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AI Quote Generation Pipeline",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "Engineered a GenAI pipeline combining LLMs with retrieval-augmented generation (RAG) to convert unstructured agent inputs into structured, bookable travel quotes. Handles complex itinerary requests across flights, hotels, and packages, turning natural language briefs into priced quotes ready to send to customers.",
      technologies: [
        "Python",
        "LLMs",
        "RAG",
        "GenAI",
        "Vector Search",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Voice AI Bot for Customer Support",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "Led the voice AI bot rollout for support and sales calls in partnership with external partners. Drove call theme analysis, bot flow design, and integration into production call flows. Now part of TravClan's customer-facing operations.",
      technologies: [
        "Voice AI",
        "Conversational AI",
        "NLP",
        "Python",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AI Ops Function",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "Built TravClan's AI Ops function from scratch. Deployed AI agents now handling a growing share of flights operations and customer experience tickets, reducing manual handling load. Covers ticket triage, automated resolution, and human-in-the-loop escalation.",
      technologies: [
        "AI Agents",
        "Python",
        "LLMs",
        "Workflow Automation",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
