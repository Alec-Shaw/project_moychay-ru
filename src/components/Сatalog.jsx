/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ArrowDownOnSquareIcon,
} from "@heroicons/react/24/solid";

export default function Сatalog() {
  const [pin, setPin] = useState(true);
  const [leftToggle, setLeftToggle] = useState(false);
  const bot = pin
    ? "absolute z-40 h-full bg-white w-72 "
    : "basis-1/3 bg-white h-full w-72 ";

  return (
    <section id="catalog">
      <div className="bg-green-500 md:w-72 h-12 rounded-sm relative max-md:hidden">
        {" "}
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
          <ArrowDownOnSquareIcon
            onClick={() => setPin((prev) => !prev)}
            className="w-6 absolute bottom-3.5 right-12 cursor-pointer text-white"
          />
        )}
      </div>
      {leftToggle && (
        <div className="basis-1/4 ">
          <div
            className={`${bot}, text-gray-900 shadow-md dark:bg-gray-800 dark:border-gray-700`}
          >
            <p className="mt-1 hover:bg-yellow-50 p-3 rounded-md ">Новинки</p>
            <p className="mt-1 hover:bg-yellow-50 p-3 rounded-md">
              Чай производства Мойчай.ру
            </p>
            <p className="mt-1 hover:bg-yellow-50 p-3 rounded-md">
              Чай производства Мойчай.ру
            </p>
            <p className="mt-1 hover:bg-yellow-50 p-3 rounded-md">
              Чай производства Мойчай.ру
            </p>
            <p className="mt-1 hover:bg-yellow-50 p-3 rounded-md">
              Чай производства Мойчай.ру
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
