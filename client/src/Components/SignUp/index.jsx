



const SignUp = ({ onCloseSignUp }) => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-0">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto sm:max-w-md">
                
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
                    onClick={onCloseSignUp}
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold text-center text-[#003366] mb-6">Registrarse</h2>
                
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#669966]"
                            placeholder="Ingresa tu correo"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Usuario</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#669966]"
                            placeholder="Ingresa tu usuario"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700">Nombre y Apellido </label>
                        <input
                            type="text"
                            id="firstName"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#669966]"
                            placeholder="Ingresa tu nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700">Número de Teléfono</label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#669966]"
                            placeholder="Ingresa tu número de teléfono"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#669966]"
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#669966] text-white py-2 px-4 rounded hover:bg-[#557755] transition duration-300"
                    >
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp
