import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import NavLink from "./navLink";
import NavLinkCollapse from "./navLinkCollapse";
import NavSubcategories from "./navSubcategories";
import NavLogo from "./navLogo";
import data from "../../data/nav.json"

const StyledNavContainer = styled.div`
    position: fixed;
    top: 0;
    padding-top: 44px;
`

const StyledNav = styled.nav`
    display: flex;
    width: 18.7vw;
    flex-direction: column;
    align-items: flex-end;
    align-content: flex-start;
    justify-content: flex-end;
    text-align: right;
`

const StyledCollapseContainer = styled.div`

`

export default function Navbar() {
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
            <StyledNavContainer>
                <StyledNav>
                    <NavLogo />
                        { navItems.map((item, index) => {
                            if (item.type === 'collapse') {
                            return (
                                    <StyledCollapseContainer
                                        key={index} 
                                    >
                                        <NavLinkCollapse
                                            onClick={() => handleSub(index)}
                                        >
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
                </StyledNav>
            </StyledNavContainer>
        )
}