import { FeatureHighlite } from "@/components/Global/feature-highlite";
import { useTranslations } from "next-intl";

export const useHighlightedProjects = (): FeatureHighlite[] => {
  const t = useTranslations("projects.highlightedProjects");

  return [
    {
      imageSrc: "/projects/knowledge-base.png",
      title: t("knowledgeBase.title"),
      description: t("knowledgeBase.description"),
      technologies: [
        "nextjs",
        "postgresql",
        "expressjs",
        "supabase",
        "vercel",
        "tailwind",
      ],
      externalLinks: {
        external: "https://ajuda.sacflow.io/hyerdev",
      },
    },
    {
      imageSrc: "/projects/your-finance.png",
      title: t("yourFinance.title"),
      description: t("yourFinance.description"),
      technologies: [
        "nextjs",
        "postgresql",
        "supabase",
        "vercel",
        "tailwind",
        "shadcn",
      ],
      externalLinks: {
        github: "https://github.com/Dufyz/your-finance",
        external: "https://your-finance-web.vercel.app/dashboard",
      },
      side: "left",
    },
    {
      imageSrc: "/projects/language-detector.png",
      title: t("languageDetector.title"),
      description: t("languageDetector.description"),
      technologies: ["python", "scikitLearn", "pandas"],
      externalLinks: {
        github: "https://github.com/Dufyz/ML-Language-Detector-Interface",
      },
    },
  ];
};
