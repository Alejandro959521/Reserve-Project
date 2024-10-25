import { faTwitter, faInstagram, faFacebook, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "./../../../img/logo.png"

const Footer = () => {

    return (
        <footer className="mx-auto text-black my-auto py-10" style={{ backgroundColor: `#99CCFF` }}>

            <div className="flex justify-around  items-center flex-col md:flex-row py-4">

                <div className="text-left ">
                    <img className="w-24 h-24 md:w-48 md:h-48" src={logo} />

                </div>

                <div className=" py-2 text-center md:text-left">
                    <p className="text-3xl font-bold mb-8">Acerca de :</p>
                    <p className="text-2xl mb-8">fotografía de alta calidad y diseño <br />al alcance de tu habitación</p>

                </div>

                <div className=" text-left ">

                    <p className="text-3xl font-bold py-2">Contacto:</p>
                    <p className="text-2xl py-2">CumbresAltas@gmail.com <br /> +564123434567, Buenos Aires <br /> Argentina</p>

                    <div className="flex justify-start space-x-4  py-2 ">
                        <a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitter} className=" icong hover:text-gray-500" /></a>
                        <a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} className=" icong hover:text-gray-500" /></a>
                        <a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebook} className=" icong hover:text-gray-500" /></a>
                        <a href="https://www.google.es" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} className=" icong hover:text-gray-500" /></a>

                    </div>

                </div>

            </div>
        </footer>
    )

}


export default Footer 