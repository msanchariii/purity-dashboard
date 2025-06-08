import { IconType } from "react-icons";
import { FaAtlassian, FaSpotify, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";

export type Author = {
  name: string;
  email: string;
  jobTitle: string;
  department: string;
  employedOn: string;
  status: "Online" | "Offline";
};

export type Project = {
  company: string;
  budget: number; // in dollars
  status: "Active" | "Completed" | "On Hold";
  completetion: number; // percentage 0-100
  icon?: IconType;
  iconClass?: string; // optional class for icon styling
};

export const authors: Author[] = [
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    jobTitle: "Software Engineer",
    department: "Engineering",
    employedOn: "2022-01-15",
    status: "Online",
  },
  {
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    jobTitle: "Product Manager",
    department: "Product",
    employedOn: "2021-03-22",
    status: "Offline",
  },
  {
    name: "Alice Johnson",
    email: "alicejhonson@gmail.com",
    jobTitle: "UX Designer",
    department: "Design",
    employedOn: "2020-07-30",
    status: "Online",
  },
  {
    name: "Bob Brown",
    email: "bobrown@gmail.com",
    jobTitle: "Data Scientist",
    department: "Data",
    employedOn: "2019-11-05",
    status: "Online",
  },
];

export const projects: Project[] = [
  {
    company: "Tech Innovations",
    budget: 50000,
    status: "Active",
    completetion: 75,
    icon: FaSpotify,
    iconClass: "text-green-500",
  },
  {
    company: "Creative Solutions",
    budget: 120000,
    status: "Completed",
    completetion: 100,
    icon: FaAtlassian,
    iconClass: "text-sky-500",
  },
  {
    company: "Future Tech",
    budget: 75000,
    status: "On Hold",
    completetion: 40,
    icon: SiAdobexd,
    iconClass: "text-red-500 bg-red-100",
  },
  {
    company: "Global Enterprises",
    budget: 200000,
    status: "Active",
    completetion: 60,
    icon: FaTelegram,
    iconClass: "text-sky-500",
  },
  {
    company: "NextGen Systems",
    budget: 30000,
    status: "Completed",
    completetion: 100,
    icon: FaWhatsapp,
    iconClass: "text-green-500",
  },
];
