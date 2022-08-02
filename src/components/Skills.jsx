import {
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiMaterialui,
  SiStyledcomponents,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { IoArrowDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="h-[calc(100vh-80px)] grid grid-rows-6 gap-2">
      <h1 className="row-span-1 place-self-center mt-5 text-center font-normal text-8xl text-emerald-400">
        Habilidades
      </h1>
      <h1 className="row-span-1 place-self-center mt-5 text-center font-normal text-4xl text-gray-200">
        A la fecha, estas son las tecnologias y herramientas con las que trabajo
      </h1>
      <div className="row-span-3 place-self-center w-3/4 p-5 rounded-lg bg-gray-800">
        <ul className="flex flex-row flex-wrap justify-center items-center">
          <li className="m-3 md:m-6  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {" "}
            <SiReact
              title="React JS"
              className="text-3xl md:text-6xl text-blue-400 hover:text-blue-500"
            />
          </li>
          <li className="m-3 md:m-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {" "}
            <SiReactrouter
              title="React Router"
              className="text-3xl md:text-6xl text-red-400 hover:text-red-500"
            />
          </li>
          <li className="m-3 md:m-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <SiTailwindcss
              title="Tailwind CSS"
              className="text-3xl md:text-6xl text-cyan-400 hover:text-cyan-500"
            />
          </li>
          <li className="m-3 md:m-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {" "}
            <SiBootstrap
              title="Bootstrap"
              className="text-3xl md:text-6xl text-purple-400 hover:text-purple-500"
            />
          </li>
          <li className="m-3 md:m-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {" "}
            <SiStyledcomponents
              title="Styled Components"
              className="text-3xl md:text-6xl text-amber-400	hover:text-amber-500"
            />
          </li>
          <li className="m-3 md:m-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {" "}
            <SiMaterialui
              title="Material UI"
              className="text-3xl md:text-6xl text-sky-400	hover:text-sky-500"
            />
          </li>
          <li className="m-3 md:m-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {" "}
            <SiJavascript
              title="Javascript"
              className="text-3xl md:text-6xl text-amber-300 hover:text-amber-400"
            />
          </li>
          <li className="m-3 md:m-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {" "}
            <SiCss3
              title="CSS3"
              className="text-3xl md:text-6xl text-blue-400 hover:text-blue-500"
            />
          </li>
          <li className="m-3 md:m-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {" "}
            <SiHtml5
              title="HTML5"
              className="text-3xl md:text-6xl text-amber-600	hover:text-amber-700"
            />
          </li>
          <li className="m-3 md:m-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {" "}
            <SiGithub
              title="Github"
              className="text-3xl md:text-6xl text-gray-200 hover:text-gray-400"
            />
          </li>
          <li className="m-3 md:m-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {" "}
            <SiGit
              title="Git"
              className="text-3xl md:text-6xl text-red-400 hover:text-red-500"
            />
          </li>
          <li className="m-3 md:m-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {" "}
            <SiPhp
              title="PHP"
              className="text-3xl md:text-6xl text-blue-400 hover:text-blue-500"
            />
          </li>
          <li className="m-3 md:m-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            {" "}
            <SiMysql
              title="mySQL"
              className="text-3xl md:text-6xl text-gray-400 hover:text-gray-500"
            />
          </li>
        </ul>
        <div className="my-4 flex flex-row justify-center items-center">
          <h4 className="text-emerald-400 text-xl font-semibold ">
            Y un futuro habran mas...
          </h4>
        </div>
      </div>
      <div className="flex flex-row justify-center items-end p-5">
        <Link to="/projects">
          <IoArrowDownOutline title="Seguir" className="animate-bounce text-gray-200 text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Skills;
