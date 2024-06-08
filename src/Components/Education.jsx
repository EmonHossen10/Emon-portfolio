/* eslint-disable no-unused-vars */
import img from "../assets/Pictures/hero.jpg";
import EducationDetails from "./EducationDetails";

import Lottie from "react-lottie";
import animationData from "./education.json";

// education

const edu = {
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

const education = [
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
];

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-center items-center py-10 w-10/12 mx-auto gap-10">
      <div data-aos="fade-up" className="flex-1 ">
        <h2 className="text-basic font-bold text-4xl text-center lg:text-left mb-6">
          My Education
        </h2>
        <EducationDetails></EducationDetails>
      </div>
      {/* animation here */}
      <div data-aos="fade-up" className="flex-1 ">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </section>
  );
};

export default Education;
