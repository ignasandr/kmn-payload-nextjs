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

const Layout = ({ children, title = "Kauno Menininkų Namai"}: Props ) => {
    // const [navItems, setNavItems] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await fetch("http://localhost:3000/api/globals/navbar")
    //         .then(response => response.json())
    //         .then(data => setNavItems(data.navItems))
    //         .catch(console.error);
    //     }

    //     fetchData();
    // })

    return (
        <React.Fragment>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={title} key="title" />
            </Head>
            <Header />
            <Container>
                <Content>{children}</Content>
            </Container>
            <Navbar />
        </React.Fragment>
    )
}

export default Layout