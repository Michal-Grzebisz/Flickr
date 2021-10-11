import React, { useEffect, useState } from 'react'
import logo from '../../../assets/images/Logo.png'

import styles from './Navigation.module.scss'

export const Navigation: React.FC = () => {
    const [navBar, setNavbar] = useState(false)
    console.log('Render?')

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener('scroll', changeBackground)

    })
    
    
    return (

        <header className={navBar ? styles.HeaderActive : styles.Header}>
            <div className={styles.HeaderContainer}>
                <div className={styles.HeaderLogo}>
                    <a href="/">
                        <img src={logo} alt="" />
                        <span>PIXEL</span>
                    </a>
                </div>
                <a className={styles.logIn} href="/">
                    <span>
                        Log In
                    </span>
                </a>
            </div>
        </header>
    )
}