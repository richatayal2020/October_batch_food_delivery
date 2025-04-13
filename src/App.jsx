
import { Outlet } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import { Counter } from './components/Counter'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Memo from './components/memo'
import Ref from './components/Ref'
import { MenuCard } from './components/MenuCard'
// import  RestaurantMenu  from './components/RestaurantMenu'
// import { ResMenu } from './components/ResMenu'



function App() {

  // const [state , setState] = useState(true);
  return (
    <>
      <Header/>
      <Outlet/>

      {/* <Memo/> */}
      {/* <Ref/> */}
    {/* <MenuCard/> */}


      {/* <RestaurantMenu/> */}


      {/* if("/" ==> Body )
        if("/about" ==> about )
          if("/contact" ==> contact ) */}

      {/* <Body/> */}
      {/* <Footer/> */}
      {/* <RestaurantMenu/> */}
      

      
    </>
  )
}

export default App
