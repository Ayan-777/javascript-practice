import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PhoneDetails from "./pages/PhoneDetails";
import { About } from "./pages/About";
import AboutMe from "./pages/AboutMe";
import Cart from "./pages/Cart";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/phone/:id" element={<PhoneDetails />} />
      </Routes>
    </CartProvider>
  );
}

export default App;