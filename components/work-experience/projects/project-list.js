import styled from "styled-components"
import ProjectCard from "./project-card"

const List = styled.div`
    display: flex;
    gap: 10px;
`

export default ({ projects }) => (
     <List>
    {
        projects.map(project => (
            <ProjectCard project={project} />
        ))
    }
</List>
)