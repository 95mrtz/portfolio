import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoArrowDownOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <div className="h-[calc(100vh-80px)] grid grid-rows-3 gap-2">
      <div className="row-span-1 place-self-center">
        <h1 className="row-span-1 place-self-center my-3 font-normal text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-gray-200">
          <span className="font-semibold">M</span>anuel{" "}
          <span className="font-semibold">O</span>rtiz{" "}
        </h1>
        <h3 className="row-span-1 text-center text-lg md:text-xl lg:text-2xl xl:text-4xl">{`< Desarrollor frontend /> `}</h3>
        
      </div>

      <ul className="row-span-1 my-3 flex flex-row justify-around lg:justify-evenly items-center">
          <li className="mx-2">
            <a href="https://github.com/hctmanuelortiz" target="_blank">
              <FaGithub className="text-5xl hover:text-gray-500" />
            </a>
          </li>
          <li className="mx-2">
            {" "}
            <a
              href="https://www.linkedin.com/in/hctmanuelortiz/"
              target="_blank"
            >
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

      <div className="row-span-1 py-4 flex flex-row justify-center items-end bg-slate-800">
        <Link to="/about">
          <IoArrowDownOutline className="animate-bounce text-gray-200 text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Presentation;
