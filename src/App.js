import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hat from "./components/Hat";

export default function App() {
  return (
    <>
      <Hat />
      <div className="bg-white body-font min-h-screen px-4  pb-20 xl:mr-[80px] xl:ml-[70px]">
        <Navbar />
        <About />
        {/* <Projects />
      <Skills />
      <Contact /> */}
      </div>
    </>
  );
}
