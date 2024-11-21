import { createContext, useState, useEffect } from "react";

export const InfoContext = createContext()

export const InfoProvider = ({children}) => {
    

 
    const [dataUsers,setdataUsers] = useState(null)

    useEffect(() => {

        fetch('http://localhost:8082/api/v1/users')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }
          return response.json(); 
        })
        .then((result) => {
            setdataUsers(result); 
        })
        .catch((err) => {
          setError(err.message);
        })

    }, [])

console.log("datos user", dataUsers)




    return (
        <InfoContext.Provider value={{
            dataUsers,setdataUsers

        }}> 
            {children}
        </InfoContext.Provider> 

    )
}