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

export type TAbout = {
  title: string;
  description: string;
  info: {
    fieldName: string;
    fieldValue: string;
    linkName?: string;
  }[];
};
export type TEducation = {
  icon: string;
  title: string;
  description: string;
  education: {
    institution: string;
    degree: string;
    batch?: string;
    duration: {
      from: string;
      to: string;
    };
  }[];
};

export type TSkills = {
  icon: string;
  title: string;
  description: string;
  skills: {
    icon: string;
    name: string;
  }[];
};
