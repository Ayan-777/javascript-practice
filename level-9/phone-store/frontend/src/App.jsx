import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./pages/Navbar.jsx";
import PhoneDetails from "./pages/PhoneDetails.jsx";



function App(){
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/phone/:id" element={<PhoneDetails/>}/>
    </Routes>
    </>
  )
}

export default App;