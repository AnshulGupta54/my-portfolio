const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-evenly w-full bg-black text-white mt-5">
      <div className="flex flex-col justify-center items-center ">
        <h1 className=" text-4xl mb-2 text-yellow-500 font-extrabold ">
          Contact Me
        </h1>
        <div className="font-serif w-3/4 mt-3">
          <p>
            If you have any questions or would like to colaborate. Please don't
            hesitate to contact me
          </p>
          <p className=" mb-2 mt-3">8527648062</p>
          <p className=" mb-2">New Delhi</p>
          <p>guptaanshul169@gmail.com</p>
        </div>
      </div>
      <div className=" flex justify-center md:mt-24">
        <form>
          <p>
            <label>Name</label>
          </p>
          <input name="Name" className=" w-full rounded-sm h-7 mt-1" />
          <hr className=" mb-3" />
          <p>
            <label>Email</label>
          </p>
          <input name="Email" className=" w-full rounded-sm h-7 mt-1" />
          <hr className=" mb-3" />
          <p>
            <label>Message</label>
          </p>
          <textarea className=" w-full rounded-sm  h-28 mt-1" />
          <button className=" bg-yellow-500 text-black w-40 rounded-3xl h-10 mt-2 text-center p-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
