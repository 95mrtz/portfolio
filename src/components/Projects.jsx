// importando capturas de sitios web.
import page1 from "../assets/page1.png";
import page2 from "../assets/page2.png";
import page3 from "../assets/page3.png";
import page4 from "../assets/page4.png";
import page5 from "../assets/page5.png";
import page6 from "../assets/page6.png";


// iconos
import {
  SiReact,
  SiTailwindcss,
  SiMaterialui,
  SiStyledcomponents,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
  SiTypescript,
  SiLeaflet
} from "react-icons/si";
import { IoSparklesSharp, IoArrowDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col justify-center items-center">
        <div className="my-3 text-center">
          <h1 className="mb-7 font-normal text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-emerald-400 ">
            Proyectos
          </h1>
          <h3 className="mb-7 px-3 font-normal text-xl sm:text-2xl md:text-4xl">
            {" "}
            Estos son mis proyectos principales{" "}
          </h3>
        </div>

        <div className="flex flex-col gap-4 w-4/5 md:w-3/5 p-2 md:p-5 rounded-lg bg-gray-800">
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 p-2 lg:p-4 rounded-lg bg-gray-600">
            <img
              src={page6}
              alt="imagen de sitio web"
              className="col-span-1 place-self-center rounded-md w-96 h-36 md:h-48"
            />
            <div className="col-span-1 flex flex-col justify-around items-center">
              <p className="text-xl text-center md:text-2xl text-emerald-400 font-semibold mt-2">
                {" "}
                IP Address Tracker - Frontendmentor Challenge
              </p>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <SiReact title="ReactJS" className="text-4xl text-blue-400 hover:text-blue-500" />
                </li>
                <li className="mx-4">
                <SiTailwindcss title="TailwindCSS" className="text-4xl text-sky-500	hover:text-sky-600	" />
                </li>
                <li className="mx-4">
                <SiLeaflet title="Leaflet" className="text-4xl text-green-500	hover:text-green-600	" />
                </li>
              </ul>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <a
                    href="https://github.com/hctmanuelortiz/ip-address-tracker"
                    target="_blank"
                  >
                    <SiGithub title="repository - github" className="text-4xl text-slate-200	hover:text-slate-300" />
                  </a>
                </li>
                <li className="mx-4">
                  <a
                    href="http://ip-address-tracker-challenge-drab.vercel.app/"
                    target="_blank"
                    className="flex flex-row font-semibold italic"
                  >
                    Live Site{" "}
                    <IoSparklesSharp className="mx-2 text-amber-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 p-2 lg:p-4 rounded-lg bg-gray-600">
            <img
              src={page5}
              alt="imagen de sitio web"
              className="col-span-1 place-self-center rounded-md w-96 h-36 md:h-48"
            />
            <div className="col-span-1 flex flex-col justify-around items-center">
              <p className="text-xl text-center md:text-2xl text-emerald-400 font-semibold mt-2">
                {" "}
                Cognizant Softvision challenge
              </p>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <SiReact title="ReactJS" className="text-4xl text-blue-400 hover:text-blue-500" />
                </li>
                <li className="mx-4">
                  <SiTailwindcss title="TailwindCSS" className="text-4xl text-sky-500	hover:text-sky-600	" />
                </li>
                <li className="mx-4">
                  <SiTypescript title="Typescript" className="text-4xl text-blue-500	hover:text-blue-600" />
                </li>
              </ul>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <a
                    href="https://github.com/hctmanuelortiz/cognizant-softvision-challenge"
                    target="_blank"
                  >
                    <SiGithub title="repository - github" className="text-4xl text-slate-200	hover:text-slate-300" />
                  </a>
                </li>
                <li className="mx-4">
                  <a
                    href="http://cognizant-softvision-challenge-beta.vercel.app/"
                    target="_blank"
                    className="flex flex-row font-semibold italic"
                  >
                    Live Site{" "}
                    <IoSparklesSharp className="mx-2 text-amber-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 p-2 lg:p-4 rounded-lg bg-gray-600">
            <img
              src={page1}
              alt="imagen de sitio web"
              className="col-span-1 place-self-center rounded-md w-96 h-36 md:h-48"
            />
            <div className="col-span-1 flex flex-col justify-around items-center">
              <p className="text-xl md:text-2xl text-center text-emerald-400 font-semibold mt-2">
                {" "}
                Adivina el Pokemon!
              </p>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <SiReact title="ReactJS" className="text-4xl text-blue-400 hover:text-blue-500" />
                </li>
                <li className="mx-4">
                  <SiTypescript title="Typescript" className="text-4xl text-blue-500	hover:text-blue-600" />
                </li>
                <li className="mx-4">
                  <SiCss3 title="CSS" className="text-4xl  text-blue-400 hover:text-blue-500" />
                </li>
              </ul>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <a
                    href="https://github.com/hctmanuelortiz/guess-pokemon"
                    target="_blank"
                  >
                    <SiGithub title="repository - github" className="text-4xl text-slate-200	hover:text-slate-300" />
                  </a>
                </li>
                <li className="mx-4">
                  <a
                    href="https://game-guess-pokemon.vercel.app/"
                    target="_blank"
                    className="flex flex-row font-semibold italic"
                  >
                    Live Site{" "}
                    <IoSparklesSharp className="mx-2 text-amber-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 p-2 lg:p-4 rounded-lg bg-gray-600">
            <img
              src={page2}
              alt="imagen de sitio web"
              className="col-span-1 place-self-center rounded-md w-96 h-36 md:h-48"
            />
            <div className="col-span-1 flex flex-col justify-around items-center">
              <p className="text-xl md:text-2xl text-center text-emerald-400 font-semibold mt-2">
                {" "}
                Material ToDo{" "}
              </p>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <SiReact title="ReactJS" className="text-4xl text-blue-400 hover:text-blue-500" />
                </li>
                <li className="mx-4">
                  <SiMaterialui title="Material UI" className="text-4xl text-sky-400	hover:text-sky-500" />
                </li>
              </ul>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <a
                    href="https://github.com/hctmanuelortiz/material-ToDo"
                    target="_blank"
                  >
                    <SiGithub title="repository - github"  className="text-4xl text-slate-200	hover:text-slate-300" />
                  </a>
                </li>
                <li className="mx-4">
                  <a
                    href="https://material-to-do.vercel.app/"
                    target="_blank"
                    className="flex flex-row font-semibold italic"
                  >
                    Live Site{" "}
                    <IoSparklesSharp className="mx-2 text-amber-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 p-2 lg:p-4 rounded-lg bg-gray-600">
            <img
              src={page3}
              alt="imagen de sitio web"
              className="col-span-1 place-self-center rounded-md w-96 h-36 md:h-48"
            />
            <div className="col-span-1 flex flex-col justify-around items-center">
              <p className="text-xl text-center md:text-2xl text-emerald-400 font-semibold mt-2">
                {" "}
                Pokedex with PokeAPI{" "}
              </p>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <SiReact title="ReactJS" className="text-4xl text-blue-400 hover:text-blue-500" />
                </li>
                <li className="mx-4">
                  <SiStyledcomponents title="Styled Components" className="text-6xl text-amber-400	hover:text-amber-500" />
                </li>
              </ul>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <a
                    href="https://github.com/hctmanuelortiz/pokedex-v1"
                    target="_blank"
                  >
                    <SiGithub title="repository - github"  className="text-4xl text-slate-200	hover:text-slate-300" />
                  </a>
                </li>
                <li className="mx-4">
                  <a
                    href="https://pokedex-v1-ashen.vercel.app/"
                    target="_blank"
                    className="flex flex-row font-semibold italic"
                  >
                    Live Site{" "}
                    <IoSparklesSharp className="mx-2 text-amber-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 p-2 lg:p-4 rounded-lg bg-gray-600">
            <img
              src={page4}
              alt="imagen de sitio web"
              className="col-span-1 place-self-center rounded-md w-96 h-36 md:h-48"
            />
            <div className="col-span-1 flex flex-col justify-around items-center">
              <p className="text-xl text-center text-emerald-400 font-semibold mt-2">
                {" "}
                Tip calculator app - Challenge by Frontend Mentor{" "}
              </p>
              <ul className="my-5 row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <SiHtml5 title="HTML" className="text-4xl text-amber-600	hover:text-amber-700" />
                </li>
                <li className="mx-4">
                  <SiCss3 title="CSS" className="text-4xl  text-blue-400 hover:text-blue-500" />
                </li>
                <li className="mx-4">
                  <SiJavascript title="Javascript" className="text-4xl text-amber-300 hover:text-amber-400" />
                </li>
              </ul>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <a
                    href="https://github.com/hctmanuelortiz/tip-calculator-app"
                    target="_blank"
                  >
                    <SiGithub title="repository - github"  className="text-4xl text-slate-200	hover:text-slate-300" />
                  </a>
                </li>
                <li className="mx-4">
                  <a
                    href="https://hctmanuelortiz.github.io/tip-calculator-app/"
                    target="_blank"
                    className="flex flex-row font-semibold italic"
                  >
                    Live Site{" "}
                    <IoSparklesSharp className="mx-2 text-amber-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-7 px-3 flex flex-col justify-around items-center">
          <h3 className="font-normal text-center text-xl md:text-2xl text-gray-200">
            {" "}
            Siempre estoy haciendo algo nuevo (si me gusta mucho, lo veras aca)
            si no, estará en github{" "}
          </h3>
          <a
            href="https://github.com/hctmanuelortiz?tab=repositories"
            target="_blank"
            className="my-3"
          >
            <button className="py-3 px-6 rounded-md flex flex-row justify-around items-center transition ease-in-out delay-150 bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-400 duration-300">
              Mas proyectos{" "}
              <SiGithub title="repository - github"  className="ml-3 text-3xl text-neutral-200	hover:text-neutral-300" />
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center p-5">
        <Link to="/contact">
          <IoArrowDownOutline
            title="Seguir"
            className="animate-bounce text-gray-200 text-2xl"
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
