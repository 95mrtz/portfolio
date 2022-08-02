import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaHandSpock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="h-full md:h-[calc(100vh-80px)] grid grid-rows-4 gap-2 sm:gap-4">
      <div className="row-span-1 place-self-center px-3 flex flex-col justify-center items-center">
        <h1 className="mb-7 font-normal text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-gray-200">
          Contacto
        </h1>
        <h4 className="text-center text-lg sm:text-2xl lg:text-4xl">
          {" "}
          Si ya llegaste hasta acá, lo mejor seria que sigamos en contacto
        </h4>
      </div>

      <div className="row-span-2 place-self-center w-3/4 p-2 md:p-7 grid  lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-3 md:gap-6 rounded-lg bg-gray-400">
        <button className="px-2 py-5 m-2 rounded-lg transition ease-in-out delay-150 bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-400 duration-300">
          <a
            href="https://github.com/hctmanuelortiz"
            target="_blank"
            className="flex flex-row justify-around items-center"
          >
            <p>/hctmanuelortiz</p>
            <FaGithub className="text-2xl md:text-5xl" />
          </a>
        </button>

        <button className="px-2 py-5 m-2 rounded-lg transition ease-in-out delay-150 bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-400 duration-300">
          <a
            href="https://www.linkedin.com/in/hctmanuelortiz/"
            target="_blank"
            className="flex flex-row justify-around items-center"
          >
            <p>/hctmanuelortiz</p>{" "}
            <FaLinkedin className="text-2xl md:text-5xl" />
          </a>
        </button>

        <button className="px-2 py-5 m-2 rounded-lg transition ease-in-out delay-150 bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-400 duration-300">
          <a
            href="mailto:hctmanuelortizdev@gmail.com"
            className="flex flex-row justify-around items-center"
          >
            <p>¡Enviame un mail!</p>{" "}
            <FaEnvelope className="text-2xl md:text-5xl" />
          </a>
        </button>

        <button className="px-2 py-5 m-2 rounded-lg transition ease-in-out delay-150 bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-400 duration-300">
          <a
            href="https://twitter.com/hctmanuelortiz"
            target="_blank"
            className="flex flex-row justify-around items-center"
          >
            <p>@hctmanuelortiz</p>{" "}
            <FaTwitter className="text-2xl md:text-5xl" />
          </a>
        </button>
      </div>

      <div className="row-span-1 my-5 px-3 flex flex-col justify-center items-center">
        <p className="text-center text-lg md:text-2xl mb-3">
          Espero hayas disfrutado mucho este paseo ¡Gracias, vuelva prontos!
        </p>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <FaHandSpock
            title="Live long and prosper"
            className="text-3xl text-emerald-400"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
