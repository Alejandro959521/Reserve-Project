import React, { useState } from 'react';
import ModalReserve from '../ModalReserve';

const TableReserves = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [infoReserve, setInfoReserve] = useState(null);

    const reserves = 
        { id: 1, name: 'John Doe', nameRoom:'cabaña 1', paid:400 }
        // Otros usuarios
    

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

    // const handleSave = (userData) => {
    //     if (isEditing) {
    //         // Lógica para actualizar el usuario
    //         console.log('Editando usuario:', userData);
    //     } else {
    //         // Lógica para crear un nuevo usuario
    //         console.log('Creando nuevo usuario:', userData);
    //     }
    // };



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
           
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="text-center">
                        <th className="px-4 py-2 border">Nombre y Apellido</th>
                        <th className="px-4 py-2 border">Nombre Habitación</th>
                        <th className="px-4 py-2 border">Total a pagar</th>
                        <th className="px-4 py-2 border">Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td className="px-4 py-2 border">Miguel Ojeda</td>
                        <td className="px-4 py-2 border">Cabaña 1</td>
                        <td className="px-4 py-2 border">400$</td>
                    
                        <td className="px-4 py-2 border">
                            <button onClick={() => openEditModal(reserves)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Editar</button>
                            <button className="bg-red-600 text-white px-3 py-1 rounded">Eliminar</button>
                        </td>
                    </tr>
                    
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