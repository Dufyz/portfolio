export const technologies = {
  tailwind: {
    label: "Tailwind",
    link: "https://tailwindcss.com/",
  },
  nextjs: {
    label: "Next.js",
    link: "https://nextjs.org/",
  },
  vercel: {
    label: "Vercel",
    link: "https://vercel.com/",
  },
  shadcn: {
    label: "ShadCn",
    link: "https://ui.shadcn.com/",
  },
  expressjs: {
    label: "Express",
    link: "https://expressjs.com/pt-br/",
  },
};

export type Technologies = keyof typeof technologies;
