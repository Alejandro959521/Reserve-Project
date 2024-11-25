import img2 from "./../../../img/img 2.jpg"
import img1 from "./../../../img/img 1.jpg"
import Footer from "../../Components/Footer"
import {useNavigate } from 'react-router-dom';


function Loadging() {
    const navigate = useNavigate();

    return (
        <>
            <div
                className="flex items-center justify-center h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url(${img2})`, backgroundSize: 'cover'
                }}

            >
                <p className="text-6xl mt-12 text-center text-white bg-black bg-opacity-50 p-4 rounded-lg">
                    Un lugar único en el corazón de Caracas
                </p>
            </div>

            <div className="flex flex-col md:flex-row  py-8 ">

                <div className="flex justify-center flex-1 flex-col text-center pl-4 md:pl-8 ">
                    <p className="text-dark text-2xl md:text-4xl mb-4 font-bold">Habitación A</p>
                    <p className=" text-dark text-xl md:text-xl ">Para nuestros huéspedes más selectos ofrecemos estas cómodas y confortables habitaciones, donde podrá disfrutar de nuestras exclusivas camas, que le
                        brindarán el confort y la calidad que usted merece, con la mejor atención personalizada. Incluye.
                        Una Cama King Size, Mini bar,TV de 48" en la habitación, Baño con secador de cabello, Plancha de ropa, Conexión a internet wifi, Nevera ejecutiva, Sistema de aire acondicionado central y
                        control individual para cada habitación Balcón con una inmejorable vista<br /> Precio: 150$
                        </p>
                    <button className="mx-auto bg-[#003366] text-white border border-[#003366] rounded-md px-4 py-2 text- font-medium w-32 hover:bg-gray-200 hover:text-[#003366] transition duration-300 ease-in-out mt-4"
                     onClick={() => navigate('/Reserva')}
                    >
                        Reservar
                    </button>
                </div>

                <div className="flex-1 flex justify-center  mt-4 md:mt-0">
                    <img className="max-w-lg rounded-lg " src={img1} />

                </div>


            </div>

            <div className="flex flex-col md:flex-row  py-8 ">

                <div className="flex-1 flex justify-center  mt-4 md:mt-0">
                    <img className="max-w-lg rounded-lg " src={img1} />

                </div>

                <div className="flex justify-center flex-1 flex-col text-center pl-4 md:pl-8 ">
                    <p className="text-dark text-2xl md:text-4xl mb-4 font-bold">Habitación B</p>
                    <p className=" text-dark text-xl md:text-xl ">Suite Plus Cómodas y confortables habitaciones acondicionadas para complacer las exigencias de los huéspedes de negocios y de placer. Esta habitación posee la combinación perfecta entre la comodidad y el descanso, gracias a sus dos  ambientes que le permitirán relajarse durante su estadía. Incluye: Una Cama King Size Mini bar TV de 48" en la habitación Baño con secador de cabello Plancha de ropa Conexión a internet wifi          Nevera ejecutiva Sistema de aire acondicionado central y control individual para cada habitación Balcón con una inmejorable vista 
                    <br />
                        Precio : 100$</p>
                    <button className="mx-auto bg-[#003366] text-white border border-[#003366] rounded-md px-4 py-2 text- font-medium w-32 hover:bg-gray-200 hover:text-[#003366] transition duration-300 ease-in-out mt-4"
                    onClick={() => navigate('/Reserva')}
                    >
                        Reservar
                    </button>
                </div>

           </div>
           <Footer/>
        </>
    )
}

export default Loadging