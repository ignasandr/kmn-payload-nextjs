import styled from "styled-components";
import HeaderItem from "./headerItem";
import Link from "next/link";
import Image from "next/image";


type HeaderProps = {
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
    }[]
}

const StyledHeader = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

   @media (max-width: 980px) {
      display: none;
   }
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

export default function Header({headerItems}: HeaderProps) {
    return (
        <StyledHeader>
            <StyledHeaderContents>
                  { headerItems.map((item, index) => {
                     if (item.linkType === "int") {
                        return (
                           <HeaderItem key={index}>
                              <Link href={item.slug}>{
                                 item.labelType === "text" 
                                 ? item.label 
                                 :  <a>
                                       <Image 
                                             src={item.iconUrl}
                                             width={item.width}
                                             height={item.height}>
                                       </Image>
                                    </a>
                              }</Link>
                           </HeaderItem>
                        )
                     } else {
                        return (
                           <HeaderItem key={index}>
                              <a href={item.url}> {
                                    item.labelType === "text" 
                                    ? item.label 
                                    :  <Image 
                                          src={item.iconUrl}
                                          width={item.width}
                                          height={item.height}>
                                       </Image>
                                 }
                              </a>
                           </HeaderItem>
                        )
                     }
                  })}
            </StyledHeaderContents>            
        </StyledHeader>
    )
}