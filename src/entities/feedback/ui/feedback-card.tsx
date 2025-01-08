import { motion } from "motion/react";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

const FeedbackCard = ({
  color,
  children,
  index,
}: {
  color: string;
  index: number;
  children: ReactNode;
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isFull, setIsFull] = useState(false);

  const handleClick = () => {
    setIsFull((prev) => !prev);
  };

  const calculateLeft = () => {
    if (isFull) {
      return index * 50 - 50;
    }

    if (isHover) {
      return index * 50 - 50;
    } else {
      return index * 50;
    }
  };

  const left = calculateLeft();

  return (
    <motion.div
      className={twMerge("p-2 rounded-xl h-[500px] w-[200px] shadow-sm")}
      style={{ backgroundColor: color, position: "absolute", left: index * 50 }}
      animate={{
        zIndex: isFull ? 10 : 0,
        left: left,
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

export default FeedbackCard;
