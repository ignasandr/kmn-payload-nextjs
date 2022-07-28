import styled from "styled-components";
import HeaderItem from "./headerItem";
import Link from "next/link";
import Image from "next/image";

const StyledHeader = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`

const StyledHeaderContents = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 10.5px;
    padding-bottom: 8.5px;
    width: 100%;
    padding-left: 20vw;
    background-color: white;
    align-items: flex-end;

`

export default function Header() {
    return (
        <StyledHeader>
            <StyledHeaderContents>
                <HeaderItem>
                   <Link href="/en">EN</Link>
                </HeaderItem>

                <HeaderItem>
                   <Link href="/neigaliesiems">
                     <a>
                        <Image src="/svg/neigaliesiems.svg" width={19.93} height={20}/>
                     </a>
                   </Link>
                </HeaderItem>

                <HeaderItem>
                   <Link href="/svetaines-medis">
                     <a>
                        <Image src="/svg/sitemap.svg" width={28.71} height={20}/>
                     </a>
                   </Link>
                </HeaderItem>

                <HeaderItem>
                   <a href="https://www.youtube.com/watch?v=mXyuVerlXCw">
                        <Image src="/svg/gestu_kalba.svg" width={17} height={20}/>
                   </a>
                </HeaderItem>

                <HeaderItem>
                   <a href="https://kaunaspilnas.lt">KAUNAS PILNAS KULTŪROS</a>
                </HeaderItem>

                <HeaderItem>
                   <a href="https://kaunozodynas.lt">KAUNO ŽODYNAS</a>
                </HeaderItem>

                <HeaderItem>
                   <a href="https://kultura.kaunas.lt">KULTURA.KAUNAS.LT</a>
                </HeaderItem>

                <HeaderItem>
                   <Link href="/parama">1.2%</Link>
                </HeaderItem>

            </StyledHeaderContents>            
        </StyledHeader>
    )
}