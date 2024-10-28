
import { useRoutes } from 'react-router-dom'
import { InfoProvider } from '../../Context'
import NotFound from '../NotFound'
import Home from '../Home'
import Lodging from '../Lodging'
import './App.css'
import Navbar from '../../Components/Navbar'
import SignUp from '../../Components/SignUp'
import Login from '../../Components/Login'
import React, { useState } from "react";
import PageReserve from '../PageReserve'
const AppRoutes = () => {

  let routes = useRoutes([

    { path: '/', element: <Home /> }, 
    { path: '/Hospedajes', element: <Lodging /> },
    { path: '/Reserva', element: <PageReserve /> },
    { path: '/*', element: <NotFound /> },


  ])
  return routes
}

const App = () => {

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false)

  const openLoginClick = () => {
    setShowLoginForm(true);
    setShowSignUp(false)

  };

  const onCloseLogin = () => {
    setShowLoginForm(false);
  }

  const ChangeToSingUp = () => {
    onCloseLogin();
    setShowSignUp(true)
    setShowLoginForm(false);
    
  }

  const onCloseSignUp = () => {  
    setShowSignUp(false)
    
  }

  return (
    <>
      <InfoProvider>     
          <Navbar openLoginClick={openLoginClick} ChangeToSingUp={ChangeToSingUp}/>
          {showLoginForm && (<Login onCloseLogin={onCloseLogin} ChangeToSingUp={ChangeToSingUp} 
              />         
          )}
            {showSignUp && (<SignUp onCloseSignUp={onCloseSignUp} 
              />         
          )}         
          <AppRoutes />      
      </InfoProvider>

    </>
  )
}

export default App
