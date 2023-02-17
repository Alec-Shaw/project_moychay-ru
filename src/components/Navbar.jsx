import { useState, useContext } from "react";
import {
  Calendar,
  Point,
  Logo,
  Compare,
  Heart,
  Notifications,
  Menu,
  Phone,
  User,
  Vector,
  World,
  ChevronDownIcon,
} from "../constants/assets";
import { Context } from "../context";

import { city } from "../data";

export default function Navbar() {
  const [selectCity, setSelectCity] = useState(true);
  const { valueCity, setValue } = useContext(Context);
  const chageSelect = (event) => {
    setValue(event.target.value);
    if (valueCity) {
      setSelectCity(true);
    }
  };

  return (
    <header className="md:mb-[60px] ">
      <nav className="border-b border-gray-200 border-opacity-25 py-2.5 md:px-12">
        <div className="flex justify-between items-center mb-5 ">
          <a href="/">
            <div className="flex items-center md:w-[149px] w-[102px] xl:mr-32  ">
              <Logo />
            </div>
          </a>
          <div className=" flex flex-between items-center max-lg:hidden">
            <Phone />
            <div className="flex flex-col text-[#1D1D1D] pl-3">
              <p className="text-[16px] font-medium">(863) 333 51 43</p>
              <p className=" text-[12px] text-[#ABABAB] pl-0.5">
                spb@moychay.ru
              </p>
            </div>
          </div>
          <div className="flex flex-between items-center max-lg:pt-3">
            <div className="flex items-center gap-2 lg:mr-11 mr-3">
              <p className="text-[16px] font-medium text-[#1D1D1D]">
                Александр
              </p>
              <User />
              <div className="max-lg:hidden">
                <ChevronDownIcon />
              </div>
            </div>
            <div className="md:flex max-lg:order-2 gap-5 lg:mr-11  ">
              <div className="max-lg:hidden">
                <Calendar />
              </div>
              <div className="cursor-pointer">
                <Menu />
              </div>
              <div className="max-lg:hidden">
                <World />
              </div>
            </div>
            <div className="md:flex gap-5 items-center">
              <div className="max-lg:mr-3">
                <Heart />
              </div>
              <div className="max-lg:hidden">
                <Compare />
              </div>
              <div className="max-lg:hidden">
                <Notifications />
              </div>
              <div className="max-lg:hidden">
                <div className="absolute translate-x-3 translate-y-[-3px] rounded-md w-[26px] h-3 bg-[#81C341] text-[10px] text-center font-medium text-white pb-3.5">
                  999
                </div>
                <Vector />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 max-md:hidden">
          <div className="flex justify-between items-center gap-2 w-[260px] h-[46px] p-3 text-base text-gray-900 rounded border border-[#81C341] ">
            <div className="flex items-center">
              <p className="mr-2">
                <Point />
              </p>
              {valueCity}
            </div>
            <p
              className="cursor-pointer"
              onClick={() => setSelectCity((prev) => !prev)}
            >
              <ChevronDownIcon />
            </p>
          </div>

          <input
            type="search"
            className=" w-full h-[46px] p-3 focus:outline-none text-[16px] text-gray-900 rounded border border-[#81C341] focus:border-blue-500"
            placeholder="Поищем чаечек"
          />
        </div>

        {selectCity || (
          <div
            onClick={chageSelect}
            value={valueCity}
            className="flex flex-col w-[200px] mt-1 absolute z-40 bg-white  "
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
      </nav>
    </header>
  );
}
