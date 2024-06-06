/* eslint-disable react/prop-types */
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const social = [
  { icon: <FaGithub></FaGithub>, path: "" },
  { icon: <FaLinkedinIn></FaLinkedinIn>, path: "" },
];

const Socials = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {social.map((item, index) => {
        return (
          <Link key={index} to={social.path} className={iconStyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
