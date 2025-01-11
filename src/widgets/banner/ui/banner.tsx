import SectionLayout from "@/widgets/layouts/ui/section-layout";
import style from "../styles/style.module.css";
import { twMerge } from "tailwind-merge";
import CharacterPurpleIcon from "@/shared/ui/icons/chararcter-purple-icon";
import CharacterRedIcon from "@/shared/ui/icons/character-red-icon";
const Banner = () => {
  return (
    <SectionLayout className={"py-[120px] relative"}>
      <h2
        className={twMerge(
          "uppercase text-9xl font-intro text-left w-[90%]",
          style.title
        )}
      >
        От идей — к реализации: твой путь в мир технологий!
      </h2>
      <div className={"w-[538px]"}>
        <CharacterPurpleIcon />
      </div>
      <CharacterRedIcon />
    </SectionLayout>
  );
};

export default Banner;
