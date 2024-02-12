import React from 'react'
import styles from './languag.module.css'
import Languages from './languagesData';
import { Avatar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MobileNavbarLanguages = ({ openLangues, setOpenLanguages }) => {
    return (
        <div className={styles.mobile_languages_continer}>
            <div className={styles.mobile_languages_header}>
                <div className={styles.arrow_back_icon_wrapper}>
                    <IconButton onClick={() => setOpenLanguages(false)}>
                        <ArrowBackIcon style={{ color: 'rgb(243, 104, 5)' }} />
                    </IconButton>
                </div>
                <span>
                    Select your country
                </span>
            </div>
            <ul className={styles.languages}>
                {Languages.map((option, index) => (
                    <li
                        key={index}
                        className={styles.language}
                        // onClick={() => {
                        //     handleClose();
                        //     setLanguage(option.value);
                        // }}
                    >
                        <div className={styles.language_icon}>
                            <Avatar src={option.icon} alt={option.flagname} sx={{ width: 20, height: 20 }} />
                        </div>
                        <span className={styles.language_icontitle}>
                            {option.flagname}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MobileNavbarLanguages