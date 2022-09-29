import React, { ReactNode } from "react"
import styled from "styled-components"

type Props = {
    children?: ReactNode,
    onClick: React.MouseEventHandler<HTMLLIElement>
}

export default function NavLinkCollapse ({ children, onClick }: Props) {
    return (
        <StyledNavLinkCollapse onClick={onClick}>
            {children}
        </StyledNavLinkCollapse>
    )
}

const StyledNavLinkCollapse = styled.li<{onClick: React.MouseEventHandler<HTMLLIElement>}>`
    position: relative;
    font-family: ${props => props.theme.fonts.base};
    padding: 0 20px 11px 0;
    cursor: pointer;
    font-weight: 400;
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    font-size: 22px;
    &:hover {
        opacity: 0.7;
    };
    transition: opacity 0.4s linear;
    &:after {
        position: absolute;
        font-size: 15px;
        font-weight: 600;
        right: 4px;
        top: 6px;
        content: "˅";
    }
    user-select: none;
`