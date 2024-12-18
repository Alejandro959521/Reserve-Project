import emailjs from '@emailjs/browser'
import { useRef } from "react";



const Contact = () => {


    const refForm = useRef();
	  
	const handleSubmit = (event) => {
		event.preventDefault();

		const serviceId = 'service_1wuh0qd';
		const templateId = 'template_qaay7ai'; 
		const apikey ='G-NYx_lQl60RHZ-Xo';
   
		emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
		.then(result => alert('Correo enviado con éxito!'))
		.catch(error => alert('Error al enviar el correo...'))
	}


	

    return (

	<div id="contactSection" className="py-12 bg-black text-white">
		<h2 className="text-4xl md:text-6xl text-center font-bold mb-8">Contactanos</h2>
		<div className="flex flex-wrap justify-around gap-6">
		  <div className="text-center max-w-xs">
			<i className="fas fa-map-marker-alt text-4xl mb-4"></i>
			<h3 className="text-2xl font-bold mb-2">DIRECCIÓN</h3>
			<p className="text-lg">Merida, Aricagua, Venezuela</p>
		  </div>
		  <div className="text-center max-w-xs">
			<i className="fas fa-phone-alt text-4xl mb-4"></i>
			<h3 className="text-2xl font-bold mb-2">TELÉFONO</h3>
			<p className="text-lg">234-9876-5400</p>
		  </div>
		  <div className="text-center max-w-xs">
			<i className="fas fa-envelope text-4xl mb-4"></i>
			<h3 className="text-2xl font-bold mb-2">EMAIL</h3>
			<p className="text-lg">CumbresAltas@gmail.com</p>
		  </div>
		</div>
	
		<div className="mt-8 flex flex-wrap justify-around gap-6">
		  <form
			onSubmit={handleSubmit}
			ref={refForm}
			className="flex flex-col space-y-6 w-full md:w-2/5 px-4"
		  >
			<input
			required
			  name="email"
			  type="email"
			  placeholder="Ej: CumbresAltas@gmail.com"
			  className="p-3 text-lg rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400 text-white"
			/>
			<input
			required
			  name="username"
			  type="text"
			  placeholder="Nombre Completo"
			  className="p-3 text-lg rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400 text-white"
			/>
			<textarea
			required
			  name="message"
			  rows="4"
			  placeholder="Comentario"
			  className="p-3 text-lg rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400 text-white"
			></textarea>
			<button
			  type="submit"
			  className="py-3 text-xl font-bold bg-blue-600 hover:bg-blue-700 rounded text-white"
			>
			  ENVIAR
			</button>
		  </form>
		</div>
	  </div>

    )

}

export default Contact