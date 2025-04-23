
import { Outlet } from 'react-router-dom'
import './App.css'
import Body from './components/Body'

import { Footer } from './components/Footer'
import Header from './components/Header'

// import  RestaurantMenu  from './components/RestaurantMenu'
// import { ResMenu } from './components/ResMenu'



function App() {

  // const [state , setState] = useState(true);
  return (
    <>
      <Header/>
      <Outlet/>

      {/* <MemoHook/> */}
      {/* <UseRef/> */}
      {/* <UseRefEx1/> */}

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
