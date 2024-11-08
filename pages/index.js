import styled from "styled-components"
import Head from "next/head"
import { FontSetup } from "../components/Font"
import HeaderCards from "../components/HeaderCards"

const Content = styled.div`
  padding: 32px;
`

export default () => (
  <Content>
  <Head>
    <title>Sam Pettersson</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <FontSetup />
  <style jsx global>{`
        body {
          background-color: #000;
          font-family: 'HostGrotesk-Medium', sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;  
        }

        body:before {
          content: "";
          position: fixed;
          width: 100%;
          height: 100%;
          left: 50%;
          right: 50%;
          margin-left: -50%;
          mergin-top: -50%;
          z-index: -1;
          background-size: cover;
          background-attachment: fixed;
          background-image: url('IntroCard-Background.svg');
          animation-duration: 1.2s;
          corner-radius: 30px;
          overflow: hidden;
          animation-fill-mode: forwards;
          animation-name: animate-background;
          animation-iteration-count: 1;
          animation-timing-function: ease-in-out;
        }

        @keyframes animate-background {
          from {
            width: 0%;
            height: 0%;
            filter: blur(300px) brightness(0.2) hue-rotate(180deg);
          }
          to {
            width: 100%;
            height: 100%;
            filter: blur(300px) brightness(0.2) hue-rotate(0deg);
          }
        }

        * {
          margin: 0;
          padding: 0;
        }
      `}</style>
  <div>
    <HeaderCards />
  </div>
  </Content>
)
