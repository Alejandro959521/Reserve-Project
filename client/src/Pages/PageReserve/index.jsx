import Footer from "../../Components/Footer"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from "react";





function PageReserve() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <>
             <div className="flex flex-col items-center space-y-6">
            <label className="text-lg font-semibold">Seleccione las fechas de su reserva:</label>
            <div className="flex space-x-8">
                {/* Calendario de Fecha de Entrada */}
                <div className="flex flex-col items-center">
                    <label className="text-sm font-medium mb-2">Fecha de Entrada</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            if (endDate && date >= endDate) {
                                setEndDate(null); // Reinicia la fecha de salida si es posterior o igual
                            }
                        }}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        inline // Muestra el calendario directamente en la página
                    />
                </div>

                {/* Calendario de Fecha de Salida */}
                <div className="flex flex-col items-center">
                    <label className="text-sm font-medium mb-2">Fecha de Salida</label>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate ? new Date(startDate).setDate(startDate.getDate() + 1) : new Date()}
                        inline // Muestra el calendario directamente en la página
                        disabled={!startDate} // Deshabilita hasta que se elija una fecha de entrada
                    />
                </div>
            </div>

            <div className="flex space-x-4 mt-4">
                <input
                    type="text"
                    value={startDate ? startDate.toLocaleDateString() : ''}
                    readOnly
                    className="p-2 border rounded-md text-center w-32"
                    placeholder="Entrada"
                />
                <input
                    type="text"
                    value={endDate ? endDate.toLocaleDateString() : ''}
                    readOnly
                    className="p-2 border rounded-md text-center w-32"
                    placeholder="Salida"
                />
            </div>
        </div>

            <Footer />
        </>
    );
}

export default PageReserve