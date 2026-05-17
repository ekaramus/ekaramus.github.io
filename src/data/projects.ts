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
      "A mobile-first voice messaging MVP with ultra-short recordings, automatic transcription, Supabase-backed persistence, private audio access, and a retro recorder-style UI.",
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
      "voice-first product UX",
      "recording and transcription states",
      "Supabase auth, storage, and realtime flows",
      "security-minded audio handling",
      "accessibility and error states"
    ],
    links: [
      {
        label: "Case study",
        href: "/projects/voicepin",
      },
      {
        label: "GitHub",
        href: "https://github.com/ekaramus/voicepin",
        external: true,
      },
      {
        label: "Demo video planned",
        href: "#",
        disabled: true,
      },
    ],
  },
  {
    title: "VibeCheck",
    slug: "vibecheck",
    type: "Slow productivity tracker",
    description:
      "A calm daily reflection product with morning check-ins, optional goals, evening reflection, Supabase-backed user data, and derived status logic for imperfect real-life behavior.",
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
      "typed domain modeling",
      "derived status logic",
      "Supabase SSR and RLS-protected data",
      "React Query entry flows",
      "tested product behavior"
    ],
    links: [
      {
        label: "Case study",
        href: "/projects/vibecheck",
      },
      {
        label: "GitHub",
        href: "https://github.com/ekaramus/vibecheck",
        external: true,
      },
    ],
  },
];