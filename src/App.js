import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Aboutus from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
import Slider from './components/Slider';
import TestimonialSlider from './components/Testimonails';
import { FaWhatsapp } from 'react-icons/fa';
import ServicePage from './pages/ServicePage';
import AssociateBrands from './components/AssociateBrands';
import Footer from './components/Footer';
import ProductsPage from './pages/products/Products';
import Contact from './pages/contact/Contact';

function App() {
  const phoneNumber = '9848333169'
  const message = 'Hello, I need help!'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Router>
      <div className="app flex flex-col my-0  mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Slider />
                <OurServices />
                <Aboutus />
                <AssociateBrands/>
                <TestimonialSlider />
                <Footer/>
              </>
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="products" element={<ProductsPage />} />
        </Routes>
        <div className="whatsapp-icon">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={60} className="text-white" />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;