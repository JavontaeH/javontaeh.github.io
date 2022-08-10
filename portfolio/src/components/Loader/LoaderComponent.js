import React from "react";
import Loader from "react-loader";
import LoaderContainer from "../../containers/LoaderContainer";

const LoaderComponent = () => {
  return (
    <LoaderContainer>
      <Loader type="pacman" />
    </LoaderContainer>
  );
};

export default LoaderComponent;
