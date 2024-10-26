import { NavLink } from "react-router-dom"
import logo from "./../../../img/logo.png"


const Navbar = ({openLoginClick}) => {


    return (
        <nav className="bg-[#003366] flex justify-around items-center z-10 top-0 w-full p-0 m-0 text-lg">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-36" /> {/* Ajusta la altura del logo según sea necesario */}
            </div>
            <ul className="flex items-center gap-x-16">
                <li className="text-lg">
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? 'text-[#DAA520] border-b-2 border-[#DAA520] font-semibold ' : 'text-white'}
                    >
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/Contactame'
                        className={({ isActive }) => isActive ? 'text-[#DAA520] border-b-2 border-[#DAA520] font-semibold ' : 'text-white'}
                    >
                        Contactame
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/quienes-somos'
                        className={({ isActive }) => isActive ? 'text-[#DAA520] border-b-2 border-[#DAA520] font-semibold ' : 'text-white'}
                    >
                        Quienes Somos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/hospedajes'
                        className={({ isActive }) => isActive ? 'text-[#DAA520] border-b-2 border-[#DAA520] font-semibold ' : 'text-white'}
                    >
                        Hospedajes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/servicios'
                        className={({ isActive }) => isActive ? 'text-[#DAA520] border-b-2 border-[#DAA520] font-semibold ' : 'text-white'}
                    >
                        Servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/login'
                        onClick={openLoginClick}
                        className={({ isActive }) => isActive ? 'text-[#DAA520] border-b-2 border-[#DAA520] font-semibold ' : 'text-white'}
                    >
                        Iniciar Sesión
                    </NavLink>
                </li>
            </ul>
        </nav>
    )


}

export default Navbar