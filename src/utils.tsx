export const colors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-gray-500",
] as const;
export type Color = (typeof colors)[number];

export interface ICard {
  title: string;
  color: Color;
  text: string;
  icon: string;
}
