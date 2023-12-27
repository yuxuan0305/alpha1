import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projectsData";

function ProjectsPage() {

  const viewStyle = {
    display: "flex",
    justifyContent: "center",
  }

  const cardContainer = {
    display: "flex",
    gap: 40,
    paddingTop: 20,
    paddingBottom: 20,
    width: 620,
    marginLeft: 10,
    marginRight: 10,
    flexWrap: "wrap" as "wrap",
  }

  return (
    <div style={viewStyle}>
      <div style={cardContainer}>
        {projects.map((project, index) => (
          <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          githubUrl={project.githubUrl}/>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
