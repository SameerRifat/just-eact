'use client'

import React, { useEffect } from 'react';
import { Avatar, IconButton, Menu, MenuItem, Popover, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useTranslation } from 'react-i18next';
import Languages from './languagesData';

const Language = ({ language, setLanguage }) => {
    const { i18n } = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

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
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                sx={{
                    padding: '12px',
                    borderRadius: '100%'
                }}
            >
                <Avatar src={Languages.find(lang => lang.value === language)?.icon} alt={language} sx={{ width: 20, height: 20 }} />
            </IconButton>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
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
            </Popover>
        </>
    );
};

export default Language;
