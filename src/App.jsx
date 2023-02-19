import React from "react";
import styles from "./style.js";
import {imagenes} from "./components/imagenes.js";

import {
  Billing,
  Footer,
  Hero,
  Navbar,
  Testimonials,
  Slider,
} from "./components";

export const App = () => (
  <div className='bg-blue-100 w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-blue-100 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-blue-100 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing />
        <Slider images={imagenes} />
        <Testimonials />
      </div>
    </div>
    <Footer />
  </div>
);

//12 diciembre => en el minuto 57:35
// 13 diciembre => en el minuto 1:40:05
