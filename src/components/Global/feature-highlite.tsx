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
    <div className="w-full lg:h-[362px] flex  relative flex-col-reverse gap-6 lg:flex-row-reverse">
      <div
        className={`w-full flex-1 h-full lg:absolute flex items-center   ${
          side === "left" ? "justify-start" : "justify-end"
        }`}
      >
        <Image
          alt="project  image"
          width={1240}
          height={1240}
          quality={100}
          src={imageSrc}
          className="bg-yellow-500 w-full lg:max-w-xl flex-1 h-[362px] lg:h-full rounded-md object-cover hover:scale-105  lg:hover:scale-110 transition delay-200 duration-300 ease-in-out"
        />
      </div>
      <div
        className={`flex-1 h-full flex ${
          side === "left" ? "lg:items-end" : "lg:items-start"
        } justify-start flex-col gap-4`}
      >
        <div
          className={`flex flex-col ${
            side === "left" ? "lg:items-end" : "lg:lg:items-start"
          } justify-center gap-2 z-10 `}
        >
          <p className="text-base font-semibold text-yellow-500">{label}</p>
          <h1
            className={`text-2xl  lg:text-3xl text-white font-semibold capitalize max-w-sm  ${
              side === "left" ? "lg:text-end" : "lg:text-start"
            }`}
          >
            {title}
          </h1>
        </div>
        <div
          className={` flex flex-col ${
            side === "left" ? "lg:items-end" : "lg:items-start"
          } justify-center gap-4`}
        >
          <div
            className={`w-full text-sm lg:text-base lg:max-w-lg bg-gray-800 text-white rounded-md  ${
              side === "left" ? "lg:text-end" : "lg:text-start"
            } z-10 text-wrap `}
          >
            <p className="p-6 overflow-ellipsis">{description}</p>
          </div>
          <div
            className={`flex items-center ${
              side === "left" ? "lg:justify-end" : "lg:justify-start"
            }  gap-2 lg:gap-4 text-yellow-500 max-w-md flex-wrap z-10 font-medium`}
          >
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
          <div className="flex items-center justify-start lg:justify-center gap-2 z-10">
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
