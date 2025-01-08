import FeedbackListCascade from "@/features/feedback/ui/feedback-list-cascade";
import SectionLayout from "@/widgets/layouts/ui/section-layout";

const FeedbackBlock = () => {
  return (
    <SectionLayout className="py-[200px] h-[800px]">
      <FeedbackListCascade />
    </SectionLayout>
  );
};

export default FeedbackBlock;
