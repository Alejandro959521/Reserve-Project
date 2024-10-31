

const TableReserves = () => {
    return (
        <div className="p-5 flex-1">
             <div className="flex justify-between items-center mb-4">               
                <h1 className="text-2xl font-bold text-left">Reservas</h1>             
                <div className="flex-grow flex justify-center pr-28">
                    <button className="bg-green-700 text-white border rounded-md px-4 py-2 font-medium hover:bg-green-600 transition duration-300 ease-in-out">
                        Crear Nueva Reserva
                    </button>
                </div>
            </div>
           
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="text-center">
                        <th className="px-4 py-2 border">Nombre y Apellido</th>
                        <th className="px-4 py-2 border">Nombre Habitación</th>
                        <th className="px-4 py-2 border">Total a pagar</th>
                        <th className="px-4 py-2 border">Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td className="px-4 py-2 border">Miguel Ojeda</td>
                        <td className="px-4 py-2 border">Cabaña 1</td>
                        <td className="px-4 py-2 border">400$</td>
                    
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


export default TableReserves;