import { Technologies } from "./technologies";

type WorkItem = {
  year: number;
  project: string;
  technologies: Technologies[];
  link: string;
  isFavourite?: boolean;
};

export const works: WorkItem[] = [
  {
    year: 2024,
    project: "Your Finance",
    technologies: [
      "nextjs",
      "typescript",
      "vercel",
      "postgresql",
      "supabase",
      "docker",
      "git",
      "github",
    ],
    link: "https://github.com/Dufyz/your-finance",
    isFavourite: true,
  },
  {
    year: 2024,
    project: "Hash challenge",
    technologies: ["go"],
    link: "https://github.com/Dufyz/hash-challenge",
    isFavourite: true,
  },
  {
    year: 2024,
    project: "Knowledge Base",
    technologies: [
      "nextjs",
      "typescript",
      "vercel",
      "postgresql",
      "supabase",
      "git",
      "github",
    ],
    link: "https://ajuda.sacflow.io/hyerdev",
    isFavourite: true,
  },
  {
    year: 2024,
    project: "Portfolio",
    technologies: ["nextjs", "typescript", "tailwind", "vercel"],
    link: "https://github.com/Dufyz/portfolio",
    isFavourite: true,
  },
  {
    year: 2024,
    project: "CASER",
    technologies: ["nextjs", "typescript", "tailwind", "vercel"],
    link: "",
  },
  {
    year: 2024,
    project: "Duflix",
    technologies: ["react"],
    link: "https://github.com/Dufyz/duflix",
  },
  {
    year: 2023,
    project: "Language detector",
    technologies: ["python", "pandas", "scikitLearn"],
    link: "https://github.com/Dufyz/ML-Language-Detector-Interface",
    isFavourite: true,
  },
  {
    year: 2023,
    project: "Twitter Computer Vision API",
    technologies: ["python", "pandas", "scikitLearn"],
    link: "https://github.com/Dufyz/Twitter-Computer-Vision-API",
  },
];
