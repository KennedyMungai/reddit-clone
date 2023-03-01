import React from 'react'

const Layout: React.FC = () =>
{
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout