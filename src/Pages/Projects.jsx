import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Website",
    image: "https://i.ibb.co/Hxr89RD/projexcts10.png",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
  },
  {
    title: "Task Management App",
    image: "https://i.ibb.co/sV2bBy9/pexels-luis-gomes-546819.jpg",
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  },
  {
    title: "Portfolio Website",
    image: "project3",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
  },
];

const Projects = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-10/12 lg:w-11/12  mx-auto   mt-10 ">
        <h1 className="text-3xl lg:text-4xl  font-bold mb-10 lg:mb-20  text-basic text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 pb-10 ">
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </>
  );
};

export default Projects;
