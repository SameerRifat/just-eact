import React from 'react';
import styles from './landingPage.module.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import AppsSection from './components/apps/AppsSection';
import Footer from './components/footer/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AppsSection />
      <Footer />
      {/* <div className={styles.content}>

      </div> */}
    </>
  );
};

export default LandingPage;
