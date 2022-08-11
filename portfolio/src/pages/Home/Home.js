import React from "react";
import { motion } from "framer-motion";
import Home from "../../sections/Home.js";
import About from "../../sections/About.js";
import Experience from "../../sections/Experience.js";
import Projects from "../../sections/Projects.js";
import Contact from "../../sections/Contact.js";
import { useMediaQuery, useTheme } from "@material-ui/core";

const MainHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {/* if i figure out fun landing page animation i can put it here{!isMobile && <Animation />} */}
    </motion.main>
  );
};

export default MainHome;
