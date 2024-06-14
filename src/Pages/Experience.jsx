/* eslint-disable no-unused-vars */
import Navbar from "./Navbar";
import ExperienceCard from "./ExperienceCard";
import MyServices from "./MyServices";
import Skills from "./Skills";
import { useEffect } from "react";
import Aos from "aos";
import { Helmet } from "react-helmet-async";
import Footer from "../Components/Footer";
// experience
const experience = [
  {
    duration: "2022-present",
    technology: "MERN Stack project",
    description:
      "Developed an e-commerce web app using MERN stack: MongoDB, Express.js, React.js, Node.js. Features secure authentication, real-time order tracking, and RESTful APIs.",
  },
  {
    duration: "2022-present",
    technology: "Frontend Part",
    description:
      "Gained expertise in front-end development with React.js, building responsive and interactive user interfaces. Proficient in HTML, CSS,Tailwind ,Bootstrap, JavaScript, daisy ui ,material ui  and optimizing performance for seamless user experiences.",
  },
  {
    duration: "2023-present",
    technology: "Backend Part",
    description:
      "Specialized in back-end development using Node.js and Express.js. Experienced in making RESTful APIs, managing databases with MongoDB, and ensuring robust, secure server-side operations.",
  },
];

const Experience = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in milliseconds
    });
  }, []);
  return (
    <div>
       <Helmet>
        <title>Portfolio | Experience</title>
      </Helmet>
      <Navbar></Navbar>
      {/* Experience  section */}
      <section className="flex flex-col lg:flex-row w-11/12 mx-auto gap-10 items-center justify-center py-5">
        <div data-aos="fade-right" data-aos-duration="2000" className="flex-1 ">
          <h2 className="text-basic text-4xl mb-10"> My Experience </h2>
          <p>
            As a proficient MERN stack developer, I have extensive experience in
            building dynamic, scalable web applications. I specialize in
            MongoDB, Express.js, React.js, and Node.js, ensuring seamless
            integration and performance. My expertise includes making responsive
            user interfaces, RESTful APIs, and optimizing database operations
            for enhanced user experiences.
          </p>
        </div>
        <div className="flex-1">
          {/* here experience come card type */}

          <div className="grid grid-cols-1 gap-6">
            {experience?.map((item, index) => {
              return <ExperienceCard key={index} item={item}></ExperienceCard>;
            })}
          </div>
        </div>
      </section>
      {/* my service section */}
      <section>
        <MyServices></MyServices>
      </section>
      {/* my skills section */}
      <section className="py-10">
        <h2 className="text-basic text-center text-4xl py-10">
          My Comfort Zone
        </h2>
        <Skills></Skills>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Experience;
