export const colors = [
  "border-t-[#549EF2]",
  "border-t-[#44D3D2]",
  "border-t-[#EA5454]",
  "border-t-[#FCAE4A]",
] as const;
export type Color = (typeof colors)[number];

export interface ICard {
  title: string;
  color: Color;
  text: string;
  icon: string;
}
