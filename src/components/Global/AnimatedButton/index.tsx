import "./styles.css";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function AnimatedButton({
  children,
  className,
  ...props
}: AnimatedButtonProps) {
  return (
    <button className={cn("cta p-4 md:px-4 md:py-3", className)} {...props}>
      {children}
    </button>
  );
}
