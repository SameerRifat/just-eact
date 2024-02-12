import { NoSsr, Stack, styled } from "@mui/material";
import HeaderComponent from "../header";
import FooterComponent from "../footer";
import PropTypes from "prop-types";
import Navbar from "../header2/navbar/Navbar";
import Footer from "../footer2/Footer";

export const MainLayoutRoot = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100vh",
}));

export const LandingLayout = ({ children, configData, landingPageData }) => {
  return (
    <MainLayoutRoot justifyContent="space-between">
      {/* <header>
        <HeaderComponent configData={configData} />
      </header> */}
      <Navbar />
      {children}
      {/* <footer>
        <FooterComponent
          configData={configData}
          landingPageData={landingPageData}
        />
      </footer> */}
      <Footer />
    </MainLayoutRoot>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.node,
};
