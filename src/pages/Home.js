import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className=" mt-40 flex flex-col justify-center items-center md:items-start md:ml-20">
      <h1 className=" text-5xl mb-3 text-white">Hello everyone!</h1>
      <p className=" text-yellow-500 text-2xl w-3/4 md:w-full">
        My name is Anshul. I'm a Software Developer
      </p>
      <div className=" flex mt-3">
        <Link target="_blank" to="https://drive.google.com/file/d/1vbiXUijH32Mwv6v2DixErNfhwINDR6lt/view?usp=sharing" className=" p-1 border-2 rounded-3xl bg-black text-white w-32 h-10 text-center mr-3">
          Check My CV
        </Link>
        <Link target="_blank" to="https://www.linkedin.com/in/anshul-gupta-3705311bb/" className=" p-1 border-2 rounded-3xl bg-black text-white w-32 h-10 text-center">
          LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default Home;
