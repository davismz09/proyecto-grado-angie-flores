import React, {useState} from "react";
import "./slider.css";
import styles, {layout} from "../style";

export const Slider = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className='slider'>
      <h2 className={`${styles.heading2} text-slate-900 text-center`}>
        Diseños más vendidos
      </h2>
      <div
        className='slider-wrapper'
        style={{transform: `translateX(-${currentIndex * 100}%)`}}>
        {images.map((image, index) => (
          <img
            src={image}
            key={index}
            alt={`Slide ${index}`}
            className='slider-image'
          />
        ))}
      </div>
      <button className='slider-control prev' onClick={goToPrevSlide}>
        &#8592;
      </button>
      <button className='slider-control next' onClick={goToNextSlide}>
        &#8594;
      </button>
    </div>
  );
};
