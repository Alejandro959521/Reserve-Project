





const TableRoom = () => {
    return (
        <div className="p-5 flex-1">
             <div className="flex justify-between items-center mb-4">               
                <h1 className="text-2xl font-bold text-left">Habitaciones</h1>             
                <div className="flex-grow flex justify-center pr-28">
                    <button className="bg-green-700 text-white border rounded-md px-4 py-2 font-medium hover:bg-green-600 transition duration-300 ease-in-out">
                        Crear Nueva Habitación
                    </button>
                </div>
            </div>
           
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="text-center">
                        <th className="px-4 py-2 border">Nombre</th>
                        <th className="px-4 py-2 border">Cantidad de personas</th>
                        <th className="px-4 py-2 border">Precio</th>
                        <th className="px-4 py-2 border">Imagen</th>
                        <th className="px-4 py-2 border">Acciones</th>

                        
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td className="px-4 py-2 border">cabaña 1</td>
                        <td className="px-4 py-2 border">4</td>
                        <td className="px-4 py-2 border">100 $</td>
                        <td className="px-4 py-2 border">imagen</td>
                        <td className="px-4 py-2 border">
                            <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Editar</button>
                            <button className="bg-red-600 text-white px-3 py-1 rounded">Eliminar</button>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    );
};


export default TableRoom ;