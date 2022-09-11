import styled from "styled-components";
import Layout from "../components/layout";

const StyledTestTitle = styled.h1`
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.orange};
  font-weight: 400;
`

export default function Infocentras({ data }) {

  return (
      <Layout>
        <StyledTestTitle>Kultūros Infocentras</StyledTestTitle>
      </Layout>
  )
}