import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import styled from 'styled-components';
import Navbar from "./navbar";
import Header from "./header";

type Props = {
    children?: ReactNode,
    title?: string
}

const Container = styled.div`
    margin-left: 20vw;
    margin-right: 30px;
`

const Content = styled.div`
    margin-top: 47.85px;
    margin-right: 18vw;
`

export default function Layout ({ children, title = "Kauno Menininkų Namai"}: Props ) {
    return (
        <React.Fragment>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={title} key="title" />
            </Head>
            <Header />
            <Navbar />
            <Container>
                <Content>{children}</Content>
            </Container>
        </React.Fragment>
    )
}