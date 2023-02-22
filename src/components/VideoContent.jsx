import React from "react";
import { Geo, Youtube, HeartGray, Eye, Edit } from "../constants/assets";

export default function VideoContent({ video }) {
  return (
    <section id="video_content">
      <div className="md:flex justify-between mb-5">
        <div className="h-full w-full bg-white mx-auto rounded-lg border border-[#D6D6D6] cursor-pointer">
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
            <img
              src={video.image}
              alt={"title"}
              className="px-4 object-cover h-auto  w-full"
            />
          </div>
          <div className="p-5">
            <h5 className="mb-4 text-[22px] font-normal text-[#1D1D1D] ">
              {video.title}
            </h5>
            <p className="mb-3 text-[16px] font-normal text-[#5E5E5E]">
              {video.subtitle}
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
                <p className="text-[14px] text-[#ABABAB] ml-1 mr-5">
                  {video.grade}
                </p>
                <Eye />
                <p className="text-[14px] text-[#ABABAB] ml-1 mr-5">
                  {video.rewiews}
                </p>
              </div>
              <Edit />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
