import Link from "next/link";
import SocialMedias from "./social-medias";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="h-20 w-full flex items-center justify-center text-white">
      <div className="max-w-screen-xl w-fullh-10 m-auto flex flex-col items-center justify-center text-sm text-gray-500  cursor-pointer gap-4">
        <SocialMedias />
        <Link
          href={"https://github.com/dufyz"}
          target="_blank"
          className="hover:text-yellow-500"
        >
          <p>by Guilherme Thomaz - Software engineer © </p>
        </Link>
      </div>
    </footer>
  );
}
