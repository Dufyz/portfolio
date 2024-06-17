import { ReactNode } from "react";

import "./styles.css";
import { cn } from "@/lib/utils";

export default function AnimatedButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <button className={cn("cta p-4", className)}>{children}</button>;
}
