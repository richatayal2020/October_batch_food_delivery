import { StrictMode , Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import  About  from './components/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Contact } from './components/Contact.jsx'
import { Error } from './components/Error.jsx'
import Body from './components/Body.jsx'
import {ResMenu} from './components/ResMenu.jsx'
import {Provider} from 'react-redux'
// import { Cart } from './components/Cart.jsx'
import Store from './utils/Store.js'


const About = lazy(()=> import('./components/About.jsx') )
const Cart = lazy(()=> import('./components/Cart.jsx'))

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

        element : <Suspense fallback={<div>Loading about compoment .............</div>}> <About/></Suspense>,
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
      },
      {
        path:'/cart',
        element:(<Suspense fallback={<div>Loading about compoment .............</div>}> <Cart/></Suspense>)
          
      }
    ]
  } 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>



)
