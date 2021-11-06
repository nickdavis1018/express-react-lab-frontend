import { useState, useEffect } from "react";

function About(props) {
  const [about, setAbout] = useState(null);
  const getAboutData = async () => {
    const response = await fetch(props.URL + "about");
    const data = await response.json();

    setAbout(data);
  };

  useEffect(() => getAboutData(), []);
  const loaded = () => (
    <div className="aboutBox">
      <h2>{about.name}</h2>
      <div className="aboutBox2">
      <img alt="personal-photo" className="headshot" src={about.headshot} />
      <div className="linksAndInfo">
      <p className="projectInfo">{about.bio}</p>
      <div className="linksAbout">
      <a href = "mailto: nickdavis1018@gmail.com"><img alt="link-photo" className="imageLinks" src="https://imgur.com/8UNVyGK.png"/></a>
      <a href = "https://github.com/nickdavis1018"><img alt="link-photo" className="imageLinks" src="https://imgur.com/TRBV2Ii.png"/></a>
      <a href = "https://www.linkedin.com/in/nicholas-a-davis/"><img alt="link-photo" className="imageLinks" src="https://imgur.com/rwYRqn6.png"/></a>  </div>
      </div>
     </div>
    </div>
  );
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;