import styled from "styled-components";
import Layout from "../components/layout";

export default function Naujienos() {
  return (
      <Layout>
        <h1>Naujienos</h1>
        <StyledNewsContainer>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
          <StyledNewsItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem sunt iusto fugiat! Quibusdam ab nesciunt hic corrupti sapiente mollitia quod in, eius labore possimus quasi expedita alias commodi cupiditate!</StyledNewsItem>
        </StyledNewsContainer>
      </Layout>
  )
}

const StyledNewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledNewsItem = styled.p`
  width: 29%;

  @media (max-width: 980px) {
      width: 48%;
  }

  @media (max-width: 768px) {
      width: 100%;
  }
`