import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full h-[calc(100vh-80px)] px-12">
      <div className="m-auto h-full max-w-screen-lg flex-1 w-full flex items-start justify-center flex-col text-white">
        <div className="flex items-start justify-center flex-col gap-14">
          <div className="flex items-start justify-center flex-col gap-8">
            <div className="flex items-start justify-center flex-col gap-4">
              <p className="text-lg text-yellow-500">Hi, my name is</p>
              <div className="flex items-start justify-center flex-col">
                <h1 className="text-6xl">Guilherme Schmidt.</h1>
                <h2 className="text-7xl text-zinc-400">I build somethings.</h2>
              </div>
            </div>
            <p className="text-muted-foreground max-w-xl text-lg">
              I’m a software engineer specializing in building exceptional
              digital experiences. Currently, I’m focused on my work at{" "}
              <Link
                href={"https://www.hyerdev.com/"}
                target="_blank"
                className="text-yellow-500"
              >
                Hyerdev
              </Link>
            </p>
          </div>
          <button className="rounded-md py-4 px-8 border border-yellow-500">
            Check out my resume!
          </button>
        </div>
      </div>
    </section>
  );
}
