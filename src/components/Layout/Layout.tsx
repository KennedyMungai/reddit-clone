import React from 'react'

const Layout: React.FC = ({ children }) =>
{
    return (
        <>
            {/* <Header /> */}
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
}

export default Layout