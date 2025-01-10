import SectionLayout from "@/widgets/layouts/ui/section-layout";
import React from "react";
import HeaderAuth from "./header-auth";
import Logo from "./logo";
import Nav from "./nav";

const HeaderNav = () => {
  return (
    <SectionLayout className="flex justify-between ">
      <div className={"flex items-center gap-20"}>
        <Logo />
        <Nav />
      </div>
      <HeaderAuth />
    </SectionLayout>
  );
};

export default HeaderNav;
