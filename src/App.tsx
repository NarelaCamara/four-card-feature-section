import { useState } from "react";
import "./App.css";
import { Card } from "./components/card";
import home from "./assets/icon-homepage.svg";
import { colors, type ICard } from "./utils";

function App() {
  const [card] = useState<ICard>({
    title: "Supervisor",
    color: colors[0],
    text: "Monitors activity to identify project roadblocks",
    icon: home,
  });

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
      <div className="grid md:grid-cols-3 md:grid-rows-3 gap-0">
        <div className=" md:col-start-2">
          <Card {...card} />
        </div>
        <div className=" md:col-start-1 md:row-start-2 md:relative md:left-[7rem]">
          <Card {...card} />
        </div>
        <div className="md:col-start-3 md:row-start-2 md:relative md:right-[7rem]">
          <Card {...card} />
        </div>
        <div className="md:col-start-2 md:row-start-3">
          <Card {...card} />
        </div>
      </div>
    </div>
  );
}

export default App;
