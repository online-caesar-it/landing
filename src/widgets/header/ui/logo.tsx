import LogoIcon from "@/shared/ui/icons/logo-icon";

const Logo = () => {
  return (
    <div className={"flex items-center gap-2"}>
      <LogoIcon />
      <p className={"text-blue20 text-5xl uppercase font-greco"}>caesar it</p>
    </div>
  );
};

export default Logo;
