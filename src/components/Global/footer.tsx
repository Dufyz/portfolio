import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="h-20 w-full flex items-center justify-center text-white">
      <div className="max-w-screen-xl w-fullh-10 m-auto flex flex-col items-center justify-center text-sm text-gray-500 hover:text-yellow-500 cursor-pointer">
        <Link href={"https://github.com/dufyz"} target="_blank">
          <p>by Guilherme Thomaz - Software engineer © </p>
        </Link>
      </div>
    </footer>
  );
}
