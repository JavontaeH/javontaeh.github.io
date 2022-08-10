import React, { useContext, useEffect } from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import HomeContainer from "../containers/HomeContainer.js";
import loaderContext from "../contexts/loaderContext.js";

const Home = () => {
  const classes = useStyles();
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 1.2 },
      }));
    } else {
      controls.start({ opacity: 0, y: 5 });
      // change opacity to 0 after I build loading component
    }
  }, [isLoading, controls]);

  return (
    <HomeContainer id="home">
      <div>
        <Typography
          component={motion.div}
          animate={controls}
          custom={0}
          color="primary"
          variant="h5"
          style={{ marginBottom: "0px" }}
        >
          {"Hey"}
          <motion.div
            style={{ display: "inline-block" }}
            animate={{ rotate: [-90, 0, -95] }}
            transition={{ repeat: Infinity, duration: 1.2, repeatDelay: 1 }}
          >
            {/* emoji here? */}
          </motion.div>
          , {"I'm"}
        </Typography>
        <motion.div animate={controls} custom={1}>
          <h1 style={{ width: "100%", fontSize: "60px", margin: "0" }}>
            Jae Hardeman
          </h1>
        </motion.div>
        <Typography
          component={motion.p}
          animate={controls}
          custom={2}
          variant="h2"
          color="secondary"
          className={classes.subTitle}
        >
          {"Software Engineer"}
        </Typography>
        <Typography
          component={motion.p}
          animate={controls}
          custom={3}
          variant="body2"
          color="initial"
          style={{ marginBottom: "0" }}
        >
          {"Full stack web developer, content creator, and competitive gamer."}
        </Typography>
        <Typography
          component={motion.p}
          animate={controls}
          custom={4}
          variant="body1"
          color="initial"
          style={{ marginBottom: "30px" }}
        >
          {"From Nashville, TN"}
        </Typography>
        <motion.div animate={controls} custom={5}>
          <Button
            component={Link}
            spy
            smooth
            offset={0}
            duration={500}
            to="contact"
            variant="outlined"
            color="primary"
            size="large"
          >
            {"See Resume"}
          </Button>
        </motion.div>
      </div>
    </HomeContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  subTitle: {
    marginBottom: "16px",
    fontSize: "75px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
    },
  },
}));

export default Home;
