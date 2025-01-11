import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  ...rest
}: {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className={twMerge("bg-blue-10 rounded-full", rest.className)}
    >
      <span
        className={
          "text-button-primary text-2xl font-normal uppercase font-intro"
        }
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
