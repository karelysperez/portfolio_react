import './projects.css'

const projects = [
    {
        id: "p1",
        title: "Project 1",
        description: "This is a project description",
        image: "./photo1.jpg",
        tags: ["Marketing", "Social media", "SEO"],
    },
    {
        id: "p2",
        title: "Project Title 2",
        description: "Brief description of Project 2.",
        image: "./photo2.jpg",
        tags: ["Marketing", "Social media", "SEO", "Content"],
    },
    {
        id: "p3",
        title: "Project Title 3",
        description: "Brief description of Project 3.",
        image: "./photo3.2.jpg",
        tags: ["Marketing", "Social media", "SEO", "Content"],
    },
    {
        id: "p4",
        title: "Project Title 4",
        description: "Brief description of Project 4.",
        image: "./photo4.jpg",
        tags: ["Marketing", "Social media", "SEO", "Content"],
    },
    {
        id: "p5",
        title: "Project Title 5",
        description: "Brief description of Project 5.",
        image: "./photo5.2.jpg",
        tags: ["Marketing", "Social media"],
    },

];

export const Projects = () => {
    return (
        <main className="projects-main">
            <section className="introduction">
                <h1>Projects</h1>
                <p>Here are some of my projects:</p>
            </section>

            {projects.map(project => (
                <div className="project-card" key={project.id}>
                    <img src={project.image} alt={project.title} />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="tags">
                        {project.tags.map(tag => <h3 key={tag}>{tag}</h3>)}
                    </div>
                </div>
            ))}

        </main>
    )
}