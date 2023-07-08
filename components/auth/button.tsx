import clsx from "clsx";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
  className?: string;
}

export default function Button({ text, className }: ButtonProps) {
  return (
    <button
      className={clsx(
        "bg-[#BF2018] text-[#fff] text-p rounded-md px-[clamp(20px,1.5vw,24px)] py-[clamp(10px,1vw,12px)]",
        className
      )}
      onClick={() => {}}
    >
      {text}
    </button>
  );
}
