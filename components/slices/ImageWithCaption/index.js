import React, { Fragment } from "react";
import DefaultImage from "./DefaultImage";
import FullWidthImage from "./FullWidthImage";
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
