import styles from "../styles";
import {footer, principales} from "../imagenes.json";

export const Footer = () => (
  <section
    id='contacts'
    className={`bg-slate-900 ${styles.flexCenter} ${styles.paddingY} px-11 flex-col`}>
    <div
      className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full items-center`}>
      <div className='flex-1 flex flex-col items-center sm:items-start self-start gap-4'>
        <div className='flex flex-col sm:flex-row justify-self-start gap-5 mb-5'>
          <div className='bg-white rounded-full self-center'>
            <img
              src={principales.logo}
              alt='Logo Eden'
              className='w-[160px] h-[160px] object-contain shadow-white shadow-[0px_2px_43px_4px_rgba(255,255,255,0.75)] rounded-full'
            />
          </div>
          <p
            className={`text-slate-400 mt-4 max-w-[310px] text-center self-center`}>
            &quot;La suavidad de unas sábanas de calidad puede ser el abrazo que
            necesitas después de un largo día&quot;.
          </p>
        </div>
        <p className={`text-slate-400 flex items-center gap-2 mb-3`}>
          <img src={footer.direccion} alt='Dirección' className='w-[30px]' />
          Guayaquil - Ecuador
        </p>
        <p className={`text-slate-400 flex items-center gap-2`}>
          <img src={footer.telefono} alt='telefono' className='w-[30px]' />
          +593 96 919 0679
        </p>
      </div>
      <div>
        <h2 className={`text-slate-400`}>Facebook</h2>
        <div className='flex-[1.5] w-full grid grid-cols-3 gap-4 md:mt-0 mt-10 mb-10'>
          {footer.galeria.map(({image, title, id}) => (
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
            <img src={footer.facebook} alt='Facebook' />
            <p className={`text-slate-400`}>
              Siguenos en Sábanas &quot;El Edén&quot;
            </p>
          </a>
        </div>
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p
        className={`text-white w-[100%] font-popping font-normal text-center text-[18px] leading-[72px]`}>
        2023 Sábanas El Edén. All Rights Reserved.
      </p>
    </div>
  </section>
);
