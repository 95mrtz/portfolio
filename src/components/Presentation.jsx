import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoArrowDownOutline } from "react-icons/io5";

import { Link } from 'react-router-dom'

const Presentation = () => {
  return (
    <div className="h-screen">
    <div className="h-full flex flex-col justify-center items-center">
      <div className="items-stretch">
        <h1 className="font-normal text-8xl text-gray-200">
          <span className="font-semibold">M</span>anuel{" "}
          <span className="font-semibold">O</span>rtiz{" "}
        </h1>
        <h3 className="my-7 text-center text-3xl">{`< Desarrollor frontend /> `}</h3>
        <ul className="flex flex-row justify-around">
          <li className="mx-2">
            <a href="https://github.com/hctmanuelortiz" target="_blank">
              <FaGithub className="text-5xl hover:text-gray-500" />
            </a>
          </li>
          <li className="mx-2">
            {" "}
            <a href="https://www.linkedin.com/in/hctmanuelortiz/" target="_blank">
              <FaLinkedin className="text-5xl hover:text-gray-500" />
            </a>
          </li>
          <li className="mx-2">
            {" "}
            <a href="mailto:hctmanuelortizdev@gmail.com">
              <FaEnvelope className="text-5xl hover:text-gray-500" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className='flex flex-row justify-center items-center p-5 bg-slate-800'>
          <Link to='/about'>
              <IoArrowDownOutline className="animate-bounce text-gray-200 text-2xl" />
          </Link>
      </div>
    </div>
  );
};

export default Presentation;
