import NewSkill from "../components/NewSkill";
import { FaJs,FaHtml5, FaCss3,FaReact, FaGithub,FaNodeJs } from "react-icons/fa6";
import {SiTailwindcss ,SiFirebase} from "react-icons/si";
import {CgCPlusPlus} from "react-icons/cg";

const skills = [
  { skill: "C++", icon: <CgCPlusPlus/>,color:"white"},
  { skill: "HTML",icon: <FaHtml5/>,color:"orange"},
  {skill: "CSS",icon: <FaCss3/>,color:"blue"},
  {skill:"JAVASCRIPT",icon: <FaJs/>,color:"yellow"},
  {skill:"REACT JS",icon: <FaReact/>,color:"blue"},
  {skill:"NODE JS",icon:<FaNodeJs/>,color:"green"},
  {skill:"GITHUB",icon: <FaGithub />,color:"white"},
  {skill:"TAILWIND CSS",icon: <SiTailwindcss /> ,color:"blue"},
  {skill:"FIREBASE",icon: <SiFirebase />,color:"orange"},
];

const Skills = () => {
  return (
    <div className=" bg-black flex flex-col justify-center items-center">
      <h1 className=" text-4xl text-yellow-500 pt-10 font-extrabold">
        My Skills
      </h1>
      <div className="flex flex-wrap justify-center w-3/4 md:w-2/3 mt-28 text-white">
        {skills.map((skill) => (
          <NewSkill skill={skill.skill} icon={skill.icon} color={skill.color} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
