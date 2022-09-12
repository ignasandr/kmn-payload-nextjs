import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import NavLink from "./navLink";
import NavLinkCollapse from "./navLinkCollapse";
import NavSubcategories from "./navSubcategories";

type LeftNavProps = {
    navItems: {
        type: string;
        label: string;
        slug: string;
        subcategories: {
            label: string;
            slug: string;
            id: string;
        }[];
        id: string;
    }[]
}

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const StyledCollapseContainer = styled.div`

`

export default function LeftNav({navItems}: LeftNavProps) {
    const [open, setOpen] = useState(null);
    const router = useRouter();
    const path = router.pathname;

    const handleSub = (index: number) => {
        if (open !== index) {
            setOpen(index);
        } else {
            setOpen(null)
        }
    }

    return (
        <StyledUl>
                { navItems.map((item, index) => {
                    if (item.type === 'collapse') {
                    return (
                            <StyledCollapseContainer key={index}>
                                <NavLinkCollapse onClick={() => handleSub(index)}>
                                    {item.label}
                                </NavLinkCollapse>
                                <NavSubcategories
                                    subcategories={item.subcategories} 
                                    open={open === index ? true : false}
                                />
                            </StyledCollapseContainer>
                    ) 
                    } else {
                    return (
                        <NavLink
                            key={index}
                            to={item.slug}
                            selected={ item.slug === path ? true : false }
                        >
                            {item.label}
                        </NavLink>
                    ) 
                    }
                })
                }
        </StyledUl>
    )
}