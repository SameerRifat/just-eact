import React from 'react'
import styles from './navbar.module.css';
import Link from 'next/link';
import NavbarLinks from './NavbarLinks';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, useMediaQuery } from '@mui/material';

const Navbar = () => {
    const lgUp = useMediaQuery('(min-width: 1024px)');
    const mdUp = useMediaQuery('(min-width: 768px)');

    return (
        <nav className={styles.navbar_container}>
            <div className={styles.navbar_sub_container}>
                {!mdUp && (
                    <IconButton>
                        <MenuIcon style={{ color: 'rgb(243, 104, 5)' }} fontSize='medium'/>
                    </IconButton>
                )}
                <div className={styles.logo}>
                    <Link href='/' style={{ color: 'rgb(243, 104, 5)', fontSize: '20px', fontWeight: 600 }}>
                        Logo
                    </Link>
                </div>
                <NavbarLinks />
            </div>
        </nav>
    )
}

export default Navbar