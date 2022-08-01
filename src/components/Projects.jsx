// importando capturas de sitios web.
import page1 from "../assets/page1.png";
import page2 from "../assets/page2.png";
import page3 from "../assets/page3.png";
import page4 from "../assets/page4.png";

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
} from "react-icons/si";
import { IoSparklesSharp, IoArrowDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Projects = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col justify-center items-center">
        <div className="my-3 text-center">
          <h1 className="mb-7 font-normal text-8xl text-gray-200">Proyectos</h1>
          <h3 className="mb-7 font-normal text-3xl text-gray-200">
            {" "}
            Estos son mis proyectos principales{" "}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-8 w-3/5 h-3/4 p-5 rounded-lg bg-slate-500">
          <div className="grid grid-rows-2 p-3 rounded-lg bg-slate-300">
            <img
              src={page1}
              alt="imagen de sitio web"
              className="row-span-1 rounded-md w-96 h-52"
            />
            <div className="grid grid-rows-3 grid-cols-2 gap-3 justify-content">
              <p className="row-span-1 col-span-2 text-2xl text-slate-700 font-semibold mt-2 flex flex-row justify-center items-center">
                {" "}
                Temperature converter{" "}
              </p>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <SiReact className="text-4xl text-blue-400 hover:text-blue-500" />
                </li>
                <li className="mx-4">
                  <SiTailwindcss className="text-4xl text-sky-500	hover:text-sky-600	" />
                </li>
              </ul>
              <div className="row-span-1 col-span-2 flex flex-row justify-around items-center">
                <a
                  href="https://github.com/hctmanuelortiz/temperature-converter"
                  target="_blank"
                >
                  <SiGithub className="text-4xl text-neutral-600	hover:text-neutral-700" />
                </a>
                <a
                  href="http://temperature-converter-gray.vercel.app/"
                  target="_blank"
                  className="flex flex-row text-slate-700 font-semibold italic"
                >
                  Live Site <IoSparklesSharp className="mx-2 text-amber-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 p-3 rounded-lg bg-slate-300">
            <img
              src={page2}
              alt="imagen de sitio web"
              className="row-span-1 rounded-md w-96 h-52"
            />
            <div className="grid grid-rows-3 grid-cols-2 gap-3">
              <p className="row-span-1 col-span-2 text-2xl text-slate-700 font-semibold mt-2 flex flex-row justify-center items-center">
                {" "}
                Material Todoist{" "}
              </p>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <SiReact className="text-4xl text-blue-400 hover:text-blue-500" />
                </li>
                <li className="mx-4">
                  <SiMaterialui className="text-4xl text-sky-400	hover:text-sky-500" />
                </li>
              </ul>

              <div className="row-span-1 col-span-2 flex flex-row justify-around items-center">
                <a
                  href="https://github.com/hctmanuelortiz/material-ToDo"
                  target="_blank"
                >
                  <SiGithub className="text-4xl text-neutral-600	hover:text-neutral-700" />
                </a>
                <a
                  href="https://material-to-do.vercel.app/"
                  target="_blank"
                  className="flex flex-row text-slate-700 font-semibold italic"
                >
                  Live Site <IoSparklesSharp className="mx-2 text-amber-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 p-3 rounded-lg bg-slate-300">
            <img
              src={page3}
              alt="imagen de sitio web"
              className="row-span-1 rounded-md w-96 h-52"
            />
            <div className="row-span-1 grid grid-rows-3 grid-cols-2 gap-3">
              <p className="row-span-1 col-span-2 text-2xl text-slate-700 font-semibold mt-2 flex flex-row justify-center items-center">
                Pokedex with PokeAPI
              </p>
              <ul className="row-span-1 col-span-2 justify-content flex flex-row justify-center items-center">
                <li className="mx-4">
                  <SiReact className="text-4xl text-blue-400 hover:text-blue-500" />
                </li>
                <li className="mx-4">
                  <SiStyledcomponents className="text-6xl text-amber-400	hover:text-amber-500" />
                </li>
              </ul>

              <div className="row-span-1 col-span-2 flex flex-row justify-around items-center">
                <a
                  href="https://github.com/hctmanuelortiz/pokedex-v1"
                  target="_blank"
                >
                  <SiGithub className="text-4xl text-neutral-600	hover:text-neutral-700" />
                </a>
                <a
                  href="https://pokedex-v1-ashen.vercel.app/"
                  target="_blank"
                  className="flex flex-row text-slate-700 font-semibold italic"
                >
                  Live Site <IoSparklesSharp className="mx-2 text-amber-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 p-3 rounded-lg bg-slate-300">
            <img
              src={page4}
              alt="imagen de sitio web"
              className="row-span-1 rounded-md w-96 h-52"
            />
            <div className="row-span-1 grid grid-rows-3 grid-cols-2 gap-3">
              <p className="row-span-1 col-span-2 text-2xl text-center text-slate-700 font-semibold mt-2 flex flex-row justify-center items-center">
                {" "}
                Tip calculator app - Challenge by Frontend Mentor{" "}
              </p>
              <ul className="row-span-1 col-span-2 justify-content flex flex-row justify-center items-center">
                <li className="mx-4">
                  <SiHtml5 className="text-4xl text-amber-600	hover:text-amber-700" />
                </li>
                <li className="mx-4">
                  <SiCss3 className="text-4xl  text-blue-400 hover:text-blue-500" />
                </li>
                <li className="mx-4">
                  <SiJavascript className="text-4xl text-amber-300 hover:text-amber-400" />
                </li>
              </ul>

              <div className="row-span-1 col-span-2 flex flex-row justify-around items-center">
                <a
                  href="https://github.com/hctmanuelortiz/tip-calculator-app"
                  target="_blank"
                >
                  <SiGithub className="text-4xl text-neutral-600	hover:text-neutral-700" />
                </a>
                <a
                  href="https://hctmanuelortiz.github.io/tip-calculator-app/"
                  target="_blank"
                  className="flex flex-row text-slate-700 font-semibold italic"
                >
                  Live Site <IoSparklesSharp className="mx-2 text-amber-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="my-7 flex flex-col justify-around items-center">
          <h3 className="font-normal text-center text-3xl text-gray-200">
            {" "}
            Siempre estoy haciendo algo nuevo (si me gusta mucho, lo veras aca)
            si no, estará en github{" "}
          </h3>

          <a
            href="https://github.com/hctmanuelortiz?tab=repositories"
            target="_blank"
            className="my-3"
          >
            <SiGithub className="text-7xl text-neutral-200	hover:text-neutral-300" />
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center p-5 bg-slate-800">
        <Link to="/contact">
          <IoArrowDownOutline className="animate-bounce text-gray-200 text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
