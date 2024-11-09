import styled from "styled-components"
import ProjectList from "./project-list"

const Root = styled.div`
    margin-top: 30px;
`

const Title = styled.h4`
    color: #fff;
    margin-bottom: 10px;
`

export default ({ projects }) => {
    return <Root>
        <Title>Projects</Title>

        <ProjectList projects={projects} />
    </Root>
}