import React from 'react'
import styles from './app.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from '@mui/material'

const AppsSection = () => {
    const mdUp = useMediaQuery('(min-width: 800px)');

    return (
        <section className={styles.apps_section}>
            <div className={styles.apps_container}>
                {!mdUp && (
                    <h2 className={styles.apps_heading}>
                        Find your flavour even faster
                    </h2>
                )}
                <div className={styles.apps_sub_container}>
                    <div className={styles.apps_left}>
                        <div className={styles.promo_img_container}>
                            <Image
                                src='/landing-page/apps-promo.png'
                                alt='Apps promo'
                                width={220}
                                height={284}
                                className={styles.promo_img}
                            />
                        </div>
                    </div>
                    <div className={styles.apps_right}>
                        {mdUp && (
                            <h2 className={styles.apps_heading}>
                                Find your flavour even faster
                            </h2>
                        )}
                        <p>
                            Download the Just Eat app for faster ordering and more personalised recommendations.
                        </p>
                        <div className={styles.app_links}>
                            <Link href='#' className={styles.app_link}>
                                App Store
                            </Link>
                            <Link href='#' className={styles.app_link}>
                                Google Play
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppsSection