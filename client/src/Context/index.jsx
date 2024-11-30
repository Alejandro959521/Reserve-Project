import { createContext, useState, useEffect } from "react";

export const InfoContext = createContext()

export const InfoProvider = ({ children }) => {



  const [dataUsers, setdataUsers] = useState(null)
  const [dataRooms, setdataRooms] = useState(null)
  const [dataReserves, setdataReserves] =  useState(null)

  useEffect(() => {
    getUser()
    getRoom()
    getReserves()
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

  function getRoom() {
    fetch('http://localhost:8082/api/v1/rooms')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        } return response.json();
      })
      .then((result) => { setdataRooms(result);  })
      .catch((err) => {
        setError(err.message);
      })

  }

  function getReserves() {
    fetch('http://localhost:8082/api/v1/reserves')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        } return response.json();
      })
      .then((result) => { setdataReserves(result); })
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

  function createRoom(roomData) {

    fetch("http://localhost:8082/api/v1/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(roomData),
    })
      .then((response) => {
        if (!response.ok) {
          alert("No se pudo crear la habitación");
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        console.log("Habitación creada con exito");
        alert("Habitación creada con exito");
        getRoom();
      })
      .catch((error) => {

        console.log("Error al crear Habitación :", error.message);
      })
  };

  function createReserve(reserveData) {

    fetch("http://localhost:8082/api/v1/reserves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reserveData),
    })
      .then((response) => {
        if (!response.ok) {
          alert("No se pudo crear la reserva");
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        console.log("Reserva creada con exito");
        alert("Reserva creada con exito");
        getReserves();
      })
      .catch((error) => {

        console.log("Error al crear Reserva :", error.message);
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

  function updateRoom(roomData, roomId) {

    fetch(`http://localhost:8082/api/v1/rooms/${roomId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(roomData),
    })
      .then((response) => {
        if (!response.ok) {
          alert("No se pudo actualizar la habitación");
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        console.log("Habitación actualizada");
        alert("Habitación actualizada");
        getRoom();
      })
      .catch((error) => {

        console.log("Error al actualizar la habitación", error.message);
      })
  };

  function updateReserve(reserveData, reserveId) {

    fetch(`http://localhost:8082/api/v1/reserves/${reserveId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reserveData),
    })
      .then((response) => {
        if (!response.ok) {
          alert("No se pudo actualizar la reserva");
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        console.log("Reserva actualizada");
        alert("Reserva actualizada");
        getReserves();
      })
      .catch((error) => {

        console.log("Error al actualizar la reserva", error.message);
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


  function deleteRoom(roomId) {

    fetch(`http://localhost:8082/api/v1/rooms/${roomId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          alert("No se pudo eliminar la habitación");
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        console.log("Habitación eliminada");
        alert("Habitación eliminada correctamente");
        getRoom();
      })
      .catch((error) => {

        console.log("Error al eliminar la habitación:", error.message);
      })
  };


  function deleteReserve(reserveId) {

    fetch(`http://localhost:8082/api/v1/reserves/${reserveId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          alert("No se pudo eliminar la reserva");
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        console.log("Reserva eliminada");
        alert("Reserva eliminada correctamente");
        getReserves();
      })
      .catch((error) => {

        console.log("Error al eliminar la reserva:", error.message);
      })
  };


  return (
    <InfoContext.Provider value={{
      dataUsers, setdataUsers,
      dataRooms, setdataRooms,
      dataReserves, setdataReserves,
      getUser, createUser, updateUser, deleteUser,
      getRoom, deleteRoom, createRoom, updateRoom,
      getReserves, deleteReserve, createReserve, updateReserve


    }}>
      {children}
    </InfoContext.Provider>

  )
}