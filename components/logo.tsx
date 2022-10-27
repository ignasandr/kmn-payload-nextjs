import Image from "next/image";
import Link from "next/link";
import styled from "styled-components"

type Props = {
    width?: number,
    height?: number
}

export default function Logo({ width = 109, height = 40 }: Props) {
    return (
        <Link href="/">
            <StyledNavImageContainer>
                <Image 
                    src="/KMNlogo.svg"
                    width={width}
                    height={height}
                />
            </StyledNavImageContainer>
        </Link>
    )
}

const StyledNavImageContainer = styled.div`
    cursor: pointer;
    
    &img {
        ${props => props.theme.colors.darkblue}
    }
`