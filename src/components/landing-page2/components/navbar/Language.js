'use client'

import React, { useEffect } from 'react';
import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useTranslation } from 'react-i18next';

const Languages = [
    {
        flagname: 'English (UK)',
        icon: '/flag/icon-flag-en.svg',
        value: 'en',
    },
    {
        flagname: '中国人 (Chinese)',
        icon: '/flag/icon-flag-cn.svg',
        value: 'ch',
    },
    {
        flagname: 'français (French)',
        icon: '/flag/icon-flag-fr.svg',
        value: 'fr',
    },
    {
        flagname: 'عربي (Arabic)',
        icon: '/flag/icon-flag-sa.svg',
        value: 'ar',
    },
];

const Language = ({ language, setLanguage }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { i18n } = useTranslation();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    return (
        <>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                // onMouseEnter={handleClick}
                // onMouseLeave={handleClose}
                sx={{
                    padding: '12px',
                    borderRadius: '100%'
                }}
            >
                <Avatar src={Languages.find(lang => lang.value === language)?.icon} alt={language} sx={{ width: 20, height: 20 }} />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                // onMouseEnter={handleClick}
                // onMouseLeave={handleClose}
                sx={{
                    '& .MuiMenu-paper': {
                        width: '200px',
                    },
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {Languages.map((option, index) => (
                    <MenuItem
                        key={index}
                        sx={{ py: 2, px: 3 }}
                        onClick={() => {
                            handleClose();
                            setLanguage(option.value);
                        }}
                    >
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Avatar src={option.icon} alt={option.icon} sx={{ width: 20, height: 20 }} />
                            <Typography>{option.flagname}</Typography>
                        </Stack>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default Language;