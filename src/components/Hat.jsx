import React from "react";

export default function Hat() {
  return (
    <section id="hat">
      <div className="flex flex-row sm:justify-center items-center h-[64px] bg-[#F9FFF0]  ">
        {/* <Plants /> */}
        <span className="max-sm:hidden bg-plants bg-auto bg-center bg-no-repeat h-[64px] w-[333px]" />
        <span className="sm:hidden bg-plantss bg-auto bg-center bg-no-repeat h-[64px] w-[113px] pl-28" />

        <span className="relative right-16 text-[#295700] text-[14px] md:text-[20px] md:font-bold font-medium ">
          Полное обновление зеленых чаев!
        </span>
        <button className=" relative right-10 h-[30px]  bg-[#81C341] rounded px-2 text-white">
          Посмотреть
        </button>
      </div>
    </section>
  );
}
