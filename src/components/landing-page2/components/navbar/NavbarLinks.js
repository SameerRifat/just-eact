'use client'

import React, { useState } from 'react'
import styles from './navbar.module.css';
import navData from './navdata';
import Link from 'next/link';
import Language from './Language';
import { useMediaQuery } from '@mui/material';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';


const NavbarLinks = () => {
    const lgUp = useMediaQuery('(min-width: 1024px)');
    const mdUp = useMediaQuery('(min-width: 768px)');

    const [language, setLanguage] = useState('en');

    return (
        <>
            <div className={styles.nav_links}>
                {mdUp && navData.map((navLink, ind) => {
                    return (
                        <Link href={navLink.href} className={styles.nav_link} key={navLink.id}>
                            {lgUp && navLink.icon && (
                                <navLink.icon />
                            )}
                            <p>{navLink.title}</p>
                        </Link>
                    )
                })}
                {mdUp && <Language language={language} setLanguage={setLanguage} />}
                {!mdUp && (
                    <Link href='/offers'>
                        <CardGiftcardOutlinedIcon style={{color: 'rgb(243, 104, 5)'}}/>
                    </Link>
                )}
            </div>
        </>
    )
}

export default NavbarLinks