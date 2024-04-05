/* eslint-disable react/prop-types */
import {svg} from "../../imagenes.json";

export const FeedbackCard = ({content, name, img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card hover:text-white hover:cursor-pointer'>
      <img
        src={svg.quotes}
        alt='double_quotes'
        className='w-[42px] h-[27px] object-contain'
      />
      <p className='font-poppins font-normal text-[18px] leading-[32px] my-10'>
        {content}
      </p>
      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[50px] h-[30px] rounded-full' />
        <div className='flex flex-col justify-center ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px]'>
            {name}
          </h4>
        </div>
      </div>
    </div>
  );
};
