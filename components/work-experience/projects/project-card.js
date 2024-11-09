import { Squircle } from "@squircle-js/react"
import { AnimatePresence, motion } from "framer-motion"
import styled from "styled-components"
import { FontLight, FontMedium } from "../../Font"
import { useState } from "react"

const Card = styled(motion.div)`
    background-image: url('${({ $imageUrl }) => $imageUrl}');
    background-size: cover;
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 12px;
    cursor: pointer; 
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

const Modal = styled.div`
    position: fixed;
    top: 0;
`

export default ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div>
            <Squircle cornerRadius={17} cornerSmoothing={1}>
                <Card
                    key={project.name}
                    $imageUrl={project.card.image}
                    layoutId={project.name}
                    onClick={() => {
                        setIsExpanded(true)
                    }}
                >
                    <CardTitle>{project.card.title}</CardTitle>
                    <CardSubtitle>{project.card.subtitle}</CardSubtitle>
                </Card>
            </Squircle>
            <Modal>
            <AnimatePresence>
                {isExpanded && <Card
                    key={project.name}
                    $imageUrl={project.card.image}
                    layoutId={project.name}
                    onClick={() => {
                        setIsExpanded(true)
                    }}
                >
                    <CardTitle>{project.card.title}</CardTitle>
                    <CardSubtitle>{project.card.subtitle}</CardSubtitle>
                </Card>}
            </AnimatePresence>
            </Modal>
            
        </div>
    )
}