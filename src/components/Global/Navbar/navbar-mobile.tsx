import { IconMenuDeep, IconX } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";

const LI_CLASSES = "flex items-center justify-center gap-1";
const LI_ORDER_CLASSES = "text-gray-500 text-xl";
const LI_OPTION_CLASSES = "hover:text-yellow-500 text-white capitalize text-lg";

export default function NavbarMobile({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const t = useTranslations("navbar");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const { key } = e;

      switch (key) {
        case "Escape":
          setOpen(false);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.addEventListener("keydown", handleKeyDown);
  }, [setOpen]);

  return (
    <div className="flex lg:hidden">
      <button type="button" onClick={() => setOpen(true)}>
        <IconMenuDeep size={36} color="#eab308" className="cursor-pointer" />
      </button>
      <dialog
        className={` ${
          open ? "flex" : "hidden"
        } top-0 fixed h-screen w-full items-center justify-end bg-black bg-opacity-60 backdrop-blur-sm`}
      >
        <button
          className="flex-1 h-screen cursor-default"
          type="button"
          onClick={() => setOpen(false)}
        />
        <div className="sm:max-w-80 w-full h-screen bg-gray-900 border-l-[1px] p-6 flex flex-col gap-20">
          <div className="w-full flex items-center justify-end">
            <button type="button" onClick={() => setOpen(false)}>
              <IconX size={36} color="#eab308" className="cursor-pointer" />
            </button>
          </div>
          <nav className="flex-1 items-start justify-center flex h-full">
            <ul className="flex flex-col items-start justify-center gap-8">
              <Link href={"/#About"}>
                <li className={LI_CLASSES}>
                  <p className={LI_ORDER_CLASSES}>01.</p>
                  <p className={LI_OPTION_CLASSES}>{t("items.about")}</p>
                </li>
              </Link>
              <Link href={"/#Experience"}>
                <li className={LI_CLASSES}>
                  <p className={LI_ORDER_CLASSES}>02.</p>
                  <p className={LI_OPTION_CLASSES}>{t("items.experience")}</p>
                </li>
              </Link>
              <Link href={"/#Work"}>
                <li className={LI_CLASSES}>
                  <p className={LI_ORDER_CLASSES}>03.</p>
                  <p className={LI_OPTION_CLASSES}>{t("items.work")}</p>
                </li>
              </Link>
              <Link href={"/#Contact"}>
                <li className={LI_CLASSES}>
                  <p className={LI_ORDER_CLASSES}>04.</p>
                  <p className={LI_OPTION_CLASSES}>{t("items.contact")}</p>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </dialog>
    </div>
  );
}
