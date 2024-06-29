import { useTranslations } from "next-intl";
import Link from "next/link";

const LI_CLASSES = "flex items-center justify-center gap-1";
const LI_ORDER_CLASSES = "text-gray-500";
const LI_OPTION_CLASSES =
  "hover:text-yellow-500 text-white capitalize text-sm font-medium";

export default function NavbarDesktop() {
  const t = useTranslations("navbar");
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center justify-center gap-8">
        <Link href={"/#About"}>
          <li className={LI_CLASSES}>
            <p className={LI_ORDER_CLASSES}>01.</p>
            <p className={LI_OPTION_CLASSES}>{t("items.about")}</p>
          </li>
        </Link>
        <Link href={"/#Projects"}>
          <li className={LI_CLASSES}>
            <p className={LI_ORDER_CLASSES}>02.</p>
            <p className={LI_OPTION_CLASSES}>{t("items.projects")}</p>
          </li>
        </Link>
        <Link href={"/#Contact"}>
          <li className={LI_CLASSES}>
            <p className={LI_ORDER_CLASSES}>03.</p>
            <p className={LI_OPTION_CLASSES}>{t("items.contact")}</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
