import { useState, useEffect } from "react";

function Projects(props) {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch(props.URL + "projects");
    const data = await response.json();
    setProjects(data);
  };
  useEffect(() => getProjectsData(), []);
  const loaded = () => {
    return projects.map((project) => (
      <div className="box">
        <h1>{project.name}</h1>
        <div className="box2">
        <img className="projectImage" src={project.image} />
        <div className="box3">
        <p className="projectInfo">{project.about}</p>
        <a href={project.git}>
          <button>{project.name} Github</button>
        </a>
        <a href={project.live}>
          <button>Launch {project.name}</button>
        </a>
        </div>
        </div>
        </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;