import Image from "next/image";
import Link from "next/link";
import styled from "styled-components"

const StyledNavImageContainer = styled.div`
    cursor: pointer;
`

export default function NavLogo() {
    return (
        <Link href="/">
            <StyledNavImageContainer>
                <Image 
                    src="/KMNlogo.png"
                    width={145}
                    height={52}
                />
            </StyledNavImageContainer>
        </Link>
    )
}