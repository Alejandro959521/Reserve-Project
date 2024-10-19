import { NavLink } from "react-router-dom"

const Navbar = () =>{
    const textDecoration = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm">
            <ul className="flex items-center gap-3">
                
                <li className="font-semibold text-lg">
                    <NavLink
                    to='/'
                    className = {({ isActive }) => isActive ? textDecoration : undefined}
                    >
                        Inicio
                    </NavLink>

                </li>
                <li>
                    <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? textDecoration : undefined}
                    >
                        Quienes Somos
                    </NavLink>

                </li>
                <li>
                    <NavLink
                    to='/'
                    >
                        Hospedajes
                    </NavLink>

                </li>
                <li>
                    <NavLink
                    to='/'
                    >
                        Servicios
                    </NavLink>

                </li>
                <li>
                    <NavLink
                    to='/'
                    >
                        Iniciar Sesion
                    </NavLink>

                </li>
                
            </ul>

        </nav>
    )


}

export default Navbar