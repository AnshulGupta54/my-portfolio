import React from "react";

const education = [
  {
    place: "USICT, Guru Gobind Singh Indraprastha University",
    score: "CGPA: 7.8",
    course: "BTech in Information Technology",
    year: "2019-2023",
  },
  {
    place: "Army Public School, Delhi",
    score: "89%",
    course: "XII, CBSE (PCM with C++)",
    year: "2018",
  },
  {
    place: "Army Public School, Delhi",
    score: "CGPA: 9.3",
    course: "X, CBSE",
    year: "2018",
  },
];

const Education = () => {
  return (
    <div className=" flex flex-col items-center justify-center mt-12 " >
        <h1 className=" text-5xl text-yellow-600 mb-16">
            Education
        </h1>
      <div className="flex flex-col justify-center items-center md:w-2/3 ">
        {education.map((subject) => (
          <div className=" text-white w-full h-28 md:h-36 flex flex-col justify-between  border-2 mb-2">
            <div className=" flex justify-between p-1">
              <div className=" font-bold w-2/3 md:text-3xl ">{subject.place}</div>
              <p>{subject.year} </p>
            </div>
            <div className=" flex justify-between p-1">
            <p>{subject.course}</p>
            <p>{subject.score} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
