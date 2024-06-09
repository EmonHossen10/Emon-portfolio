import { FaCode, FaLaptop, FaLaptopCode, FaRegSmileBeam } from "react-icons/fa";
import ServicesCard from "./ServicesCard";
import { FaMobileScreen } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";


const services=[
    {
    "heading": "MERN Stack Development",
    "description": "Experienced MERN stack developer adept in MongoDB, Express.js, React.js, Node.js. Specializing in crafting dynamic, scalable web solutions, ensuring exceptional user experiences by leveraging the full potential of these technologies.",
    "logo": <FaLaptop />
  },
  {
    "heading": "Web Development",
    "description": "In web development, MERN stack mastery—MongoDB, Express.js, React.js, Node.js—ushers in innovation. Crafting dynamic apps with seamless user experiences, leveraging these technologies to create tailored, scalable solutions for clients' digital needs.",
    "logo": <FaLaptopCode />
  },
  {
    "heading": "Client Satisfaction",
    "description": "Client satisfaction is my top priority. Understanding their needs, communicating effectively, and delivering high-quality solutions . From inception to delivery, prioritizing transparency, collaboration, and expectations for long-term partnerships.",
    "logo": <FaRegSmileBeam />
  },
  {
    "heading": "Responsive Design",
    "description": "Responsive design, using fluid grids, flexible images, adapts websites across devices for optimal user experience. Enhances accessibility, engagement, and SEO performance, simplifying content management for better user interaction.",
    "logo": <FaCode />
  },
  {
    "heading": "Clean Coding",
    "description": "Clean coding emphasizes readability, efficiency, and maintainability. Enhances collaboration, reduces errors, and ensures scalability for long-term project success. Adopting clean coding practices improves project maintainability and team efficiency.",
    "logo": <FaMobileScreen />
  },
  {
    "heading": "Problem Solving",
    "description": "Problem-solving in development involves identifying, analyzing, troubleshooting, fostering innovation and continuous improvement in projects. It fosters innovation and continuous improvement, crucial for successful project outcomes and driving progress in the tech industry.",
    "logo": <IoSettings />
  }
  ]
  

const MyServices = () => {
  return (
    <div>
      <h2 className="text-basic text-center text-4xl py-10">My Services </h2>
      {/* service card */}
      <div className=" w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-center">
        {
           services?.map((item,index)=>{
            return (
                <ServicesCard  key={index} item={item} ></ServicesCard>
            )
           })
        }
      </div>


    </div>
  );
};

export default MyServices;
