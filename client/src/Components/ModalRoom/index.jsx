import React, { useState, useEffect } from 'react';

const ModalRoom = ({ isOpen, onClose, isEditing, infoRoom }) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (isEditing && infoRoom) {
            setName(infoRoom.name);
            setPrice(infoRoom.price);
            setCantidad(infoRoom.cantidad);
            setImage(infoRoom.image);
            setDescription(infoRoom.description)
        } else {
            setName('');
            setPrice('');
            setCantidad('');
            setImage('');
            setDescription('');
        }
    }, [isEditing, infoRoom]);

    // const handleSave = () => {
    //     onSave({ name, email, phone });
    //     onClose();
    // };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">{isEditing ? 'Editar Habitación' : 'Crear Habitación'}</h2>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="number"
                    placeholder="Cantidad de personas"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="number"
                    placeholder="Precio"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                 <input
                    type="file"
                    placeholder="Imagen"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
               <textarea
                    placeholder="Descripción"
                    className="border w-full mb-2 p-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
                    <button  className="px-4 py-2 bg-blue-500 text-white rounded">Confirmar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalRoom;
