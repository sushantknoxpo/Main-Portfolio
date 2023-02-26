const personalInfoContent = [
  { meta: "first name", metaInfo: "Sushant" },
  { meta: "last name", metaInfo: "Bherwal" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "phone", metaInfo: "+91- 8278735627" },
  { meta: "Hours / Week", metaInfo: "30+" },
  { meta: "Email", metaInfo: "sushantbharwal@gmail.com" },
  { meta: "langages", metaInfo: "English, Hindi, Punjabi" },
]

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default PersonalInfo
