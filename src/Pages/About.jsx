/* eslint-disable no-unused-vars */

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


// education

const education = {
  icon: "Education icon cominnggggggggg",
  title: "My Education ",
  description:
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum esse blanditiis cum laboriosam reprehenderit quasi ut itaque perspiciatis sapiente culpa!",
  item: [
    {
      duration: "2012-2017",
      degree: "Secondary School Certificate",
      institution: "MEH Arif College",
      passingYear: "2017",
    },
    {
      duration: "2017-2019",
      degree: "Higher Secondary School Certificate",
      institution: "MEH Arif College",
      passingYear: "2019",
    },
    {
      duration: "2022-present",
      degree: "Bachelor of Science",
      institution: "City University Bangladesh",
      department: "Computer Science and Engineering (CSE)",
    },
  ],
};

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

import Navbar from "./Navbar";
import AboutMe from "../Components/AboutMe";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* about section */}
      <AboutMe></AboutMe>
      {/* education section */}
      <section>
        <div>{/* images div */}</div>
        <div>{/* text div */}</div>
      </section>
    </div>
  );
};

export default About;
