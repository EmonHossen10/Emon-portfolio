import { FaSchool } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const EducationDetails = () => {
  return (
    <section>
      <div className="mb-5">
        <h2 className="text-white text-xl font-bold mb-3 ">
          Secondary School Certificate
        </h2>

        <p>
          <FaSchool className="inline  text-basic  " /> institution: MEH Arif
          College
        </p>

        <p>
          <IoIosTime className="inline  text-basic " /> Duration: 2012-2017
        </p>
        <p>
          <SlCalender className="inline  text-basic " /> PassingYear: 2017
        </p>
      </div>
      <div className="mb-5">
        <h2 className="text-white text-xl font-bold mb-3 ">
          Higher Secondary School Certificate
        </h2>
        <p>
          <FaSchool className="inline  text-basic  mr-3" />
          institution: MEH Arif College
        </p>
        <p>
          <IoIosTime className="inline  text-basic mr-3 " />
          Duration: 2017-2019
        </p>
        <p>
          <SlCalender className="inline  text-basic mr-3 " />
          PassingYear: 2019
        </p>
      </div>
      <div className="mb-5">
        <h2 className="text-white text-xl font-bold mb-3 ">
          Bachelor of Science
        </h2>
        <p>
          <FaSchool className="inline  text-basic mr-3 " />
          institution: City University Bangladesh
        </p>
        <p>
          <MdCastForEducation className="inline  text-basic mr-3 " />
          Department: Computer Science and Engineering (CSE)
        </p>
        <p>
          <IoIosTime className="inline  text-basic mr-3 " />
          Duration: 2022-2026
        </p>
      </div>
    </section>
  );
};

export default EducationDetails;
