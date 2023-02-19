import React from "react";
import {tarjeta, efectivo} from "../assets";
import styles, {layout} from "../style";
import {Button2} from "../components";

export const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className='grid justify-center items-center'>
        <img
          src={tarjeta}
          alt='Tarjeta'
          className='w-[320px] h-[180px] relative z-[5]'
        />
        <img
          src={efectivo}
          alt='efectivo'
          className='w-[424px] h-[212px] relative bottom-32 left-20'
        />
      </div>
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
    </div>
    <div className={`${layout.sectionInfo} grid`}>
      <h2 className={`${styles.heading2} text-slate-900`}>
        Métodos de pago:
        <br className='sm:block hidden' /> En efectivo y tarjeta
      </h2>
      <p
        className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-500 font-bold text-justify`}>
        Se brinda la opción de adquirir estos productos tanto al por mayor como
        al por menor, con precios específicos para cada opción. Si desea
        realizar su compra puede redirigirse a la bandeja de mensajes de nuestra
        página de facebook:
      </p>
      <Button2 />
    </div>
  </section>
);
