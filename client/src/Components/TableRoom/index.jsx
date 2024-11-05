import React, { useState } from 'react';
import ModalRoom from '../ModalRoom';


const TableRoom = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [infoRoom, setInfodRoom] = useState(null);

    const rooms = 
        { id: 1, name: 'John Doe', price: 100, cantidad: 4, image:'',description:'algo' }
        // Otros usuarios
    

    const openCreateModal = () => {
        setInfodRoom(null);
        setIsEditing(false);
        setIsModalOpen(true);
    };

    const openEditModal = (rooms) => {
        setInfodRoom(rooms);
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
                        <th className="px-4 py-2 border">Acciones</th>


                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td className="px-4 py-2 border">cabaña 1</td>
                        <td className="px-4 py-2 border">4</td>
                        <td className="px-4 py-2 border">100 $</td>
                        <td className="px-4 py-2 border">imagen</td>
                        <td className="px-4 py-2 border">
                            <button  onClick={() => openEditModal(rooms)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Editar</button>
                            <button className="bg-red-600 text-white px-3 py-1 rounded">Eliminar</button>
                        </td>
                    </tr>

                </tbody>
            </table>
            <ModalRoom
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                // onSave={handleSave}
                isEditing={isEditing}
                infoRoom={infoRoom}
            />

        </div>
    );
};


export default TableRoom;