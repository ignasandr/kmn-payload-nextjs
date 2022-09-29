import Image from "next/image";
import Link from "next/link";
import styled from "styled-components"

export default function Logo() {
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

const StyledNavImageContainer = styled.div`
    cursor: pointer;
`