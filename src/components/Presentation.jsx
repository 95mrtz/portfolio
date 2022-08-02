import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoArrowDownOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <div className="h-[calc(100vh-80px)] grid grid-rows-3 gap-2 animate-presentation">
      <div className="row-span-1 place-self-center">
        <h1 className="row-span-1 place-self-center my-3 font-normal text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-gray-200">
          <span className="font-semibold text-emerald-400">M</span>anuel{" "}
          <span className="font-semibold text-emerald-400">O</span>rtiz{" "}
        </h1>
        <h3 className="mt-5 row-span-1 text-center font-mono text-lg md:text-3xl lg:text-2xl xl:text-4xl">{`< frontend developer /> `}</h3>
        
      </div>

      <ul className="row-span-1 my-3 flex flex-row justify-around lg:justify-evenly items-center">
          <li className="mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300">
            <a href="https://github.com/hctmanuelortiz" target="_blank">
              <FaGithub className="text-3xl md:text-5xl hover:text-emerald-400" />
            </a>
          </li>
          <li className="mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300">
            {" "}
            <a
              href="https://www.linkedin.com/in/hctmanuelortiz/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl md:text-5xl hover:text-emerald-400" />
            </a>
          </li>
          <li className="mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300">
            {" "}
            <a href="mailto:hctmanuelortizdev@gmail.com">
              <FaEnvelope className="text-3xl md:text-5xl hover:text-emerald-400" />
            </a>
          </li>
        </ul>

      <div className="row-span-1 py-4 flex flex-row justify-center items-end">
        <Link to="/about">
          <IoArrowDownOutline title="Seguir" className="animate-bounce text-gray-200 text-2xl hover:text-emerald-400" />
        </Link>
      </div>
    </div>
  );
};

export default Presentation;
