import React, { useState } from 'react';
import ModalReserve from '../ModalReserve';
import { useContext } from "react"
import { InfoContext } from "../../Context"

const TableReserves = () => {
    const context = useContext(InfoContext)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [infoReserve, setInfoReserve] = useState(null);


    const openCreateModal = () => {
        setInfoReserve(null);
        setIsEditing(false);
        setIsModalOpen(true);
    };

    const openEditModal = (reserves) => {
        setInfoReserve(reserves);
        setIsEditing(true);
        setIsModalOpen(true);
    };


    return (
        <div className="p-5 flex-1">
             <div className="flex justify-between items-center mb-4">               
                <h1 className="text-2xl font-bold text-left">Reservas</h1>             
                <div className="flex-grow flex justify-center pr-28">
                    <button onClick={openCreateModal} className="bg-green-700 text-white border rounded-md px-4 py-2 font-medium hover:bg-green-600 transition duration-300 ease-in-out">
                        Crear Nueva Reserva
                    </button>
                </div>
            </div>
           
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="text-center">
                        <th className="px-4 py-2 border border-gray-300">Nombre y Apellido</th>
                        <th className="px-4 py-2 border border-gray-300">Nombre Habitación</th>
                        <th className="px-4 py-2 border border-gray-300">Total a pagar</th>
                        <th className="px-4 py-2 border border-gray-300">Fecha de Ingreso</th>
                        <th className="px-4 py-2 border border-gray-300">Fecha de Salida</th>
                        <th className="px-4 py-2 border border-gray-300">Comentarios adicionales</th>
                        <th className="px-4 py-2 border border-gray-300">Acciones</th>

                    </tr>
                </thead>
                <tbody>
                {context.dataReserves?.map((item, index) => (
                        <tr key={index} className="text-center">
                            <td className="px-4 py-2 border border-gray-300">{item.user?.name || 'No existe'}</td>
                            <td className="px-4 py-2 border border-gray-300">{item.room?.name || 'No existe'}</td>
                            <td className="px-4 py-2 border border-gray-300">{item.totalPay}</td>
                            <td className="px-4 py-2 border border-gray-300">{item.startDate}</td>
                            <td className="px-4 py-2 border border-gray-300">{item.endDate}</td>
                            <td className="px-4 py-2 border break-words border-gray-300">{item.comentary}</td>
                            <td className="px-4 py-2 border border-gray-300">
                                <button onClick={() => openEditModal(item)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Editar</button>
                                <button onClick={() => context.deleteReserve(item.id)} className="bg-red-600 text-white px-3 py-1 rounded">Eliminar</button>
                            </td>
                        </tr>

                    ))

                    }
                   
                    
                </tbody>
            </table>

            <ModalReserve
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                // onSave={handleSave}
                isEditing={isEditing}
                infoReserve={infoReserve}
            />
        </div>
    );
};


export default TableReserves;