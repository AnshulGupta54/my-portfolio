const NewSkill=({skill,icon})=>{
    return(
        <div className=" border-2 w-60 h-32 m-3 " >
            <p className=" flex justify-center">{skill}</p>
            <div className=" flex justify-center  mt-6 text-5xl text-blue-600 ">
            {icon}
            </div>
        </div>
    );
}

export default NewSkill;