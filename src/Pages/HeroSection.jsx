/* eslint-disable react/no-unescaped-entities */
import { FiDownload } from "react-icons/fi";
import Socials from "../Components/Socials";
import Photo from "../Components/Photo";
import Stats from "../Components/Stats";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="h-full">
      <div className=" w-11/12 lg:w-10/12  mx-auto h-full">
        <div
          className="flex flex-col-reverse lg:flex-row items-center justify-between 
        lg:pt-8 lg:pb-24  
        "
        >
          {/* Text */}
          <div className="text-center lg:text-left space-y-5">
            <h2 className="text-2xl text-basic ">
              Hi, I'm <br /> <span>Mohammad Easin Arafat Emon</span>
            </h2>
            <h2 className="lg:text-4xl text-xl text-white  font-semibold mb-2 animate__animated animate__zoomIn">
              <span>I'm a </span>
              <TypeAnimation
                sequence={[
                  "MERN",
                  700,
                  "MERN Stack",
                  700,
                  "MERN Stack Developer",
                  700,
                  "Front-end",
                  700,
                  "Front-end Developer",
                  700,
                  "Web Developer",
                  700,
                  "",
                  700,
                ]}
                className="lg:text-4xl text-3xl text-[#ccd6f6] font-bold mb-5"
                repeat={Infinity}
                delay={100} // Adjusted delay for typing speed
              />
            </h2>

            {/* another text part */}

            <p className="max-w-[600px] mb-9 text-white/80 text-sm">
              I am a passionate MERN stack developer with 2 years of learning
              experience in HTML, CSS, React, Node.js, Express.js, and MongoDB.
              Aiming to build innovative solutions that drive business growth
              and deliver exceptional user experiences.
            </p>
            {/* btn and socials */}
            <div className=" flex flex-col lg:flex-row items-center gap-8">
              <Link to="https://drive.google.com/uc?export=download&id=1Z6jG2V0ynV_jmY3b00N9lVaOptvN3icM">
                <button
                  className="flex items-center gap-3 text-basic font-semibold  border border-basic px-10 py-3 rounded-full hover:bg-basic hover:text-black 
              transition-all duration-300 
              "
                >
                  <span>Resume</span>
                  <FiDownload></FiDownload>
                </button>
              </Link>

              <Socials
                containerStyle="flex gap-6 "
                iconStyle="w-9 h-9 border border-basic  rounded-full  flex  items-center justify-center text-basic  
              hover:bg-basic hover:text-black transition-all duration-600
              "
              ></Socials>
            </div>
          </div>
          {/* photo */}
          <div className="mb-8 lg:mb-0">
            <Photo></Photo>
          </div>
        </div>
      </div>
      <Stats></Stats>
    </section>
  );
};

export default HeroSection;
