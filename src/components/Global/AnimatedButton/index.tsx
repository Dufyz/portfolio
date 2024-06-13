import { ReactNode } from "react";

import "./styles.css";

export default function AnimatedButton({ children }: { children: ReactNode }) {
  return <button className="cta">{children}</button>;
}
