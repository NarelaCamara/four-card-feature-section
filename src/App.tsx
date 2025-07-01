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
    <div className="flex flex-col flex-wrap items-center p-4">
      <h2 className="font-[Poppins]  text-2xl font-extralight ">
        Reliable, efficient delivery
      </h2>
      <h2 className="font-[Poppins] font-bold text-2xl pb-4">
        Powered by Technology
      </h2>
      <p className="font-[Poppins] font-normal">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <div>
        <Card {...card} />
      </div>
      <div>
        <Card {...card} />
      </div>
      <div>
        <Card {...card} />
      </div>
      <div>
        <Card {...card} />
      </div>
    </div>
  );
}

export default App;
