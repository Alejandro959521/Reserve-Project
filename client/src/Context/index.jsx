import { createContext, useState, useEffect } from "react";

export const InfoContext = createContext()

export const InfoProvider = ({ children }) => {

  const [dataUser, setdataUser] = useState(null)
  const [dataToken, setdataToken] = useState(localStorage.getItem("token") ?? null)
  const [dataUsers, setdataUsers] = useState(null)
  const [dataRooms, setdataRooms] = useState(null)
  const [dataReserves, setdataReserves] =  useState(null)
  const [dataRoom, setdataRoom] = useState(null)

  useEffect(() => {
    getUser()
    getRoom()
    getReserves()
    setdataToken(localStorage.getItem("token"))
  }, [])


  function logOut () {
    
      localStorage.removeItem("token");
      setdataToken(null)
      
  }

  function createToken(data) {
    fetch("https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          
          alert("Datos erroneos");
         
          throw new Error(`Error en la solicitud: ${response.status}`);
         
        }     
        return response.json();
      })
      .then((body) => { 
        setdataUser(body.user)
        setdataToken(body.token)       
        localStorage.setItem("token", body.token)
        alert("Bienvenido");
        
      })
      .catch((error) => {

        console.log("Error al crear token:", error.message);
        
      })

  }

  function getUser() {
    fetch('https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/users')
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
    fetch('https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/rooms')
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

  function getRoomId(roomId) {
    fetch(`https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/rooms/${roomId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        } return response.json();
      })
      .then((result) => { setdataRoom(result);  })
      .catch((err) => {
        setError(err.message);
      })

  }

  function getReserves() {
    fetch('https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/reserves')
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

    fetch("https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
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
        
        alert("usuario creado ");
        getUser();
      })
      .catch((error) => {

        console.log("Error al crear el usuario:", error.message);
      })
  };

  function createRoom(roomData) {

    fetch("https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
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
        
        alert("Habitación creada con exito");
        getRoom();
      })
      .catch((error) => {

        console.log("Error al crear Habitación :", error.message);
      })
  };

  function createReserve(reserveData) {

    fetch("https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/reserves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
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
        
        alert("Reserva creada con exito");
        getReserves();
      })
      .catch((error) => {

        console.log("Error al crear Reserva :", error.message);
      })
  };

  function updateUser(userData, userId) {

    fetch(`https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
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
        
        alert("usuario actualizado ");
        getUser();
      })
      .catch((error) => {

        console.log("Error al actualizar el usuario:", error.message);
      })
  };

  function updateRoom(roomData, roomId) {

    fetch(`https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/rooms/${roomId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
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
        
        alert("Habitación actualizada");
        getRoom();
      })
      .catch((error) => {

        console.log("Error al actualizar la habitación", error.message);
      })
  };

  function updateReserve(reserveData, reserveId) {

    fetch(`https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/reserves/${reserveId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
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
        
        alert("Reserva actualizada");
        getReserves();
      })
      .catch((error) => {

        console.log("Error al actualizar la reserva", error.message);
      })
  };

  function deleteUser(userId) {

    fetch(`https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
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
        
        alert("Usuario eliminado correctamente");
        getUser();
      })
      .catch((error) => {

        console.log("Error al eliminar el usuario:", error.message);
      })
  };


  function deleteRoom(roomId) {

    fetch(`https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/rooms/${roomId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
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
        
        alert("Habitación eliminada correctamente");
        getRoom();
      })
      .catch((error) => {

        console.log("Error al eliminar la habitación:", error.message);
      })
  };


  function deleteReserve(reserveId) {

    fetch(`https://arcane-shore-68428-096679b21841.herokuapp.com/api/v1/reserves/${reserveId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
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
      dataRoom, setdataRoom,
      getUser, createUser, updateUser, deleteUser,
      getRoom, deleteRoom, createRoom, updateRoom, getRoomId,
      getReserves, deleteReserve, createReserve, updateReserve,
      createToken, logOut,
      dataUser, setdataUser,
      dataToken, setdataToken
    }}>
      {children}
    </InfoContext.Provider>

  )
}