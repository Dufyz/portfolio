"use client";

import Link from "next/link";
import NavbarMobile from "./navbar-mobile";
import NavbarDesktop from "./navbar-desktop";

export default function Navbar() {
  return (
    <header
      className={`w-full bg-gray-900 h-20 flex items-center justify-between px-12 text-white fixed top-0 bg-opacity-95 backdrop-blur-md z-50`}
    >
      <div>
        <Link href={"/"}>
          <h1 className="text-xl text-yellow-500 uppercase hover:text-yellow-600 cursor-pointer font-semibold">
            Dufyz
          </h1>
        </Link>
      </div>
      <>
        <NavbarMobile />
        <NavbarDesktop />
      </>
    </header>
  );
}
