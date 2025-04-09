
import './App.css'
import Body from './components/Body'
import { Counter } from './components/Counter'
import { Footer } from './components/Footer'
import Header from './components/Header'

function App() {

  // const [state , setState] = useState(true);
  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
      {/* <button onClick={() => {setState(!state)}}>Toggle</button> */}
       {/* {state ? <Counter/> : ""} */}
    </>
  )
}

export default App
