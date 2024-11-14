'use client';

import styled from "styled-components"
import { FontLight } from "./Font"

const FooterText = styled.p`
    font-size: 12px;
    font-family: ${FontLight};
    text-align: center;
    color: #fff;
    width: 100%;
`

const Link = styled.a`
    color: #fff;
`

export default () =>
    <FooterText>
        Built by Sam in Seattle with React and Next.JS, see the code <Link href="https://github.com/sampettersson/personal-site">here</Link>.
    </FooterText>