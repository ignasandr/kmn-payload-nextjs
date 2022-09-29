import styled from "styled-components"
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode,
    href: string,
    selected: boolean
}

export default function NavLinkSubcategory ({children, href, selected}: Props) { 
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

const StyledNavLinkSubcategory = styled.div<{ selected: boolean }>`
    padding: 0 20px 6px 0;
    cursor: pointer;
    font-weight: 400;
    text-decoration: none;
    color: ${(props) => {
                return props.selected ? props.theme.colors.orange : props.theme.colors.base
            }};
    font-size: 18px;
    &:hover {
        opacity: 0.7;
    };
    transition: opacity 0.4s linear;
`