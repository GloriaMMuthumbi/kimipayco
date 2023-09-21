import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import AboutUsComponent from './AboutUs';
import CarouselComponent from './Carousel';
import FooterComponent from './Footer';
import InforgraphComponent from './Inforgraphs';
import ServicesComponent from './Services';
import WhyChooseUsComponent from './WhyChooseUs';
import { Link } from 'react-router-dom';

function NavbarComponent() {

    return (
        <>
            <div className="container-fluid mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <Navbar expand="lg" className="bg-body-tertiary container-fluid sticky-top">
                    <Container>
                    <a href="/" className="pull-left"><img src="./logo22.png" alt='' height={50} /></a> 
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href='#aboutus' className='text-dark nav-link'>About us</Nav.Link>
                            <Nav.Link href='#services' className='text-dark nav-link'>Services</Nav.Link>
                            <Nav.Link href="#contactus" className='text-dark nav-link'>Contact Us</Nav.Link>
                        </Nav>
                        <Link to="/register">
                            <Button className='shadow-none'>Get Started</Button>
                        </Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <CarouselComponent />
            <InforgraphComponent />
            <div id="aboutus">
                <AboutUsComponent />
            </div>
            <div id="services">
                <ServicesComponent />
            </div>
            <WhyChooseUsComponent />
            <div id="contactus">
                <FooterComponent />
            </div>
        </>
    );
}

export default NavbarComponent;
