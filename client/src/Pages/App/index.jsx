
import { useRoutes,BrowserRouter } from 'react-router-dom'
import NotFound from '../NotFound'
import Home from '../Home'
import './App.css'
import Navbar from '../../Components/Navbar'

const AppRoutes = () => {

  let routes = useRoutes([
    
    {path: '/', element: <Home/> },
    {path: '/*', element: <NotFound/> } 
   
  ])
  return routes
}


const App = () => { 

  return (
    <>
    <BrowserRouter>
    <AppRoutes />
    <Navbar/>
    </BrowserRouter>
    </>
  )
}

export default App
