import Image from "next/image";
import Link from "next/link";
import styled from "styled-components"

type Props = {
    width?: number,
    height?: number
}

export default function Logo({ width = 145, height = 52 }: Props) {
    return (
        <Link href="/">
            <StyledNavImageContainer>
                <Image 
                    src="/KMNlogo.png"
                    width={width}
                    height={height}
                />
            </StyledNavImageContainer>
        </Link>
    )
}

const StyledNavImageContainer = styled.div`
    cursor: pointer;
`