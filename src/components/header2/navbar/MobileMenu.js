import React, { useState } from "react";
import styles from './navbar.module.css';

import { useTranslation } from "react-i18next";
import CustomDialogConfirm from "../../custom-dialog/confirm/CustomDialogConfirm";
import { useDispatch, useSelector } from "react-redux";
import { setLogoutUser } from "../../../redux/slices/profileInfo";
import toast from "react-hot-toast";
import { logoutSuccessFull } from "../../../utils/toasterMessages";
import { menuData } from "./account-popover/menuData";
import { useRouter } from "next/router";

const MobileMenu = ({ cartListRefetch, setOpenSidebar }) => {
    const { t } = useTranslation();
    const [openModal, setOpenModal] = useState(false);
    const [isLogoutLoading, setIsLogoutLoading] = useState(false);
    const { configData } = useSelector((state) => state.configData);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = async () => {
        setIsLogoutLoading(true);
        try {
            setTimeout(() => {
                cartListRefetch()
                dispatch(setLogoutUser(null));
                localStorage.removeItem("token");
                toast.success(t(logoutSuccessFull));

                router.push("/home");
                setOpenModal(false);
            }, 500);
        } catch (err) {
            //   toast.error('Unable to logout.');
        }
        setOpenSidebar(false)
    };
    const handleClick = (item) => {
        if (item?.id === 10) {
            router.push({
                pathname: "/track-order",
            });
        } else {
            router.push({
                pathname: "/profile",
                query: {
                    page: item?.name,
                },
            });
        }

    };
    return (
        <>
            {menuData.map((item, index) => {
                if (
                    (configData?.customer_wallet_status === 0 && item.id === 4) ||
                    (configData?.loyalty_point_status === 0 && item.id === 5) ||
                    (configData?.ref_earning_status === 0 && item.id === 6)
                ) {
                    return null;
                } else {
                    if (item?.id !== 8) {
                        return (
                            <>
                                <div
                                    key={index}
                                    className={styles.mobile_nav_link}
                                    onClick={() => {handleClick(item); setOpenSidebar(false)}}
                                >

                                    <div className={styles.mobile_nav_link_icon}>
                                        <svg></svg>
                                    </div>
                                    <span className={styles.mobile_nav_link_title}>
                                        {t(item?.name?.replace("-", " "))}
                                    </span>
                                </div>
                            </>
                        );
                    }
                }
            })}
            <div className={styles.mobile_nav_link}
                onClick={() => { handleLogout()}}
            >

                <div className={styles.mobile_nav_link_icon}>
                    <svg></svg>
                </div>
                <span className={styles.mobile_nav_link_title}>
                    {t("Logout")}
                </span>
            </div>
        </>
    );
};
export default MobileMenu;
