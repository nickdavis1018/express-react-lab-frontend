import { Link } from "react-router-dom";

function Header(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
        <div className="top">
        <Link to="/">
        <h1>Nicholas Davis Development Portfolio</h1>
        </Link>
      <nav style={navStyle}>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
      </div>
      <div className="borderTop"></div>
    </header>
  );
}

export default Header;