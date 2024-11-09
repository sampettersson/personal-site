'use client';

import { MeshGradientRenderer } from "@johnn-e/react-mesh-gradient";
import styled from "styled-components"

const StyledMeshGradient = styled(MeshGradientRenderer)`
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    filter: brightness(0.15);
`;

export default () => (
    <StyledMeshGradient colors={[
        "#B4D2F8", 
        "#6EA8F3", 
        "#B4D2F8", 
        "#B4D2F8", 
        "#B4D2F8"
    ]} />
)