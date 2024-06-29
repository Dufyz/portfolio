import Link from "next/link";
import { ReactNode } from "react";

type SocialCardProps = {
  icon?: ReactNode;
  label: string;
  link: string;
};

export default function SocialCard({ label, icon, link }: SocialCardProps) {
  return (
    <Link href={link} target="_blank">
      <div className="w-full bg-slate-700 hover:bg-slate-800 px-2 py-2  rounded-md flex items-center justify-center gap-2">
        <div>{icon}</div>
        <p className="text-base text-white font-medium">{label}</p>
      </div>
    </Link>
  );
}
