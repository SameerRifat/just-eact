'use client'

import React, { useState } from 'react'
import styles from './navbar.module.css';
import navData from './navdata';
import Link from 'next/link';
import { Avatar, useMediaQuery } from '@mui/material';
import MobileNavbarLanguages from './language/MobileNavbarLanguages';
import Languages from './language/languagesData';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';


const MobileNavbar = ({ openSidebar, setOpenSidebar }) => {
    const lgUp = useMediaQuery('(min-width: 1024px)');
    const mdUp = useMediaQuery('(min-width: 768px)');

    const [openLangues, setOpenLanguages] = useState(false)

    return (
        <>
            {!mdUp && openSidebar && (
                <>
                    <div className={styles.sidebar}>
                        <div className={styles.mobile_nav_links}>
                            {navData.map((navLink, ind) => {
                                return (
                                    <Link href={navLink.href} className={styles.mobile_nav_link} key={navLink.id}
                                        onClick={() => setOpenSidebar(false)}
                                    >

                                        <div className={styles.mobile_nav_link_icon}>
                                            {navLink.icon ? (
                                                <img src={navLink.icon} alt='icon' width={24} height={24}/>
                                            ) : (<svg></svg>)}
                                        </div>
                                        <span className={styles.mobile_nav_link_title}>
                                            {navLink.title}
                                        </span>
                                    </Link>
                                )
                            })}
                            <div className={styles.mobile_nav_link}
                                onClick={() => setOpenLanguages(true)}
                                style={{cursor: 'pointer'}}
                            >

                                <div className={styles.mobile_nav_link_icon}>
                                    <Avatar src={Languages.find(lang => lang.value === 'en')?.icon} alt='language icon' sx={{ width: 20, height: 20 }} />
                                </div>
                                <span className={styles.mobile_nav_link_title}>
                                    Select a country
                                    <KeyboardArrowRightOutlinedIcon />
                                </span>
                            </div>
                        </div>
                        {openLangues && (
                            <MobileNavbarLanguages openLangues={openLangues} setOpenLanguages={setOpenLanguages} />
                        )}
                    </div>
                </>
            )}
        </>
    )
}

export default MobileNavbar