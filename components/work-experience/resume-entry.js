import styled from "styled-components"
import { Squircle } from "@squircle-js/react"
import { motion, useScroll } from "framer-motion"
import { useLayoutEffect, useRef, useState } from "react"
import ResumeLayout from "./resume-layout"

const Root = styled.div`
    perspective: 1000px;
    position: relative;
`

const ResumeEntryContainer = styled(motion.div)`
    margin-bottom: 15px;
    transform-style: preserve-3d;
    transform-origin: top;
`

const Container = styled(Squircle)`
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.15);
`

export default (props) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const elementRef = useRef()
    const rootRef = useRef()

    const updateDimensions = () => {
        const newWidth = window.innerWidth - 60
        elementRef.current.style.width = `${newWidth}px`
        elementRef.current.style.opacity = "0"
        elementRef.current.style.position = "absolute"

        setTimeout(() => {
            const newHeight = elementRef.current.getBoundingClientRect().height
            setDimensions({ width: newWidth, height: newHeight })
        }, 30)        
    };

    useLayoutEffect(() => {
        updateDimensions();

        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, []);

    return <Root ref={rootRef}>
        <ResumeLayout contentRef={elementRef} {...props} style={{ opacity: "0" }} />
        <ResumeEntryContainer
            initial={{ opacity: 0.8, rotateX: -70, scaleX: 0.95 }}
            whileInView={{ opacity: 1, rotateX: 0, scaleX: 1 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            viewport={{ margin: "-30px", amount: "some", ref: rootRef }}
        >
            <Container cornerRadius={17} cornerSmoothing={1} width={dimensions.width} height={dimensions.height}>
                <ResumeLayout {...props} />
            </Container>
        </ResumeEntryContainer>
    </Root>
}
