import "./index.css";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Footer from "./Footer";
import {  Routes, Route, Outlet } from 'react-router-dom';


function App() {

  const Layout = () => {

      return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
  }


  return (

    <> 
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
          </Route>
      </Routes>

    
    </>
  )
}


export default App