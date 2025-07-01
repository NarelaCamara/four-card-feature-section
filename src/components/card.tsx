import { type ICard } from "../utils";

export const Card = ({ title, color, text, icon }: ICard) => {
  return (
    <div className={`p-4 my-2 ${color}`}>
      <h2 className=" font-[Poppins] font-medium">{title}</h2>
      <p className=" font-[Poppins] font-light">{text}</p>
      <div>
        <img src={icon} alt="icon card" />
      </div>
    </div>
  );
};
