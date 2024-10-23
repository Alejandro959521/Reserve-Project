import img1 from "./../../../img/img 1.jpg"





const AboutUs = () => {


    return (

        <div className="flex flex-col md:flex-row items-center justify-between bg-[#2C3E50] p-10 " >
            <div className="md:w-1/2  mr-10">
            <p className="text-xl text-white" >Hotel Margarita Village
                Somos Un hotel tres estrellas ÚNICO TODO INCLUIDO en Porlamar, que ofrece la comodidad de estar ubicado en la mejor zona de la ciudad. Av. Bolívar, Urb. Dumar Contry Club, sector Bella Vista frente de la conocida “Playa La Caracola”.

                Estamos a pocos minutos de los más importantes centros comerciales de la Isla, populares playas, Restaurantes, Discotecas y Casinos.
                A 35 min del Aeropuerto Internacional Santiago Mariño y la terminal de Ferry.
                Conócenos y vivirás la experiencia Margarita Villages.</p>
                </div>
            <div className="md:w-1/2 flex justify-center">
            <img  className="w-full" src={img1} alt="Texto alternativo" />

            </div>

           

        </div>

    )

}

export default AboutUs 