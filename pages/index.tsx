import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/layout'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>KMN Svetainė</title>
        <meta name="description" content="Pagrindinis puslapis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello</h1>
      <p>World</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</p>
      {/* <Examples /> */}
      {/* <FilmList /> */}
    </Layout>
  )
}

const StyledTestText = styled.p`
  font-family: ${props => props.theme.fonts.base};
  color: ${props => props.theme.colors.base};
  font-size: 20px;
`