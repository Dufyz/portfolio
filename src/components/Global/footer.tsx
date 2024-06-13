import Link from "next/link";
import SocialMedias from "./social-medias";

/* Please do not remove the copyright <3 */

export default function Footer() {
  return (
    <footer className="h-28 lg:h-20 w-full flex items-center justify-center text-white px-12">
      <div className="max-w-screen-xl w-full h-10 m-auto flex flex-col items-center justify-center text-sm text-gray-500  cursor-pointer gap-4 text-center">
        <SocialMedias />
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
