import {useNavigate, useLocation  } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const Sidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [activeItem, setActiveItem] = useState('Usuarios');

 useEffect(() => {
        // Detecta la ruta actual y actualiza el estado de activeItem
        if (location.pathname.includes('/Usuarios')) {
            setActiveItem('Usuarios');
        } else if (location.pathname.includes('/Habitaciones')) {
            setActiveItem('Habitaciones');
        } else if (location.pathname.includes('/Reservas')) {
            setActiveItem('Reservas');
        }
    }, [location.pathname]);

    const changetoRoom = () => {
        navigate('/Habitaciones');
    };

    const changetoUsers = () => {
        navigate('/Usuarios');
    };

    const changetoReserves = () => {
        navigate('/Reservas');
    };

    return (
        <div className="bg-gray-800 text-white w-64 h-screen p-5">
            <h2 className="text-2xl font-semibold mb-8">Hotel Cumbres Altas</h2>
            <ul>
                <li className="mb-4"
                onClick={() => changetoUsers()}
                >
                    <button 
                                               
                      className={`w-full text-left px-4 py-2 rounded ${
                          activeItem === 'Usuarios' ? 'bg-gray-700' : 'hover:bg-gray-700'
                      }`}
                    >
                        Usuario
                    </button>
                </li>
                <li className="mb-4" onClick={() => changetoRoom()} >
                    <button 
                    
                         
                    className={`w-full text-left px-4 py-2 rounded ${
                        activeItem === 'Habitaciones' ? 'bg-gray-700' : 'hover:bg-gray-700'
                    }`}
                    >
                        Habitaciones
                    </button>
                </li>
                <li className="mb-4"
                onClick={() => changetoReserves()}
                >
                   <button                           
                      className={`w-full text-left px-4 py-2 rounded ${
                          activeItem === 'Reservas' ? 'bg-gray-700' : 'hover:bg-gray-700'
                      }`}
                    
                    >
                        Reservas
                    </button>
                </li>
            </ul>
        </div>
    );
};


export default Sidebar;