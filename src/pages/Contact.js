const Contact=()=>{
    return (
        <div className="flex  justify-normal bg-black text-white">
            <div className="mt-40 ml-16 mr-40">
            <h1 className=" text-4xl mb-2 text-yellow-500 font-extrabold ">Contact Me</h1>
            <p className=" font-serif">If you have any questions or would like to colaborate. Please don't hesitate to contact me</p>
            <div className=" mt-4 ml-3">
            <p className=" mb-2">8527648062</p>
            <p className=" mb-2">New Delhi</p>
            <p>guptaanshul169@gmail.com</p>
            </div>
            </div>
            <div className="mt-40 ml-16 ">
            <form>
                <p>
                <label >Name</label>
                </p>
                <input name="Name" className=" w-96 rounded-sm h-7 mt-1" />
                <hr className=" mb-3" />
                <p>
                <label>Email</label>
                </p>
                <input name="Email" className=" w-96 rounded-sm h-7 mt-1"  />
                <hr className=" mb-3" />
                <p>
                <label>Message</label>
                </p>
                <textarea className=" w-96 rounded-sm  h-28 mt-1"  />
                <div className=" bg-yellow-500 text-black w-40 rounded-3xl h-10 mt-2 text-center p-2 ml-32">
                <button >Send Message</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Contact;