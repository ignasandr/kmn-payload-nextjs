import { MouseEventHandler } from "react";
import styled from "styled-components";

type BurgerProps = {
    open: boolean,
    onClick: MouseEventHandler<HTMLDivElement>
}

const StyledBurger = styled.div`
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
`

const StyledBurgerLine = styled.div<{open: boolean}>`
    width: 1.8rem;
    height: 0.20rem;
    background-color: ${props => props.theme.colors.base};
    border-radius: 10px;
    transform-origin: 1px;

    ${StyledBurger}:hover & {
        background-color: ${props => props.theme.colors.orange};
    }

    &:nth-child(1) {
        transform: ${props => props.open ? 'rotate(45deg) translate(3px, -3px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
        opacity: ${props => props.open ? '0' : '1'};
    }

    &:nth-child(3) {
        transform: ${props => props.open ? 'rotate(-45deg) translate(3px, 3px)' : 'rotate(0)'};
    }

    transition: all 0.2s ease-in;
`

export default function Burger({ open, onClick }: BurgerProps) {
    return(
        <StyledBurger onClick={onClick}>
            <StyledBurgerLine open={open}/>
            <StyledBurgerLine open={open}/>
            <StyledBurgerLine open={open}/>
        </StyledBurger>
    )
}