import React, { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { Grid, makeStyles } from "@material-ui/core";
import Card from "./Card";
import ExtendedCard from "./ExtendedCard";
import { projectList } from "../../data";

const ProjectsGallery = () => {
  const classes = useStyles();
  const [selectedId, setSelectedId] = useState(null);

  const getSelected = (id) => projectList.find((elem) => elem.id === id);
  return (
    <LayoutGroup type="crossfade">
      <Grid container spacing={4} className={classes.galleryContainer}>
        {projectList.map((item, k) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.id}
            classes={{ item: classes.item }}
          >
            <Card
              id={item.id}
              title={item.title}
              overview={item.overview}
              frontImage={item.frontImage}
              technologies={item.technologies}
              onClick={() => setSelectedId(item.id)}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
            />
          </Grid>
        ))}
      </Grid>
      <AnimatePresence>
        {selectedId && (
          <ExtendedCard
            key={selectedId}
            id={selectedId}
            title={getSelected(selectedId).title}
            overview={getSelected(selectedId).extendedOverview}
            backgroundImage={getSelected(selectedId).backgroundImage}
            frontImage={getSelected(selectedId).frontImage}
            technologies={getSelected(selectedId).technologies}
            link={getSelected(selectedId).link}
            handleClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    overflow: "visible",
    width: "100%",
    margin: "0 auto",
    justifyContent: "space-around",
  },
  item: {
    overflow: "visible",
  },
}));

export default ProjectsGallery;
