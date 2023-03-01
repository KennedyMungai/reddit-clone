import React, { ReactNode } from 'react'
import NavBar from '../NavBar/NavBar'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) =>
{
    return (
        <>
            <NavBar />
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
}

export default Layout