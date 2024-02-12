import React, { useState } from 'react'
import styles from './navbar.module.css';
import Link from 'next/link';
import NavbarLinks from './NavbarLinks';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, useMediaQuery } from '@mui/material';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    const lgUp = useMediaQuery('(min-width: 1024px)');
    const mdUp = useMediaQuery('(min-width: 900px)');

    const [openSidebar, setOpenSidebar] = useState(false)

    return (
        <>
            <nav className={styles.navbar_container}>
                <div className={`${styles.navbar_sub_container}`}>
                    {!mdUp && (
                        <IconButton onClick={() => setOpenSidebar((prevState) => !prevState)}>
                            {openSidebar ? (<CloseIcon fontSize='medium' />) : (<MenuIcon style={{ color: 'rgb(243, 104, 5)' }} fontSize='medium' />)}
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
            <MobileNavbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        </>
    )
}

export default Navbar