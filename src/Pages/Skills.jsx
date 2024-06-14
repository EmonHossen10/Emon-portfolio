import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaFigma,
  
  FaGithub,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiTailwindcss,
  
  SiNetlify,
  SiFirebase,
  SiExpress,
  SiMongodb,
  
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { GrStorage } from "react-icons/gr";
import { IoLogoVercel } from "react-icons/io5";
import "./Skills.css";
const Skills = () => {
  return (
    <section data-aos="zoom-in-up" className="grid grid-cols-1 lg:grid-cols-2 w-10/12 mb-10 mx-auto gap-10">
      {/* frontend development */}
      <div>
        <div>
          <h2 className="heading">FrontEnd Development</h2>
          <div className="flex gap-3 lg:gap-8 py-4  text-4xl ">
            <FaHtml5 className="enjoy"></FaHtml5>
            <FaCss3 className="enjoy"></FaCss3>
            <SiTailwindcss className="enjoy"></SiTailwindcss>
            <FaBootstrap className="enjoy"></FaBootstrap>
            <FaJs className="enjoy"></FaJs>
            <FaReact className="enjoy"></FaReact>
            <RiNextjsLine className="enjoy"></RiNextjsLine>
          </div>
        </div>
      </div>
      {/* Backend development */}
      <div>
        <div>
          <h2 className="heading">Backend Development</h2>
          <div className="flex gap-3 lg:gap-8 py-4  text-4xl ">
            <FaNodeJs className="enjoy"></FaNodeJs>
            <SiExpress className="enjoy"></SiExpress>
            <SiFirebase className="enjoy"></SiFirebase>
            <RiNextjsLine className="enjoy"></RiNextjsLine>
          </div>
        </div>
      </div>
      {/* Database */}
      <div>
        <div>
          <h2 className="heading">Backend Development</h2>
          <div className="flex gap-3 lg:gap-8 py-4  text-4xl ">
            <GrStorage className="enjoy"></GrStorage>
            <SiMongodb className="enjoy"></SiMongodb>
          </div>
        </div>
      </div>
      {/* tools */}
      <div>
        <div>
          <h2 className="heading">Tools</h2>
          <div className="flex gap-3 lg:gap-8 py-4  text-4xl ">
            <FaGithub className="enjoy"></FaGithub>
            <FaFigma className="enjoy"></FaFigma>
            <IoLogoVercel className="enjoy"></IoLogoVercel>
            <SiNetlify className="enjoy"></SiNetlify>
            <VscVscode className="enjoy"></VscVscode>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
