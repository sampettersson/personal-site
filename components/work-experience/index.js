import styled from "styled-components"
import { FontBold } from "../Font"
import ResumeEntry from "./resume-entry"
import { useRef } from "react"

const Container = styled.div`
    margin-top: 30px;
    width: 100%;
`

const Title = styled.h1`
    font-size: 30px;
    font-family: ${FontBold};
    color: #fff;
    margin-left: 30px;
    text-shadow: rgba(255, 255, 255, 0.15) 4px 0 20px;
    margin-bottom: 30px;
`

const resumeEntries = [
    {
        company: "GeoGuessr",
        companySummary: `
            Game Studio behind GeoGuessr, a geography-based game with over 50 million registered players worldwide, offering a unique experience that challenges users to recognize global locations and navigate diverse environments.
        `,
        titles: [
            {
                name: "Senior Software Engineer - iOS",
                from: "May 2023",
                to: "Sep 2024"
            }
        ],
        projects: [
            {
                name: "Meta Layer",
                card: {
                    image: "projects/meta-layer/card.png",
                    title: "3D Rendering",
                    subtitle: "Using Rust on iOS and Android"
                }
            }
        ]
    },
    {
        company: "Hedvig",
        companySummary: `
            A digital neo-insurance startup that provides modern app-focused property and casualty insurance for consumers in the nordic market.
        `,
        titles: [
            {
                name: "Staff Engineer",
                from: "Nov 2022",
                to: "May 2023"
            },
            {
                name: "Senior Software Engineer - iOS",
                from: "May 2022",
                to: "Nov 2022"
            },
            {
                name: "iOS Developer",
                from: "Aug 2018",
                to: "May 2022"
            }
        ]
    },
    {
        company: "Zettle by PayPal",
        companySummary: `
            Fintech company providing point of sale and card payment solutions to small to mid-sized merchants. Acquired by PayPal in 2018.
        `,
        titles: [
            {
                name: "Web Developer",
                from: "Oct 2016",
                to: "July 2018"
            }
        ]
    },
    {
        company: "Strateg Agency",
        companySummary: `
            Marketing agency building websites for leading Swedish companies within industries like news, entertainment, industrial and construction.
        `,
        titles: [
            {
                name: "Web Developer",
                from: "May 2015",
                to: "Aug 2016s"
            }
        ]
    }
]

export default () => {
    const scrollRef = useRef()

    return <Container ref={scrollRef}>
        <Title>Work Experience</Title>
        {resumeEntries.map(resumeEntry => <ResumeEntry key={resumeEntry.company} scrollRef={scrollRef} {...resumeEntry} />)}
    </Container>
}