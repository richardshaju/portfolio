import React from 'react'
import About from './Component/About/About';
import Banner from './Component/Banner.js/Banner';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Service from './Component/Service/Service';
import Works from './Component/Works/Works';

function Home() {
  return (
    <div>
        <Navbar />
      <Banner />
      <About />
      <Service />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home