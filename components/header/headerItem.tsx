import { ReactNode } from "react"
import styled from "styled-components"

interface Props {
    children?: ReactNode;
}

const StyledHeaderItem = styled.span`
    margin-right: 19px;
    cursor: pointer;

    a {
        color: ${props => props.theme.colors.base};
        font-family: ${props => props.theme.fonts.base};
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
    }

    &:hover {
    opacity: 0.7;
    };
    transition:opacity 0.4s linear;
`

export default function HeaderItem({ children }: Props) {
    return <StyledHeaderItem>{children}</StyledHeaderItem>
}