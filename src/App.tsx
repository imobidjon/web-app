import { AppMenu } from "./layout";
import { CardInfo, Home } from "./pages"
import {Route, Routes} from "react-router-dom";


function App() {

  return (
    <>
      <AppMenu />

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/card-info' element={<CardInfo/>}/>
    </Routes>
    </>
  )
}

export default App
