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
    linkValue?: string;
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
    icon: ReactNode;
    name: string;
  }[];
};

export type TProject = {
  id?: number;
  title: string;
  category: string;
  description: string;
  stack: {
    name: string;
  }[];
  image: string;
  live: string;
  github: string;
};
