import { useState, useContext } from "react";
import {
  CalendarNoFill,
  ChatBubble,
  Checkmark,
  ChevronDownIcon,
  Geo,
  Leaf,
  News,
  Photo,
  Play,
  Refresh,
  Star,
} from "../constants/assets";
import { city } from "../data";
import { Context } from "../context";

const RightMenu = () => {
  const { valueCity, setValue } = useContext(Context);

  const [selectCity, setSelectCity] = useState(true);

  const chageSelect = (event) => {
    setValue(event.target.value);
    if (valueCity) {
      setSelectCity(true);
    }
  };
  return (
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
            <p className="pl-2 text-sm">Выбрать все</p>
          </div>
          <input
            className="appearance-none w-[15px] h-[15px] border-[2px] border-[#ABABAB] rounded-[2px] checked:bg-[1px] checked:bg-check checked:bg-no-repeat checked:border-[#1D1D1D]"
            type="checkbox"
          />
        </div>
        <div className="flex justify-between px-2 py-3 hover:bg-yellow-50 rounded-md">
          <div className="flex items-center">
            <News />
            <p className="pl-2 text-sm">Новости</p>
          </div>
          <input
            className="appearance-none w-[15px] h-[15px] border-[2px] border-[#ABABAB] rounded-[2px] checked:bg-[1px] checked:bg-check checked:bg-no-repeat checked:border-[#1D1D1D]"
            type="checkbox"
          />
        </div>
        <div className="flex justify-between px-2 py-3 hover:bg-yellow-50 rounded-md">
          <div className="flex items-center">
            <Play />
            <p className="pl-2 text-sm">Видео</p>
          </div>
          <input
            className="appearance-none w-[15px] h-[15px] border-[2px] border-[#ABABAB] rounded-[2px] checked:bg-[1px] checked:bg-check checked:bg-no-repeat checked:border-[#1D1D1D]"
            type="checkbox"
          />
        </div>
        <div className="flex justify-between px-2 py-3 hover:bg-yellow-50 rounded-md">
          <div className="flex items-center">
            <Photo />
            <p className="pl-2 text-sm">Фото</p>
          </div>
          <input
            className="appearance-none w-[15px] h-[15px] border-[2px] border-[#ABABAB] rounded-[2px] checked:bg-[1px] checked:bg-check checked:bg-no-repeat checked:border-[#1D1D1D]"
            type="checkbox"
          />
        </div>
        <div className="flex justify-between px-2 py-3 hover:bg-yellow-50 rounded-md">
          <div className="flex items-center">
            <Leaf />
            <p className="pl-2 text-sm">Статьи</p>
          </div>
          <input
            className="appearance-none w-[15px] h-[15px] border-[2px] border-[#ABABAB] rounded-[2px] checked:bg-[1px] checked:bg-check checked:bg-no-repeat checked:border-[#1D1D1D]"
            type="checkbox"
          />
        </div>
        <div className="flex justify-between px-2 py-3 hover:bg-yellow-50 rounded-md">
          <div className="flex items-center">
            <CalendarNoFill />
            <p className="pl-2 text-sm">Календарь событий</p>
          </div>
          <input
            className="appearance-none w-[15px] h-[15px] border-[2px] border-[#ABABAB] rounded-[2px] checked:bg-[1px] checked:bg-check checked:bg-no-repeat checked:border-[#1D1D1D]"
            type="checkbox"
          />
        </div>
        <div className="flex justify-between px-2 py-3 hover:bg-yellow-50 rounded-md">
          <div className="flex items-center">
            <Refresh />
            <p className="pl-2 text-sm">Обновления</p>
          </div>
          <input
            className="appearance-none w-[15px] h-[15px] border-[2px] border-[#ABABAB] rounded-[2px] checked:bg-[1px] checked:bg-check checked:bg-no-repeat checked:border-[#1D1D1D]"
            type="checkbox"
          />
        </div>
        <div className=" border-b-[1px] border-[#D6D6D6] my-3"></div>
        <div className="flex justify-between px-2 py-3  rounded-md">
          <div className="flex items-center">
            <Geo value={"#1D1D1D"} />
            <p className="pl-2 text-sm">{valueCity}</p>
          </div>
          <div onClick={() => setSelectCity((prev) => !prev)}>
            <ChevronDownIcon />
          </div>
          {selectCity || (
            <div
              onClick={chageSelect}
              value={valueCity}
              className="flex flex-col w-[200px] mt-10 absolute z-40 bg-white "
            >
              {city.map((item) => (
                <option
                  key={item.id}
                  className="hover:bg-yellow-50 w-full py-3 px-9 "
                >
                  {item}
                </option>
              ))}
            </div>
          )}
        </div>
        <div className=" border-b-[1px] border-[#D6D6D6] my-3"></div>
        <div className="flex justify-between px-2 py-3 hover:bg-yellow-50 rounded-md">
          <div className="flex items-center">
            <ChatBubble />
            <p className="pl-2 text-sm">Комментарии</p>
          </div>
          <input
            type="checkbox"
            className=" appearance-none w-[15px] h-[15px] border-[2px] border-[#ABABAB] rounded-[2px] checked:bg-[1px] checked:bg-check checked:bg-no-repeat checked:border-[#1D1D1D]"
          />
        </div>
        <div className="flex justify-between px-2 py-3 hover:bg-yellow-50 rounded-md">
          <div className="flex items-center">
            <Star />
            <p className="pl-2 text-sm">Рекомендации</p>
          </div>
          <input
            className="appearance-none w-[15px] h-[15px] border-[2px] border-[#ABABAB] rounded-[2px] checked:bg-[1px] checked:bg-check checked:bg-no-repeat checked:border-[#1D1D1D]"
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
