

const TableReserves = () => {
    return (
        <div className="p-5 flex-1">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Reservas</h1>
                <button className="bg-green-600 text-white px-4 py-2 rounded">
                    Crear nueva Reserva
                </button>
            </div>
           
            <table className="min-w-full bg-white border">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Nombre y Apellido</th>
                        <th className="px-4 py-2 border">Correo Electrónico</th>
                        <th className="px-4 py-2 border">Número de telefono</th>
                        <th className="px-4 py-2 border">Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
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


export default TableReserves;