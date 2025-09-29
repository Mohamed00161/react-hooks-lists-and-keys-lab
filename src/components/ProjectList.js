// src/components/ProjectList.js
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects); // test shows this log
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectList;
