import { ReactNode } from "react";

export type Tlinks = {
  name: string;
  path: string;
}[];

export type TSocials = {
  icon: ReactNode;
  path: string;
}[];

export type TStats = {
  num: number;
  text: string;
}[];
