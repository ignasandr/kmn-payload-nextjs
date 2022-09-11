import styled from "styled-components"
import { ReactNode } from "react";

type PageTitleProps = {
    children?: ReactNode,
}

const StyledTestTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.base};
    font-weight: 400;
    font-size: 31px;


    @media (max-width: 980px) {
        font-size: 28px;
    }
`

export default function PageTitle ({children}: PageTitleProps) {
    return (
        <StyledTestTitle>{children}</StyledTestTitle>
    )
}