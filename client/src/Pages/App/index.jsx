
import { useRoutes,BrowserRouter } from 'react-router-dom'
import { InfoProvider } from '../../Context'
import NotFound from '../NotFound'
import Home from '../Home'
import './App.css'
import Navbar from '../../Components/Navbar'
import Login from '../../Components/Login'
import {useState } from "react";

const AppRoutes = () => {

  let routes = useRoutes([
    
    {path: '/', element: <Home/> },
    {path: '/*', element: <NotFound/> },
    {path: '/login', element: <Login/> } 
 
   
  ])
  return routes
}

const App = () => { 

  const [showLoginForm, setShowLoginForm] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false)

	const openLoginClick = () => {
		setShowLoginForm(!showLoginForm);
	};



  const onCloseLogin = () => {
		setShowLoginForm(!showLoginForm);
		
	}

  const ChangeToSingUp = () => {
		onCloseLogin();
		setShowSignUp(true)
	}

  return (
    <>
    <InfoProvider>
    <BrowserRouter>
    <Navbar onLoginClick={openLoginClick}/>
    {showLoginForm && <Login onCloseLogin={onCloseLogin} ChangeToSingUp={ChangeToSingUp}/>}
    <AppRoutes />  
    </BrowserRouter>
    </InfoProvider>

    </>
  )
}

export default App
