interface IProjects {
    name: string
    link: string
}

interface IProps {
    title: string
    projects: Array<IProjects>
}

export default function Portfolio(props: Readonly<IProps>) {
    return (
        <div className="main-projects">
            <h2>{props.title}</h2>
            <div className="project-wrapper">
                {props.projects.map((project) => (
                    <a key={project.link} rel="noopener noreferrer" target="_blank"
                       href={project.link} onClick={(e) => {
                        e.preventDefault();
                    }}>
                        <span>{project.name}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}