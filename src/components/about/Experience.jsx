 import React from "react"

const experienceContent = [
  {
    year: "April-2023 - Present",
    position: "Frontend Developer",
    compnayName: "Knoxpo",
  },
  {
    year: "Jan-2023 - April-2023",
    position: "React.js Intern",
    compnayName: "ATG (Across The Globe)",
  },
   {
    year: "2022 - 2023",
    position: "Full Stack web Development Course",
    compnayName: "Newton School (Remote)",
    details: `Completed A full stack web development course & learn -  React.JS, Mongo DB, Express, Node.JS`,
  },
  {
    year: "2020 - 2022",
    position: "Tour Coordinator",
    compnayName: "Bherwal Tourisem",
    details: `After completing my graduation, I took up my father's tourism business, and when everything came back on track, I started pursuing my dream.`,
  },
]

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  )
}

export default Experience
