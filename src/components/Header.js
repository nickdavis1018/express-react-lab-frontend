import { Link } from "react-router-dom";

function Header(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "flex-end",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

const links = {
    color: "white",
    padding: "5px",
    paddingLeft: "20px"
  };

  return (
    <header>
      <nav style={navStyle}>
      <div className="linksAbout">
      <a href = "mailto: nickdavis1018@gmail.com"><img alt="link-photo" className="imageLinks1" src="https://imgur.com/t2uVZlA.png"/></a>
      <a href = "https://www.linkedin.com/in/nicholas-a-davis/"><img alt="link-photo" className="imageLinks3" src="https://imgur.com/MudC5gX.png"/></a> 
      <a href = "https://github.com/nickdavis1018"><img alt="link-photo" className="imageLinks2" src="https://imgur.com/tYvqsPS.png"/></a> 
      <a href="https://drive.google.com/drive/folders/1pPoT7Sc1uTVs-dN1XlC5h9wkD4fgKw9K?usp=sharing">
          <button className="launchButton">RESUME</button>
        </a></div>
     
      </nav>
  
    </header>
  );
}

export default Header;