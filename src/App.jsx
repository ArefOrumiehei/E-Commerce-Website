import { Route, Routes } from "react-router-dom";

//Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ProductDeatils from "./pages/ProductDeatils";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/products/:id" element={<ProductDeatils/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
