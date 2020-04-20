import React, { Fragment } from "react";
import DefaultImage from "./defaultImage";
import FullWidthImage from "./fullWidthImage";
import styled from "styled-components";

/**
 * Image caption slice component
 */
const ImageCaption = ({ slice }) => {
  const imageComponent =
    slice.slice_label === "image_banner" ? (
      <FullWidthImage slice={slice} />
    ) : (
      <DefaultImage slice={slice} />
    );

  return <Fragment>{imageComponent}</Fragment>;
};

export default ImageCaption;
