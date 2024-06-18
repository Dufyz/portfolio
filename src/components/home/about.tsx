import { Technologies, technologies } from "@/data/technologies";
import { IconChevronRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("about");

  return (
    <section className="w-full h-[unset] md:h-screen px-12" data-aos="fade-up">
      <div
        className="max-w-screen-lg w-full h-full flex-1 m-auto flex items-center justify-center flex-col gap-10"
        id="About"
      >
        <div className="w-full flex items-center flex-wrap justify-start gap-2 ">
          <span className="text-gray-500 text-xl md:text-2xl">01.</span>
          <h1 className="text-yellow-400 text-3xl lg:text-4xl font-semibold">
            About me
          </h1>
        </div>
        <div className="flex flex-col-reverse w-full items-start justify-between gap-8 md:flex-row">
          <div className="w-full max-w-xl flex flex-col items-start justify-center gap-10 text-white text-base sm:text-xl">
            <div className="w-full">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis maxime voluptas ex eligendi, aliquam doloribus dolor
                facere, quaerat suscipit quo veritatis in neque fugiat eum illo
                reiciendis, dolores ea at. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Veniam, deleniti? Laudantium
                consectetur fugiat qui aut officia odit delectus, vel odio quod
                ratione ad sint. Omnis labore velit debitis ab magnam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                porro tempora ipsa maiores non totam harum voluptas asperiores
                explicabo, voluptates, voluptatibus excepturi fuga officia
                quibusdam repellendus neque aut atque quo!
              </p>
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-4 flex-wrap">
              <p className="text-lg font-semibold">Technologies i work with:</p>
              <div className="flex flex-row items-start gap-4 max-w-xl flex-wrap">
                {myTechnologies.map((tech, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <IconChevronRight color="#EAB308" size={20} />
                    <p className="text-yellow-400 font-semibold text-lg list-disc">
                      {technologies[tech].label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full md:max-w-80 justify-end">
            <div className="bg-yellow-500 w-full h-80">a</div>
          </div>
        </div>
      </div>
    </section>
  );
}
