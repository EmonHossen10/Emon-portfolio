/* eslint-disable no-unused-vars */
import Navbar from "./Navbar";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
// experience
const experience = {
  icon: "icon cominnggggggggg",
  title: "My Experience",
  description:
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum esse blanditiis cum laboriosam reprehenderit quasi ut itaque perspiciatis sapiente culpa!",
  item: [
    {
      duration: "2022-present",
      technology: "MERN Stack project",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum esse blanditiis cum laboriosam reprehenderit",
    },
    {
      duration: "2022-present",
      technology: "Frontend Part",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum esse blanditiis cum laboriosam reprehenderit",
    },
    {
      duration: "2023-present",
      technology: "Backend Part",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum esse blanditiis cum laboriosam reprehenderit",
    },
  ],
};

// skills
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias totam ipsa labore laboriosam quasi necessitatibus est asperiores perspiciatis similique.",
  skillList: [
    {
      icon: <FaHtml5></FaHtml5>,
      name: "Html 5",
    },
    {
      icon: <FaCss3></FaCss3>,
      name: "CSS 3",
    },
    {
      icon: <FaBootstrap></FaBootstrap>,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss></SiTailwindcss>,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJs></FaJs>,
      name: "Javascript",
    },
    {
      icon: <FaReact></FaReact>,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs></SiNextdotjs>,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs></FaNodeJs>,
      name: "Node.js",
    },
    {
      icon: <FaFigma></FaFigma>,
      name: "Figma",
    },
  ],
};

const Experience = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2>This is experience page</h2>
    </div>
  );
};

export default Experience;
