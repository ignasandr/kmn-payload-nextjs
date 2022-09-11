import styled from "styled-components"
import Link from "next/link";
import { ReactNode } from "react";

type NavLinkSubcategoryProps = {
    children?: ReactNode,
    href: string,
    selected: boolean
}

const StyledNavLinkSubcategory = styled.div<{ selected: boolean }>`
    font-family: ${props => props.theme.fonts.base};
    padding: 0 20px 11px 0;
    cursor: pointer;
    font-weight: 400;
    text-decoration: none;
    color: ${(props) => {
                return props.selected ? props.theme.colors.orange : props.theme.colors.base
            }};
    font-size: 20px;
    &:hover {
        opacity: 0.7;
    };
    transition: opacity 0.4s linear;
`

export default function NavLinkSubcategory ({children, href, selected}: NavLinkSubcategoryProps) { 
    return (
        <Link href={href}>
            <StyledNavLinkSubcategory
                selected={selected}
            >
                {children}
            </StyledNavLinkSubcategory>
        </Link>
    )
}