import Footer from "../../Components/Footer"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState, useEffect  } from "react";
import { useContext } from "react"
import { InfoContext } from "../../Context"
import { useLocation } from "react-router-dom";

function PageReserve() {

    const context = useContext(InfoContext)
    const location = useLocation();
    const item = location.state?.room;


    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [total, setTotal] = useState(0);
    const precioPorDia = item.price;

    function calculator ()  {

        if (startDate && endDate) {
            const Time = Math.abs(endDate - startDate);
            
            const Days = Math.ceil(Time / (1000 * 60 * 60 * 24));
            setTotal(Days * precioPorDia);
        } else {
            setTotal(0);
        }
    }


    // Calcular el total al seleccionar ambas fechas
    useEffect(() => {
        calculator();
        context.getRoomId(item.id);
    }, [startDate, endDate]);
 

    const [dataReserve, setDataReserve] = useState({
        userId: 1, 
        roomId: item.id,
        startDate: null,
        endDate: null,
        totalPay: total,
        comentary: "."

    })
   
    const reservedDates = context.dataRoom?.reserves?.flatMap((reserve) => {
        const dates = [];
        let currentDate = new Date(reserve.startDate);
        const endDate = new Date(reserve.endDate);
    
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
    
        return dates;
    });

    const handleInfo = (event) => {
        setDataReserve({
            ...dataReserve,
            [event.target.name]: event.target.value
        })
    }

    return (
        <> 
         <div className="flex flex-col items-center space-y-6 p-8 bg-slate-300">
            <label className="text-3xl font-semibold mb-4">Reserva de la habitación "{item.name}"</label>
            <div className="flex space-x-16 items-start">
                {/* Calendario de Fecha de Entrada */}
                <div className="flex flex-col items-center">
                    <label className="text-sm font-medium mb-2">Fecha de Entrada</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            if (endDate && date >= endDate) {
                                setEndDate(null);
                            }
                        }}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        excludeDates={reservedDates}
                        inline
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
                        inline
                        excludeDates={reservedDates}
                        disabled={!startDate}
                    />
                </div>

                {/* Recuadro de fechas seleccionadas y total */}
                <div className="flex flex-col items-center p-4 border border-black rounded-md mt-8">
                    <label className="text-lg font-semibold mb-4">Fechas seleccionadas</label>
                    <input
                        type="text"
                        value={startDate ? startDate.toLocaleDateString() : ''}
                        readOnly
                        className="p-2 mb-2 border border-black rounded-md text-center w-40 placeholder-gray-600"
                        placeholder="Entrada"
                        onChange={handleInfo}
                        name="startDate"
                    />
                    <input
                        type="text"
                        value={endDate ? endDate.toLocaleDateString() : ''}
                        readOnly
                        className="p-2 mb-4 border border-black rounded-md text-center w-40 placeholder-gray-600"
                        placeholder="Salida"
                        onChange={handleInfo}
                        name="endDate"

                    />
                    <p className="text-lg font-semibold">
                        Total a pagar: <span className="text-[#003366]">${total}</span>
                    </p>
                </div>
            </div>

            {/* Formulario de información adicional */}
            <form className="w-full max-w-md mt-8 space-y-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="placeholder-gray-600 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#003366]"
                    required
                />
                <input
                    type="email"
                    placeholder="Correo"
                    className="placeholder-gray-600 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#003366]"
                    required
                />
                <input
                    type="tel"
                    placeholder="Teléfono"
                    className=" placeholder-gray-600 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#003366]"
                    required
                />
                <textarea
                    placeholder="Comentarios adicionales"
                    className="placeholder-gray-600 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#003366] resize-none"
                    rows="4"
                ></textarea>
                <button
                    type="submit"
                    className="bg-[#003366] text-white rounded-md px-6 py-2 mt-4 font-medium w-full hover:bg-gray-200 hover:text-[#003366] border border-[#003366] transition duration-300 ease-in-out"
                >
                    Enviar
                </button>
            </form>
        </div>
        <Footer/> 
        </>
        
    );
}

export default PageReserve