import React, { useState, useEffect } from 'react';
import { useContext } from "react"
import { InfoContext } from "../../Context"

const ModalUser = ({ isOpen, onClose, isEditing, infoUser }) => {

    const context = useContext(InfoContext)

    const [dataUser, setDataUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role:"",
    })

    useEffect(() => {
        if (isEditing && infoUser) {
            setDataUser({
                name: infoUser.name,
                email: infoUser.email,
                phone: infoUser.phone,
                password :infoUser.password,
                role: infoUser.role
            });

        } else {
            setDataUser({
                name: "",
                email: "",
                phone: "",
                password: "",
            });
        }
    }, [isEditing, infoUser]);

    const handleInfo = (event) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        })
    }

    const resetForm = () => {
        setDataUser({
            name: "",
            email: "",
            phone: "",
            password: "",
        });

    };
    const saveUser = () => {
        if (!dataUser.name.trim() || !dataUser.email.trim() || !dataUser.phone.trim() || !dataUser.password.trim()) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        context.createUser(dataUser)
        resetForm();
        onClose();
    };

    const updateUser = () => {
        if (!dataUser.name.trim() || !dataUser.email.trim() || !dataUser.phone.trim() || !dataUser.password.trim()) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        context.updateUser(dataUser,infoUser.id)
        resetForm()
        onClose()
    };
    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">{isEditing ? 'Editar Usuario' : 'Crear Usuario'}</h2>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={dataUser.name}
                    onChange={handleInfo}
                    name="name"
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="email"
                    placeholder="Correo"
                    value={dataUser.email}
                    onChange={handleInfo}
                    name="email"
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    value={dataUser.phone}
                    onChange={handleInfo}
                    name="phone"
                    className="w-full p-2 mb-4 border rounded"
                />
                {!isEditing && (
                    <input
                        type="text"
                        placeholder="Contraseña"
                        value={dataUser.password}
                        onChange={handleInfo}
                        name="password"
                        className="w-full p-2 mb-4 border rounded"
                    />
                )}
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>

                    <button onClick={isEditing ? updateUser : saveUser}  className="px-4 py-2 bg-blue-500 text-white rounded">{isEditing ? "Editar" : "Confirmar"}</button>
               
                </div>
            </div>
        </div>
    );
};

export default ModalUser;