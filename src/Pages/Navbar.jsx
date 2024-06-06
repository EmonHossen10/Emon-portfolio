import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-basic underline  " : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-basic underline  " : ""
        }
      >
       About
      </NavLink>

      <NavLink
        to="/experience"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Experience
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Project
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <main>
      <div
        className="navbar py-5 text-white   fixed top-0 w-full z-10 
       bg-[linear-gradient(#ffffff33_1px,#080F1F_1px)] backdrop-blur-[2px]
      "
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content gap-3 mt-3 z-[1] p-2 shadow bg-[#16223f] rounded-box w-52  "
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-white text-3xl">PORTFOLIO</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 text-[22px] text-white   px-1">
            {navlinks}
          </ul>
        </div>
        {/* <div className="navbar-end md:px-5">
        <Link>
          <button className="btn btn-sm md:btn-md md:px-10 md:text-xl bg-[#3f66ba] text-white border-0 transition-colors duration-300 ease-in-out hover:bg-[#1e4d77] hover:scale-105 transform">
            Hire Me!
          </button>
        </Link>
      </div> */}
      </div>
    </main>
  );
};

export default Navbar;
