import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import '../styles/typography.css'

type Props = {
  theme 
}

const GlobalStyle = createGlobalStyle<Props>`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: ${props => props.theme.fonts.base};
      color: ${props => props.theme.colors.base};
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: ${props => props.theme.fonts.title};
    }
`

const theme = {
  colors: {
    base: "#000",
    orange: "#D4583B"
  },
  fonts: {
    base: "Nexa",
    title: "NeueMachina"
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
