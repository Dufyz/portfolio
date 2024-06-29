import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandLinktree,
} from "@tabler/icons-react";
/* Please do not remove the copyright <3 */

export default function Footer() {
  return (
    <footer className="h-28 lg:h-20 w-full flex items-center justify-center text-white px-12">
      <div className="max-w-screen-xl w-full h-10 m-auto flex flex-col items-center justify-center text-sm text-gray-500  cursor-pointer gap-4 text-center">
        <div className="flex lg:fixed lg:bottom-0 lg:left-20 lg:flex-col items-center justify-center gap-4">
          <Link href={"https://github.com/Dufyz"} target="_blank">
            <IconBrandGithub
              color="#eab308"
              className="cursor-pointer"
              size={24}
            />
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
        <Link
          href={"https://github.com/dufyz"}
          target="_blank"
          className="hover:text-yellow-500"
        >
          <p>by Guilherme Schmidt - Software engineer © </p>
        </Link>
      </div>
    </footer>
  );
}
