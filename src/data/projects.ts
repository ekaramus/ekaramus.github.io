export type ProjectStatus = "MVP nearly ready" | "In progress";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
};

export type Project = {
  title: string;
  slug: string;
  type: string;
  description: string;
  status: ProjectStatus;
  featured?: boolean;
  tags: string[];
  demonstrates: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "VoicePin",
    slug: "voicepin",
    type: "Voice-first communication prototype",
    description:
      "A short voice-message communicator with automatic speech-to-text and a retro recorder vibe.",
    status: "MVP nearly ready",
    featured: true,
    tags: [
      "Voice UX",
      "React",
      "TypeScript",
      "Next.js",
      "Supabase",
      "ElevenLabs",
      "Vitest",
    ],
    demonstrates: [
      "voice-first interaction design",
      "React + TypeScript frontend architecture",
      "API integration",
      "async state handling",
      "product scoping",
      "testable UI behavior",
      "mobile-first thinking",
    ],
    links: [
      {
        label: "Case study",
        href: "/projects/voicepin",
      },
      {
        label: "GitHub",
        href: "https://github.com/ekaramus",
        external: true,
      },
      {
        label: "Demo coming soon",
        href: "#",
        disabled: true,
      },
    ],
  },
  {
    title: "Slow Productivity",
    slug: "slow-productivity",
    type: "Calm daily reflection product",
    description:
      "A calm daily tracker for energy, goals, and realistic reflection — built around gentle, imperfect productivity.",
    status: "In progress",
    tags: [
      "Product thinking",
      "React",
      "TypeScript",
      "Next.js",
      "Supabase",
      "Tailwind",
      "Vitest",
    ],
    demonstrates: [
      "domain modeling",
      "partial entry handling",
      "Supabase-backed user data",
      "computed statuses",
      "form UX",
      "behavior-driven testing",
      "calm product design",
    ],
    links: [
      {
        label: "Case study",
        href: "/projects/slow-productivity",
      },
      {
        label: "GitHub",
        href: "https://github.com/ekaramus",
        external: true,
      },
    ],
  },
];