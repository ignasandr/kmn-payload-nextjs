import Head from "next/head";
import React, { ReactNode } from "react";
import styled from 'styled-components';
import Navigation from "../app/navbar";

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
    margin-right: 20vw;

    @media (max-width: 980px) {
       margin-left: 10vw; 
       margin-right: 10vw;
    }
`

const Content = styled.div`

    @media (max-width: 980px) {
       margin-top: 0; 
       margin-right: 0;
    }
`