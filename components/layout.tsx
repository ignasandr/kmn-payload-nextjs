import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "./Nav/header";
import menu from "../data/nav.json"
import styles from './styles.module.css'

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
            <Header menuItems={menu.menuItems}/>
            <div className={styles.grid}>
                <div className={styles.container}>
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}