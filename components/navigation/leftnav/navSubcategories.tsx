import styled from "styled-components"
import NavLinkSubcategory from "./navLinkSubcategory";
import { useRouter } from "next/router";

type Props = {
    open: boolean,
    subcategories: {
        label: string,
        slug: string
    }[]
}

export default function NavSubcategories ({ open, subcategories }: Props) {

    const router = useRouter();
    const queryString = router.query.toString();
    let height = subcategories.length * 40;


    return (
            <StyledSubcategories open={open} h={height}>
                <StyledSubcatagoriesMargin>
                    {
                        subcategories.map((item, index) => {
                                return (
                                    <NavLinkSubcategory
                                        key={index} 
                                        href={item.slug}
                                        selected={ item.slug === queryString ? true : false }
                                    >
                                        {item.label}
                                    </NavLinkSubcategory>
                                )
                        })
                    }
                </StyledSubcatagoriesMargin>
            </StyledSubcategories>
    )
}

const StyledSubcategories = styled.div<{ open: boolean, h: number }>`
    background: white;
    max-height: ${props => (props.open ? props.h + "px" : "0px")};
    opacity: ${props => (props.open ? "1" : "0")};
    transition: max-height 0.6s ease-in-out, opacity 0.4s ease;
    overflow: hidden;

`

const StyledSubcatagoriesMargin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-content: flex-start;
    justify-content: flex-end;
    text-align: right;
    margin: 5px 0;
`