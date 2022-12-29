import React from 'react'
import Link from 'next/link'
import Styles from './header.module.css'

export function Header() {
    return (
        <div className={Styles.MainCont}>
            <div className={Styles.navcontainer}>
                <div className={Styles.header}>
                    <div>
                        <Link href="/">
                           <img className={Styles.logo} src='/ss.png' alt='logo-icon'/>
                        </Link>
                    </div>
                </div>
                <div className={Styles.ulContainer}>
                    <div className={Styles.uul}>
                    <ul className={Styles.ulstyle}>
                        <li className={Styles.listStyle}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={Styles.listStyle}>
                            <Link href="/project">Projects</Link>
                        </li>
                        <li className={Styles.listStyle}>
                            <Link href="/blogs">Blogs</Link>
                        </li>
                    </ul>
                    </div>
                   
                </div>

            </div>
        </div>
    )
}


