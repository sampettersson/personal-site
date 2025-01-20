"use client";

import styled from "styled-components"
import { FontBold, FontLight } from "../Font"
import ResumeEntry from "./resume-entry"
import { motion } from "framer-motion";

const Container = styled(motion.div)`
    margin-top: 100px;
    width: 100%;
`

const Title = styled.h1`
    font-size: 38px;
    font-family: ${FontBold};
    color: #fff;
    margin-left: 30px;
    margin-bottom: 5px;
`

const Subtitle = styled.h1`
    font-size: 14px;
    font-family: ${FontLight};
    color: rgba(255, 255, 255, 0.8);
    margin-left: 30px;
    margin-right: 30px;
    max-width: 700px;
    line-height: 22px;
    word-break: auto-phrase;
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
    return <Container
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.2 }}
    >
        <Title>Work Experience</Title>
        <Subtitle>I have over 9 years of experience across fintech, insurance, and gaming. I started my career in web development, then moved to iOS, where I’ve specialized in building high-quality, consumer-facing apps with Swift. <br /> <br /> I’m focused on delivering smooth, engaging user interfaces, crafting seamless animations, and solving challenging technical problems with creative solutions.</Subtitle>
        {resumeEntries.map(resumeEntry => <ResumeEntry key={resumeEntry.company} {...resumeEntry} />)}
    </Container>
}