'use client'

import React, { useEffect, useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useTranslation } from 'react-i18next';
import Languages from './languagesData';

const Language = ({ language, setLanguage }) => {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    return (
        <>
            <IconButton
                aria-controls="language-menu"
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                    padding: '12px',
                    borderRadius: '100%'
                }}
            >
                <Avatar src={Languages.find(lang => lang.value === language)?.icon} alt={language} sx={{ width: 20, height: 20 }} />
            </IconButton>
            <Menu
                id="language-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
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


// 'use client'

// import React, { useEffect } from 'react';
// import { Avatar, IconButton, Menu, MenuItem, Popover, Typography } from '@mui/material';
// import { Stack } from '@mui/system';
// import { useTranslation } from 'react-i18next';
// import Languages from './languagesData';

// const Language = ({ language, setLanguage }) => {
//     const { i18n } = useTranslation();

//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handlePopoverOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handlePopoverClose = () => {
//         setTimeout(() => {
//             setAnchorEl(null);
//         }, 200);
//     };

//     const open = Boolean(anchorEl);

//     useEffect(() => {
//         i18n.changeLanguage(language);
//     }, [language]);

//     return (
//         <>
//             <div>
//                 <IconButton
//                     aria-owns={open ? 'mouse-over-popover' : undefined}
//                     aria-haspopup="true"
//                     onMouseEnter={handlePopoverOpen}
//                     onMouseLeave={handlePopoverClose}
//                     sx={{
//                         padding: '12px',
//                         borderRadius: '100%'
//                     }}
//                 >
//                     <Avatar src={Languages.find(lang => lang.value === language)?.icon} alt={language} sx={{ width: 20, height: 20 }} />
//                 </IconButton>
//             </div>
//                 <Menu
//                     id="mouse-over-popover"
//                     sx={{
//                         pointerEvents: 'none',
//                     }}
//                     open={open}
//                     anchorEl={anchorEl}
//                     onMouseLeave={handlePopoverClose}
//                     anchorOrigin={{
//                         vertical: 'bottom',
//                         horizontal: 'right',
//                     }}
//                     transformOrigin={{
//                         vertical: 'top',
//                         horizontal: 'right',
//                     }}
//                 // disableRestoreFocus
//                 >
//                     {Languages.map((option, index) => (
//                         <MenuItem
//                             key={index}
//                             sx={{ py: 2, px: 3 }}
//                             onClick={() => {
//                                 // handleClose();
//                                 setLanguage(option.value);
//                             }}
//                         >
//                             <Stack direction="row" spacing={1} alignItems="center">
//                                 <Avatar src={option.icon} alt={option.icon} sx={{ width: 20, height: 20 }} />
//                                 <Typography>{option.flagname}</Typography>
//                             </Stack>
//                         </MenuItem>
//                     ))}
//                 </Menu>
//         </>
//     );
// };

// export default Language;
