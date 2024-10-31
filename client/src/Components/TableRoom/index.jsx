const TableRoom = () => {
    return (
        <div className="p-5 flex-1">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Habitaciones</h1>
                <button className="bg-green-600 text-white px-4 py-2 rounded">
                    Crear nueva habitación
                </button>
            </div>
           
            <table className="min-w-full bg-white border">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Nombre</th>
                        <th className="px-4 py-2 border">Categoría</th>
                        <th className="px-4 py-2 border">Precio</th>
                        <th className="px-4 py-2 border">Detalles</th>
                        <th className="px-4 py-2 border">Nivel</th>
                        <th className="px-4 py-2 border">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 border">101</td>
                        <td className="px-4 py-2 border">Simple</td>
                        <td className="px-4 py-2 border">S/ 20.00</td>
                        <td className="px-4 py-2 border">con ducha, cable</td>
                        <td className="px-4 py-2 border">Primer nivel</td>
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


export default TableRoom ;