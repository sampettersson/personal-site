import styled from "styled-components"
import { FontBold, FontLight, FontRegular } from "./Font"
import { Squircle } from "@squircle-js/react"
import { motion } from "framer-motion"
import LinkedInSvg from "./../public/linkedin.svg"
import GithubSvg from "./../public/github.svg"

const Shadow = styled.div`
    width: 45%;
    filter: drop-shadow(1px 0px 20.2px #000);
    clip: rect(100px, 100px, 1px, 0px);

    @media (max-width: 630px) {
        width: 100%;
    }
`

const Container = styled(Squircle)`
    overflow: hidden;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;

    &:before {
        content: "";
        background-image: url('IntroCard-Background.png');
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        animation: rotate-in 0.5s;
        z-index: -1;
    }

    @keyframes rotate-in {
        from {
            transform: rotateX(90deg);
        }
        to {
            transform: rotateX(0deg);
        }
    }
`

const Text = styled.div`
    height: 100%;
`

const Hello = styled(motion.div)`
    font-family: '${FontRegular}';
    color: #000;
    font-size: 90px;
    mix-blend-mode: soft-light;

    @media (max-width: 1000px) {
        font-size: 50px;
    }
`

const Name = styled(motion.div)`
    font-family: '${FontBold}';
    color: #fff;
    font-size: 90px;
    line-height: 55px;

    @media (max-width: 1000px) {
        font-size: 50px;
        line-height: 35px;
    }
`

const Occupation = styled(motion.div)`
    font-family: '${FontBold}';
    padding-top: 20px;
    mix-blend-mode: soft-light;
    color: #000;
    font-size: 20px;

    @media (max-width: 1000px) {
        padding-top: 10px;
    }
`

const Buttons = styled(motion.div)`
    display: flex;
    gap: 15px;
    mix-blend-mode: soft-light;

    @media (max-width: 630px) {
        margin-top: 20px
    }
`

const transitionDuration = "250ms"

const Button = styled(motion.a)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #000;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 17px;
    font-family: ${FontRegular};
    text-decoration: none;
    border: 1.5px solid #000;
    transition: background-color ${transitionDuration}, color ${transitionDuration}, border ${transitionDuration}, box-shadow ${transitionDuration};

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
    }

    & img {
        transition: filter ${transitionDuration};
    }

    &:hover svg {
        filter: invert(100%);
    }

    &:active {
        box-shadow: 0px 0px 0px 2px #000;
    }
`

const EmailButton = styled(Button)`
    min-width: 80px;
    text-align: center;

    @media (max-width: 1000px) {
        min-width: 0px;
    }
`

const SocialImage = styled.div`
    svg {
        width: 30px;
        height: 30px;
        display: block;
    }

    @media (max-width: 1000px) {
        svg {
            width: 15px;
            height: 15px;
        }
    }
`

export default () => (
    <Shadow>
        <Container cornerRadius={22} cornerSmoothing={1}>
            <Text>
                <Hello
                    animate={{ y: [-20, 0], opacity: [0, 1] }}
                    transition={{ delay: 0.25 }}>
                    Hey!
                </Hello>
                <Name 
                    animate={{ y: [-20, 0], opacity: [0, 1] }}
                    transition={{ delay: 0.35 }}
                >
                    I'm Sam
                </Name>
                <Occupation
                    animate={{ opacity: [0, 1] }}
                    transition={{ delay: 0.45 }}
                >
                    Software Engineer based in Seattle
                </Occupation>
            </Text>
            <Buttons
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 0.48, duration: 1.2 }}
            >
                <EmailButton href="mailto:sam@sampettersson.com">Email</EmailButton>
                <Button href="https://www.linkedin.com/in/sam-pettersson-aa8ab258/">
                    <SocialImage>
                        <LinkedInSvg />
                    </SocialImage>
                </Button>
                <Button href="https://github.com/sampettersson">
                    <SocialImage>
                        <GithubSvg />
                    </SocialImage>
                </Button>
            </Buttons>
        </Container>
    </Shadow>
)