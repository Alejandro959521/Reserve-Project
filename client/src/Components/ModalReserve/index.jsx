import React, { useState, useEffect } from 'react';
import { useContext } from "react"
import { InfoContext } from "../../Context"
import DatePicker from "react-datepicker";

const ModalReserve = ({ isOpen, onClose, isEditing, infoReserve }) => {
    
    const context = useContext(InfoContext)

    const [dataReserve, setDataReserve] = useState({
        userId: "", 
        roomId: "",
        startDate: null,
        endDate: null,
        totalPay: "",
        comentary: "."

    })

    useEffect(() => {
        if (isEditing && infoReserve) {
            setDataReserve({
                userId: infoReserve.user.id,
                roomId: infoReserve.room.id,
                startDate: new Date(infoReserve.startDate),
                endDate: new Date(infoReserve.endDate),
                totalPay: infoReserve.totalPay,
                comentary: infoReserve.comentary
            });

        } else {
            setDataReserve({
                userId: "",
                roomId: "",
                startDate: null,
                endDate: null,
                totalPay: "",
                comentary: "."
            });

        }
    }, [isEditing, infoReserve]);


    const handleInfo = (event) => {
        setDataReserve({
            ...dataReserve,
            [event.target.name]: event.target.value
        })
    }

    const resetForm = () => {
        setDataReserve({
            userId: "",
            roomId: "",
            startDate: null,
            endDate: null,
            totalPay: "",
            comentary: "."
        });
    }
    
    const handleDateChange = (date, name) => {
        setDataReserve((prev) => ({
            ...prev,
            [name]: date,
        }));
    };

    const handleUserChange = (e) => {
        const selectedName = e.target.value; 
        const selectedUser = context.dataUsers.find((user) => user.name === selectedName);
    
        setDataReserve((prev) => ({
            ...prev,
            userId: selectedUser ? selectedUser.id : "" 
        }));
    };

    const handleRoomChange = (e) => {
        const selectedName = e.target.value; 
        const selectedRoom = context.dataRooms.find((room) => room.name === selectedName);
    
        setDataReserve((prev) => ({
            ...prev,
            roomId: selectedRoom ? selectedRoom.id : "" 
        }));
    };


    const getNameById = (id, dataList) => {
        const item = dataList.find((item) => item.id === id);
        return item ? item.name : ""; 
    };

    const saveReserve = () => {
        if (!String(dataReserve.userId).trim() || !String(dataReserve.roomId).trim() || !String(dataReserve.startDate).trim() || !String(dataReserve.endDate).trim() || !String(dataReserve.totalPay).trim()) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        context.createReserve(dataReserve)
        resetForm();
        onClose();
    };

    const updateReserve = () => {
        if (!String(dataReserve.userId).trim() || !String(dataReserve.roomId).trim() || !String(dataReserve.startDate).trim() || !String(dataReserve.endDate).trim() || !String(dataReserve.totalPay).trim()) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        context.updateReserve(dataReserve,infoReserve.id)
        resetForm();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-30">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">{isEditing ? 'Editar Reserva' : 'Crear Reserva'}</h2>
                <input
                    type="text"
                    placeholder="Nombre del Usuario"
                    value={getNameById(dataReserve.userId, context.dataUsers)}
                    className="w-full p-2 mb-3 border rounded"
                    onChange={handleUserChange}
                    name="nameUser"
                    list="user-list"
                />
                <datalist id="user-list">
                    {context.dataUsers.map((user) => (
                        <option key={user.id} value={user.name} />
                    ))}
                </datalist>
                <input
                    type="text"
                    placeholder="Nombre del cuarto"
                    value={getNameById(dataReserve.roomId, context.dataRooms)}
                    onChange={handleRoomChange}
                    className="w-full p-2 mb-3 border rounded"
                    name="nameRoom"
                    list="room-list"
                />
                  <datalist id="room-list">
                    {context.dataRooms.map((room) => (
                        <option key={room.id} value={room.name} />
                    ))}
                </datalist>
            
             <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Fecha de Ingreso</label>
                    <DatePicker
                        selected={dataReserve.startDate}
                        onChange={(date) => handleDateChange(date, "startDate")}
                        dateFormat="yyyy-MM-dd"
                        className="w-full p-2 border rounded"
                        placeholderText="Selecciona una fecha"
                        onFocus={(e) => e.target.blur()} 
                    />
                </div>

                
                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Fecha de Salida</label>
                    <DatePicker
                        selected={dataReserve.endDate}
                        onChange={(date) => handleDateChange(date, "endDate")}
                        dateFormat="yyyy-MM-dd"
                        className="w-full p-2 border rounded"
                        placeholderText="Selecciona una fecha"
                        onFocus={(e) => e.target.blur()} 
                    />
                </div>
                <input
                    type="number"
                    placeholder="Total a pagar"
                    value={dataReserve.totalPay}
                    onChange={handleInfo}
                    className="w-full p-2 mb-4 border rounded"
                    name="totalPay"

                />
                <textarea
                    placeholder="Comentarios"
                    className="border w-full mb-2 p-2"
                    value={dataReserve.comentary}
                    onChange={handleInfo}
                    name="comentary"

                />

                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
                    <button onClick={isEditing ? updateReserve : saveReserve} className="px-4 py-2 bg-blue-500 text-white rounded">Confirmar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalReserve;