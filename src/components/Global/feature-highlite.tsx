import { Technologies } from "@/data/technologies";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { technologies as dataTechologies } from "@/data/technologies";

export type FeatureHighlite = {
  imageSrc: string;
  label?: string;
  title: string;
  description: string;
  technologies?: Technologies[];
  externalLinks?: {
    external?: string;
    github?: string;
  };
  side?: "left" | "rigth";
};

export default function FeatureHighlite({
  label = "Featured Project",
  imageSrc,
  title,
  description,
  technologies,
  externalLinks,
  side = "rigth",
}: FeatureHighlite) {
  return (
    <div className="w-full h-[362px] flex relative" data-aos="fade-up">
      <div className="w-full flex-1 h-full absolute">
        <Image
          alt="project knowledge-base image"
          width={500}
          height={500}
          quality={100}
          src={imageSrc}
          className="bg-yellow-500 w-full max-w-xl flex-1 h-full rounded-md object-cover hover:scale-125 transition delay-200 duration-300 ease-in-out"
        />
      </div>
      <div className="flex-1 h-full flex items-end justify-start flex-col gap-4">
        <div className="flex flex-col items-end justify-center gap-2 z-10 ">
          <p className="text-base text-yellow-500">{label}</p>
          <h1 className="text-3xl text-white font-semibold capitalize max-w-sm text-end">
            {title}
          </h1>
        </div>
        <div className=" flex flex-col items-end justify-center gap-4">
          <div className="w-full max-w-xl bg-gray-800 text-white rounded-md p-6 text-end max-h-44 line-clamp-6 z-10 ">
            <p>{description}</p>
          </div>
          <div className="flex items-center justify-end gap-4 text-yellow-400 max-w-md flex-wrap z-10">
            {technologies?.map((tech: Technologies, index) => (
              <Link
                key={index}
                href={dataTechologies[tech].link}
                target="_blank"
              >
                <p>{dataTechologies[tech].label}</p>
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 z-10">
            {externalLinks?.github && (
              <Link href={externalLinks?.github} target="_blank">
                <IconBrandGithub color="white" className="cursor-pointer" />
              </Link>
            )}
            {externalLinks?.external && (
              <Link href={externalLinks?.external} target="_blank">
                <IconExternalLink color="white" className="cursor-pointer" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
