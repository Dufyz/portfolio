import { works } from "@/data/works";
import FeatureHighlite from "@/components/Global/feature-highlite";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import AnimatedButton from "../Global/AnimatedButton";

export default function Work() {
  return (
    <section
      className="w-full min-h-screen px-12 pt-[200px] md:pt-[256px]"
      id="Work"
      data-aos="fade-up"
    >
      <div className="max-w-screen-lg w-full m-auto flex items-center justify-center flex-col gap-10">
        <div className="w-full flex items-center flex-wrap justify-start gap-2">
          <span className="text-gray-500 text-xl md:text-2xl">03.</span>
          <h1 className="text-yellow-400 text-3xl lg:text-4xl font-semibold">
            Some Things I’ve Built
          </h1>
        </div>
        <div className="w-full flex-col gap-32 flex items-center justify-center">
          {works.slice(0, 3).map((work, index) => (
            <FeatureHighlite {...work} key={index} />
          ))}
        </div>
        <div className="w-full flex items-center justify-end">
          <Link href={"/work"}>
            <AnimatedButton className="flex items-center justify-end gap-1 p-4 py-2">
              <p className="text-white uppercase font-semibold text-base">
                view more
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
