import React from 'react'
import { Header } from '../header/header'
import { Footer } from '../footer/Footer'

function Layout({children}:any) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
