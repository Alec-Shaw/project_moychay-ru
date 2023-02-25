import { useState } from "react";
//import { Context } from "../context";

import { ChatBubble, ChevronDownIcon } from "../constants/assets";
//import { card } from "../data";

const Card = ({ item }) => {
  // const { pin, setPin } = useContext(Context);

  const [valueWeight, setValueWeight] = useState("100");
  const [selectWeight, setSelectWeight] = useState(true);
  const chageWeight = (event) => {
    setValueWeight(event.target.value);
    if (valueWeight) {
      setSelectWeight(true);
    }
  };

  return (
    <div
      key={item.id}
      className="mr-5 bg-white mx-auto rounded-lg border border-gray-200 "
    >
      <img
        src={item.image}
        alt={"imag"}
        className="h-auto  w-full object-cover "
      />
      <div className="p-5">
        <h5 className="mb-2 text-[14px] font-normal tracking-tight text-[#1d1d1d]">
          {item.title}
        </h5>
        <p className="mb-2 text-xs font-normal text-[#5E5E5E]">
          {item.subtitle}
        </p>
        <p className="mb-3 text-xs font-normal text-[#ABABAB]">
          {item.description}
        </p>
        <div className="flex items-center gap-1 text-xs font-normal mb-3">
          <ChatBubble width="15px" height="15px" color="#81C341" />{" "}
          <p className="text-[#81C341] ml-1">{item.grade} </p>
          <p className="text-[#ABABAB]">/ {item.rewiews}</p>
        </div>
        <p className="text-xl font-medium text-[#1D1D1D] my-2">
          {item.price} ₽
        </p>
        <div className="flex items-center  gap-1">
          <div>
            <button className="w-[108px] h-10  bg-[#81C341] rounded-[4px] text-[16px] text-white">
              В корзину
            </button>
          </div>
          <div className="flex justify-between items-center  h-10 w-full border rounded-[4px] border-[#81C341]">
            <div>
              <p className="ml-4">{valueWeight} гр</p>
              {selectWeight || (
                <div
                  onClick={chageWeight}
                  value="value"
                  className="flex flex-col w-[200px] mt-1 absolute z-40 bg-white  "
                >
                  <option
                    className="hover:bg-yellow-50 w-full py-3 px-9 "
                    value="100"
                  >
                    100 гр
                  </option>
                  <option
                    className="hover:bg-yellow-50 w-full py-3 px-9 "
                    value="200"
                  >
                    200 гр
                  </option>
                  <option
                    className="hover:bg-yellow-50 w-full py-3 px-9 "
                    value="300"
                  >
                    300 гр
                  </option>
                  <option
                    className="hover:bg-yellow-50 w-full py-3 px-9 "
                    value="400"
                  >
                    400 гр
                  </option>
                  <option
                    className="hover:bg-yellow-50 w-full py-3 px-9 "
                    value="500"
                  >
                    500 гр
                  </option>
                </div>
              )}
            </div>

            <div
              className="mr-4 cursor-pointer"
              onClick={() => setSelectWeight((prev) => !prev)}
            >
              <ChevronDownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
