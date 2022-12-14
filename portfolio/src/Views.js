import React, { lazy } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home/Home.js"));
const Navbar = lazy(() => import("./components/Navbar/Navbar.js"));
const Social = lazy(() => import("./components/Social/Social.js"));
const Footer = lazy(() => import("./components/Footer/Footer.js"));
const LoaderComponent = lazy(() =>
  import("./components/Loader/LoaderComponent.js")
);

const Views = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <LoaderComponent />
      <Navbar />
      {!isMobile && <Social />}
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Views;
