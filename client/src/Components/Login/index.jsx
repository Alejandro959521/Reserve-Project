import React, { useState, useEffect } from 'react';

import { useContext } from "react"
import { InfoContext } from "../../Context"



const Login = ({ ChangeToSingUp, onCloseLogin }) => {
  
  const context = useContext(InfoContext)

  const [dataLog, setdataLog] = useState({      
        email: "",
        password: "",
       
    })

    const handleInfo = (event) => {
        setdataLog({
            ...dataLog,
            [event.target.name]: event.target.value
        })
    }

    const resetForm = () => {
        setdataLog({
            email: "",          
            password: "",          
        });
        
    }

    function logIn (event)  {
        event.preventDefault()

        context.createToken(dataLog)
        resetForm()
    }
    return (
        
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full">

                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
                    to='/'
                    onClick={onCloseLogin}

                >  &times;

                </button>

                <h2 className="text-2xl font-bold text-center text-[#003366] mb-6">Iniciar Sesión</h2>
                <form  onSubmit={logIn}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
                        <input
                             type="email"
                             value={dataLog.email}
                             onChange={handleInfo}
                             name="email"
                             required
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#669966]"
                            placeholder="Ingresa tu correo"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">Contraseña</label>
                        <input
                             type="text"
                             value={dataLog.password}
                             onChange={handleInfo}
                             name="password"
                             required
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#669966]"
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>
                    <div className="mb-4 flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-[#669966]" />
                            <span className="ml-2 text-gray-700">Recuérdame</span>
                        </label>
                        <a href="#" className="text-sm text-[#669966] hover:underline">¿Olvidaste tu contraseña?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#669966] text-white py-2 px-4 rounded hover:bg-[#557755] transition duration-300"
                    >
                        Iniciar Sesión
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-6">¿No tienes cuenta?</p>
                <button
                    onClick={ChangeToSingUp}
                    type="button"
                    className="w-full mt-3 bg-[#003366] text-white py-2 px-4 rounded hover:bg-[#002244] transition duration-300"
                >
                    Registrarse
                </button>
            </div>
        </div>
      
    )

}

export default Login