import React, { useState } from 'react';
import ModalRoom from '../ModalRoom';
import { useContext } from "react"
import { InfoContext } from "../../Context"

const TableRoom = () => {

    const context = useContext(InfoContext)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [infoRoom, setInfoRoom] = useState(null);

    const openCreateModal = () => {
        setInfoRoom(null);
        setIsEditing(false);
        setIsModalOpen(true);
    };

    const openEditModal = (rooms) => {
        setInfoRoom(rooms);
        setIsEditing(true);
        setIsModalOpen(true);
    };


    return (
        <div className="p-5 flex-1 max-w-full md:max-w-screen-lg mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <h1 className="text-lg md:text-2xl font-bold text-center mb-4 md:text-left">Habitaciones</h1>
                <div className="flex-grow flex justify-center md:justify-center md:pr-28">
                    <button onClick={openCreateModal} className="bg-green-700 text-white border rounded-md px-4 py-2 font-medium hover:bg-green-600 transition duration-300 ease-in-out">
                        Crear Nueva Habitación
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 text-sm md:text-base">
                <thead>
                    <tr className="text-center">
                        <th className="px-4 py-2 border w-1/6  border-gray-300">Nombre</th>
                        <th className="px-4 py-2 border w-1/12  border-gray-300">Cantidad de personas</th>
                        <th className="px-4 py-2 border w-1/12 border-gray-300">Precio</th>
                        <th className="px-4 py-2 border w-1/5 border-gray-300">Imagen</th>
                        <th className="px-4 py-2 border w-1/2 border-gray-300">Descripción</th>
                        <th className="px-4 py-2 border w-1/6 border-gray-300">Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    {context.dataRooms?.map((item, index) => (
                        <tr key={index} className="text-center">
                            <td className="px-4 py-2 border border-gray-300">{item.name}</td>
                            <td className="px-4 py-2 border border-gray-300">{item.quantity}</td>
                            <td className="px-4 py-2 border border-gray-300">{item.price}</td>
                            <td className="px-4 py-2 border border-gray-300">
                                <img
                                    src={item.image}
                                    alt="Imagen"
                                    className="w-48 h-48 object-cover mx-auto"
                                />
                            </td>
                            <td className="px-4 py-2 border break-words border-gray-300">{item.description}</td>
                            <td className="px-4 py-2 border border-gray-300">
                                <button onClick={() => openEditModal(item)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Editar</button>
                                <button onClick={() => context.deleteRoom(item.id)} className="bg-red-600 text-white px-3 py-1 rounded">Eliminar</button>
                            </td>
                        </tr>

                    ))

                    }

                </tbody>
            </table>
            </div>
            <ModalRoom
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                isEditing={isEditing}
                infoRoom={infoRoom}
            />

        </div>
    );
};


export default TableRoom;