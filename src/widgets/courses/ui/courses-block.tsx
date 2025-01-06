import CoursesListCascade from "@/features/courses/ui/courses-list-cascade";
import SectionLayout from "@/widgets/layouts/ui/section-layout";

const CoursesBlock = () => {
  return (
    <SectionLayout className="py-[200px]">
      <CoursesListCascade />
    </SectionLayout>
  );
};

export default CoursesBlock;
