import styles from "./styles.js";
import {slider} from "./imagenes.json";

import {
  Billing,
  Footer,
  Hero,
  Navbar,
  Testimonials,
  Slider,
} from "./components";

export const App = () => (
  <div className='bg-zinc-900 w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing />
        <Slider images={slider} />
        <Testimonials />
      </div>
    </div>
    <Footer />
  </div>
);
