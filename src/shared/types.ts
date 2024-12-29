import { ReactNode } from "react";
export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}
export type BenefitType = {
  icon: ReactNode;
  title: string;
  description: string;
};
export type ClassesType = {
  name: string;
  descriotion?: string;
  img: string;
};
