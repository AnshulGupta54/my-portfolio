import { NavLink, redirect } from "react-router-dom";

const Navbar=()=>{
    return(
        <div className=" flex bg-black pt-4">
            <h1 className=" mr-96 text-3xl text-blue-800 pl-2" >My Portfolio</h1>
            <div className=" flex justify-between w-96 text-white mr-20 ">
            <NavLink to='/' className='active:underline'>Home</NavLink>
            <NavLink to="/about">About Me</NavLink>
            <p>My Skills</p>
            <p>My Projects</p>
            </div>
            <div className=" text-center ml-96 border-2 bg-white text-black rounded w-32">
            <NavLink to='/contact' >Contact Me</NavLink>
            </div>
        </div>
    )
}

export default Navbar;