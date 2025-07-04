import { useState } from "react";
import "./App.css";
import { Card } from "./components/card";
import home from "./assets/icon-homepage.svg";
import software from "./assets/icon-software.svg";
import idea from "./assets/Icon-idea.svg";
import search from "./assets/icon-search.svg";
import { colors } from "./utils";

function App() {
  const [cards] = useState([
    {
      title: "Supervisor",
      color: colors[1],
      text: "Monitors activity to identify project roadblocks",
      icon: search,
    },
    {
      title: "Team Builder",
      color: colors[2],
      text: "Scans our talent network to create the optimal team for your project",
      icon: home,
    },
    {
      title: "Calculator",
      color: colors[0],
      text: "Uses data from past projects to provide better delivery estimates",
      icon: software,
    },
    {
      title: "Karma",
      color: colors[3],
      text: "Regularly evaluates our talent to ensure quality",
      icon: idea,
    },
  ]);

  return (
    <div className="flex flex-col flex-nowrap items-center m-8 min-w-[330px] md:min-w-[768px]">
      <div className="flex flex-col flex-nowrap items-center max-w-[540px]">
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
      </div>
      <div className="grid md:grid-cols-3 md:grid-rows-3 md:gap-0 lg:grid-cols-3 lg:grid-rows-3 lg:gap-10 lg:absolute">
        <div className="md:col-start-2 lg:col-start-1 lg:row-start-2">
          <Card {...cards[0]} /> {/** verde */}
        </div>
        <div className="md:col-start-1 md:row-start-2 md:relative md:left-[7rem] lg:left-[0rem] lg:col-start-2 lg:row-start-1 lg:relative lg:top-[12.5rem]">
          <Card {...cards[1]} /> {/** rojo */}
        </div>
        <div className="md:col-start-3 md:row-start-2 md:relative md:right-[7rem] lg:right-[0rem] lg:col-start-2 lg:row-start-3 lg:relative lg:bottom-[12.5rem]">
          <Card {...cards[2]} /> {/** amarillo */}
        </div>
        <div className="md:col-start-2 md:row-start-3 lg:col-start-3 lg:row-start-2">
          <Card {...cards[3]} /> {/** azul */}
        </div>
      </div>
    </div>
  );
}

export default App;
