import { Squircle } from "@squircle-js/react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { FontLight, FontMedium } from "../../Font"

const Card = styled(motion.div)`
    background-image: url('${({ imageUrl }) => imageUrl}');
    background-size: cover;
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 12px;
`

const CardTitle = styled.h4`
    color: #fff;
    font-family: ${FontMedium};
    font-size: 18px;
    margin-bottom: 2px;
`

const CardSubtitle = styled.p`
    color: rgba(255, 255, 255, 0.8);
    font-family: ${FontLight};
    font-size: 14px;
`

export default ({ project }) => (
    <Squircle cornerRadius={17} cornerSmoothing={1}>
                <Card
                key={project.name}                        
                imageUrl={project.card.image}
                >
                    <CardTitle>{project.card.title}</CardTitle>
                    <CardSubtitle>{project.card.subtitle}</CardSubtitle>
                </Card>
            </Squircle>
)