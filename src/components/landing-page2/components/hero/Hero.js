import React from 'react'
import styles from './hero.module.css';
import Image from 'next/image';
import { TextField, useMediaQuery } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Hero = () => {
    const lgUp = useMediaQuery('(min-width: 1024px)');
    const mdUp = useMediaQuery('(min-width: 640px)');

    return (
        <div className={styles.hero_container}>
            <div className={styles.hero_img_container}>
                <Image
                    src='/landing-page/hero-img.jpg'
                    alt='popular hotel'
                    fill
                    className={styles.hero_img}
                    quality={95}
                    priority
                />
            </div>
            <div className={styles.search_card}>
                <h1 className={styles.search_title}>
                    Tuck into a takeaway today
                </h1>
                <h2 className={styles.search_sub_title}>Find restaurants delivering right now, near you</h2>
                <form className={styles.form}>
                    <div className={styles.form_search_wrapper}>
                        <div className={styles.search_field_wrapper}>
                            <TextField
                                label="Enter your postcode"
                                type="search"
                                className={`${styles.search_field} ${styles.no_border_outline}`}
                                size='small'
                                InputProps={{
                                    classes: {
                                        notchedOutline: styles.no_border_outline,
                                    },
                                }}
                                sx={{
                                    '& label': {
                                        color: '#425457'
                                    },
                                    '& label.Mui-focused': {
                                        color: 'inherit'
                                    },
                                    width: '100%',
                                }}
                            />
                        </div>
                        <button type='submit' className={styles.search_btn}>
                            {!mdUp ? <SearchOutlinedIcon /> : 'Search'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero