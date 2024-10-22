
import { useRoutes,BrowserRouter } from 'react-router-dom'
import { InfoProvider } from '../../Context'
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
    <InfoProvider>
    <BrowserRouter>
    <Navbar/>
    <AppRoutes />  
    </BrowserRouter>
    </InfoProvider>

    </>
  )
}

export default App
