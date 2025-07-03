import { useState } from "react";
import "./App.css";
import { Card } from "./components/card";
import home from "./assets/icon-homepage.svg";
import { colors } from "./utils";

function App() {
  const [cards] = useState([
    {
      title: "Supervisor",
      color: colors[0],
      text: "Monitors activity to identify project roadblocks",
      icon: home,
    },
    {
      title: "Supervisor",
      color: colors[1],
      text: "Monitors activity to identify project roadblocks",
      icon: home,
    },
    {
      title: "Supervisor",
      color: colors[2],
      text: "Monitors activity to identify project roadblocks",
      icon: home,
    },
    {
      title: "Supervisor",
      color: colors[3],
      text: "Monitors activity to identify project roadblocks",
      icon: home,
    },
  ]);

  return (
    <div className="flex flex-col flex-nowrap items-center m-8 min-w-[330px] md:min-w-[768px]">
      <h2 className="font-[Poppins] text-[#6A7178] text-2xl font-extralight ">
        Reliable, efficient delivery
      </h2>
      <h2 className="text-[#4D4F62] font-[Poppins] font-bold text-2xl pb-4">
        Powered by Technology
      </h2>
      <p className="text-[#6A7178] font-[Poppins] font-normal text-base text-center">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <div className="grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-10 ">
        <div className=" lg:col-start-1  lg:row-start-2">
          <Card {...cards[0]} /> {/**verde */}
        </div>
        <div className=" lg:col-start-2 lg:row-start-1 lg:relative lg:top-[12rem]">
          <Card {...cards[1]} /> {/**rojo */}
        </div>
        <div className="lg:col-start-2 lg:row-start-3 lg:relative lg:bottom-[12rem]">
          <Card {...cards[2]} /> {/**amarillo */}
        </div>
        <div className="lg:col-start-3 lg:row-start-2  ">
          <Card {...cards[3]} /> {/**azul */}
        </div>
      </div>

      <div className=" grid md:grid-cols-3 md:grid-rows-3 md:gap-0 ">
        <div className=" md:col-start-2">
          <Card {...cards[0]} />
        </div>
        <div className=" md:col-start-1 md:row-start-2 md:relative md:left-[7rem]">
          <Card {...cards[1]} />
        </div>
        <div className="md:col-start-3 md:row-start-2 md:relative md:right-[7rem]">
          <Card {...cards[2]} />
        </div>
        <div className="md:col-start-2 md:row-start-3">
          <Card {...cards[3]} />
        </div>
      </div>
    </div>
  );
}

export default App;
