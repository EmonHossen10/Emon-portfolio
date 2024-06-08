import { FiDownload } from "react-icons/fi";
import Socials from "../Components/Socials";
import Photo from "../Components/Photo";
import Stats from "../Components/Stats";

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
            <p className="text-3xl font-bold">Web Developer</p>

            {/* another text part */}

            <p className="max-w-[600px] mb-9 text-white/80 text-sm">
              I am a passionate MERN stack developer with 2 years of learning
              experience in HTML, CSS, React, Node.js, Express.js, and MongoDB.
              Aiming to build innovative solutions that drive business growth
              and deliver exceptional user experiences.
            </p>
            {/* btn and socials */}
            <div className=" flex flex-col lg:flex-row items-center gap-8">
              <button
                className="flex items-center gap-3 text-basic font-semibold  border border-basic px-10 py-3 rounded-full hover:bg-basic hover:text-black 
              transition-all duration-300 
              "
              >
                <span>Resume</span>
                <FiDownload></FiDownload>
              </button>

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
