import React from 'react'

type LayoutProps = {

}

const Layout: React.FC<LayoutProps> = () =>
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