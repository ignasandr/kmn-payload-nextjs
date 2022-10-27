import styled from "styled-components";
import { useState } from "react";
import Logo from "../logo";

export default function Navigation() {
    const [openBurger, setOpenBurger] = useState(false);

    return (
        <StyledNavContainer>
            <Logo />
            <StyledHeaderContainer>
                <StyledMenuContainer>
                   <li>Vienas</li> 
                   <li>Du</li> 
                   <li>Trys</li> 
                   <li>Keturi</li> 
                   <li>Penki</li> 
                   <li>Šeši</li> 
                </StyledMenuContainer>
                <StyledAccesibilityContainer>
                   <li>Vienas</li> 
                   <li>Du</li> 
                   <li>Trys</li> 
                </StyledAccesibilityContainer>
            </StyledHeaderContainer>            
        </StyledNavContainer>
    )
}

const StyledNavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 22px;
    gap: 28px;
    height: 55px;
`

const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`

const StyledMenuContainer = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0; 

    display: flex;
    flex-direction: row;
    gap: 5px;

    
`

const StyledAccesibilityContainer = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0; 
`
