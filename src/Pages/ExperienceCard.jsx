/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const ExperienceCard = ({ item }) => {
  const { duration, technology, description } = item;
  return (
    <div  className="card border shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
    <div className="py-3 px-5 space-y-1">
      <h2 className="card-title">{technology}</h2>
      <p>{duration}</p>
      <p className="text-sm text-white/80">{description}</p>
    </div>
  </div>
  
  
  );
};

export default ExperienceCard;
