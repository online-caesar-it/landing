import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const SectionLayout = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <section className={twMerge("max-w-[1400px] w-full mx-auto", className)}>
      {children}
    </section>
  );
};

export default SectionLayout;
