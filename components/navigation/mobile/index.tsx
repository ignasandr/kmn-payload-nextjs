import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

type Props = {
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


export default function MobileMenu({navItems, headerItems, open}: Props) {
    let navItemSubcategories = 0;
    // get total number of subcategories for height calculation
    navItems.forEach(item => {
        if (item.type === "collapse") {
            navItemSubcategories += item.subcategories.length
        }
    });
    // calculate height for animated max-height
    const height = 40 * (navItems.length + navItemSubcategories + headerItems.length);

    return(
        <StyledMobileMenuContainer open={open} h={height}>
            <>
                {navItems.map((item, index) => {
                    if(item.type === "collapse") {
                        return <>
                                    <StyledMobileMenuItemContainer type={item.type} key={index}>
                                            <StyledMobileMenuItem sub={false}>{item.label}</StyledMobileMenuItem>
                                    </StyledMobileMenuItemContainer> 
                                    {item.subcategories.map((subcategory, index) => {
                                        return <Link href={subcategory.slug}>
                                                    <StyledMobileMenuItemContainer type="subcategory" key={index}>
                                                                <StyledMobileMenuItem sub={true}>
                                                                        {subcategory.label}
                                                                </StyledMobileMenuItem>
                                                    </StyledMobileMenuItemContainer>
                                                </Link>
                                    })}
                                </>

                    } else {
                        return <Link href={item.slug}>
                                    <StyledMobileMenuItemContainer type={item.type} key={index}>
                                        <StyledMobileMenuItem sub={false}>{item.label}</StyledMobileMenuItem>
                                    </StyledMobileMenuItemContainer> 
                                </Link>
                        }
                })}
                {
                    headerItems.map((item, index) => {
                     if (item.linkType === "int") {
                        return (
                                <StyledMobileMenuItemContainer type={item.linkType} key={index}>
                                    <Link href={item.slug}>
                                        <StyledMobileMenuItem sub={false}>
                                            {
                                                item.labelType === "text" 
                                                ? item.label 
                                                : <a>
                                                    <Image 
                                                            src={item.iconUrl}
                                                            width={item.width}
                                                            height={item.height}>
                                                    </Image>
                                                </a>
                                            }
                                        </StyledMobileMenuItem>
                                    </Link>
                                </StyledMobileMenuItemContainer>
                        )
                     } else {
                        return (
                                <StyledMobileMenuItemContainer type={item.linkType} key={index}>
                                        <StyledMobileMenuItem sub={false}>
                                            <a href={item.url}>
                                        {
                                                item.labelType === "text" 
                                                ? item.label
                                                :  <Image 
                                                    src={item.iconUrl}
                                                    width={item.width}
                                                    height={item.height}>
                                                </Image>
                                        }
                                            </a>
                                        </StyledMobileMenuItem>
                                </StyledMobileMenuItemContainer>
                        )
                     }
                    })
                }
            </>
        </StyledMobileMenuContainer>
    )
}

const StyledMobileMenuContainer = styled.ul<{open: boolean, h: number}>`
    position: absolute;
    margin: 54px 0 0 0;
    padding: 0;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    background: #fff;
    width: 80vw;
    list-style-type: none;
    display: none;
    z-index: 1;
    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 2px 5px rgba(0,0,0,.1);
    -webkit-box-shadow: 0 2px 5px rgb(0 0 0 / 10%);

    max-height: ${props => (props.open ? props.h + "px" : "0px")};
    transition: max-height 0.6s ease-in-out;
    overflow: hidden;

    @media (max-width: 980px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const StyledMobileMenuItemContainer = styled.li<{type: string}>`
    background-color: ${props => props.type === "collapse" ? "#F8F8F8" : "#fff"};
    min-height: 40px;
    user-select: none;
    cursor: ${props => props.type === "collapse" ? " " : "pointer"};
    border-bottom: 1px solid rgba(0,0,0,.03);
    margin: 0;
    width: 90%;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #F8F8F8;
    }
`

const StyledMobileMenuItem = styled.div<{sub: boolean}>`
    font-family: ${props => props.theme.fonts.base};
    color: ${props => props.theme.colors.base};
    font-size: 14px;
    font-weight: bold;
    margin-left: ${props => props.sub ? "60px" : "30px"};

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.base};
    }
`