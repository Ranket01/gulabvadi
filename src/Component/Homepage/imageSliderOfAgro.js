import React, { useState, useEffect } from "react";
import image1 from "../Homepage/Images/img4.jpeg";
import image2 from "../Homepage/Images/img5.jpeg";
import image3 from "../Homepage/Images/img6.jpeg";
import "./imageSliderOfAgro.css";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [image1, image2, image3];
  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const autoPlay = () => {
      handleNext();
    };

    const timerId = setInterval(autoPlay, 3000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <div id="imagesliderdivofagro">
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />

        <h4>
          Welcome to our Mango Farm in Gir, Junagadh, Gujarat! With a rich
          history dating back to 2002, we have been proudly selling the juiciest
          and most delicious mangoes from our farm. Located in the heart of
          Gujarat's Gir region, renowned for its fertile soil and ideal climate
          for mango cultivation, our farm is a haven for mango lovers. Our
          commitment to quality, sustainability, and customer satisfaction is
          unmatched, making us a trusted source for premium mangoes. Whether
          you're a mango enthusiast or just someone who appreciates the taste of
          fresh, succulent mangoes, we invite you to experience the authentic
          flavor of Gujarat's finest mangoes at our farm. Come, indulge in the
          sweetness of our mangoes and savor the taste of nature's bounty at its
          best!
        </h4>
      </div>
      <div id="divforbeforecontent" />
    </>
  );
};

export default ImageSlider;
