
import img3 from "./../../../img/img7.jpg"
import img5 from "./../../../img/img6.jpg"
import img9 from "./../../../img/img9.jpg"
import img10 from "./../../../img/img10.jpg"
import img11 from "./../../../img/img11.jpg"
import img12 from "./../../../img/img12.jpg"


import { useState, useEffect } from "react";



const imgRandom = () => {

    const listImage = [img5, img3, img9, ,img10, img11, img12]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                // Generar un índice aleatorio diferente al índice actual
                let newIndex;
                do {
                    newIndex = Math.floor(Math.random() * listImage.length);
                } while (newIndex === prevIndex);

                return newIndex;
            });
        }, 4000);

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);

    }, [listImage, 4000]);

    return (

        <div className="relative overflow-hidden h-screen">
            <img
                src={listImage[currentImageIndex]}
                alt="Fondo de habitaciones"
                className="absolute top-0 left-0 w-full h-full object-fill"
            />
            <div className="relative flex flex-col items-center justify-center h-full">
                <p className="text-center text-4xl md:text-6xl mt-40 font-extrabold drop-shadow-md">
                    Explora nuestras habitaciones
                </p>
                <p className="text-xl md:text-4xl text-center mt-20 font-extrabold drop-shadow-sm">
                    Adecua tu vida en un solo espacio
                </p>
            </div>
        </div>


    )

}

export default imgRandom