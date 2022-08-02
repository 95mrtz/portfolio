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
          <h1 className="mb-7 font-normal text-8xl text-emerald-400 ">
            Proyectos
          </h1>
          <h3 className="mb-7 font-normal text-3xl">
            {" "}
            Estos son mis proyectos principales{" "}
          </h3>
        </div>

        <div className="flex flex-col gap-4 w-1/2 md:w-3/5 p-5 rounded-lg bg-gray-800">
          <div className="grid grid-cols-2 p-4 rounded-lg bg-gray-600">
            <img
              src={page1}
              alt="imagen de sitio web"
              className="col-span-1 place-self-center rounded-md w-96 h-48"
            />
            <div className="col-span-1 flex flex-col justify-around items-center">
              <p className="text-2xl text-emerald-400 font-semibold mt-2">
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
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <a
                    href="https://github.com/hctmanuelortiz/temperature-converter"
                    target="_blank"
                  >
                    <SiGithub className="text-4xl text-slate-200	hover:text-slate-300" />
                  </a>
                </li>
                <li className="mx-4">
                  <a
                    href="http://temperature-converter-gray.vercel.app/"
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

          <div className="grid grid-cols-2 p-4 rounded-lg bg-gray-600">
            <img
              src={page2}
              alt="imagen de sitio web"
              className="col-span-1 place-self-center rounded-md w-96 h-48"
            />
            <div className="col-span-1 flex flex-col justify-around items-center">
              <p className="text-2xl text-emerald-400 font-semibold mt-2">
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
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <a
                    href="https://github.com/hctmanuelortiz/material-ToDo"
                    target="_blank"
                  >
                    <SiGithub className="text-4xl text-slate-200	hover:text-slate-300" />
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

          <div className="grid grid-cols-2 p-4 rounded-lg bg-gray-600">
            <img
              src={page3}
              alt="imagen de sitio web"
              className="col-span-1 place-self-center rounded-md w-96 h-48"
            />
            <div className="col-span-1 flex flex-col justify-around items-center">
              <p className="text-2xl text-emerald-400 font-semibold mt-2">
                {" "}
                Pokedex with PokeAPI{" "}
              </p>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <SiReact className="text-4xl text-blue-400 hover:text-blue-500" />
                </li>
                <li className="mx-4">
                  <SiStyledcomponents className="text-6xl text-amber-400	hover:text-amber-500" />
                </li>
              </ul>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <a
                    href="https://github.com/hctmanuelortiz/pokedex-v1"
                    target="_blank"
                  >
                    <SiGithub className="text-4xl text-slate-200	hover:text-slate-300" />
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

          <div className="grid grid-cols-2 p-4 rounded-lg bg-gray-600">
            <img
              src={page4}
              alt="imagen de sitio web"
              className="col-span-1 place-self-center rounded-md w-96 h-48"
            />
            <div className="col-span-1 flex flex-col justify-around items-center">
              <p className="text-xl text-center text-emerald-400 font-semibold mt-2">
                {" "}
                Tip calculator app - Challenge by Frontend Mentor{" "}
              </p>
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
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
              <ul className="row-span-1 col-span-2 flex flex-row justify-center items-center">
                <li className="mx-4">
                  <a
                    href="https://github.com/hctmanuelortiz/tip-calculator-app"
                    target="_blank"
                  >
                    <SiGithub className="text-4xl text-slate-200	hover:text-slate-300" />
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
        <div className="my-7 flex flex-col justify-around items-center">
          <h3 className="font-normal text-center text-2xl text-gray-200">
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
              <SiGithub className="ml-3 text-3xl text-neutral-200	hover:text-neutral-300" />
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
