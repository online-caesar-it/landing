import React from "react";

const CoursesText = () => {
  return (
    <div className="flex flex-col gap-1 w-1/2">
      <h2
        className={
          "text-blue-20 leading-none w-full uppercase font-intro text-9xl"
        }
      >
        каталог курсов
      </h2>
      <p className={"w-1/2 text-[#CBA6F7] font-intro uppercase"}>
        здесь вы можете ознакомиться с обучающими курсами и выбрать интересующий
        вариант
      </p>
    </div>
  );
};

export default CoursesText;
