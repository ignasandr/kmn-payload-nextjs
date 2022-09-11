import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledTestTitle = styled.h1`
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.orange};
  font-weight: 400;
`

const StyledTestText = styled.p`
  font-family: ${props => props.theme.fonts.base};
  color: ${props => props.theme.colors.base};
  font-size: 20px;
`

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>KMN Svetainė</title>
        <meta name="description" content="Pagrindinis puslapis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledTestTitle>Hello</StyledTestTitle>
      <StyledTestText>World</StyledTestText>
      {/* <Examples /> */}
      {/* <FilmList /> */}
    </Layout>
  )
}