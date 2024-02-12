import React from 'react';
import styles from './landingPage.module.css';
import Hero from './components/hero/Hero';
import AppsSection from './components/apps/AppsSection';

const LandingPage = () => {
  return (
    <>
      <div className={styles.landing_page}>
        <Hero />
        <AppsSection />
      </div>
    </>
  );
};

export default LandingPage;
