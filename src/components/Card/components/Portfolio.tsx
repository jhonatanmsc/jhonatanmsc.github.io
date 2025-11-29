interface IProjects {
    name: string
    link: string
}

interface IProps {
    projects: Array<IProjects>
}

export default function Portfolio(props: IProps) {
    return (
        <div className="main-projects">
            <h2>Projects</h2>
            <div className="project-wrapper">
                {props.projects.map((project, i) => (
                    <a rel="noopener" target="_blank"
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