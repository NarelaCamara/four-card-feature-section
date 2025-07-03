import { type ICard } from "../utils";

export const Card = ({ title, color, text, icon }: ICard) => {
  return (
    <div className="my-8">
      <div
        className={`p-8 my-2 rounded-lg border-t-4 drop-shadow-xs ${color} shadow-lg`}
      >
        <h2 className=" font-[Poppins] font-bold text-xl text-[#4D4F62]">
          {title}
        </h2>
        <p className=" font-[Poppins] font-light text-xs p-1 text-[#6A7178]">
          {text}
        </p>
        <div className="flex justify-end pt-8 ">
          <img src={icon} alt="icon card" className="w-16" />
        </div>
      </div>
    </div>
  );
};
