"use client";

import { motion } from "motion/react";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

const CourseCard = ({
  children,
  color,
  index,
}: {
  children: ReactNode;
  color: string;
  index: number;
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isFull, setIsFull] = useState(false);

  const handleClick = () => {
    setIsFull((prev) => !prev);
  };

  const calculateTop = () => {
    if (isFull) {
      return index * 50 - 50;
    }

    if (isHover) {
      return index * 50 - 50;
    } else {
      return index * 50;
    }
  };

  const top = calculateTop();

  return (
    <motion.div
      className={twMerge("p-2 rounded-xl h-[200px] w-[500px] shadow-sm")}
      style={{ backgroundColor: color, position: "absolute", top: index * 50 }}
      animate={{
        zIndex: isFull ? 10 : 0,
        top: top,
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
        setIsFull(false);
      }}
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );
};

export default CourseCard;
