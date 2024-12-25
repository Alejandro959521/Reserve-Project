import img2 from "./../../../img/img18.jpg"
import Footer from "../../Components/Footer"
import { useNavigate } from 'react-router-dom';
import { useContext } from "react"
import { InfoContext } from "../../Context"

function Loadging() {

    const navigate = useNavigate();
    const context = useContext(InfoContext)

    return (
        <>
            <div className="relative flex items-center justify-center h-screen overflow-hidden">
                <img
                    src={img2}
                    alt="Fondo"
                    className="absolute top-0 left-0 w-full h-full object-cover md:object-fill"
                />
                <p className="relative text-3xl sm:text-4xl md:text-6xl mt-12 text-center text-white bg-black bg-opacity-50 p-4 rounded-lg max-w-screen-md mx-auto">
                    Un lugar único en el corazón de Merida
                </p>
            </div>

            {context.dataRooms?.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row py-8 gap-4 px-4 md:px-16 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                    <div className="flex justify-center flex-1 flex-col text-center md:text-left items-center md:items-center">
                        <p className="text-dark text-2xl sm:text-3xl md:text-4xl mb-4 font-bold items-center ">{item.name}</p>
                        <p className="text-dark text-base sm:text-lg md:text-xl items-center ">
                            {item.description}
                            <br />
                            <p className="font-bold text-center text-2xl mt-4">Precio: {item.price}$/Día</p>
                        </p>
                        <button
                            className="mx-auto md:mx-0 bg-[#003366] text-white border border-[#003366] rounded-md px-6 py-2 text-sm sm:text-base font-medium w-32 hover:bg-gray-200 hover:text-[#003366] transition duration-300 ease-in-out mt-4"
                            onClick={() => navigate('/Reserva', { state: { room: item } })}
                        >
                            Reservar
                        </button>
                    </div>


                    <div className="flex-1 flex justify-center">
                        <img className="w-full max-w-md sm:max-w-lg rounded-lg" src={item.image} alt={`Imagen de ${item.name}`} />
                    </div>
                </div>
            ))}


            <Footer />
        </>
    )
}

export default Loadging