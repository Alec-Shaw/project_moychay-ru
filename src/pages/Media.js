import { useState, useContext } from "react";
import img from "../../src/assets/tea.jpg";
import { Pin } from "../constants/assets";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { puerh } from "../data";
import VideoContent from "../components/VideoContent";

export default function Media() {
  const [pin, setPin] = useState(true);
  const [leftToggle, setLeftToggle] = useState(false);
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
              </p>{" "}
              {leftToggle ? (
                pin && (
                  <ChevronUpIcon
                    onClick={() => setLeftToggle(false)}
                    className="w-6 absolute bottom-3 right-3 cursor-pointer text-white"
                  />
                )
              ) : (
                <ChevronDownIcon
                  onClick={() => setLeftToggle(true)}
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
          <div className=" basis-1/2 md:ml-7 text-3xl text-gray-900 font-medium max-md:text-[27px] ">
            Лента новостей и медиа
            <input
              type="search"
              className="md:hidden w-full p-3 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-green-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Поиск по ленте"
            />
          </div>
        </div>

        <div className="flex items-start ">
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
          <div className={pin || "md:ml-12"}>
            <VideoContent />

            <div className="text-center border bordder-gray mt-6 h-8 rounded-lg">
              Показать еще
            </div>
            <div className="flex justify-center items-center">
              <div className=" justify-center text-center border border-green-500 rounded-sm w-[32px] h-[32px] m-2">
                1
              </div>
              <div className=" justify-center text-center rounded-sm w-[32px] h-[32px] m-2">
                2
              </div>
              <div className=" justify-center text-center rounded-sm w-[32px] h-[32px] m-2">
                3
              </div>
              <div className=" justify-center text-center rounded-sm w-[32px] h-[32px] m-2">
                4
              </div>
              <div className=" justify-center text-center rounded-sm w-[32px] h-[32px] m-2">
                5
              </div>
            </div>
            <p className=" text-5xl mb-8 mt-5">Рекомендуем попробовать</p>
            <div className="md:flex justify-between">
              <div className="mr-5 bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  cursor-pointer">
                <img
                  src={img}
                  alt={"title"}
                  className="h-[248px] object-cover"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    title
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    dddd...
                  </p>
                </div>
              </div>
              <div className="mr-5 bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  cursor-pointer">
                <img
                  src={img}
                  alt={"title"}
                  className="h-[248px] w-full object-cover"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    title
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    dddd...
                  </p>
                </div>
              </div>
              <div className="mr-5 bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  cursor-pointer">
                <img
                  src={img}
                  alt={"title"}
                  className="h-[248px] w-full object-cover"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    title
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    dddd...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between  mt-6 ">
          {/* <div className={bot}>
          <p>Новинки</p>
          <p className="mt-6 hover:bg-slate-500 p-2 w-72">
            Чай производства Мойчай.ру
          </p>
          <p className="mt-6">Чай производства Мойчай.ру</p>
          <p className="mt-6">Чай производства Мойчай.ру</p>
          <p className="mt-6">Чай производства Мойчай.ру</p>
        </div> */}

          <div className="md:max-w-7xl mr-5 ml-5">
            {/* <div
            key={"id"}
            className=" bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  cursor-pointer"
          >
            <div className="md:flex justify-between items-center m-3">
              <p className=" flex items-center md:ml-5">
                <svg className=" w-7 mr-3 ml-4" viewBox="0 0 20 20">
                  <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
                </svg>
                Видео • 13 августа 2021{" "}
              </p>
              <p className="flex items-center md:mr-8  ">
                <svg className=" w-7 mr-3 ml-4" viewBox="0 0 20 20">
                  <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
                </svg>
                Санкт-Петербург
              </p>
            </div>

            <div className="flex justify-center">
              {" "}
              <img src={img} alt={"title"} className="w-11/12 object-cover" />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                dfdf
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                fdfd...
              </p>
              <div className="flex justify-start">
                <p className=" bg-lime-300 rounded-lg p-1 text-gray-700 ml-3">
                  dddd
                </p>
                <p className=" bg-lime-300 rounded-lg p-1 text-gray-700 ml-3">
                  dddd
                </p>
                <p className=" bg-lime-300 rounded-lg p-1 text-gray-700 ml-3">
                  dddd
                </p>
              </div>
            </div>
          </div> */}
            {/* <div className='flex justify-center border bordder-gray mt-6 h-8 rounded-lg'>Показать еще</div> */}
          </div>

          <div className="basis-1/3">
            {/* <div className="ml-8 flex flex-col gap-4 text-black w-64">
            <input
              type="search"
              className=" p-4 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search..."
            />
            <div className="flex justify-between pr-2 pl-2">
              <p>dddd</p>
              <input className="left-0" type="checkbox" />
            </div>
            <div className="flex justify-between pr-2 pl-2">
              <p>dddd</p>
              <input className="left-0" type="checkbox" />
            </div>
            <div className="flex justify-between pr-2 pl-2">
              <p>dddd</p>
              <input className="left-0" type="checkbox" />
            </div>
            <div className="flex justify-between pr-2 pl-2">
              <p>dddd</p>
              <input className="left-0" type="checkbox" />
            </div>
          </div> */}

            {/* MOBILE MENU MODAL */}
            {/* <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-slate-50 drop-shadow-xl"> */}
            {/* CLOSE ICON */}
            {/* <div className="flex justify-end p-12">
                            <button >
                                ddd
                            </button>
                        </div> */}

            {/* MENU ITEMS */}
            {/* <div className="ml-8 flex flex-col gap-4 text-black w-64">
                            <input
                                type="search"
                                className="mt-5 p-4 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Search..." />
                            <div className='flex justify-between pr-2 pl-2'><p>dddd</p><input className='left-0' type="checkbox" /></div>
                            <div className='flex justify-between pr-2 pl-2'><p>dddd</p><input className='left-0' type="checkbox" /></div>
                            <div className='flex justify-between pr-2 pl-2'><p>dddd</p><input className='left-0' type="checkbox" /></div>
                            <div className='flex justify-between pr-2 pl-2'><p>dddd</p><input className='left-0' type="checkbox" /></div>

                        </div>
                    </div> */}
          </div>
        </div>

        {/* <p className=" text-5xl">Рекомендуем попробовать</p>
      <div className="md:flex justify-between">
        <div className="mr-5 bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  cursor-pointer">
          <img src={img} alt={"title"} className="h-[248px] object-cover" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              title
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              dddd...
            </p>
          </div>
        </div>
        <div className="mr-5 bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  cursor-pointer">
          <img
            src={img}
            alt={"title"}
            className="h-[248px] w-full object-cover"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              title
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              dddd...
            </p>
          </div>
        </div>
        <div className="mr-5 bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  cursor-pointer">
          <img
            src={img}
            alt={"title"}
            className="h-[248px] w-full object-cover"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              title
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              dddd...
            </p>
          </div>
        </div>
      </div> */}
      </section>
    </>
  );
}
