import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Products from './components/Products'
import TopProducts from './components/TopProducts';
import Banner from './components/Banner';
import Subscribe from './components/Subscribe';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Popup from './components/Popup';

const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  //AOS Animation
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscribe />
      <Testimonials/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App