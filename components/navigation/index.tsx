import { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import Header from "../header";
import LeftNav from "../leftnav";
import Burger from "./burger";
import NavLogo from "./navLogo";

const StyledNavigation = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 980px) {
        width: 100vw;
        margin-top: 13px;
        padding-bottom: 7px;
        border-bottom: solid 1px lightgray;
    }
`

const StyledNavLogoContainer = styled.div`

    @media (max-width: 980px) {
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

export default function Navigation() {
    const [openBurger, setOpenBurger] = useState(false);

    return (
        <>
        <StyledNavigation>
            <StyledNavLogoContainer>
                <NavLogo />
            </StyledNavLogoContainer>
            <StyledBurgerContainer>
                <Burger open={openBurger} onClick={() => setOpenBurger(!openBurger)}/>
            </StyledBurgerContainer>
        </StyledNavigation>
        </>
    )
}