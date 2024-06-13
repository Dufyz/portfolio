import Link from "next/link";
import "./styles.css";

import { Typewriter } from "react-simple-typewriter";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("heroSection");

  return (
    <section className="w-full h-[calc(100vh-80px)] px-12">
      <div className="m-auto h-full max-w-screen-lg flex-1 w-full flex items-center justify-center flex-col text-white">
        <div
          className="flex items-start justify-center flex-col gap-14"
          data-aos="fade-up"
        >
          <div className="flex items-start justify-center flex-col gap-8">
            <div className="flex items-start justify-center flex-col gap-4">
              <p className="text-lg text-yellow-500 font-semibold min-h-[28px]">
                <Typewriter
                  words={[t("h1")]}
                  loop={Infinity}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={5000}
                />
              </p>
              <div className="flex items-start justify-center flex-col">
                <h1 className="text-6xl font-bold">Guilherme Schmidt.</h1>
                <h2 className="text-5xl text-zinc-400 font-bold">{t("h2")}</h2>
              </div>
            </div>
            <p className="text-muted-foreground max-w-xl text-gray-500 text-xl">
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
          <a className="flex items-center justify-center" href="#">
            <button className="cta">
              <span>{t("resumeButton")}</span>
            </button>
          </a>
        </div>
        <p></p>
      </div>
    </section>
  );
}
