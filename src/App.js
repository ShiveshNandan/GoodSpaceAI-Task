import './App.css';
import Customers from './components/Customers';
import Integration from './components/Integration';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Features from './components/Features';
import HeroSection from './components/HeroSection';
import Manage from './components/Manage';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Carousel/>
    <Features/>
    <Integration/>
    <Customers/>
    <Manage/>
    <Footer/>
    </>
  );
}

export default App;
