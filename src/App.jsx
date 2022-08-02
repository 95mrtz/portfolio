import { Routes, Route, Link, NavLink } from "react-router-dom";

import Presentation from "./components/Presentation";
import Aboutme from "./components/Aboutme.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="min-h-full min-w-full bg-gray-900 text-slate-50">
      <header className="h-20 flex flex-row justify-center items-center bg-gray-800 text-emerald-400 rounded-b-lg">
        <nav>
          <ul className="flex flex-row flex-wrap justify-center">
            <li className="mx-3 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-2xl" : "text-xl"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li className="mx-3 ">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-2xl" : "text-xl"
                }
              >
                Sobre mi
              </NavLink>
            </li>
            <li className="mx-3 ">
              <NavLink to="/skills"
              className={({ isActive }) =>
                  isActive ? "text-2xl" : "text-xl"
                }
              >
                Habilidades
              </NavLink>
            </li>
            <li className="mx-3 ">
              <NavLink to="/projects"
                className={({ isActive }) =>
                isActive ? "text-2xl" : "text-xl"
              }
            >
              Proyectos
              </NavLink>
            </li>
            <li className="mx-3 ">
              <NavLink to="/contact"className={({ isActive }) =>
                  isActive ? "text-2xl" : "text-xl"
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
