import React, { useState, useEffect } from 'react';

const ModalReserve = ({ isOpen, onClose, isEditing, infoReserve }) => {

    const [name, setName] = useState('');
    const [nameRoom, setNameRoom] = useState('');
    const [paid, setPaid] = useState('');
    
    useEffect(() => {
        if (isEditing && infoReserve) {
            setName(infoReserve.name);
            setNameRoom(infoReserve.nameRoom);
            setPaid(infoReserve.paid);
           
        } else {
            setName('');
            setNameRoom('');
            setPaid('');
           
        }
    }, [isEditing, infoReserve]);

    // const handleSave = () => {
    //     onSave({ name, email, phone });
    //     onClose();
    // };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">{isEditing ? 'Editar Reserva' : 'Crear Reserva'}</h2>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="text"
                    placeholder="Nombre del cuarto"
                    value={nameRoom}
                    onChange={(e) => setNameRoom(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="number"
                    placeholder="Total a pagar"
                    value={paid}
                    onChange={(e) => setPaid(e.target.value)}
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

export default ModalReserve;