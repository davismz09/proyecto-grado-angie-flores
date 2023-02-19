import React from "react";
import {feedback} from "../constants";
import styles from "../style.js";
import {FeedbackCard} from "./FeedbackCard.jsx";

export const Testimonials = () => (
  <section
    id='clients'
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={`${styles.heading2} text-slate-900 `}>
        Lo que la gente <br className='sm:block hidden' />
        dice de nosotros
      </h1>
    </div>

    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] text-gray-500'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);
