import styled, { keyframes } from "styled-components"
import Head from "next/head"
import easings from "easings"

const Spacing = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

const fadeInTransform = keyframes`
  from {
    opacity: 0;
    transform: translateY(-25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const ContentContainer = styled.div`
  background-color: #2FBB84;
  padding: 40px;
  color: #374280;
  opacity: 0;
  animation: ${fadeInTransform} 400ms 500ms ${easings('var(ease-in-cubic)')} forwards;
  width: 100%;
  max-width: 350px;
`

const Me = styled.img`
  width: 300px;
  height: 400px;
  position: fixed;
  margin-left: 250px;
  margin-top: -145px;
  opacity: 0;
  animation: ${fadeIn} 800ms 500ms ${easings('var(ease-in-quint)')} forwards;

  @media (max-width: 500px) {
    margin-left: 150px;
  }
`

const Link = styled.a`
  color: #374280;
  text-decoration: none;
  border-bottom: 2px solid #374280;
  padding-bottom: 2px;
`

export default () => (
  <Content>
  <Head>
    <title>Sam Pettersson</title>
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <style jsx global>{`
        body {
          background-color: #EC6E74;
          font-family: 'IBM Plex Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        * {
          margin: 0;
          padding: 0;
        }
      `}</style>
  <Me src="/static/me.jpg" />
  <ContentContainer>
    <h1>Sam Pettersson</h1>
    <Spacing height={10} />
    <Link href="mailto:sam@sampettersson.com">sam@sampettersson.com</Link>
  </ContentContainer>
  </Content>
)
