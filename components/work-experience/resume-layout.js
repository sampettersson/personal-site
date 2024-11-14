import styled from "styled-components"
import { FontBold, FontExtraBold, FontLight, FontMedium } from "../Font"
import Projects from "./projects"

const Content = styled.div`
    padding: 20px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 20px;
`

const Company = styled.h1`
    font-size: 30px;
    font-family: ${FontExtraBold};
    color: #fff;
    margin-top: -8px;
`

const CompanySummary = styled.p`
    font-size: 12px;
    font-family: ${FontLight};
    color: rgba(255, 255, 255, 0.6);
    max-width: 500px;
`

const TitleName = styled.h3`
    font-size: 17px;
    font-family: ${FontMedium};
    color: #fff;
    margin-bottom: 3px;
`

const TitleDuration = styled.span`
    font-size: 12px;
    font-family: ${FontLight};
    color: rgba(255, 255, 255, 0.6);
    padding-bottom: 8px;
`

const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    ${props => props.showBorder ? `
        border-bottom: 0.5px solid #fff;
        margin-bottom: 5px;
    ` : ""}
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;    
`

const Titles = styled.div`
    text-align: right;
`

export default ({ company, companySummary, titles, projects, style, contentRef }) => (
    <Content style={style} ref={contentRef}>
        <Row>
            <div>
                <Company>{company}</Company>
                <CompanySummary>{companySummary}</CompanySummary>
                <Projects projects={projects ?? []} />
            </div>
            <Titles>
                {titles.map(title =>
                    <Column key={title.name}>
                        <TitleName>
                            {title.name}
                        </TitleName>
                        <TitleDuration>
                            {title.from} - {title.to}
                        </TitleDuration>
                    </Column>
                )}
            </Titles>
        </Row>
    </Content>
)