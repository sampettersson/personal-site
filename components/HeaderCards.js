import styled from "styled-components"
import IntroCard from "./IntroCard"
import MeCard from "./MeCard"

const HeaderCards = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;
`

export default () => (
    <HeaderCards>
        <IntroCard />
        <MeCard />
    </HeaderCards>
)