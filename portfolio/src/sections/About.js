import React from "react";
import {
  useTheme,
  Grid,
  Typography,
  makeStyles,
  Box,
  useMediaQuery,
  Link,
} from "@material-ui/core";
import SectionContainer from "../containers/SectionContainer.js";
import Skills from "../components/Skills/Skills.js";
import Avatar from "../components/Avatar/Avatar.js";

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const about_desc = (
    <p>
      Prior to attending{" "}
      <Link
        className="custom-link"
        href="https://nashvillesoftwareschool.com/"
        color="primary"
      >
        {"NSS"}
      </Link>
      , I was an avid gamer with a lifelong interest in tech. While supporting
      my college education doing freelance work as a Thumbnail Designer and
      Video Editor, my passion for content creation and technology led me to
      pursuing web development as a way to utilize my logical and creative
      problem-solving skills, and I'm hoping to bring that passion into the
      workforce soon
    </p>
  );

  return (
    <SectionContainer id="about" title={"About"} maxWidth="md">
      <Grid container spacing={0} alignItems="center" style={{ width: "100%" }}>
        {isMobile && (
          <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
            <Box mb={6}>
              <Avatar />
            </Box>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={7}
          className={classes.gridItemWrapper}
          style={{ flexDirection: "column", alignItems: "space-around" }}
        >
          <Box mb={4}>
            <Typography component={"span"} variant="body1">
              {about_desc}
            </Typography>
          </Box>
          <Skills />
        </Grid>
        {!isMobile && (
          <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
            <Avatar />
          </Grid>
        )}
      </Grid>
    </SectionContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  gridItemWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default About;
