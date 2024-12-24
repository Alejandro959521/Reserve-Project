import React, { useState, useEffect } from 'react';
import { useContext } from "react"
import { InfoContext } from "../../Context"

const ModalRoom = ({ isOpen, onClose, isEditing, infoRoom }) => {
    const context = useContext(InfoContext)

    const [dataRoom, setDataRoom] = useState({
        quantity: "",
        price: "",
        name: "",
        image: "",
        description: ""
    })

    useEffect(() => {
        if (isEditing && infoRoom) {
            setDataRoom({
                quantity: infoRoom.quantity,
                price: infoRoom.price,
                name: infoRoom.name,
                image : infoRoom.image,
                description: infoRoom.description
            });
        } else {
            setDataRoom({
                quantity: "",
                price: "",
                name: "",
                image: "",
                description: ""
            })
        }
    }, [isEditing, infoRoom]);

    const handleInfo = (event) => {
        setDataRoom({
            ...dataRoom,
            [event.target.name]: event.target.value
        })
    }

    const resetForm = () => {
         setDataRoom({
                quantity: "",
                price: "",
                name: "",
                image: "",
                description: ""
            });
        }

        const saveRoom = () => {
            if (!dataRoom.name.trim() || !String(dataRoom.quantity).trim() || !String(dataRoom.quantity).trim() || !dataRoom.image.trim() || !dataRoom.description.trim()) {
                alert("Todos los campos son obligatorios.");
                return;
            }
            context.createRoom(dataRoom)
            resetForm();
            onClose();
        };
    
        const updateRoom = () => {
            if(!dataRoom.name.trim() || !String(dataRoom.quantity).trim() || !String(dataRoom.quantity).trim() || !dataRoom.image.trim() || !dataRoom.description.trim()) {
                alert("Todos los campos son obligatorios.");
                return;
            }
            context.updateRoom(dataRoom,infoRoom.id)
            resetForm()
            onClose()
        };
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-30">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">{isEditing ? 'Editar Habitación' : 'Crear Habitación'}</h2>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={dataRoom.name}
                    onChange={handleInfo}
                    name="name"
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="number"
                    placeholder="Cantidad de personas"
                    value={dataRoom.quantity}
                    onChange={handleInfo}
                    name="quantity"
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="number"
                    placeholder="Precio"
                    value={dataRoom.price}
                    onChange={handleInfo}
                    name="price"
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="text"
                    placeholder="Imagen"
                    value={dataRoom.image}
                    onChange={handleInfo}
                    name="image"
                    className="w-full p-2 mb-4 border rounded"
                />
                <textarea
                    placeholder="Descripción"
                    className="border w-full mb-2 p-2"
                    value={dataRoom.description}
                    name="description"
                    onChange={handleInfo}
                />
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
                    <button onClick={isEditing ? updateRoom : saveRoom}  className="px-4 py-2 bg-blue-500 text-white rounded">{isEditing ? "Editar" : "Confirmar"}</button>
                </div>
            </div>
        </div>
    );
};

export default ModalRoom;
