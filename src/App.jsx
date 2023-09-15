import { Route, Routes } from "react-router-dom";

//Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WishList from "./pages/WishList";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wishlist" element={<WishList/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
