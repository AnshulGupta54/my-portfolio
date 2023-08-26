import { NavLink } from "react-router-dom";
import { FaList } from "react-icons/fa6";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
const Navbar = () => {
  const [view, setView] = useState(false);
  const viewRef = useRef();
  useOnClickOutside(viewRef, () => setView(false));
  const listHandler = (event) => {
    setView(true);
  };

  return (
    <div className=" bg-black pt-4">
      <div className=" flex justify-between">
        <NavLink
          to="/"
          className=" text-4xl text-white font-semibold font-serif pl-5  focus:text-green-400"
        >
          My Portfolio
        </NavLink>
        <button onClick={listHandler}>
          <FaList className=" text-white mr-5 md:hidden " />
        </button>
        <div className=" w-1/2 hidden md:block  ">
          <div className=" flex justify-between text-white ">
            <NavLink
              to="/"
              className="hover:scale-105 hover:underline active:scale-95 focus:text-green-400 focus:scale-105"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="hover:scale-105 hover:underline active:scale-95 focus:text-green-400 focus:scale-105"
            >
              About Me
            </NavLink>
            <NavLink
              to="/education"
              className="hover:scale-105 hover:underline active:scale-95 focus:text-green-400 focus:scale-105"
            >
              Education
            </NavLink>
            <NavLink
              to="skills"
              className="hover:scale-110 hover:underline active:scale-95 focus:text-green-400 focus:scale-105"
            >
              My Skills
            </NavLink>
            <NavLink
              to="projects"
              className="hover:scale-110 hover:underline active:scale-95 focus:text-green-400 focus:scale-105"
            >
              My Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="text-center border-2 bg-white text-black rounded w-28 h-9 mr-2 pt-1 hover:scale-110 active:scale-95 active:bg-gray-300 focus:bg-green-400 focus:scale-105"
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
      {view && (
        <div
          ref={viewRef}
          className=" absolute right-0 flex justify-end mr-10 -mt-6 "
        >
          <ul
            onClick={() => setView(false)}
            className=" text-black bg-white w-36 text-center text-xl border-2 rounded-lg border-yellow-400"
          >
            <NavLink to="/" className=" mb-2">
              Home
            </NavLink>
            <hr />
            <NavLink to="/about" className="mb-2">
              About Me
            </NavLink>
            <hr/>
            <NavLink to="/education" className="mb-2">
              Education
            </NavLink>
            <hr />
            <NavLink to="/skills" className=" mb-2">
              Skills
            </NavLink>
            <hr />
            <NavLink to="/projects" className=" mb-2">
              My Projects
            </NavLink>
            <hr />
            <NavLink to="/contact" className=" mb-2">
              Contact Me
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
