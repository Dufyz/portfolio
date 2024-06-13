import { Typewriter } from "react-simple-typewriter";
import AnimatedButton from "../Global/AnimatedButton";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Contact() {
  const { ref, inView } = useInView();
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) setKey((prevKey) => prevKey + 1);
  }, [inView]);

  return (
    <section
      className="w-full text-white h-[60vh] flex items-center justify-center px-12"
      id="Contact"
    >
      <div className="max-w-screen-sm w-full m-auto flex items-center justify-center flex-col gap-8">
        <div className="text-sm text-gray-500 gap-6 text-center flex flex-col items-center justify-center">
          <h1 className="text-6xl text-white font-semibold min-h-16" ref={ref}>
            <Typewriter
              key={key}
              words={["Get In Touch"]}
              loop={1}
              typeSpeed={50}
            />
          </h1>
          <p className="text-lg text-zinc-400">
            If you have any question or interest, do not hesitate to reach me.
            Thank you for your time and consideration.
          </p>
        </div>
        <Link href={"https://linktr.ee/Dufyz"} target="_blank">
          <AnimatedButton>
            <span>Contact</span>
          </AnimatedButton>
        </Link>
      </div>
    </section>
  );
}
