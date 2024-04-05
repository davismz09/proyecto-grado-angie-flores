import styles from "../styles";
import {hero} from "../imagenes.json";

export const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div
        className={`flex flex-row items-center py-[6px] px-4 bg-zinc-200 rounded-[10px] mb-2`}>
        <p className={`text-[18px] leading-[30.8px] text-slate-900 ml-2`}>
          <span className={`text-slate-900 font-bold`}>
            Sábanas piel de durazno
          </span>{" "}
          de alta calidad
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1
          className={`${styles.heading2} flex-1 ss:text-[72px] text-[52px] text-indigo-400 ss:leading-[100px]`}>
          Sábanas <br className='sm:block hidden' />
          <span className='text-blue-400'>&quot;El Edén&quot;</span>
        </h1>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px]  ss:leading-[100px] leading-[75px] w-full text-neutral-400'>
        Buen precio, buena calidad
      </h1>
      <p
        className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-500 font-bold text-justify`}>
        Nuestro taller proporciona buen servicio al cliente, como entregas a
        domicilio respetando el tiempo estimado, y a un precio asequible.
        <br />
        Sábanas piel de durazno de 140 gramos de buena calidad y excelente
        cosido. Nuestra excelente costura
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={hero.sabana}
        alt='billing'
        className='w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] relative z-[5] rounded-full shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer'
      />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0  pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40  white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
    </div>
  </section>
);
