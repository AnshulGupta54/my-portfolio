const Home=()=>{
    return(
        <div className=" mt-60 ml-32">
            <h1 className=" text-5xl mb-3">Hello everyone!</h1>
            <p>My name is Anshul. I'm a Software Developer</p>
            <div className=" flex">
                <div className=" border-2 rounded-3xl bg-black text-white w-32 h-10 text-center mr-3">
                <button className=" p-1">Check My CV</button>
                </div>
                <div className=" border-2 rounded-3xl bg-black text-white w-32 h-10 text-center">
                <button  className=" p-1">LinkedIn</button>
                </div>
            </div>
        </div>
    )
}

export default Home;