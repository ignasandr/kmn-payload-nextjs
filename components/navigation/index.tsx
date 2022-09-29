import { useState } from "react";
import styled from "styled-components";
import Header from "./header";
import LeftNav from "./leftnav";
import Burger from "./mobile/burger";
import Logo from "../logo";
import nav from "../../data/nav.json"
import header from "../../data/header.json"
import MobileMenu from "./mobile";

export default function Navigation() {
    const [openBurger, setOpenBurger] = useState(false);

    return (
        <>
            <StyledNavigation>
                <StyledNavLogoContainer>
                    <Logo />
                </StyledNavLogoContainer>
                <StyledBurgerContainer>
                    <Burger open={openBurger} onClick={() => setOpenBurger(!openBurger)}/>
                </StyledBurgerContainer>
                <StyledLeftNavContainer>
                    <LeftNav navItems={nav.navItems} />
                </StyledLeftNavContainer>
                <Header headerItems={header.headerItems}/>
            </StyledNavigation>
            <MobileMenu navItems={nav.navItems} headerItems={header.headerItems} open={openBurger}/>
        </>
    )
}

const StyledNavigation = styled.div`
    position: fixed;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow-y: scroll;


    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    @media (max-width: 980px) {
        position: relative;
        top: 0;
        padding-top: 0;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        margin-top: 13px;
        padding-bottom: 7px;
        border-bottom: solid 1px lightgray;
    }
`

const StyledNavLogoContainer = styled.div`
    margin-right: 10px;

    @media (max-width: 980px) {
        margin-right: 0;
        margin-left: 10vw;
        max-width: 82px;

    }
`

const StyledBurgerContainer = styled.div`
    display: none;

    @media (max-width: 980px) {
        display: inline-block;
        margin-right: 10vw;
    }
`

const StyledLeftNavContainer = styled.nav`
    display: flex;
    width: 18.7vw;
    flex-direction: column;
    align-items: flex-end;
    align-content: flex-start;
    justify-content: flex-end;
    text-align: right;
    padding-top: 44px;

    @media (max-width: 980px) {
        display: none;
    }
`