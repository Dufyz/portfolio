import { Technologies, technologies } from "@/data/technologies";
import { IconChevronRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
const myTechnologies: Technologies[] = [
  "typescript",
  "nextjs",
  "tailwind",
  "expressjs",
  "postgresql",
  "docker",
  "python",
  "shadcn",
  "socketio",
  "git",
];

export default function About() {
  const { ref, inView } = useInView();
  const [key, setKey] = useState(0);

  const t = useTranslations("about");

  useEffect(() => {
    if (inView) setKey((prevKey) => prevKey + 1);
  }, [inView]);

  return (
    <section className="w-full h-[unset] md:h-screen px-12" data-aos="fade-up">
      <div
        className="max-w-screen-lg w-full h-full flex-1 m-auto flex items-center justify-center flex-col gap-10"
        id="About"
      >
        <div className="w-full flex items-center flex-wrap justify-start gap-2 ">
          <span className="text-gray-500 text-xl md:text-2xl">01.</span>
          <h1
            className="text-yellow-400 text-3xl lg:text-4xl font-semibold"
            ref={ref}
          >
            <Typewriter
              key={key}
              words={["About me"]}
              loop={1}
              typeSpeed={40}
            />
          </h1>
        </div>
        <div className="flex flex-col-reverse w-full items-start justify-center gap-8 md:block ">
          <div className="float-right flex w-full justify-center items-center md:ml-12 md:mb-12 md:w-[unset]">
            <Image
              alt="Guilherme's photo"
              width={1240}
              height={1240}
              quality={100}
              src={"/about/eu.jpeg"}
              className="bg-yellow-500 w-full max-w-72 h-80 flex-1  md:h-full rounded-md object-cover hover:scale-105  lg:hover:scale-110 transition delay-200 duration-300 ease-in-out object-top"
            />
          </div>
          <div className="w-full text-white text-base sm:text-xl md:text-2xl">
            <p className="mb-4">
              Eu me descrevo como alguém apaixonado pelo conhecimento. Comecei a
              estudar astronomia e, ao longo do caminho, descobri o quão
              importante os dados são para a ciência e o funcionamento de
              sistemas, carros, robôs e inteligências artificiais que tanto me
              interessam. Foi assim que meu amor pela tecnologia surgiu quando
              eu ainda era criança.
            </p>
            <p className="mb-4">
              Como desenvolvedor, trabalho com ciência de dados, bancos de dados
              e infraestrutura. Utilizo meu conhecimento em tecnologia para
              desenvolver projetos que abrangem todas as minhas habilidades.
              Minhas qualificações são respaldadas por uma sólida base
              educacional onde minhas habilidades pessoais e acadêmicas foram
              aprimoradas.
            </p>

            <p>
              Como desenvolvedor, trabalho com ciência de dados, bancos de dados
              e infraestrutura. Utilizo meu conhecimento em tecnologia para
              desenvolver projetos que abrangem todas as minhas habilidades.
              Minhas qualificações são respaldadas por uma sólida base
              educacional onde minhas habilidades pessoais e acadêmicas foram
              aprimoradas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
