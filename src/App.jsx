import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./Navbar"
import HomeLayout from "./components/HomeLayout/HomeLayout"
import Footer from "./Footer";
import About from "./components/About/About";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
