/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ServicesCard = ({ item }) => {
  const { heading, description, logo } = item;
  return (
    <div className="card bg-[#252f3a] border shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
  <div className="p-5 space-y-2">
    <p className="text-4xl w-6 mx-auto pb-2 font-bold">{logo}</p>
    <h2 className="card-title text-basic">{heading}</h2>
    <p className="text-sm">{description}</p>
  </div>
</div>

  );
};

export default ServicesCard;
