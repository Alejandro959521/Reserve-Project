import React, { useState, useEffect } from 'react';

const UserModal = ({ isOpen, onClose, isEditing, selectedRoom }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (isEditing && selectedRoom) {
            setName(selectedRoom.name);
            setEmail(selectedRoom.email);
            setPhone(selectedRoom.phone);
        } else {
            setName('');
            setEmail('');
            setPhone('');
        }
    }, [isEditing, selectedRoom]);

    // const handleSave = () => {
    //     onSave({ name, email, phone });
    //     onClose();
    // };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">{isEditing ? 'Editar Usuario' : 'Crear Usuario'}</h2>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="tel"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
                    <button  className="px-4 py-2 bg-blue-500 text-white rounded">Confirmar</button>
                </div>
            </div>
        </div>
    );
};

export default UserModal;
