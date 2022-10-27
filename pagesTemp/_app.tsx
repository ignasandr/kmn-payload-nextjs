import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import '../styles/typography.css'

type Props = {
  theme 
}

const htmlFontSize = 16;

const baselinePX = 22;

const GlobalStyle = createGlobalStyle<Props>`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: 'Poppins', sans-serif;
      color: ${props => props.theme.colors.darkblue};
      font-size: ${htmlFontSize}px;
      line-height: ${props => props.theme.base}rem;
    }

    h1, h2, h3, h4, h5, h6 {
    }
`

const theme = {
  colors: {
    white: "#ffffff",
    gray: "#E5E5E5",
    lighterblue: "#ADB1CC",
    lightblue: "#6C739B",
    blue: "#0336FF",
    inkblue: "#111E6C",
    darkblue: "#0F1538"
  },
  breakpoints: {
    s: "576px",
    m: "980px",
  },
  base: baselinePX / htmlFontSize,
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
