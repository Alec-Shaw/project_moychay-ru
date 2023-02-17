import { useState } from "react";
import Media from "../src/pages/Media";
import Navbar from "./components/Navbar";
import Hat from "./components/Hat";
import { Context } from "./context";

export default function App() {
  const [valueCity, setValue] = useState("Москва");

  return (
    <Context.Provider
      value={{
        setValue,
        valueCity,
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
