import { Typewriter } from "react-simple-typewriter";
import AnimatedButton from "../Global/AnimatedButton";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const { ref, inView } = useInView();
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) setKey((prevKey) => prevKey + 1);
  }, [inView]);

  return (
    <section
      className="w-full text-white h-[60vh] flex items-center justify-center px-12"
      id="Contact"
      data-aos="fade-up"
    >
      <div className="max-w-screen-sm w-full m-auto flex items-center justify-center flex-col gap-8">
        <div className="text-sm text-gray-500 gap-6 text-center flex flex-col items-center justify-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl text-white font-semibold min-h-16 text-center flex flex-col items-center justify-center sm:flex-row"
            ref={ref}
          >
            <Typewriter
              key={key}
              words={[t("title")]}
              loop={1}
              typeSpeed={50}
            />
            <span className="text-3xl sm:text-4xl ml-2 order-first sm:order-last">
              👀
            </span>
          </h1>
          <div className="text-sm sm:text-base  md:text-lg text-zinc-400">
            <p>{t("descriptions.first")}</p>
            <p>{t("descriptions.second")}</p>
          </div>
        </div>
        <Link href={"https://linktr.ee/Dufyz"} target="_blank">
          <AnimatedButton>
            <span>{t("button")}</span>
          </AnimatedButton>
        </Link>
      </div>
    </section>
  );
}
