import { Routes, Route, Link, NavLink } from "react-router-dom";

import Presentation from "./components/Presentation";
import Aboutme from "./components/Aboutme.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="w-full bg-slate-800 text-slate-50">
      <header className="flex flex-row justify-center bg-slate-400 rounded-b-lg">
        <nav className="my-4">
          <ul className="flex flex-row justify-center">
            <li>
              <NavLink
                to="/"
                className={`${({ isActive }) => (isActive ? 'underline underline-offset-4 font-bold' : undefined)} mx-3 `}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                {({ isActive }) => (
                  <span className={`${({ isActive }) =>
                  isActive ? 'underline underline-offset-4 font-bold' : undefined
                }  mx-3 `}>
                    Sobre mi
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills">
                {({ isActive }) => (
                  <span className={`${({ isActive }) =>
                  isActive ? 'underline underline-offset-4 font-bold' : undefined
                }  mx-3 `}>
                    Habilidades
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">
              {({ isActive }) => (
                  <span className={`${({ isActive }) =>
                  isActive ? 'underline underline-offset-4' : undefined
                }  mx-3 `}>
                    Proyectos
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
              {({ isActive }) => (
                  <span className={`${({ isActive }) =>
                  isActive ? 'underline underline-offset-4' : undefined
                }  mx-3 `}>
                    Contacto
                  </span>
                )}
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
