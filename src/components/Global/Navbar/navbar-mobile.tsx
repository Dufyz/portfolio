import { IconMenuDeep } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const LI_CLASSES = "flex items-center justify-center gap-1";
const LI_ORDER_CLASSES = "text-gray-500 text-xl";
const LI_OPTION_CLASSES =
  "hover:text-yellow-500 text-white capitalize text-lg font-medium";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  const t = useTranslations("navbar");

  const handleCloseNavbar = () => {
    setOpen(false);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className=" lg:hidden">
        <button type="button">
          <IconMenuDeep size={36} color="#eab308" className="cursor-pointer" />
        </button>
      </SheetTrigger>
      <SheetContent className="max-w-[unset] sm:!max-w-md w-full">
        <nav className="flex-1 items-start justify-center flex h-full py-20">
          <ul className="flex flex-col items-start justify-center gap-8">
            <Link href={"/#About"} onClick={handleCloseNavbar}>
              <li className={LI_CLASSES}>
                <p className={LI_ORDER_CLASSES}>01.</p>
                <p className={LI_OPTION_CLASSES}>{t("items.about")}</p>
              </li>
            </Link>
            <Link href={"/#Projects"} onClick={handleCloseNavbar}>
              <li className={LI_CLASSES}>
                <p className={LI_ORDER_CLASSES}>02.</p>
                <p className={LI_OPTION_CLASSES}>{t("items.projects")}</p>
              </li>
            </Link>
            <Link href={"/#Contact"} onClick={handleCloseNavbar}>
              <li className={LI_CLASSES}>
                <p className={LI_ORDER_CLASSES}>03.</p>
                <p className={LI_OPTION_CLASSES}>{t("items.contact")}</p>
              </li>
            </Link>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
