import { useTranslations } from "next-intl";
import Link from "next/link";

const LI_CLASSES = "flex items-center justify-center gap-1";
const LI_ORDER_CLASSES = "text-gray-500";
const LI_OPTION_CLASSES = "hover:text-yellow-500 capitalize text-sm";

export default function Navbar() {
  const t = useTranslations("navbar");
  return (
    <header className="w-full bg-gray-900 h-20 flex items-center justify-between px-12 text-white sticky top-0 bg-opacity-95">
      <div>
        <Link href={"/"}>
          <h1 className="text-xl text-yellow-500 uppercase hover:text-yellow-600 cursor-pointer">
            Dufyz
          </h1>
        </Link>
      </div>
      <nav>
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#About"}>
            <li className={LI_CLASSES}>
              <p className={LI_ORDER_CLASSES}>01.</p>
              <p className={LI_OPTION_CLASSES}>{t("items.about")}</p>
            </li>
          </Link>
          <Link href={"#Experience"}>
            <li className={LI_CLASSES}>
              <p className={LI_ORDER_CLASSES}>02.</p>
              <p className={LI_OPTION_CLASSES}>{t("items.experience")}</p>
            </li>
          </Link>
          <Link href={"#Work"}>
            <li className={LI_CLASSES}>
              <p className={LI_ORDER_CLASSES}>03.</p>
              <p className={LI_OPTION_CLASSES}>{t("items.work")}</p>
            </li>
          </Link>
          <Link href={"#Contact"}>
            <li className={LI_CLASSES}>
              <p className={LI_ORDER_CLASSES}>04.</p>
              <p className={LI_OPTION_CLASSES}>{t("items.contact")}</p>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
