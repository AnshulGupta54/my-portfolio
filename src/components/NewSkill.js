const NewSkill=({skill,icon,color})=>{
    return(
        <div className=" border-2 w-32 md:w-48 h-32 m-3 hover:scale-110 rounded-md" >
            <p className="flex justify-center ">{skill}</p>
            <div className={`flex justify-center  mt-6 text-6xl text-[${color}] hover:scale-110 `}>
            {icon}
            </div>
        </div>
    );
}

export default NewSkill;