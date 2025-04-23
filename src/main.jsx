import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  About  from './components/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Contact } from './components/Contact.jsx'
import { Error } from './components/Error.jsx'
import Body from './components/Body.jsx'
import {ResMenu} from './components/ResMenu.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/" , 
    element : <App/>,
    errorElement:  <Error/>,
    children : [
      {
        path : "/" , 
        element : <Body/>,
        errorElement:  <Error/>
      },
      {
        path : "/about" , 
        element : <About/>,
        errorElement:  <Error/>
      },
  
      {
        path : "/contact" , 
        element : <Contact/>,
        errorElement:  <Error/>
      },
      {
        path:"/restaurants/:resId" ,
        element:<ResMenu />
      }
    ]
  } 
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter}>
    
    </RouterProvider>



)
