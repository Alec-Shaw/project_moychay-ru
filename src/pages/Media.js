import { useState, useContext, useRef, useMemo } from "react";
import { Context } from "../context";
import { Pin } from "../constants/assets";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { puerh } from "../data";
import VideoContent from "../scene/VideoContent";
import Card from "../scene/Card";
import { card, videos } from "../data";
import { useOutsideClick } from "../hooks/Outsideclick";
import RightMenu from "../scene/RightMenu";
import Pagination from "../components/Pagination";

let PageSize = 1;

export default function Media() {
  const { pin, setPin } = useContext(Context);
  let rootEl = useRef(null);
  const [leftToggle, setLeftToggle] = useState(false);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return videos.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  //Open/close/pin left menu
  const leftMenuOpen = () => {
    setLeftToggle(true);
  };

  const leftMenuClose = () => {
    setLeftToggle(false);
  };

  if (!pin) {
    rootEl = null;
  }
  //
  useOutsideClick(rootEl, leftMenuClose, leftToggle);

  const bot = pin
    ? "absolute z-40 h-{100%} bg-white w-72 "
    : "basis-1/3 bg-white h-full w-72 ";

  return (
    <>
      <section className=" min-h-screen lg:px-12 pb-20" id="about">
        <div className="md:flex items-center max-w-screen-xl mb-5">
          <div className="basis-1/4 mr-5">
            <div className="bg-[#81C341] md:w-72 h-12 rounded-sm relative max-md:hidden">
              <p className="absolute left-3 bottom-3 text-white font-medium ">
                Каталог
              </p>
              {/* Left menu buttton */}
              {leftToggle ? (
                pin && (
                  <ChevronUpIcon
                    onClick={leftMenuClose}
                    className="w-6 absolute bottom-3 right-3 cursor-pointer text-white"
                  />
                )
              ) : (
                <ChevronDownIcon
                  onClick={leftMenuOpen}
                  className="w-6 absolute bottom-3 right-3 cursor-pointer text-white"
                />
              )}
              {leftToggle && (
                <div
                  onClick={() => setPin((prev) => !prev)}
                  className="absolute bottom-4 right-12 cursor-pointer"
                >
                  <Pin />
                </div>
              )}
            </div>
          </div>
          {/* topic */}
          <div className=" basis-1/2 md:ml-7 text-3xl text-gray-900 font-medium max-md:text-[27px] ">
            Лента новостей и медиа
            <input
              type="search"
              className="md:hidden w-full p-3 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#81C341] focus:border-blue-500 "
              placeholder="Поиск по ленте"
            />
          </div>
        </div>
        {/* Left menu  */}
        <div ref={rootEl} className="flex items-start ">
          {leftToggle && (
            <div className="max-md:hidden ">
              <div className={`${bot}, text-[#1D1D1D]  text-[14px]`}>
                <p className="mt-1 hover:bg-yellow-50 p-3 rounded-md ">
                  Новинки
                </p>
                {puerh.map((item) => (
                  <p
                    key={item.id}
                    className="mt-1 hover:bg-yellow-50 p-3 rounded-md"
                  >
                    {item}
                  </p>
                ))}
                <p className="mt-4 hover:bg-yellow-50 p-3 rounded-md">
                  Концерты и мероприятия
                </p>
                <p className="mt-1 hover:bg-yellow-50 p-3 rounded-md">
                  Подарки
                </p>
                <p className="mt-1 hover:bg-yellow-50 p-3 rounded-md">
                  Травяные сборы Мойчай.ру
                </p>
                <p className="flex justify-between items-center mt-1 hover:bg-yellow-50 p-3 rounded-md">
                  Здоровое питание
                  <ChevronDownIcon className="w-5" />
                </p>
                <p className="flex justify-between items-center mt-1 hover:bg-yellow-50 p-3 rounded-md">
                  Чайная посуда
                  <ChevronDownIcon className="w-5" />
                </p>
                <p className=" mt-1 hover:bg-yellow-50 p-3 rounded-md">
                  Литература
                </p>
                <p className="flex justify-between items-center mt-1 hover:bg-yellow-50 p-3 rounded-md">
                  Сувениры
                  <ChevronDownIcon className="w-5" />
                </p>
                <p className="flex justify-between items-center mt-1 hover:bg-yellow-50 p-3 rounded-md">
                  Архив <ChevronDownIcon className="w-5" />
                </p>
              </div>
            </div>
          )}
          {/* Center part video content */}
          <div className={pin || "md:ml-12"}>
            <div className="md:flex justify-between mb-5">
              <div className="md:flex flex-col w-full mb-5">
                {currentTableData.map((video) => (
                  <VideoContent key={video.id} video={video} />
                ))}
              </div>
              {/*RightMenu  */}
              <RightMenu />
            </div>
            {/* Pagination */}
            <div
              // onClick={moreClick}
              className="text-center border bordder-gray mt-6 h-8 rounded-lg cursor-pointer"
            >
              Показать еще
            </div>
            <div className="flex justify-center items-center">
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={videos.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
            {/* Down block, Products cards */}
            <p className=" text-[28px] mb-8 mt-5">Рекомендуем попробовать</p>
            <div className="md:flex justify-between">
              {" "}
              {pin
                ? card
                    .slice(0, 4)
                    .map((item) => <Card key={item.id} item={item} />)
                : card
                    .slice(0, 3)
                    .map((item) => <Card key={item.id} item={item} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
