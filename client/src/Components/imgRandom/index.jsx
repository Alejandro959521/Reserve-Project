import img1 from "./../../../img/img 1.jpg"
import img2 from "./../../../img/img 3.jpg"
import img3 from "./../../../img/img 4.jpg"
import { useState,useEffect } from "react";





const imgRandom = () => {

    const listImage = [img1, img2, img3]
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

        <div className="
        relative overflow-hidden
        h-screen bg-cover bg-center transition-all duration-700 transform" style={{ backgroundImage: `url(${listImage[currentImageIndex]})`}}>
                <p className=" text-center text-4xl md:text-6xl mt-40 font-extrabold drop-shadow-md" >Explora nuestras habitaciones</p>

                <br />
                <p className="text-xl md:text-4xl text-center mt-20 font-extrabold drop-shadow-sm delay-2">Adecua tu vida en un solo espacio</p>
            
        </div>

    )

}

export default imgRandom