import { Squircle } from "@squircle-js/react"
import styled from "styled-components"

const Shadow = styled.div`
    width: 55%;
    filter: drop-shadow(1px 0px 20.2px #000);
    margin-left: 20px;

    @media (max-width: 630px) {
        display: none;
    }
`

const Card = styled(Squircle)`
    background-image: url('me.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
    height: 350px;
    width: 100%;
    background-position: center;
`

export default () => (
    <Shadow>
            <Card cornerRadius={22} cornerSmoothing={1} />
    </Shadow>
)