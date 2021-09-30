import React from 'react'
import Link from 'next/link'

import Styles from './Footer.module.css'

export function Footer() {
    return (
        <div className={Styles.MainContainer}>
            <div className={Styles.FooterContainer}>
                <div className={Styles.footerHead}>
                    <h3>
                        social media presence
                    </h3>
                </div>

                <div className={Styles.ulContainer}>
                    <ul className={Styles.ulstyle}>
                        <li className={Styles.listStyle}>
                            <Link href="/github">github</Link>
                        </li>
                        <li className={Styles.listStyle}>
                            <Link href="/linkedin">linkedin</Link>
                        </li>
                        <li className={Styles.listStyle}>
                            <Link href="/twitter">twitter</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

