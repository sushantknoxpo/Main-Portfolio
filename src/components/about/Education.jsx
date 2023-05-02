import React from "react"

const educationContent = [
  {
    year: "2017 - 2020",
    degree: "BACHELOR DEGREE",
    institute: "MAHARANA PARTAP GOVT. COLLEGE AMB (Affliated by H.P.U)",
    details: `Completed my bachelor degree in Computer Applications From H.P.U`,
  },
   {
    year: "2015-2017",
    degree: "Senior Secondary",
    institute: "Govt. Sen. Sec. School Diara (Himachal Pardesh State Board)",
    details: `Non-Medical`,
  },
]

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  )
}

export default Education
