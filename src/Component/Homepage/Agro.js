import React from "react";
import "./Agro.css"; // Import your CSS file for styling
import ImageSlider from "./imageSliderOfAgro";
import Backgroundvideo from "./Backgroundvideo";
import PhotoGallery from "./PhotoGallery";
import TestimonialSlider from "./Testimonial";

const TreeAdComponent = () => {
  return (
    <>
      <Backgroundvideo />
      <ImageSlider style={{ border: "2px solid red" }} />   
      <PhotoGallery/>
      <TestimonialSlider/>
    </>
  );
};

export default TreeAdComponent;
