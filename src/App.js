import './App.css';
import AboutUsComponent from './Components/AboutUs';
import CarouselCompononent from './Components/Carousel';
import FooterComponent from './Components/Footer';
import InforgraphComponent from './Components/Inforgraphs';
import NavbarComponent from './Components/Navbar';
import ServicesComponent from './Components/Services';
import WhyChooseUsComponent from './Components/WhyChooseUs';

function App() {
  return (
    <div className='App-container'>
      <NavbarComponent />
      <CarouselCompononent />
      <InforgraphComponent />
      <AboutUsComponent />
      <ServicesComponent />
      <WhyChooseUsComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
