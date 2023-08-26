import coder from '../assets/coder.jpg';

const About = () => {
  return (
    <div className=' flex flex-col md:flex-row justify-center items-center '>
    <div className=" bg-black text-white flex flex-col justify-center items-center md:items-start md:ml-20 md:mt-32 mt-10">
      <h1 className=" text-4xl mb-8 text-yellow-500 font-extrabold ">
        About me
      </h1>
      <p className=" mb-5">Hi there, my name is Anshul Gupta</p>
      <div className=" border-2 w-4/5 md:w-full p-2">
        Hello, I'm Anshul Gupta, a recent college graduate driven by a deep
        passion for frontend development. With a keen eye for design and an
        insatiable curiosity, I'm committed to creating immersive digital
        experiences that resonate. Beyond visuals, I'm well-versed in data
        structures and algorithms, relishing the intricate dance of
        problem-solving. My aspiration is to evolve into a skilled software
        developer who seamlessly merges creativity with technical prowess. I
        believe that a solid grasp of both design aesthetics and coding logic is
        essential for crafting exceptional applications. With each line of code
        I write and each challenge I conquer, I'm stepping closer to this goal.
        As I embark on this journey, I'm fueled by the excitement of
        transforming concepts into functional software. The blend of innovation
        and precision, combined with a thirst for continuous learning, propels
        me forward. From frontend magic to coding complexity, I'm ready to
        explore, learn, and contribute to the ever-evolving world of software
        development.
      </div>
    </div>
    <img src={coder} className=' rounded-md border-2  w-3/4 h-1/2 mt-5 md:mt-44 md:ml-10 mb-5 md:w-1/3 md:mr-24 ' />
    </div>
  );
};

export default About;
