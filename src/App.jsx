import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./Navbar"
import HomeLayout from "./components/HomeLayout/HomeLayout"
import Footer from "./Footer";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Services from "./components/OurServices/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="services" element={<Services />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
