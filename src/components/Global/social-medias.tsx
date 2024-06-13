import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandLinktree,
} from "@tabler/icons-react";
import Link from "next/link";

export default function SocialMedias() {
  return (
    <div className="flex lg:fixed lg:bottom-0 lg:left-20 lg:flex-col items-center justify-center gap-4 ">
      <Link href={"https://github.com/Dufyz"} target="_blank">
        <IconBrandGithub color="#eab308" className="cursor-pointer" size={24} />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/schmidt-iago-thomaz/"}
        target="_blank"
      >
        <IconBrandLinkedin
          color="#eab308"
          className="cursor-pointer"
          size={24}
        />
      </Link>
      <Link href={"https://linktr.ee/Dufyz"} target="_blank">
        <IconBrandLinktree
          color="#eab308"
          className="cursor-pointer"
          size={24}
        />
      </Link>

      <div className="w-[1px] bg-yellow-500 h-20 hidden lg:block" />
    </div>
  );
}
