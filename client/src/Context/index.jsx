import { createContext, useState } from "react";

export const InfoContext = createContext()

export const InfoProvider = ({children}) => {
    
    //
    const [items, setItems] = useState(null)
 
    //

    return (
        <InfoContext.Provider value={{
            items,setItems

        }}> 
            {children}
        </InfoContext.Provider> 

    )
}