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
    <div className="h-[calc(100vh-80px)] grid grid-rows-5 gap-2">
        <h1 className="row-span-1 place-self-center text-center font-normal text-8xl text-gray-200">Habilidades</h1>
        <div className="row-span-3 place-self-center w-3/4 p-5 rounded-lg bg-slate-300">
          <ul className="flex flex-row flex-wrap justify-center items-center">
           <li className="m-3 md:m-6">
              {" "}
              <SiReact
                title="React JS"
                className="text-3xl md:text-6xl text-blue-400 hover:text-blue-500"
              />
            </li>
           <li className="m-3 md:m-6">
              {" "}
              <SiReactrouter
                title="React Router"
                className="text-3xl md:text-6xl text-red-400 hover:text-red-500"
              />
            </li>
           <li className="m-3 md:m-6">
              <SiTailwindcss
                title="Tailwind CSS"
                className="text-3xl md:text-6xl text-cyan-400 hover:text-cyan-500"
              />
            </li>
           <li className="m-3 md:m-6">
              {" "}
              <SiBootstrap
                title="Bootstrap"
                className="text-3xl md:text-6xl text-purple-400 hover:text-purple-500"
              />
            </li>
           <li className="m-3 md:m-6">
              {" "}
              <SiStyledcomponents
                title="Styled Components"
                className="text-3xl md:text-6xl text-amber-400	hover:text-amber-500"
              />
            </li>
           <li className="m-3 md:m-6">
              {" "}
              <SiMaterialui
                title="Material UI"
                className="text-3xl md:text-6xl text-sky-400	hover:text-sky-500"
              />
            </li>
           <li className="m-3 md:m-6">
              {" "}
              <SiJavascript
                title="Javascript"
                className="text-3xl md:text-6xl text-amber-300 hover:text-amber-400"
              />
            </li>
           <li className="m-3 md:m-6">
              {" "}
              <SiCss3
                title="CSS3"
                className="text-3xl md:text-6xl text-blue-400 hover:text-blue-500"
              />
            </li>
           <li className="m-3 md:m-6">
              {" "}
              <SiHtml5
                title="HTML5"
                className="text-3xl md:text-6xl text-amber-600	hover:text-amber-700"
              />
            </li>
           <li className="m-3 md:m-6">
              {" "}
              <SiGithub
                title="Github"
                className="text-3xl md:text-6xl text-gray-200 hover:text-gray-400"
              />
            </li>
           <li className="m-3 md:m-6">
              {" "}
              <SiGit
                title="Git"
                className="text-3xl md:text-6xl text-red-400 hover:text-red-500"
              />
            </li>
           <li className="m-3 md:m-6">
              {" "}
              <SiPhp
                title="PHP"
                className="text-3xl md:text-6xl text-blue-400 hover:text-blue-500"
              />
            </li>
           <li className="m-3 md:m-6">
              {" "}
              <SiMysql
                title="mySQL"
                className="text-3xl md:text-6xl text-gray-400 hover:text-gray-500"
              />
            </li>
          </ul>
        <div className="my-4">
          <h4>Siempre aprendiendo algo mas...</h4>
        </div>
        </div>
      <div className="flex flex-row justify-center items-center p-5 bg-slate-800">
        <Link to="/projects">
          <IoArrowDownOutline className="animate-bounce text-gray-200 text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Skills;
