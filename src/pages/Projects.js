import { useState, useEffect } from "react";

function Projects(props) {

  const [projects, setProjects] = useState(null);

  const [search, setSearch] = useState("")

  const getProjectsData = async () => {
    const response = await fetch(props.URL + "projects");
    const data = await response.json();
    setProjects(data);
  };
  useEffect(() => getProjectsData(), []);
  const loaded = () => {
    return <div className="allprojects"> 
    <div className="border"></div>
    <div className="projectSearch">
    <h2 className="titleProj">My Projects</h2>
    <input className="searchBar" placeholder="Browse by name..." onChange={event => setSearch(event.target.value)} /></div>
    {projects.filter(foundProject => {
    if (search === "") {
      return foundProject;
    } else if (foundProject.name.toLowerCase().includes(search.toLowerCase())) {
      return foundProject
    }
  }).map((project, index) => (
      <div key={index} className="box">
        <div className="box2">
        <img className="projectImage" alt="project" src={project.image} />
        <div className="box3">
        <div className="project">{project.name}</div>
        <div className="projectInfo">{project.about}</div>
        <div className="box4">
        <a className="projLink" href={project.git}>
          <img className="imageLinks4" src="https://imgur.com/tYvqsPS.png"/>
        </a>
        <a className="buttonLink" href={project.live}>
          <button className="launchButton2">Launch</button>
        </a></div>
        </div>
        </div>
        </div>
    ))}</div>;
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;