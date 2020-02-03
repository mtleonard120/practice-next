import React from "react";
import Head from 'next/head'

// packages

// hooks

// components
import { Nav } from "components";

// utils

// types
export interface ILayoutProps {
    title: string
    
}

// primary component
export const Layout: React.FC<ILayoutProps> = ({children, title}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />

            {children}
        </div>
    )
}