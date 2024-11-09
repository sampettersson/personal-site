import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import styled from "styled-components"

const Root = styled.div`
    display: flex;
    gap: 10px;
`

const Carousel = styled.div`
    position: relative;
    width: 150px;
    height: 200px;
`

const Card = styled(motion.div)`
    background: red;
    width: 150px;
    height: 200px;
    position: absolute;
`

export default ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState({ index: 0, direction: 0 })

    return <Root>
        <button onClick={() => setCurrentIndex({ index: currentIndex.index - 1, direction: -1 })}>previous</button>
    <Carousel>
        <AnimatePresence initial={false} custom={currentIndex.direction}>
            <Card
             key={currentIndex.index}
             custom={currentIndex.direction}
             variants={
                {
                    "incoming": (direction) => {
                        console.log(direction)
                        return ({ opacity: 0, scale: 0.0, x: -100 * direction })
                    },
                    "active": { opacity: 1, scale: 1, x: 0 },
                    "exit": (direction) => ({ opacity: 0, scale: 0.0, x: 100 * direction })
                }
             }
             initial="incoming" animate="active" exit="exit" transition={{
                duration: 1,
                ease: [0.56, 0.03, 0.12, 1.04]
              }} />
        </AnimatePresence>
    </Carousel>

    <button onClick={() => setCurrentIndex({ index: currentIndex.index + 1, direction: 1 })}>next</button>
  </Root>
}