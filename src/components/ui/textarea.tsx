import { cn } from "@/lib/utils";
import * as React from "react";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isLabel?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, isLabel = false, ...props }, ref) => {
    const error = props["aria-invalid"];
    const textareaId =
      props.id || `textarea-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className="relative w-full">
        <textarea
          id={textareaId}
          className={cn(
            "border-input bg-background flex w-full rounded-md border px-3 py-2 text-sm duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium",
            {
              "placeholder:text-transparent": isLabel,
              "placeholder:text-muted-foreground": !isLabel,
              "disabled:cursor-not-allowed disabled:opacity-50": true,
              "border border-red-600 ring-red-200 ring-offset-red-200 focus-visible:ring-red-200":
                error,
            },
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export { TextArea };
