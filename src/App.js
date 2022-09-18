import About from './Component/About/About';
import Banner from './Component/Banner.js/Banner';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
