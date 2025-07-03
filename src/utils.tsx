export const colors = ["border-t-[#EA5454]"] as const;
export type Color = (typeof colors)[number];

export interface ICard {
  title: string;
  color: Color;
  text: string;
  icon: string;
}
