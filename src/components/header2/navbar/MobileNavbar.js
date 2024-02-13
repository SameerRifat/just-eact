'use client'

import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css';
import navData from './navData';
import Link from 'next/link';
import { Avatar, useMediaQuery } from '@mui/material';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from 'react-redux';
import useGetAllCartList from "../../../api-manage/hooks/react-query/add-cart/useGetAllCartList";
import { getGuestId } from "../../../helper-functions/getToken";
import MobileMenu from './MobileMenu';

import { setWalletAmount } from "../../../redux/slices/cart";
import { setUser } from "../../../redux/slices/profileInfo";
import useGetUserInfo from "../../../api-manage/hooks/react-query/user/useGetUserInfo";
import { useTranslation } from "react-i18next";
import CustomLanguage from './mobileNavLanguage/CustomLanguage';

const MobileNavbar = ({ openSidebar, setOpenSidebar }) => {
    const { t } = useTranslation();
    const mdUp = useMediaQuery('(min-width: 900px)');


    const loginLinkIndex = navData.findIndex(link => link.title === 'Login');

    let token = undefined;
    if (typeof window !== "undefined") {
        token = localStorage.getItem("token");
    }

    const dispatch = useDispatch();
    const handleSuccess = (res) => {
        localStorage.setItem("wallet_amount", res?.wallet_balance);
        dispatch(setWalletAmount(res?.wallet_balance));
        dispatch(setUser(res));
    };
    const { data: usrInfo, } = useGetUserInfo(handleSuccess);
    const { profileInfo } = useSelector((state) => state.profileInfo);
    console.log('profileInfo: ', profileInfo)

    const guestId = getGuestId();
    const {
        refetch: cartListRefetch,
    } = useGetAllCartList(guestId);

    useEffect(() => {
        cartListRefetch();
    }, []);

    const { configData, countryCode, language } = useSelector(
        (state) => state.configData
    );

    return (
        <>
            {!mdUp && openSidebar && (
                <>
                    <div className={styles.sidebar}>
                        <div className={styles.mobile_nav_links}>
                            {navData.map((navLink, ind) => {
                                return (
                                    <React.Fragment key={navLink.id}>
                                        {ind === loginLinkIndex && token ? (
                                            <>
                                                <div
                                                    className={styles.mobile_nav_link}
                                                >
                                                    <div className={styles.mobile_nav_link_icon}>
                                                        {usrInfo?.image ? (
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
                                                    </div>

                                                    <span className={styles.mobile_nav_link_title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                                        {t(usrInfo?.f_name)}
                                                        <span>{usrInfo?.email}</span>
                                                    </span>
                                                </div>
                                                <MobileMenu cartListRefetch={cartListRefetch} setOpenSidebar={setOpenSidebar} />
                                            </>
                                        ) : (
                                            <Link href={navLink.href} className={styles.mobile_nav_link} key={navLink.id}
                                                onClick={() => setOpenSidebar(false)}
                                            >

                                                <div className={styles.mobile_nav_link_icon}>
                                                    {navLink.icon ? (
                                                        <img src={navLink.icon} alt={t('icon')} width={24} height={24} />
                                                    ) : (<svg></svg>)}
                                                </div>
                                                <span className={styles.mobile_nav_link_title}>
                                                    {t(navLink.title)}
                                                </span>
                                            </Link>
                                        )}
                                    </React.Fragment>
                                )
                            })}
                            <CustomLanguage
                                countryCode={countryCode}
                                language={language}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default MobileNavbar