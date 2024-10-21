
import { useRoutes,BrowserRouter } from 'react-router-dom'
import { CartProvider } from '../../Context'
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
    <CartProvider>
    <BrowserRouter>
    <AppRoutes />
    <Navbar/>
    </BrowserRouter>
    </CartProvider>

    </>
  )
}

export default App
