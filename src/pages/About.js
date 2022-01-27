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
    <div className="aboutMe">
    <img alt="headshot" className="headshot" src={about.headshot} />
    <div className="hi">Hi, my name is</div>
    <div className="name">{about.name}</div>
    <div className="me">I apply <span className="simple">simple</span> solutions to <span className="complex">complex</span> problems</div>
     <div className="test">
     <div className="bio">{about.bio1}</div>
     <div className="bio">{about.bio2}</div>
      </div>
      <p>Click around and let me know what you think!</p>
    </div>
  );
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;