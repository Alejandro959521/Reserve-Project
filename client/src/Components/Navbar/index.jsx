import { NavLink } from "react-router-dom"
import logo from "./../../../img/logo.png"
import React, { useState } from "react";



const Navbar = ({ openLoginClick,ChangeToSingUp }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <nav className="bg-[#003366] flex justify-around items-center z-10 top-0 w-full p-0 m-0 text-lg">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-36" /> {/* Ajusta la altura del logo según sea necesario */}
            </div>
            <ul className="flex items-center gap-x-16">
                <li className="text-lg">
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? 'text-[#DAA520] border-b-2 border-[#DAA520] font-semibold ' : 'text-white  hover:text-[#DAA520]'}
                    >
                        Inicio
                    </NavLink>
                </li>
                <li>
                <NavLink
                        to="/#contactSection"
                        className={({ isActive }) =>
                            isActive ? 'text-white hover:text-[#DAA520]' : 'text-white hover:text-[#DAA520]'
                        }
                    >
                        Contáctame
                    </NavLink>
                </li>
                <li>
                <NavLink
                        to="/#aboutSection"
                        className={({ isActive }) =>
                            isActive ? 'text-white hover:text-[#DAA520]' : 'text-white hover:text-[#DAA520]'
                        }
                    >
                        Quiénes Somos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/hospedajes'
                        className={({ isActive }) => isActive ? 'text-[#DAA520] border-b-2 border-[#DAA520] font-semibold ' : 'text-white hover:text-[#DAA520]'}
                    >
                        Hospedajes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/servicios'
                        className={({ isActive }) => isActive ? 'text-[#DAA520] border-b-2 border-[#DAA520] font-semibold ' : 'text-white hover:text-[#DAA520]'}
                    >
                        Servicios
                    </NavLink>
                </li>
                <li className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center text-white focus:outline-none hover:text-[#DAA520]"
                    >
                        Iniciar Sesión
                        <svg
                            className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
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
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-400"
                            >
                                Iniciar sesión
                            </button>
                            <button
                                onClick={ChangeToSingUp}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-400"
                            >
                                Registrarse
                            </button>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    )


}

export default Navbar