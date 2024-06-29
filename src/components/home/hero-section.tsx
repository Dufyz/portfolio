import "@/styles/wave-hand-svg.css";
import Link from "next/link";

import { Typewriter } from "react-simple-typewriter";
import { useTranslations } from "next-intl";
import AnimatedButton from "../Global/AnimatedButton";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from "next/image";
import WaveHand from "../Global/wave-hand";

export default function HeroSection() {
  const { ref, inView } = useInView();
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) setKey((prevKey) => prevKey + 1);
  }, [inView]);

  const t = useTranslations("heroSection");

  return (
    <section className="w-full h-screen px-12" data-aos="fade-up">
      <div className="m-auto h-full max-w-screen-lg flex-1 w-full flex items-center justify-center flex-col text-white">
        <div className="flex items-start justify-center flex-col gap-14">
          <div className="flex items-start justify-center flex-col gap-8">
            <div className="flex items-start justify-center flex-col gap-4">
              <p
                className="text-lg text-yellow-500 font-semibold min-h-[28px]"
                ref={ref}
              >
                <Typewriter
                  key={key}
                  words={[t("h1")]}
                  loop={Infinity}
                  typeSpeed={60}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
              </p>
              <div className="flex items-start justify-center flex-col">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  Guilherme Schmidt.
                </h1>
                <div className="flex items-center justify-start flex-wrap">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl text-zinc-400 font-bold">
                    {t("h2")}
                  </h2>
                  <div className="flex items-center justify-center pt-2">
                    <WaveHand />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground max-w-xl text-gray-500 text-base sm:text-lg md:text-xl">
              {t("description")}{" "}
              <Link
                href={"https://www.hyerdev.com/"}
                target="_blank"
                className="text-yellow-500"
              >
                Hyerdev
              </Link>
            </p>
          </div>
          <AnimatedButton>
            <Link href={"/guilherme-resume.pdf"} target="_blank" download>
              <span>{t("resumeButton")}</span>
            </Link>
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
