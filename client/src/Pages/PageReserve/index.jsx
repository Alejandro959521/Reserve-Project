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
    const item = location.state?.room || {};

    const precioPorDia =  item?.price || 0;
    
    const [dataReserve, setDataReserve] = useState({
        userId: context.dataUser?.id, 
        roomId: item.id,
        startDate: null,
        endDate: null,
        totalPay: 0,
        comentary: ""

    })
    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        phone: "",
        
    })

    function calculator ()  {

        if (dataReserve.startDate && dataReserve.endDate) {
            const Time = Math.abs(dataReserve.endDate - dataReserve.startDate);
            
            const Days = Math.ceil(Time / (1000 * 60 * 60 * 24));
            const newTotal = Days * precioPorDia;

         setDataReserve((prev) => ({ ...prev, totalPay: newTotal }));
        } else {
            setDataReserve((prev) => ({ ...prev, totalPay: 0 }));
        }
    }


    // Calcular el total al seleccionar ambas fechas
    useEffect(() => {
        calculator();
        if (item.id) {
            context.getRoomId(item.id);
        }
    }, [dataReserve.startDate, dataReserve.endDate, item.id]);
 


   
    const reservedDates = context.dataRoom?.reserves?.flatMap((reserve) => {
        const dates = [];
        let currentDate = new Date(reserve.startDate);
        const endDate = new Date(reserve.endDate);
    
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
    
        return dates;
    })|| [];

    const handleInfo = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }



const handleInfo2 = (event) => {
        const { name, value } = event.target;
        const newValue = value.trim() || ".";
        setDataReserve((prev) => ({
            ...prev,
            [name]: newValue,
        }));
    } 
    const handleDate = (field,value) => {
        setDataReserve((prev) => ({
            ...prev,
            [field]: value,
          }));
    }
    const resetForm = () => {
        setDataReserve({
            userId: context.dataUser?.id, 
        roomId: item.id,
        startDate: null,
        endDate: null,
        totalPay: 0,
        comentary: ""
        });
        setDataForm({
            name: "",
        email: "",
        phone: "",
        });
    }
 const createReserve = (event) => {
    event.preventDefault();
 
    const reserveData = {
        ...dataReserve,
        comentary: dataReserve.comentary.trim() || ".", 
    };
    if (
        !dataReserve.userId ||
        !dataReserve.roomId ||
        !dataReserve.startDate ||
        !dataReserve.endDate ||
        !dataReserve.totalPay ||
        !dataForm.name ||
        !dataForm.email ||
        !dataForm.phone
    ) {
        alert("Todos los campos son obligatorios.");
        return;
    }
    if(!context.dataToken) {
        alert("Tiene que logearse para poder reservar");
         return;
        }
    context.createReserve(reserveData)
    resetForm();
 }

    return (
        <> 
         <div className="flex flex-col items-center space-y-6 p-8 bg-slate-300 max-w-screen-lg mx-auto">
            <label className="text-xl md:text-3xl  font-semibold mb-4">Reserva de la habitación "{item.name}"</label>
            <div className="flex flex-wrap space-x-0 md:space-x-16 items-start">
                {/* Calendario de Fecha de Entrada */}
                <div className="flex flex-col items-center w-full md:w-auto">
                    <label className="text-sm font-medium mb-2">Fecha de Entrada</label>
                    <DatePicker
                        selected={dataReserve.startDate}
                        onChange={(date) => {
                            handleDate("startDate", date);
                            if (dataReserve.endDate && date >= dataReserve.endDate) {
                              handleDate("endDate", null);
                            }
                        }}
                        selectsStart
                        startDate={dataReserve.startDate}
                        endDate={dataReserve.endDate}
                        minDate={new Date()}
                        excludeDates={reservedDates}
                        inline
                    />
                </div>

                {/* Calendario de Fecha de Salida */}
                <div className="flex flex-col md:mt-0 mt-4 items-center w-full md:w-auto">
                    <label className="text-sm font-medium mb-2">Fecha de Salida</label>
                    <DatePicker
                        selected={dataReserve.endDate}
                        onChange={(date) => handleDate("endDate", date)}
                        selectsEnd
                        startDate={dataReserve.startDate}
                        endDate={dataReserve.endDate}
                        minDate={ dataReserve.startDate
                            ? new Date(dataReserve.startDate).setDate(
                                new Date(dataReserve.startDate).getDate() + 1
                              )
                            : new Date()}
                        inline
                        excludeDates={reservedDates}
                        disabled={!dataReserve.startDate}
                    />
                </div>

                {/* Recuadro de fechas seleccionadas y total */}
                <div className="flex flex-col items-center text-center p-4 border border-black rounded-md mt-4 md:mt-8 w-full md:w-1/4">
                    <label className="text-lg font-semibold mb-4">Fechas seleccionadas</label>
                    <input
                        type="text"
                        value={
                            dataReserve.startDate
                              ? new Date(dataReserve.startDate).toLocaleDateString()
                              : ""
                          }
                        readOnly
                        className="p-2 mb-2 border border-black rounded-md text-center w-full placeholder-gray-600"
                        placeholder="Entrada"
                     
                    />
                    <input
                        type="text"
                        value={
                            dataReserve.endDate
                              ? new Date(dataReserve.endDate).toLocaleDateString()
                              : ""
                          }
                        readOnly
                        className="p-2 mb-4 border border-black rounded-md text-center w-full placeholder-gray-600"
                        placeholder="Salida"
                      

                    />
                    <p className="text-lg font-semibold">
                        Total a pagar: <span className="text-[#003366]">${dataReserve.totalPay}</span>
                    </p>
                </div>
            </div>

            {/* Formulario de información adicional */}
            <form className="w-full max-w-md mt-8 space-y-4" onSubmit={createReserve}>
                <input
                    type="text"
                    placeholder="Nombre"
                    className="placeholder-gray-600 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#003366]"
                    required
                    value={dataForm.name}
                    onChange={handleInfo}
                    name="name"
                />
                <input
                    type="email"
                    placeholder="Correo"
                    className="placeholder-gray-600 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#003366]"
                    required
                    value={dataForm.email}
                    onChange={handleInfo}
                    name="email"
                />
                <input
                    type="tel"
                    placeholder="Teléfono"
                    className=" placeholder-gray-600 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#003366]"
                    required
                    value={dataForm.phone}
                    onChange={handleInfo}
                    name="phone"
                />
                <textarea
                    placeholder="Comentarios adicionales"
                    className="placeholder-gray-600 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#003366] resize-none"
                    rows="4"
                    value={dataReserve.comentary}
                    onChange={handleInfo2}
                    name="comentary"
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