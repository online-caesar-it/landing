"use client";

import FeedbackCard from "@/entities/feedback/ui/feedback-card";
import FeedbackCardContent from "@/entities/feedback/ui/feedback-card-content";
import { twMerge } from "tailwind-merge";

// TODO: Их не так много, получать с сервера не нужно, описать всю информацию здесь
const data = [
  {
    id: 1,
    color: "#A6E3A1",
    title: "test 1",
  },
  {
    id: 2,
    color: "#94E2D5",
    title: "test 2",
  },
  {
    id: 3,
    color: "#89DCEB",
    title: "test 3",
  },
  {
    id: 4,
    color: "#74C7EC",
    title: "test 4",
  },
  {
    id: 5,
    color: "#89B4FA",
    title: "test 5",
  },
  {
    id: 6,
    color: "#B4BEFE",
    title: "test 5",
  },
];

const FeedbackListCascade = () => {
  return (
    <div className={twMerge("relative")}>
      {data.map((item, index) => (
        <FeedbackCard color={item.color} index={index} key={item.id}>
          <FeedbackCardContent title={item.title} />
        </FeedbackCard>
      ))}
    </div>
  );
};

export default FeedbackListCascade;
