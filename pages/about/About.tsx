import React from "react";

// hooks

// components
import { Layout } from 'components'

// utils

// types
export interface IAboutProps {

}

// primary component
export const About: React.FC<IAboutProps> = props => {
    return (
        <Layout title="About">
            <div>
                Hello!
            </div>
        </Layout>
    )
}
