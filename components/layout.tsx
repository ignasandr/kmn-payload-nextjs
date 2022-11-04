import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "./Navigation/header";

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
            <Header />
            {children}
        </React.Fragment>
    )
}