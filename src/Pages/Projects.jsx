import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import Footer from "../Components/Footer";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Project</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="w-10/12 lg:w-11/12  mx-auto   mt-10 ">
        <h1 className="text-3xl lg:text-4xl  font-bold mb-10 lg:mb-20  text-basic text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 pb-10 ">
          <ProjectCard></ProjectCard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Projects;
