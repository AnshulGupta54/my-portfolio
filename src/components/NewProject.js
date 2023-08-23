import { Link } from "react-router-dom";

const NewProject = ({ name, info, image, link, host }) => {
  return (
    <Link
      to={host}
      target="_blank"
      className=" hover:border-2 hover:border-yellow-500 rounded-md w-3/4 md:w-2/5 mb-14 h-96"
    >
      <img className=" h-3/4" src={image} />
      <hr />
      <div className=" text-black text-center bg-white h-1/4">
        <p className=" text-2xl font-semibold">{name}</p>
        <p>{info}</p>
        <Link to={link} target="_blank">
          <button className=" border-2 bg-blue-700 w-52 rounded-md h-8 mt-1 text-white hover:bg-blue-800 active:bg-blue-900">
            More info on Github
          </button>
        </Link>
      </div>
    </Link>
  );
};

export default NewProject;
