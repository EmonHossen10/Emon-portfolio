/* eslint-disable no-unused-vars */
import Navbar from "./Navbar";
import AboutMe from "../Components/AboutMe";
import Education from "../Components/Education";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
    });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      {/* about section */}
      <AboutMe></AboutMe>
      {/* education section */}
      <Education></Education>
    </div>
  );
};

export default About;
