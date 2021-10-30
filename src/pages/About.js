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
    <div className="box">
      <h2>{about.name}</h2>
      <div className="box2">
      <img className="headshot" src={about.headshot} />
      <div className="linksAndInfo">
      <a href = "mailto: nickdavis1018@gmail.com"><img className="imageLinks" src="https://imgur.com/8UNVyGK.png"/></a>
      <a href = "https://github.com/nickdavis1018"><img className="imageLinks" src="https://imgur.com/J6LeoUb.png"/></a>
      <a href = "https://www.linkedin.com/in/nicholas-a-davis/"><img className="imageLinks" src="https://imgur.com/rwYRqn6.png"/></a> 
      <p>{about.bio}</p></div>
     </div>
    </div>
  );
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;