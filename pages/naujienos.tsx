import styled from "styled-components";
import Layout from "../components/layout";

const StyledTestTitle = styled.h1`
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.orange};
  font-weight: 400;
`

export default function Naujienos({ data }) {

  return (
      <Layout>
        <StyledTestTitle>Naujienos</StyledTestTitle>
      </Layout>
  )
}