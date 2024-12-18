import { faTwitter, faInstagram, faFacebook, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "./../../../img/logo.png"

const Footer = () => {

    return (
        <footer className=" text-black py-10" style={{ backgroundColor: `#99CCFF` }}>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center gap-8">

                    <div className="w-full md:w-auto flex justify-center md:justify-start">
                        <img
                            className="w-24 h-24 md:w-36 md:h-36"
                            src={logo}
                            alt="Logo"
                        />
                    </div>

                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Acerca de:</h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            Fotografía de alta calidad y diseño al alcance de tu habitación.
                        </p>
                    </div>

                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Contacto:</h3>
                        <p className="text-base md:text-lg mb-2">
                            <strong>Email:</strong> CumbresAltas@gmail.com
                        </p>
                        <p className="text-base md:text-lg mb-2">
                            <strong>Teléfono:</strong> +564123434567
                        </p>
                        <p className="text-base md:text-lg mb-2">
                            <strong>Ubicación:</strong> Buenos Aires, Argentina
                        </p>
                    </div>

                    <div className="w-full flex justify-center space-x-4">
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200 transition duration-300"
                        >
                            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200 transition duration-300"
                        >
                            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200 transition duration-300"
                        >
                            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200 transition duration-300"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                        </a>
                    </div>


                </div>
            </div>
        </footer>
    )

}


export default Footer 