import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import pic from "../assets/Pic.jpeg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center md:flex-row md:justify-evenly">
      <div className=" mt-40 flex flex-col justify-center items-center md:items-start md:ml-20">
        <h1 className=" text-5xl mb-3 text-white">Hello everyone!</h1>
        <p className=" text-yellow-500 text-2xl w-3/4 md:w-full">
          My name is Anshul. I'm a Software Developer
        </p>
        <div className=" flex mt-3">
          <Link
            target="_blank"
            to="https://drive.google.com/file/d/1vbiXUijH32Mwv6v2DixErNfhwINDR6lt/view?usp=sharing"
            className="active:scale-95 p-1 border-2 hover:bg-blue-700 rounded-3xl bg-black text-white w-32 h-10 text-center mr-3"
          >
            Check My CV
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/anshul-gupta-3705311bb/"
            className="active:scale-95 flex justify-center items-center p-1 border-2 hover:bg-blue-700 rounded-3xl bg-black text-white w-32 h-10 text-center"
          >
            LinkedIn
            <FaLinkedin className=" ml-2 text-blue-500" />
          </Link>
        </div>
        <Link
            target="_blank"
            to="https://github.com/AnshulGupta54"
            className=" flex justify-center mt-3 items-center p-1 border-2 hover:bg-blue-700 rounded-3xl bg-black text-white w-32 h-10 text-center active:scale-95 md:ml-16"
          >
            Github
            <FaGithub className=" ml-2" />
          </Link>
      </div>
      <img
        src={pic}
        className=" w-3/4 h-2/3 mt-10 rounded-lg md:w-80 md:mt-40 md:h-96  "
      />
    </div>
  );
};

export default Home;
