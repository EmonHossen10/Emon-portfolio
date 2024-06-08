/* eslint-disable no-unused-vars */

import img from "../assets/Pictures/hero.jpg";
// about data
const about = {
  title: "About Me",
  description:
    "I am a dedicated and versatile MERN stack developer with a passion for building efficient and user-friendly web applications. With 2 years of learning experience, I have worked with a variety of technologies, including React js, Next.js, Node.js,  ,Express js and  MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohammad Easin Arafat Emon",
    },
    {
      fieldName: "Email",
      fieldValue: "emonhossen1000@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years + Learning Experience",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi,Bangla(Native)",
    },
  ],
};

const AboutMe = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center py-10 w-10/12 mx-auto gap-10">
      <div data-aos="fade-right" className="flex-1  ">
        <img
          src={img}
          className=" w-[300px] lg:w-[460px] lg:h-[460px] rounded-lg shadow-2xl    "
          alt="" 
        />
      </div>
      <div data-aos="fade-up-left" className="flex-1  ">
        <h2 className="text-basic font-bold text-4xl text-center lg:text-left mb-6">
          About Me!!!
        </h2>

        <p className="text-sm lg:text-base">
          I am a dedicated and versatile MERN stack developer with a passion for
          building efficient and user-friendly web applications. With 2 years of
          learning experience, I have worked with a variety of technologies,
          including React js, Next.js, Node.js, ,Express js and MongoDB. My
          journey in web development began with a deep curiosity for how things
          work, and it has evolved into a career where I continuously strive to
          learn and adapt to new challenges. I thrive in collaborative
          environments and enjoy solving complex problems to deliver
          high-quality solutions. Outside of coding, I enjoy staying active,
          exploring new technologies, and contributing to open-source projects.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
