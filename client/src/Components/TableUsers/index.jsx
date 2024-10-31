

const TableUsers = () => {
    return (
        <div className="p-5 flex-1">
            <div className="flex justify-between items-center mb-4">
                {/* Título "Usuarios" alineado a la izquierda */}
                <h1 className="text-2xl font-bold text-left">Usuarios</h1>

                {/* Botón centrado */}
                <div className="flex-grow flex justify-center pr-28">
                    <button className="bg-green-700 text-white border rounded-md px-4 py-2 font-medium hover:bg-green-600 transition duration-300 ease-in-out">
                        Crear nuevo usuario
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
                            <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Editar</button>
                            <button className="bg-red-600 text-white px-3 py-1 rounded">Eliminar</button>
                        </td>
                    </tr>
                    {/* Repetir para otras habitaciones */}
                </tbody>
            </table>
        </div>
    );
};


export default TableUsers;