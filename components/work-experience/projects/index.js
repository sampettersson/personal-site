import styled from "styled-components"
import ProjectList from "./project-list"

const Root = styled.div`
    margin-top: 10px;
`

const Title = styled.h4`
    color: #fff;
    margin-bottom: 10px;
`

export default ({ projects }) => {
    if (projects.length == 0) {
        return null
    }

    return <Root>
        <Title>Projects</Title>
        <ProjectList projects={projects} />
    </Root>
}