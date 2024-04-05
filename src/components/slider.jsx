import PropTypes from "prop-types";
import CustomSwiper from "../components/custom-swiper.jsx";
import styles from "../styles";
import "./estilos/slider.css";

export const Slider = ({images}) => {
  return (
    <div className='slider'>
      <h2 className={`${styles.heading2} text-center`}>Diseños más vendidos</h2>
      <div className='container-slider'>
        <CustomSwiper images={images} effect='creative' />
      </div>
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
