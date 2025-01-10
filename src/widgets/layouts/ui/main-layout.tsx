import Footer from "@/widgets/footer/ui/footer";
import Header from "@/widgets/header/ui/header";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
