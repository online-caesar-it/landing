import UserPanel from "@/features/user/ui/user-panel";
import SectionLayout from "@/widgets/layouts/ui/section-layout";
const Header = () => {
  return (
    <header>
      <SectionLayout className="flex justify-between">
        <div>Header</div>
        <UserPanel />
      </SectionLayout>
    </header>
  );
};

export default Header;
