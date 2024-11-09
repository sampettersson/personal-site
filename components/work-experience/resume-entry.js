import styled from "styled-components";
import { Squircle } from "@squircle-js/react";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ResumeLayout from "./resume-layout";

const Root = styled.div`
    perspective: 1000px;
    position: relative;
`;

const ResumeEntryContainer = styled(motion.div)`
    margin-bottom: 15px;
    transform-style: preserve-3d;
`;

const Container = styled(Squircle)`
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.15);
`;

export default (props) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [transformOrigin, setTransformOrigin] = useState("bottom");
    const [isInViewport, setIsInViewport] = useState(false);

    const elementRef = useRef();
    const rootRef = useRef();

    // Update dimensions on window resize
    const updateDimensions = () => {
        const newWidth = window.innerWidth - 60;
        elementRef.current.style.width = `${newWidth}px`;
        elementRef.current.style.opacity = "0";
        elementRef.current.style.position = "absolute";

        setTimeout(() => {
            setDimensions(elementRef.current.getBoundingClientRect());
        }, 30);
    };

    useLayoutEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInViewport(entry.isIntersecting)

                    if (entry.boundingClientRect.top < entry.rootBounds.height / 2) {
                        setTransformOrigin("bottom");
                    } else {
                        setTransformOrigin("top");
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (rootRef.current) {
            observer.observe(rootRef.current)
        }

        return () => {
            if (rootRef.current) {
                observer.unobserve(rootRef.current);
            }
            observer.disconnect()
        }
    }, [])

    return (
        <Root ref={rootRef}>
            <ResumeLayout contentRef={elementRef} {...props} style={{ opacity: "0" }} />
            <ResumeEntryContainer
                animate={isInViewport ? {
                    opacity: 1.0,
                    rotateX: 0,
                    scaleX: 1.0,
                    originY: transformOrigin == "top" ? 0 : 1
                } : {
                    opacity: 0.8,
                    rotateX: transformOrigin === "top" ? -70 : 70,
                    scaleX: 0.95,
                    originY: transformOrigin == "top" ? 0 : 1
                }}
                transition={{ type: "spring", stiffness: 250, damping: 30 }}
            >
                <Container
                    cornerRadius={17}
                    cornerSmoothing={1}
                    width={dimensions.width}
                    height={dimensions.height}
                >
                    <motion.div animate={{ opacity: isInViewport ? 1 : 0 }}>

                        <ResumeLayout {...props} />
                    </motion.div>
                </Container>
            </ResumeEntryContainer>
        </Root>
    )
}