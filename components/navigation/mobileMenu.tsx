import styled from "styled-components";

type MobileNavProps = {
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
    }[],
    headerItems: {
        linkType: string;
        url?: string;
        slug?: string;
        labelType: string;
        label?: string;
        iconUrl?: string;
        width?: number;
        height?: number;
        id: string;
    }[],
    open: boolean
}

const StyledMobileMenuContainer = styled.ul<{open: boolean, h: number}>`
    position: absolute;
    margin: 55px 0 0 0;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    background: #fff;
    width: 75vw;
    /* display: ${props => props.open ? "block" : "none" }; */
    display: none;
    z-index: 1;
    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 2px 5px rgba(0,0,0,.1);
    -webkit-box-shadow: 0 2px 5px rgb(0 0 0 / 10%);

    max-height: ${props => (props.open ? props.h + "px" : "0px")};
    transition: max-height 0.6s ease-in-out, opacity 0.4s ease;
    overflow: hidden;

    @media (max-width: 980px) {
        display: block;
    }
`

const StyledMobileMenuItem = styled.li<{type: string}>`
    padding-left: ${props => props.type === "collapse" ? "50px" : "0"};
    height: 50px;
`

export default function MobileMenu({navItems, headerItems, open}: MobileNavProps) {
    let navItemSubcategories = 0;

    navItems.forEach(item => {
        if (item.type === "collapse") {
            item.subcategories.forEach(subcategory => {
                navItemSubcategories += 1;
            });
        }
    });

    const height = 40 * (navItems.length + navItemSubcategories + headerItems.length);

    return(
        <StyledMobileMenuContainer open={open} h={height}>
            {navItems.map((item, index) => {
                return <StyledMobileMenuItem type={item.type} key={index}>
                            Test
                       </StyledMobileMenuItem> 
            })}
        </StyledMobileMenuContainer>
    )
}