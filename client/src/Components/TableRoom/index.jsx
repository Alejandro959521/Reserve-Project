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
        <div className="p-5 flex-1">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-left">Habitaciones</h1>
                <div className="flex-grow flex justify-center pr-28">
                    <button onClick={openCreateModal} className="bg-green-700 text-white border rounded-md px-4 py-2 font-medium hover:bg-green-600 transition duration-300 ease-in-out">
                        Crear Nueva Habitación
                    </button>
                </div>
            </div>

            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="text-center">
                        <th className="px-4 py-2 border">Nombre</th>
                        <th className="px-4 py-2 border">Cantidad de personas</th>
                        <th className="px-4 py-2 border">Precio</th>
                        <th className="px-4 py-2 border">Imagen</th>
                        <th className="px-4 py-2 border">Descripción</th>


                    </tr>
                </thead>
                <tbody>
                {context.dataRooms?.map((item, index) => (
                        <tr  key={index} className="text-center">
                            <td className="px-4 py-2 border">{item.name}</td>
                            <td className="px-4 py-2 border">{item.quantity}</td>
                            <td className="px-4 py-2 border">{item.price}</td>
                            <td className="px-4 py-2 border">{item.image}</td>
                            <td className="px-4 py-2 border">{item.description}</td>
                            <td className="px-4 py-2 border">
                                <button onClick={ () => openEditModal(item)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Editar</button>
                                <button  onClick={ () => context.deleteRoom(item.id)} className="bg-red-600 text-white px-3 py-1 rounded">Eliminar</button>
                            </td>
                        </tr>

                     ))

                    }

                </tbody>
            </table>
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