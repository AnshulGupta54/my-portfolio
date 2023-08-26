import food from "../assets/food.png";
import NewProject from "../components/NewProject";
import events from "../assets/events.png";
import quotes from "../assets/quotes.png";

const projects = [
  {
    name: "Events App",
    info: "Created a Events App using React Js ",
    image: events,
    link: "https://github.com/AnshulGupta54/EventsApp",
    host: "https://github.com/AnshulGupta54/EventsApp"
  },
  {
    name: "Food Order App",
    info: "Created a Food Ordering App using React Js ",
    image: food,
    link: "https://github.com/AnshulGupta54/FoodOrderApp",
    host: "https://food-order-60d4e.web.app/"
  },
  {
    name: "Quotes App",
    info: "Created a Quotes App using React Js ",
    image: quotes,
    link: "https://github.com/AnshulGupta54/QuotesApp",
    host: "https://react-http-114a4.web.app/quotes"
  }
];

const Projects = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <h1 className=" text-yellow-500 text-4xl flex justify-center mt-5">
        My Projects
      </h1>
      <p className=" text-white mt-10 w-4/5 text-center">
        Here are some of the best projects, the rest of the projects are
        available on Github.
      </p>
      <div className=" flex flex-col flex-wrap md:flex-row md:w-3/4 md:justify-between items-center mt-10  ">
        {projects.map((project) => (
          <NewProject
            name={project.name}
            info={project.info}
            image={project.image}
            link={project.link}
            host={project.host}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default Projects;
