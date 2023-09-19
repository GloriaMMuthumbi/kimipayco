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

function NavbarComponent() {

    return (
        <>
            <div className="container-fluid mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <Navbar expand="lg" className="bg-body-tertiary container-fluid">
                    <Container>
                    <a href="/" className="pull-left"><img src="./logo22.png" alt='' height={50} /></a> 
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href='#aboutus'>About us</Nav.Link>
                            <Nav.Link href='#!'>Services</Nav.Link>
                            <Nav.Link href="#!">Contact Us</Nav.Link>
                        </Nav>
                        <Button className='submit-btn'>Get Started</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <CarouselComponent />
            <InforgraphComponent />
            <AboutUsComponent id="aboutus"/>
            <ServicesComponent />
            <WhyChooseUsComponent />
            <FooterComponent />
        </>
    );
}

export default NavbarComponent;
