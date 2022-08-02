import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaHandSpock } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Contact = () => {
    return ( 
      <div className="h-[calc(100vh-80px)] grid grid-rows-4 gap-2">
        <div className="row-span-1 place-self-center">
          <h1 className="mb-7 font-normal text-8xl text-gray-200">Contacto</h1>
        <h4> Si ya llegaste hasta acá, lo mejor seria que sigamos en contacto</h4>
        </div>
      

        <div className="row-span-2 place-self-center w-3/4 p-7 grid grid-cols-2 grid-row-2 gap-6 rounded-lg bg-gray-400">
          <button className="px-2 py-5 m-2 rounded-lg transition ease-in-out delay-150 bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">
          <a href="https://github.com/hctmanuelortiz" target="_blank" className="flex flex-row justify-around items-center">
          <p>/hctmanuelortiz</p>
          <FaGithub className="text-5xl" />
            </a>
          </button>

          <button className="px-2 py-5 m-2 rounded-lg transition ease-in-out delay-150 bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">
          <a href="https://www.linkedin.com/in/hctmanuelortiz/" target="_blank" className="flex flex-row justify-around items-center">
          <p>/hctmanuelortiz</p> <FaLinkedin className="text-5xl"/>
            </a>
          </button>

          <button className="px-2 py-5 m-2 rounded-lg transition ease-in-out delay-150 bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">
          <a href="mailto:hctmanuelortizdev@gmail.com" className="flex flex-row justify-around items-center">
          <p>¡Enviame un mail!</p> <FaEnvelope className="text-5xl"/>
            </a>
          </button>

          <button className="px-2 py-5 m-2 rounded-lg transition ease-in-out delay-150 bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">
          <a href="https://twitter.com/hctmanuelortiz" target="_blank" className="flex flex-row justify-around items-center">
          <p>@hctmanuelortiz</p> <FaTwitter className="text-5xl"/>
            </a>
          </button>
        </div>

        <div className="row-span-1 my-5 flex flex-col justify-around items-center">
          <p>
            ¡Gracias, vuelva prontos!
          </p>
         <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><FaHandSpock /></a> 
        </div>
    </div>
     );
}
 
export default Contact;