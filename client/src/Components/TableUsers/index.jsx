import React, { useState } from 'react';
import ModalUser from '../ModalUser';
import { useContext } from "react"
import { InfoContext } from "../../Context"

const TableUsers = () => {

    const context = useContext(InfoContext)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [infoUser, setInfoUser] = useState(null);

    const openCreateModal = () => {
        setInfoUser(null);
        setIsEditing(false);
        setIsModalOpen(true);
        
    };

    const openEditModal = (user) => {
        setInfoUser(user);
        setIsEditing(true);
        setIsModalOpen(true);
    };

    
 

    return (
        <div className="p-5 flex-1">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-left">Usuarios</h1>
                <div className="flex-grow flex justify-center pr-28">
                    <button onClick={openCreateModal} className="bg-green-700 text-white border rounded-md px-4 py-2 font-medium hover:bg-green-600 transition duration-300 ease-in-out">
                        Crear Nuevo Usuario
                    </button>
                </div>
            </div>

            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="text-center">
                        <th className="px-4 py-2 border border-gray-300">Nombre y Apellido</th>
                        <th className="px-4 py-2 border border-gray-300">Correo Electrónico</th>
                        <th className="px-4 py-2 border border-gray-300">Número de telefono</th>
                        <th className="px-4 py-2 border border-gray-300">Acciones</th>

                    </tr>
                </thead>
                <tbody >

                    {context.dataUsers?.map((item, index) => (
                        <tr  key={index} className="text-center">
                            <td className="px-4 py-2 border border-gray-300">{item.name}</td>
                            <td className="px-4 py-2 border border-gray-300">{item.email}</td>
                            <td className="px-4 py-2 border border-gray-300">{item.phone}</td>
                            <td className="px-4 py-2 border border-gray-300">
                                <button onClick={ () => openEditModal(item)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Editar</button>
                                <button  onClick={ () => context.deleteUser(item.id)} className="bg-red-600 text-white px-3 py-1 rounded">Eliminar</button>
                            </td>
                        </tr>

                     ))

                    }

                </tbody>
            </table>
            <ModalUser
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                isEditing={isEditing}
                infoUser={infoUser}
            />
        </div>
    );
};


export default TableUsers;