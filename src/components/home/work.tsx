import { works } from "@/data/works";
import FeatureHighlite from "@/components/Global/feature-highlite";

export default function Work() {
  return (
    <section className="w-full h-screen px-12" id="Experience">
      <div className="max-w-screen-lg w-full m-auto flex items-center justify-center flex-col gap-40">
        {works.map((work, index) => (
          <FeatureHighlite {...work} key={index} />
        ))}
      </div>
    </section>
  );
}
