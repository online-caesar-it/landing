import CoursesListCascade from "@/features/courses/ui/courses-list-cascade";
import CoursesText from "@/features/courses/ui/courses-text";
import SectionLayout from "@/widgets/layouts/ui/section-layout";

const CoursesBlock = () => {
  return (
    <SectionLayout className="py-[800px] ">
      <div className={"flex items-start w-full"}>
        <CoursesText />
        <CoursesListCascade />
      </div>
    </SectionLayout>
  );
};

export default CoursesBlock;
