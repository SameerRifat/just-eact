'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './navbar.module.css';
import navData from './navData';
import Link from 'next/link';
import Language from './language/Language';
import { Avatar, useMediaQuery } from '@mui/material';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from 'react-redux';
import AccountPopover from "./account-popover";
import useGetAllCartList from "../../../api-manage/hooks/react-query/add-cart/useGetAllCartList";
import { getGuestId } from "../../../helper-functions/getToken";

import { setWalletAmount } from "../../../redux/slices/cart";
import { setUser } from "../../../redux/slices/profileInfo";
import useGetUserInfo from "../../../api-manage/hooks/react-query/user/useGetUserInfo";

const NavbarLinks = () => {
    const lgUp = useMediaQuery('(min-width: 1024px)');
    const mdUp = useMediaQuery('(min-width: 900px)');

    const [language, setLanguage] = useState('en');
    const token = localStorage.getItem('token')

    const dispatch = useDispatch();
    const handleSuccess = (res) => {
        localStorage.setItem("wallet_amount", res?.wallet_balance);
        dispatch(setWalletAmount(res?.wallet_balance));
        dispatch(setUser(res));
    };
    const { data: usrInfo, } = useGetUserInfo(handleSuccess);

    const loginLinkIndex = navData.findIndex(link => link.title === 'Login');

    const guestId = getGuestId();
    const {
        data,
        refetch: cartListRefetch,
    } = useGetAllCartList(guestId);

    useEffect(() => {
        cartListRefetch();
    }, []);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className={styles.nav_links}>
                {mdUp && navData.map((navLink, ind) => {
                    return (
                        <React.Fragment key={navLink.id}>
                            {ind === loginLinkIndex && token ? (
                                <div
                                    className={styles.nav_link}
                                    onClick={handleClick}
                                >
                                    {data?.image ? (
                                        <Avatar
                                            alt={usrInfo?.last_name}
                                            sx={{ width: 24, height: 24 }}
                                            src={`${configData?.base_urls?.customer_image_url}/${usrInfo?.image}`}
                                        />
                                    ) : (
                                        <AccountCircleIcon
                                            sx={{
                                                fontSize: "24px",
                                                borderRadius: "50%",
                                            }}
                                        />
                                    )}

                                    <p
                                    >
                                        {usrInfo?.f_name}
                                    </p>
                                </div>
                            ) : (
                                <Link href={navLink.href} className={styles.nav_link}>
                                    {lgUp && navLink.icon && (
                                        <img src={navLink.icon} alt='icon' width={24} height={24} />
                                    )}
                                    <p>{navLink.title}</p>
                                </Link>
                            )}
                        </React.Fragment>
                    )
                })}
                {mdUp && <Language language={language} setLanguage={setLanguage} />}
                {!mdUp && (
                    <Link href='/offers'>
                        <CardGiftcardOutlinedIcon style={{ color: 'rgb(243, 104, 5)' }} />
                    </Link>
                )}
                <AccountPopover
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    open={open}
                    cartListRefetch={cartListRefetch}
                />
            </div>
        </>
    )
}

export default NavbarLinks