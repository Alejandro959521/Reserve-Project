import { createContext, useState, useEffect } from "react";

export const InfoContext = createContext()

export const InfoProvider = ({ children }) => {



  const [dataUsers, setdataUsers] = useState(null)

  useEffect(() => {
    getUser();
  }, [])

  function getUser() {
    fetch('http://localhost:8082/api/v1/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        } return response.json();
      })
      .then((result) => { setdataUsers(result); })
      .catch((err) => {
        setError(err.message);
      })

  }
  function createUser(userData) {

    fetch("http://localhost:8082/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          alert("No se pudo crear el usuario");
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        console.log("Usuario creado");
        alert("usuario creado ");
        getUser();
      })
      .catch((error) => {

        console.log("Error al crear el usuario:", error.message);
      })
  };

  function updateUser(userData, userId) {

    fetch(`http://localhost:8082/api/v1/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          alert("No se pudo actualizar el usuario");
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        console.log("Usuario actualizado");
        alert("usuario actualizado ");
        getUser();
      })
      .catch((error) => {

        console.log("Error al actualizar el usuario:", error.message);
      })
  };


  function deleteUser(userId) {

    fetch(`http://localhost:8082/api/v1/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          alert("No se pudo eliminar el usuario");
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        console.log("Usuario eliminado");
        alert("Usuario eliminado correctamente");
        getUser();
       })
      .catch((error) => {

        console.log("Error al eliminar el usuario:", error.message);
      })
  };
  console.log("datos user", dataUsers)







  return (
    <InfoContext.Provider value={{
      dataUsers, setdataUsers,
      getUser, createUser, updateUser, deleteUser




    }}>
      {children}
    </InfoContext.Provider>

  )
}