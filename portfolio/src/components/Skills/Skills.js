import React from "react";
import {
  Typography,
  makeStyles,
  Box,
  useTheme,
  Paper,
} from "@material-ui/core";
import ProgressBar from "./ProgressBar";

const skillsList = [
  { title: "JavaScript", value: 85 },
  { title: "React JS", value: 80 },
  { title: "C#", value: 80 },
  { title: ".NET", value: 75 },
  { title: "SqlServer", value: 70 },
  { title: "Firebase", value: 50 },
];

function LinearProgressWithLabel({ title, value }) {
  const classes = useStyles();
  return (
    <div className={classes.skillWrapper}>
      <Typography
        variant="body2"
        display="inline"
        component="span"
        className={classes.skillTitle}
      >
        {title}
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        <Box width="100%" mr={1}>
          <ProgressBar value={value} />
        </Box>
      </Box>
    </div>
  );
}

const Skills = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.container}>
      {skillsList.map((elem, k) => (
        <Paper elevation={10} key={k} className={classes.paper}>
          <Typography align="center">{elem.title}</Typography>
        </Paper>
      ))}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "600px",
    display: "flex",
    flexWrap: "wrap",
  },
  skillWrapper: {
    width: "100%",
  },
  skillTitle: {
    whiteSpace: "nowrap",
    marginRight: theme.spacing(1),
  },
  paper: {
    marginRight: "10px",
    marginBottom: "10px",
    minWidth: "50px",
    padding: "10px",
  },
}));

export default Skills;
