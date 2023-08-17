import NewSkill from "../components/NewSkill";
import { FaJs,FaHtml5, FaCss3,FaReact, FaGithub,FaNodeJs } from "react-icons/fa6";
import {SiTailwindcss ,SiFirebase} from "react-icons/si";
import {CgCPlusPlus} from "react-icons/cg";

const skills = [
  { skill: "C++", icon: <CgCPlusPlus/> },
  { skill: "HTML",icon: <FaHtml5/>},
  {skill: "CSS",icon: <FaCss3/>},
  {skill:"JAVASCRIPT",icon: <FaJs/>},
  {skill:"REACT JS",icon: <FaReact/>},
  {skill:"NODE JS",icon:<FaNodeJs/>},
  {skill:"GITHUB",icon: <FaGithub />},
  {skill:"TAILWIND CSS",icon: <SiTailwindcss /> },
  {skill:"FIREBASE",icon: <SiFirebase />},
];

const Skills = () => {
  return (
    <div className=" bg-black">
      <h1 className=" flex justify-center text-4xl text-yellow-500 pt-10 font-extrabold">
        My Skills
      </h1>
      <div className="flex flex-wrap w-3/4 ml-52 mt-28 text-white">
        {skills.map((skill) => (
          <NewSkill skill={skill.skill} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
