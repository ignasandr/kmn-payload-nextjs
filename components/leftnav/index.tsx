import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import NavLink from "./navLink";
import NavLinkCollapse from "./navLinkCollapse";
import NavSubcategories from "./navSubcategories";
import data from "../../data/nav.json"

const StyledLeftNavContainer = styled.div`
    position: fixed;
    top: 113px;
    padding-top: 44px;
`

const StyledLeftNav = styled.nav`
    display: flex;
    width: 18.7vw;
    flex-direction: column;
    align-items: flex-end;
    align-content: flex-start;
    justify-content: flex-end;
    text-align: right;
`

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const StyledCollapseContainer = styled.div`

`

export default function LeftNav() {
    const navItems = data.navItems;

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
        <StyledLeftNavContainer>
            <StyledLeftNav>
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
            </StyledLeftNav>
        </StyledLeftNavContainer>
    )
}