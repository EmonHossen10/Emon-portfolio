/* eslint-disable react/prop-types */
import img1 from "../assets/Projects/project10.jpg"
import img2 from "../assets/Projects/project11.jpg"
import img3 from "../assets/Projects/project12.jpg"

const ProjectCard = () => {
  return (
    <>
      {/* projects 1 */}
      <div className="card bg-gray-800   shadow-xl">
        <figure>
          <img
            src={img1}
            className="hover:scale-110 transition-all ease-in duration-300"
            alt="Shoes"
          />
        </figure>
        <div className="  p-5 ">
          <h2 className="text-3xl font-bold text-basic pb-3">Digital Tech</h2>
          <p className="text-sm">
            A MongoDB-powered site with navigation, product details, protected
            service routes, and secure email-password authentication for user
            registration and login.
          </p>
          <p className="mt-6">
            HTML | CSS | Tailwind CSS | React js | Mongo db | express js
          </p>

          <section className="mt-4 flex gap-4">
            <a
              href="https://github.com/EmonHossen10/a10-digital-tech-client"
              className="underline text-blue-400 hover:text-basic text-xl  "
              target="_blank"
            >
              Github Link
            </a>
            <a
              className="underline text-blue-400 hover:text-basic text-xl"
              target="_blank"
              href="https://65c9251bcd4bfb58dd306f73--joyful-melba-507ba4.netlify.app/"
            >
              Live Link
            </a>
          </section>
        </div>
      </div>
      {/* project 2 */}
      <div className="card bg-gray-800   shadow-xl">
        <figure>
          <img
            src={img2}
            className="hover:scale-110 transition-all ease-in duration-300"
            alt="Shoes"
          />
        </figure>
        <div className="  p-5 ">
          <h2 className="text-3xl font-bold text-basic pb-3">Service Master</h2>
          <p className="text-sm">
          My project uses MongoDB for data storage and secure key management via environment variables. It features navigation, service details with React-Leaflet, private routes, and secure email-password authentication.
          </p>
          <p className="mt-6">
            HTML | CSS | Tailwind CSS | React js | Mongo db | express js
          </p>

          <section className="mt-4 flex gap-4">
            <a
              href="https://github.com/EmonHossen10/a11-service-sharing-client"
              className="underline text-blue-400 hover:text-basic text-xl "
              target="_blank"
            >
              Github Link
            </a>
            <a
              className="underline text-blue-400 hover:text-basic text-xl"
              target="_blank"
              href="https://655bb2950553e718f37aaa29--earnest-macaron-5b91b8.netlify.app/"
            >
              Live Link
            </a>
          </section>
        </div>
      </div>
      {/* project 3 */}
      <div className="card bg-gray-800   shadow-xl">
        <figure>
          <img
            src={img3}
            className="hover:scale-110 transition-all ease-in duration-300"
            alt="Shoes"
          />
        </figure>
        <div className="  p-5 ">
          <h2 className="text-3xl font-bold text-basic pb-3">Fast News</h2>
          <p className="text-sm">
          This project utilizes MongoDB for data storage and secure key management. It features navigation, an admin Dashboard, private routes, email-password authentication, an Admin Panel, and integrated payment methods for secure transactions.
          </p>
          <p className="mt-6">
            HTML | CSS | Tailwind CSS | React js | Mongo db | express js | Node js | Stripe
          </p>

          <section className="mt-4 flex gap-4">
            <a
              href="https://github.com/EmonHossen10/a-12-fast-news"
              className="underline text-blue-400 hover:text-basic text-xl "
              target="_blank"
            >
              Github Link
            </a>
            <a
              className="underline text-blue-400 hover:text-basic text-xl"
              target="_blank"
              href="https://fast-news-80a2e.web.app/"
            >
              Live Link
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
