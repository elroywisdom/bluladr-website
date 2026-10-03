export interface Course {
  slug: string;
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  headline: string;
  overview: string;
  whatWeCover: string[];
  leavesWith: string;
  extensiveSession?: string;
  howItRunsSteps?: { step: string; desc: string }[];
  accentColor: string;
}

export const COURSES: Course[] = [
  {
    slug: "brand-strategy",
    id: "brand-strategy",
    number: "01",
    title: "Brand Strategy",
    shortDesc: "Define your brand and align it with business goals.",
    headline: "Know who you are. Build a strategy that proves it.",
    overview:
      "This course helps your team define the brand clearly and align it with business goals. We guide you, step by step, to a strategy that supports your organisation's objectives.",
    whatWeCover: [
      "Brand foundations and positioning",
      "Audience insight and value proposition",
      "Brand architecture and messaging",
      "Translating strategy into execution",
      "Brand discovery session",
    ],
    leavesWith:
      "A complete brand strategy, a business strategy document and a full brand audit.",
    extensiveSession: "Includes a 3-hour workshop.",
    accentColor: "var(--azure)",
  },
  {
    slug: "strategic-communications",
    id: "strategic-communications",
    number: "02",
    title: "Strategic Communications",
    shortDesc: "Communicate clearly with every stakeholder, inside and out.",
    headline: "Say the right thing, to the right people, the right way.",
    overview:
      "This course equips your team to communicate clearly across internal and external stakeholders and platforms.",
    whatWeCover: [
      "Communication strategy fundamentals",
      "Stakeholder mapping and messaging",
      "Internal communication planning",
      "Crisis and reputation considerations",
    ],
    leavesWith:
      "An internal and external communication strategy aligned with business priorities.",
    extensiveSession: "Includes a 2-hour workshop.",
    accentColor: "var(--purple)",
  },
  {
    slug: "creative-thinking",
    id: "creative-thinking",
    number: "03",
    title: "Creative Thinking",
    shortDesc: "Generate better ideas and solve problems with confidence.",
    headline: "Creativity is a skill. Your team can learn it.",
    overview:
      "This course strengthens how your team generates ideas, solves problems and approaches communication creatively.",
    whatWeCover: [
      "Understanding creative thinking in business",
      "Problem framing and idea generation techniques",
      "Collaborative thinking and ideation sessions",
      "Applying creativity to everyday work challenges",
    ],
    leavesWith:
      "Improved creative confidence and a practical toolkit for idea generation and problem-solving.",
    extensiveSession:
      "Includes interactive sessions and generative exercises aligned with your communication goals.",
    accentColor: "var(--aqua)",
  },
  {
    slug: "brand-stewardship",
    id: "brand-stewardship",
    number: "04",
    title: "Brand Stewardship",
    shortDesc: "Protect, manage and consistently apply your brand.",
    headline: "Your brand needs guardians. We train them.",
    overview:
      "This course helps your team protect, manage and consistently apply the brand. It develops brand stewards within your team and teaches them to assess external creative work for alignment.",
    howItRunsSteps: [
      { step: "Audit", desc: "We review how your brand is currently applied across touchpoints." },
      { step: "Train", desc: "We train your team on a new, board-approved brand system." },
      { step: "Elect", desc: "Your team elects its brand compliance officers." },
      { step: "Pledge", desc: "A closing workshop where the team commits to upholding the brand." },
    ],
    whatWeCover: [
      "Brand governance and consistency",
      "Managing touchpoints and assets",
      "Working with agencies and vendors",
      "Brand evaluation and audits",
    ],
    leavesWith:
      "Revised brand guidelines, elected compliance officers and governance tools for consistent brand management.",
    accentColor: "var(--green)",
  },
  {
    slug: "creative-project-management",
    id: "creative-project-management",
    number: "05",
    title: "Creative Project Management",
    shortDesc: "Deliver creative projects on time and to standard.",
    headline: "Creativity, delivered on time and to standard.",
    overview:
      "This course bridges creativity and structure. Your team learns to run creative projects from brief to delivery without losing quality or deadlines.",
    whatWeCover: [
      "Creative workflows and processes",
      "Planning, timelines and resourcing",
      "Stakeholder and vendor management",
      "Quality control and delivery standards",
    ],
    leavesWith:
      "A creative project workflow, including templates, timelines and delivery frameworks.",
    extensiveSession:
      "Covers project thinking, production, team, stakeholder and event management.",
    accentColor: "var(--confetti)",
  },
  {
    slug: "campaign-and-content-development",
    id: "campaign-and-content-development",
    number: "06",
    title: "Campaign & Content Development",
    shortDesc: "Plan campaigns that are purposeful, consistent and measurable.",
    headline: "Campaigns with purpose. Content with direction.",
    overview:
      "This course focuses on planning and delivering campaigns that are purposeful, consistent and measurable.",
    whatWeCover: [
      "Campaign thinking and objectives",
      "Content planning and formats",
      "Channel selection and integration",
      "Measuring impact and effectiveness",
    ],
    leavesWith: "A campaign framework and content plan ready for execution.",
    extensiveSession:
      "Includes a workshop on creative campaigns aligned with your business goals.",
    accentColor: "var(--azure)",
  },
];
