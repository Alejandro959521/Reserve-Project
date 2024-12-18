import img1 from "./../../../img/img5.jpg"





const AboutUs = () => {


    return (
        <div id="aboutSection" className="py-12 bg-gray-800 text-white">
        <h2 className="text-4xl md:text-6xl text-center font-bold mb-8">Quienes somos</h2>
        <div className="flex flex-col md:flex-row items-center px-4 md:px-16 gap-10">
          <div className="md:w-1/2 text-lg leading-relaxed space-y-6">
          <p className="text-xl text-white" >En nuestas cabañas Cumbre Altas, nos enorgullecemos de ofrecer una experiencia única en el corazón de la naturaleza. Rodeado de majestuosos paisajes montañosos y un ambiente de tranquilidad, nuestro hotel es el refugio ideal para quienes buscan escapar del bullicio de la ciudad y reconectar con la esencia de lo natural.
                            <br />
                            <br />
                            Desde nuestras acogedoras habitaciones hasta nuestra cálida hospitalidad, cada detalle está diseñado para brindarte momentos inolvidables. Contamos con instalaciones que combinan el encanto rústico de las montañas con la comodidad moderna: chimeneas acogedoras, vistas panorámicas y una cocina local que deleitará tus sentidos.
                            <br />
                            <br />
                            Nuestra misión es crear un espacio donde puedas relajarte, explorar los senderos de las montañas, disfrutar del aire puro y compartir momentos especiales con tus seres queridos. Ya sea para una escapada romántica, unas vacaciones familiares o un retiro personal, En nuestas cabañas Cumbre Altas encontrarás un lugar que inspira y renueva.
                            <br />
                            <br />
                            Descubre el verdadero significado de paz y serenidad en cada rincón de nuestras cabañas. ¡Te esperamos con los brazos abiertos!</p>
          </div>
          <div className="md:w-1/2">
            <img
              src={img1}
              alt="Texto alternativo"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    )

}

export default AboutUs 