import React from "react";
import styles from "../style";
import {logoeden, facebook} from "../assets";
import {imagesFooter, direccion, telefono} from "../assets/footer";

export const Footer = () => (
  <section
    className={`bg-slate-900 ${styles.flexCenter} ${styles.paddingY} px-11 flex-col`}>
    <div
      className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full items-center`}>
      <div className='flex-1 self-start gap-4'>
        <div className='flex flex-row justify-self-start mr-10 gap-5 mb-5'>
          <div className='bg-white rounded-full'>
            <img
              src={logoeden}
              alt='Logo Eden'
              className='w-[160px] h-[160px] object-contain shadow-white shadow-[0px_2px_43px_4px_rgba(255,255,255,0.75)] rounded-full'
            />
          </div>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            "La suavidad de unas sábanas de calidad puede ser el abrazo que
            necesitas después de un largo día".
          </p>
        </div>
        <p className={`${styles.paragraph} flex items-center gap-2 mb-3`}>
          <img src={direccion} alt='Dirección' className='w-[30px]' />
          Guayaquil - Ecuador
        </p>
        <p className={`${styles.paragraph} flex items-center gap-2`}>
          <img src={telefono} alt='telefono' className='w-[30px]' />
          +593 96 919 0679
        </p>
      </div>
      <div>
        <h2 className={`${styles.paragraph}`}>Facebook</h2>
        <div className='flex-[1.5] w-full grid grid-cols-3 gap-4 md:mt-0 mt-10 mb-10'>
          {imagesFooter.map(({image, title, id}) => (
            <img
              key={id}
              src={image}
              alt={title}
              className='object-contain w-[150px] hover:cursor-pointer hover:opacity-70 hover:scale-125 transition-all duration-500 ease-linear'
            />
          ))}
        </div>
        <div className='flex flex-row md:mt-0 mt-6'>
          <a
            href='https://www.facebook.com/sabanaseleden'
            target='_blank'
            className='flex gap-4'>
            <img src={facebook} alt='Facebook' />
            <p className={`${styles.paragraph}`}>
              Siguenos en Sábanas "El Edén"
            </p>
          </a>
        </div>
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p
        className={`${styles.paragraph} w-[100%] font-popping font-normal text-center text-[18px] leading-[72px] text-white`}>
        2023 Sábanas El Edén. All Rights Reserved.
      </p>
    </div>
  </section>
);
