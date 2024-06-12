"use client";

import Link from "next/link";
import NavbarMobile from "./navbar-mobile";
import NavbarDesktop from "./navbar-desktop";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`w-full bg-gray-900 h-20 flex items-center justify-between px-12 text-white sticky top-0 bg-opacity-95 ${
        !open ? "backdrop-blur-sm" : ""
      }`}
    >
      <div>
        <Link href={"/"}>
          <h1 className="text-xl text-yellow-500 uppercase hover:text-yellow-600 cursor-pointer font-semibold">
            Dufyz
          </h1>
        </Link>
      </div>
      <>
        <NavbarMobile open={open} setOpen={setOpen} />
        <NavbarDesktop />
      </>
    </header>
  );
}
