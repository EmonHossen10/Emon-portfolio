import img from "../assets/Pictures/hero10.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AnotherPhoto = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the animation duration (optional)
    });
  }, []);
  return (
    <div
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <img
        className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full
      
        "
        src={img}
        alt="hero Img"
      />
    </div>
  );
};

export default AnotherPhoto;
