import { IoArrowDownOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Aboutme = () => {
  return (
    <div className="h-full md:h-[calc(100vh-80px)] grid grid-rows-6 md:grid-rows-4 gap-2">
      <div className="row-span-1 flex flex-col justify-center items-center">
        <h1 className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl ">Un poco <span className="text-emerald-400">sobre mi</span></h1>
      </div>
        <div className="row-span-4 md:row-span-2 place-self-center w-5/6 md:w-3/4 p-5 rounded-lg bg-gray-800">
          <p className="mb-3 text-sm md:text-lg">
            Hola, mi nombre es Troy McClure, tal vez me recuerden de portfolios como... no, es broma, mi nombre Manuel Ortiz, soy de Neuqu&eacute;n, Argentina. </p>
            <p className="text-sm	md:text-lg">
            Soy desarrollador frontend y estoy buscando mi primera oportunidad
            laboral en IT, estudie la Tecnicatura en desarollo web en la <a className="underline underline-offset-4 decoration-emerald-400"
              href="https://www.fi.uncoma.edu.ar/index.php/academica/carreras-fai/tecnicatura/"
              target="_blank"
            >Universidad Nacional del Comahue</a> , durante la carrera aprendi diferentes tecnologias lo cual hizo
            crecer mas mi pasión por el frontend (en especial por React, me gusta mucho trabajar con react).
            </p>
          <p className="my-3 text-sm md:text-lg">
            Me considero una persona comprometida, honesta, responsable, con mucha curiosidad en saber como funciona todo,
            muchas ganas de aprender y seguir profundizando en los conocimientos que ya poseo
          </p>
          <p className="mb-6 text-sm md:text-lg">
            En mi tiempo libre me gusta ver peliculas relacionadas con el espacio, resolver crimenes y multiversos,
             tambien disfruto mucho salir a caminar, 
            armar playlist y escuchar podcasts sobre diversos temas
          </p>
          <p className="text-sm md:text-lg italic md:text-end">
            Bueno, ahora me conoces un poco mas, &iexcl; sigamos!
          </p>
        </div>

    <div className="row-span-1 py-4 flex flex-row justify-center items-end">
        <Link to="/skills">
          <IoArrowDownOutline title="Seguir" className="animate-bounce text-gray-200 text-2xl" />
        </Link>
      </div>
</div>
  );
};

export default Aboutme;
