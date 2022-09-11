import Image from "next/image";
import Link from "next/link";
import styled from "styled-components"

const StyledNavLogo = styled.div`
    padding-right: 11px;
    margin-bottom: 61px;
`

const StyledNavImageContainer = styled.div`
    cursor: pointer;
`

export default function NavLogo() {
    return (
        <StyledNavLogo>
            <Link href="/">
                <StyledNavImageContainer>
                    <Image 
                        src="/KMNlogo.png"
                        width={145}
                        height={52}
                    />
                </StyledNavImageContainer>
            </Link>
        </StyledNavLogo>
    )
}