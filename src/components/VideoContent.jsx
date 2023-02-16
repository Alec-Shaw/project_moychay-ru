import React from "react";
import {
  Geo,
  Youtube,
  HeartGray,
  Eye,
  Checkmark,
  Edit,
  News,
} from "../constants/assets";
import img from "../assets/tea.jpg";

export default function VideoContent() {
  return (
    <section id="video_content">
      <div className="md:flex justify-between">
        <div
          key={"id"}
          className=" bg-white mx-auto rounded-lg border border-[#D6D6D6] cursor-pointer"
        >
          <div className="md:flex justify-between items-center m-3">
            <p className=" flex gap-[6px] items-center md:ml-5 text-[#ABABAB] text-[14px] font-normal">
              <Youtube />
              Видео • 13 августа 2021
            </p>
            <p className="flex gap-[6px] items-center md:mr-8 text-[#3F6099] text-[14px] font-normal">
              <Geo value={"#3F6099"} />
              Санкт-Петербург
            </p>
          </div>

          <div className="flex justify-center">
            {" "}
            <img src={img} alt={"title"} className="px-4 object-cover" />
          </div>
          <div className="p-5">
            <h5 className="mb-4 text-[22px] font-normal text-[#1D1D1D] ">
              Противовирусная активность зеленого и черного чая
            </h5>
            <p className="mb-3 text-[16px] font-normal text-[#5E5E5E]">
              Быстрое распространение нового коронавируса под названием
              SARS-CoV-2 заставило страны принять строгие меры.
            </p>
            <div className="flex justify-start mt-6">
              <p className="backdrop-opacity-10 backdrop-invert bg-[#81C341]/20 rounded-[100px] px-2 pt-0.5 text-[#295700] text-[12px] h-[22px] mr-3">
                Красный чай
              </p>
              <p className="backdrop-opacity-10 backdrop-invert bg-[#81C341]/20 rounded-[100px] px-2 pt-0.5 text-[#295700] text-[12px] h-[22px] mr-3">
                Зеленый чай
              </p>
              <p className="backdrop-opacity-10 backdrop-invert bg-[#81C341]/20 rounded-[100px] px-2 pt-0.5 text-[#295700] text-[12px] h-[22px] mr-3">
                Шу пуэр
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center">
                <HeartGray />{" "}
                <p className="text-[14px] text-[#ABABAB] ml-1 mr-5">206</p>
                <Eye />
                <p className="text-[14px] text-[#ABABAB] ml-1 mr-5">1 457</p>
              </div>
              <Edit />
            </div>
          </div>
        </div>
        <div className="">
          <div className="ml-12 flex flex-col gap-1 text-[#1D1D1D] text-[14px] w-64 max-md:hidden ">
            <input
              type="search"
              className=" p-3 focus:outline-none text-sm bg-gray-50 rounded-lg border border-green-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Поиск по ленте"
            />
            <div className="flex justify-between px-2 py-3 hover:bg-yellow-50 rounded-md">
              <div className="flex items-center">
                <Checkmark />
                <p className="pl-2">dddd</p>
              </div>
              <input className="left-0" type="checkbox" />
            </div>
            <div className="flex justify-between px-2 py-3 hover:bg-yellow-50 rounded-md">
              <div className="flex items-center">
                <News />
                <p className="pl-2">dddd</p>
              </div>
              <input className="left-0" type="checkbox" />
            </div>
            <div className="flex justify-between px-2 py-3 hover:bg-yellow-50 rounded-md">
              <p>dddd</p>
              <input className="left-0" type="checkbox" />
            </div>
            <div className="flex justify-between px-2 py-3 hover:bg-yellow-50 rounded-md">
              <p>dddd</p>
              <input className="left-0" type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
