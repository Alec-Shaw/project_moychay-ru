import { useState } from "react";
import Media from "../src/pages/Media";
import Navbar from "./scene/Navbar";
import Hat from "./scene/Hat";
import { Context } from "./context";

export default function App() {
  const [valueCity, setValue] = useState("Москва");
  const [pin, setPin] = useState(true);

  return (
    <Context.Provider
      value={{
        setValue,
        valueCity,
        pin,
        setPin,
      }}
    >
      <Hat />
      <div className="bg-white body-font min-h-screen px-4  pb-20 xl:mr-[80px] xl:ml-[70px]">
        <Navbar />
        <Media />
      </div>
    </Context.Provider>
  );
}
