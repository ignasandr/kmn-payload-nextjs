import Head from "next/head";
import React, { ReactNode } from "react";
import Navbar from "./Navigation/navbar";
import menu from "../data/nav.json"

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
            <Navbar menuItems={menu.menuItems}/>
            {children}
        </React.Fragment>
    )
}