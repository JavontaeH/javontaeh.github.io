import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import HashLoader from "react-spinners/HashLoader";

const LoaderComponent = () => {
  //TODO: REPLACE WITH PACMAN LOADER?
  return (
    <LoaderContainer>
      <HashLoader color="#fff" speedMultiplier="1.25" />
    </LoaderContainer>
  );
};

export default LoaderComponent;
