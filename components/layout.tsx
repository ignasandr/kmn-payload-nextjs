import Head from "next/head";
import React, { ReactNode } from "react";
import styled from 'styled-components';
import Navigation from "./navigation";

type Props = {
    children?: ReactNode,
    title?: string
}

export default function Layout ({ children, title = "Kauno Menininkų Namai"}: Props ) {
    return (
        <React.Fragment>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={title} key="title" />
            </Head>
            <Navigation />
            <Container>
                <Content>{children}</Content>
            </Container>
        </React.Fragment>
    )
}

const Container = styled.div`
    margin-left: 20vw;
    margin-right: 30px;

    @media (max-width: 980px) {
       margin-left: 10vw; 
       margin-right: 10vw;
    }
`

const Content = styled.div`
    font-family: ${props => props.theme.fonts.base};
    margin-top: 47.85px;
    margin-right: 18vw;

    @media (max-width: 980px) {
       margin-top: 0; 
       margin-right: 0;
    }
`