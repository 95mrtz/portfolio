import { IoArrowDownOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Aboutme = () => {
  return (
    <div className="h-[calc(100vh-80px)] grid grid-rows-4 gap-2">
      <div className="row-span-1 flex flex-col justify-center items-center">
        <h1 className="font-normal text-8xl text-gray-200">Sobre mi</h1>
      </div>
        <div className="row-span-2 place-self-center w-3/4 p-5 rounded-lg bg-slate-400">
          <p className="text-lg">
            Hola, mi nombre es Troy McClure, tal vez me recuerden de... no, es broma, mi Manuel Ortiz, soy de Nuequen, Argentina. Soy
            desarrollador frontend y estoy buscando mi primera oportunidad
            laboral en IT, estudie la Tecnicatura en desarollo web en la <a className="underline"
              href="https://www.fi.uncoma.edu.ar/index.php/academica/carreras-fai/tecnicatura/"
              target="_blank"
            >Universidad Nacional del Comahue</a> , durante la carrera aprendi diferentes tecnologias lo cual hizo
            crecer mas mi pasión por el frontend (en especial por React).
          </p>
          <p className="my-3 text-lg">
            Me considero una persona comprometida, honesta, responsable, con
            muchas ganas de aprender y seguir profundizando en los conocimientos que ya poseo.
          </p>
          <p className="text-lg">
            Algo mas...
          </p>
        </div>

    <div className="row-span-1 py-4 flex flex-row justify-center items-end bg-slate-800">
        <Link to="/skills">
          <IoArrowDownOutline className="animate-bounce text-gray-200 text-2xl" />
        </Link>
      </div>
</div>
  );
};

export default Aboutme;
