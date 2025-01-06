import CourseCard from "@/entities/course/ui/course-card";
import CourseCardContent from "@/entities/course/ui/course-card-content";
import { twMerge } from "tailwind-merge";

// TODO: Их не так много, получать с сервера не нужно, описать всю информацию здесь
const courses = [
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

const CoursesListCascade = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge("relative", className)}>
      {courses.map((item, index) => (
        <CourseCard color={item.color} index={index} key={item.id}>
          <CourseCardContent title={item.title} />
        </CourseCard>
      ))}
    </div>
  );
};

export default CoursesListCascade;
