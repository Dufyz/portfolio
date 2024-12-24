import { FeatureHighlite } from "@/components/Global/feature-highlite";
import { useTranslations } from "next-intl";

export const useHighlightedProjects = (): FeatureHighlite[] => {
  const t = useTranslations("projects.highlightedProjects");

  return [
    {
      imageSrc: "/projects/pedidoio.png",
      title: t("pedido-io.title"),
      description: t("pedido-io.description"),
      technologies: [
        "vitejs",
        "postgresql",
        "vercel",
        "tailwind",
        "docker",
        "go",
        "shadcn",
      ],
      externalLinks: {
        external: "https://portal.pedido.io/",
      },
      side: "left",
    },
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
      imageSrc: "/projects/language-detector.png",
      title: t("languageDetector.title"),
      description: t("languageDetector.description"),
      technologies: ["python", "scikitLearn", "pandas"],
      externalLinks: {
        github: "https://github.com/Dufyz/ML-Language-Detector-Interface",
      },
      side: "left",
    },
  ];
};
