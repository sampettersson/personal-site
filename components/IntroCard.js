import styled from "styled-components"
import { FontBold, FontRegular } from "./Font"
import { Squircle } from "@squircle-js/react"

const Shadow = styled.div`
    width: 45%;
    filter: drop-shadow(1px 0px 20.2px #000);
    clip: rect(100px, 100px, 1px, 0px);

    @media (max-width: 630px) {
        width: 100%;
    }
`

const Container = styled(Squircle)`
    background-image: url('IntroCard-Background.svg');
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    padding-left: 30px;
    padding-right: 30px;
`

const Hello = styled.div`
    font-family: '${FontRegular}';
    color: #fff;
    font-size: 90px;
    mix-blend-mode: soft-light;

    @media (max-width: 1000px) {
        font-size: 50px;
    }
`

const Name = styled.div`
    font-family: '${FontBold}';
    color: #fff;
    font-size: 90px;
    line-height: 55px;

    @media (max-width: 1000px) {
        font-size: 50px;
        line-height: 35px;
    }
`

const Occupation = styled.div`
    font-family: '${FontBold}';
    padding-top: 20px;
    mix-blend-mode: soft-light;
    color: #fff;
    font-size: 20px;
`

export default () => (
    <Shadow>
        <Container cornerRadius={22} cornerSmoothing={1}>
            <Hello>Hey!</Hello>
            <Name>I'm Sam</Name>
            <Occupation>Software Engineer based in Seattle</Occupation>
        </Container>
    </Shadow>
)