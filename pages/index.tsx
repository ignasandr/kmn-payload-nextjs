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
      <StyledBaselineTest>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!
        <div className="test">
          Just checking
        </div>
      </StyledBaselineTest>
    </Layout>
  )
}

const StyledBaselineTest = styled.div`
  & .test {
    color: ${props => props.theme.colors.orange};
    font-family: ${props => props.theme.fonts.title};
  }
`