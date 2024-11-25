import img2 from "./../../../img/img 2.jpg"
import img1 from "./../../../img/img 1.jpg"
import Footer from "../../Components/Footer"
import { useNavigate } from 'react-router-dom';
import { useContext } from "react"
import { InfoContext } from "../../Context"

function Loadging() {
    const navigate = useNavigate();
    const context = useContext(InfoContext)

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

            {context.dataRooms?.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row py-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Información */}
                    <div className="flex justify-center flex-1 flex-col text-center pl-4 md:pl-8">
                        <p className="text-dark text-2xl md:text-4xl mb-4 font-bold">{item.name}</p>
                        <p className="text-dark text-xl md:text-xl">
                            {item.description}
                            <br />
                            Precio: {item.price}$
                        </p>
                        <button
                            className="mx-auto bg-[#003366] text-white border border-[#003366] rounded-md px-4 py-2 text-font-medium w-32 hover:bg-gray-200 hover:text-[#003366] transition duration-300 ease-in-out mt-4"
                            onClick={() => navigate('/Reserva')}
                        >
                            Reservar
                        </button>
                    </div>

                    {/* Imagen */}
                    <div className="flex-1 flex justify-center mt-4 md:mt-0">
                        <img className="max-w-lg rounded-lg" src={item.image} alt={`Imagen de ${item.name}`} />
                    </div>
                </div>
            ))}


            <Footer />
        </>
    )
}

export default Loadging