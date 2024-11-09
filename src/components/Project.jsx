function Project(){
    const projects = [
        {
          title: "Project 1",
          description: "Description 1",
          link:"https://www.google.com"
        },
        {
          title: "Project 2",
          description: "Description 2",
          link:"https://www.google.com"
        }
      ]
    return(
        <section id='projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((project , index) => (
            <div className='project-item' key={index}>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link}>View project</a>
              </div>
          ))}
        </div>
      </section>
    );
}

export default Project