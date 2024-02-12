import React, { useState } from 'react';
import styles from './footer.module.css'
import { useMediaQuery } from '@mui/material';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Icon } from "@iconify/react";
import Image from 'next/image';


const Footer = () => {
    const lgUp = useMediaQuery('(min-width: 1024px)');
    // Array of objects representing each column in the footer
    const footerColumns = [
        {
            title: 'Customer service',
            links: ['Contact us', 'Log in', 'Sign up', 'My account', 'Mobile apps', 'Redeem a Giftcard', 'Buy a Giftcard', 'Local Legends']
        },
        {
            title: 'Top cuisines',
            links: ['Chinese', 'Fish & Chips', 'Indian', 'Pizza', 'Italian', 'Kebabs', 'Sushi', 'Groceries', 'View all cuisines']
        },
        {
            title: 'Popular locations',
            links: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'View all locations']
        },
        {
            title: 'Top brands',
            links: ['McDonald\'s', 'KFC', 'Burger King', 'Domino\'s Pizza', 'Papa John\'s', 'Greggs', 'Subway', 'Starbucks', 'Costa Coffee', 'View all brands']
        },
        {
            title: 'Get to know us',
            links: ['About us', 'Restaurant sign up', 'Deliver with Just Eat', 'Careers', 'Sustainability', 'Just Eat for Business', 'Bug Bounty', 'Price promise', 'Privacy Policy', 'Terms and Conditions', 'Cookie Policy', 'Modern Slavery Statement', 'Gender Pay Gap 2022', 'Gender Pay Gap 2019-2021', 'Ethics hotline', 'Win Champions League® Tickets', 'Did Somebody Say Just Eat 2023']
        }
    ];

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&::before': {
            display: 'none',
        },
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor: '#EFEDEA',
        padding: '0 16px',
        paddingLeft: '10px',
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
            marginTop: 0,
            marginBottom: 0,
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        paddingLeft: '30px',
        paddingTop: 0,
        paddingBottom: 0,
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));

    const CustomLink = ({ href, children }) => (
        <Link href={href} className={styles.followback_link}>
            <span>{children}</span>
        </Link>
    );

    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_columns}>
                {footerColumns.map((column, index) => (
                    <div key={index} className={styles.footer_column}>

                        {lgUp ? (
                            <>
                                <h3>{column.title}</h3>
                                <ul className={styles.footer_links}>
                                    {column.links.map((link, i) => (
                                        <li key={i}><a href="#">{link}</a></li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <>
                                <Accordion sx={{ background: '#EFEDEA' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreOutlinedIcon style={{ color: '##242e30', fontWeight: 800 }} />}
                                    >
                                        <h3 className={styles.column_heading}>{column.title}</h3>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul className={styles.footer_links}>
                                            {column.links.map((link, i) => (
                                                <li key={i}><a href="#">{link}</a></li>
                                            ))}
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            </>
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.social_links}>
                <div className={styles.footer_brands}>
                    <h2 className={styles.social_links_heading}>Download our apps</h2>
                    <div className={styles.app_links}>
                        <Link href='#' className={styles.app_link}>
                            <Image src='/landing-page/apple-download.svg' alt='apple download' width={135} height={40} />
                        </Link>
                        <Link href='#' className={styles.app_link}>
                            <Image src='/landing-page/play-store-download.svg' alt='play-store download' width={135} height={40} />
                        </Link>
                        <Link href='#' className={styles.app_link}>
                            <Image src='/landing-page/app-gallery.svg' alt='play-store download' width={135} height={40} />
                        </Link>
                    </div>
                </div>
                <div className={styles.footer_feedback}>
                    <h2 className={styles.social_links_heading}>Feedback</h2>
                    <p>
                        Help us improve our website
                    </p>
                    <Link href='#'>
                        Send feedback
                    </Link>
                </div>
                <div className={styles.footer_followback}>
                    <h2 className={styles.social_links_heading}>Followback</h2>
                    <div className={styles.followback_links}>
                        <CustomLink href='#'><Icon icon="ri:rss-line" color='#242e30' /></CustomLink>
                        <CustomLink href='#'><Icon icon="ri:facebook-fill" color='#242e30' /></CustomLink>
                        <CustomLink href='#'><Icon icon="ri:instagram-line" color='#242e30' /></CustomLink>
                        <CustomLink href='#'><Icon icon="ri:twitter-line" color='#242e30' /></CustomLink>
                        <CustomLink href='#'><Icon icon="ri:youtube-line" color='#242e30' /></CustomLink>
                    </div>
                </div>
            </div>

            <div className={styles.payment_cards}>
                <Link href='#'>
                    <Image src='/landing-page/mastercard.svg' alt='mastercard' width={67} height={25} />
                </Link>
                <Link href='#'>
                    <Image src='/landing-page/visa.svg' alt='visa' width={67} height={25} />
                </Link>
                <Link href='#'>
                    <Image src='/landing-page/safekey.svg' alt='safekey' width={67} height={25} />
                </Link>
            </div>
            <div className={styles.cookie_link}>
                <Link href='#'>
                    Check my cookie preferences
                </Link>
            </div>
        </footer >
    );
};

export default Footer;
