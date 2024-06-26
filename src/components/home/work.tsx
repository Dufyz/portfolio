import FeatureHighlite from "@/components/Global/feature-highlite";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import AnimatedButton from "../Global/AnimatedButton";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useHighlightedProjects } from "@/data/highlightedProjects";

const MAX_HIGLITES_HOME_PAGE = 3;

export default function Work() {
  const t = useTranslations("work");

  const { ref, inView } = useInView();
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) setKey((prevKey) => prevKey + 1);
  }, [inView]);

  return (
    <section
      className="w-full min-h-screen px-12 pt-[184px]"
      id="Work"
      data-aos="fade-up"
    >
      <div className="max-w-screen-lg w-full m-auto flex items-center justify-center flex-col gap-10">
        <div className="w-full flex items-center flex-wrap justify-start gap-2 pb-4">
          <span className="text-gray-500 text-xl md:text-2xl">03.</span>
          <h1
            className="text-yellow-500 text-3xl lg:text-4xl font-semibold"
            ref={ref}
          >
            <Typewriter
              key={key}
              words={[t("title")]}
              loop={1}
              typeSpeed={20}
            />
          </h1>
        </div>
        <div className="w-full flex-col gap-32 flex items-center justify-center">
          {useHighlightedProjects()
            .slice(0, MAX_HIGLITES_HOME_PAGE)
            .map((work, index) => (
              <FeatureHighlite {...work} key={index} />
            ))}
        </div>
        <div className="w-full flex items-center justify-end">
          <Link href={"/work"}>
            <AnimatedButton className="flex items-center justify-end p-2">
              <p className="text-white uppercase font-semibold text-sm lg:text-base">
                {t("buttons.viewMore")}
              </p>
              <div>
                <IconChevronRight color="#fff" size={24} />
              </div>
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
