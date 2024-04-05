import {useState} from "react";
import {navLinks} from "../constants";
import {principales, svg} from "../imagenes.json";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <a
        className='w-max bg-white rounded-full p-2 hover:cursor-pointer'
        href='https://www.facebook.com/sabanaseleden'
        target='_blank'>
        <img
          src={principales.logo}
          alt='hookbank'
          className='w-[160px] h-[160px] object-contain shadow-white shadow-[0px_2px_43px_4px_rgba(255,255,255,0.75)] rounded-full'
        />
      </a>
      <ul className='list-none sm:flex  hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins cursor-pointer text-[20px] hover:text-gray-200 font-bold ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-gray-300 font-bold`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? svg.close : svg.open}
          alt='menu'
          className='w-[28px] h-[28px] object-contain justify-self-start'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-24 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
