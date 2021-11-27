import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { Button } from 'antd';

import styles from './Navbar.module.css'

import logo from '@/public/images/logo.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    const router = useRouter()
    const handleClick = () => {
        router.push("https://next-ts-fe.vercel.app/auth/signup")
    }
    return (
        <div>
            <nav className={styles.navbar}>
                <Link href='/'>
                    <a className={styles.navlogo}>
                        <Image alt="logo" src={logo} width="180" height="60" />
                    </a>
                </Link>
                <ul className={isOpen === false ?
                    styles.navmenu : styles.navmenu + ' ' + styles.active}>
                    <li className={styles.navitem}>
                        <Link href='/'>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href=''>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Programs</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href=''>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>About Us</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href=''>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Services</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href=''>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Work With Us</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href=''>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Apply Now</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href=''>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Contact Us</a>
                        </Link>
                    </li>

                    {/* <button className={styles.navbarButton} onClick={handleClick}>GET STARTED</button> */}
                </ul>
                <button className={isOpen === false ?
                    styles.hamburger : styles.hamburger + ' ' + styles.active}
                    onClick={openMenu}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </nav>
        </div>
    )
}
