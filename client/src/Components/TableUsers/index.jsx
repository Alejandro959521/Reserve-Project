import React, { useState } from 'react';
import ModalUser from '../ModalUser';

const TableUsers = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [infoUser, setInfoUser] = useState(null);

    const users =
        { id: 1, name: 'John Doe', email: 'miguel@gmail.com', phone: '01124578956' }
    // Otros usuarios


    const openCreateModal = () => {
        setInfoUser(null);
        setIsEditing(false);
        setIsModalOpen(true);
    };

    const openEditModal = (users) => {
        setInfoUser(users);
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
                <h1 className="text-2xl font-bold text-left">Usuarios</h1>
                <div className="flex-grow flex justify-center pr-28">
                    <button onClick={openCreateModal} className="bg-green-700 text-white border rounded-md px-4 py-2 font-medium hover:bg-green-600 transition duration-300 ease-in-out">
                        Crear Nuevo Usuario
                    </button>
                </div>
            </div>

            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="text-center">
                        <th className="px-4 py-2 border">Nombre y Apellido</th>
                        <th className="px-4 py-2 border">Correo Electrónico</th>
                        <th className="px-4 py-2 border">Número de telefono</th>
                        <th className="px-4 py-2 border">Acciones</th>

                    </tr>
                </thead>
                <tbody >
                    <tr className="text-center">
                        <td className="px-4 py-2 border">Miguel Ojeda</td>
                        <td className="px-4 py-2 border">miguel@gmail.com</td>
                        <td className="px-4 py-2 border">04123345467</td>
                        <td className="px-4 py-2 border">
                            <button onClick={() => openEditModal(users)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Editar</button>
                            <button className="bg-red-600 text-white px-3 py-1 rounded">Eliminar</button>
                        </td>
                    </tr>

                </tbody>
            </table>
            <ModalUser
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                // onSave={handleSave}
                isEditing={isEditing}
                infoUser={infoUser}
            />
        </div>
    );
};


export default TableUsers;