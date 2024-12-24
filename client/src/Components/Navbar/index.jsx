import { NavLink } from "react-router-dom"
import logo from "./../../../img/logo.png"
import React, { useState } from "react";
import { useContext } from "react"
import { InfoContext } from "../../Context"


const Navbar = ({ openLoginClick, ChangeToSingUp }) => {
    const context = useContext(InfoContext);
  
    // Estado para el menú hamburguesa
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // Estado para el desplegable de inicio de sesión
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  
    return (
      <nav className="bg-[#003366] flex items-center justify-between w-full p-4 text-lg z-20 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-36" />
        </div>
  
        {/* Menú hamburguesa para móviles */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
  
        {/* Lista de enlaces */}
        <ul
          className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 absolute md:static bg-[#003366] w-full md:w-auto left-0 transition-all duration-300 space-x-8 pr-4 ${
            isMenuOpen ? "top-32" : "top-[-500px]"
          } md:top-auto`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#DAA520] border-b-2 border-[#DAA520] font-semibold"
                  : "text-white hover:text-[#DAA520]"
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#contactSection"
              className="text-white hover:text-[#DAA520]"
            >
              Contáctame
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#aboutSection"
              className="text-white hover:text-[#DAA520]"
            >
              Quiénes Somos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hospedajes"
              className={({ isActive }) =>
                isActive
                  ? "text-[#DAA520] border-b-2 border-[#DAA520] font-semibold"
                  : "text-white hover:text-[#DAA520]"
              }
            >
              Hospedajes
            </NavLink>
          </li>
          {context.dataToken && context.dataUser?.role === "admin" && (
            <li>
              <NavLink
                to="/Usuarios"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#DAA520] border-b-2 border-[#DAA520] font-semibold"
                    : "text-white hover:text-[#DAA520]"
                }
              >
                Administración
              </NavLink>
            </li>
          )}
          {context.dataToken ? (
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-white focus:outline-none hover:text-[#DAA520]"
              >
                Hola {context.dataUser?.name || "Invitado"}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <button
                    onClick={context.logOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-400"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-white focus:outline-none hover:text-[#DAA520]"
              >
                Iniciar Sesión
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <button
                    onClick={openLoginClick}
                    className="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-400"
                  >
                    Iniciar sesión
                  </button>
                  <button
                    onClick={ChangeToSingUp}
                    className="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-400"
                  >
                    Registrarse
                  </button>
                </div>
              )}
            </li>
          )}
        </ul>
      </nav>
    );
  };
  

export default Navbar