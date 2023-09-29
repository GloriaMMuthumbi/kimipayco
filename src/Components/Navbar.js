import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutUsComponent from './AboutUs';
import CarouselComponent from './Carousel';
import InforgraphComponent from './Inforgraphs';
import ServicesComponent from './Services';
import WhyChooseUsComponent from './WhyChooseUs';

function NavbarComponent() {
    const [currentSection, setCurrentSection] = useState('');

    useEffect(() => {
        window.history.replaceState(null, null, `${currentSection}`);
    }, [currentSection]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);

        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(sectionId);
        }
    };

    return (
        <>
            <div className="container-fluid mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 nav-bar" id="home">
                <Navbar expand="lg" className="bg-body-tertiary container-fluid navbar-light bg-light">
                    <Container>
                    <a href="/" className="pull-left"><img src="./logo22.png" alt='' height={50} /></a> 
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <span class="material-symbols-outlined"></span>
                            <Nav className="m-auto" expand="md">
                                <Nav.Link 
                                href='aboutus'
                                className='text-dark nav-link'
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('aboutus');
                                }}
                                >About us</Nav.Link>
                                <Nav.Link 
                                href='services' 
                                className='text-dark nav-link'
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('services');
                                }}
                                >Services</Nav.Link>
                                <Nav.Link 
                                href='contactus' 
                                className='text-dark nav-link'
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('contactus');
                                }}
                                >Contact Us</Nav.Link>
                            </Nav>
                            <Link to="/register">
                                <Button className='shadow-none'>Get Started</Button>
                            </Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <CarouselComponent />
            <div id="aboutus">
                <AboutUsComponent />
            </div>
            <InforgraphComponent />
            <div id="services">
                <ServicesComponent />
            </div>
            <WhyChooseUsComponent />
            <div id="contactus">
                <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#111' }}>
                    <div className="container p-4 pb-0">
                        <section className="">
                        <div className="row">
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 footer-col">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i className="fas fa-map-marker-alt mr-3"></i>Nairobi, Kenya</p>
                            <p><i className="fas fa-envelope mr-3"></i>info@kimipay.com</p>
                            <p><i className="fas fa-phone mr-3"></i>+ 254 716 944 544</p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 footer-col">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Quick links</h6>
                            <p>
                                <a 
                                className="text-white link" 
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('home');
                                }}
                                >Home</a>
                            </p>
                            <p>
                                <a 
                                className={`text-white link ${currentSection === 'aboutus' ? 'active' : ''}`} 
                                href="aboutus"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('aboutus');
                                }}
                                >About Us</a>
                            </p>
                            <p>
                                <a 
                                className={`text-white link ${currentSection === 'services' ? 'active' : ''}`}
                                href="services"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('services');
                                }}
                                >Services</a>
                            </p>
                            <p>
                                <a 
                                className={`text-white link ${currentSection === 'contactus' ? 'active' : ''}`} 
                                href="contactus"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('contactus');
                                }}
                                >Contact Us</a>
                            </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 footer-col">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Our Services</h6>
                            <p>
                                <a className="text-white link" href="/remmitance">Remmitance</a>
                            </p>
                            <p>
                                <a className="text-white link" href="/collection">Revenue Management</a>
                            </p>
                            <p>
                                <a className="text-white link" href="https://sms.kimipay.com/">Bulk SMS</a>
                            </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none hr-mobile" />

                            <hr className="w-100 clearfix d-md-none hr-mobile" />

                            
                        </div>
                        </section>
                        <hr className="my-3" />
                        <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                            <div className="p-3">
                                © 2023 Copyright:
                                <a className="text-white " href="#!">KimiPay</a>
                            </div>
                            </div>
                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/profile.php?id=100094387916963" role="button">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/KimipayLtd" role="button">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/kimipayltd/" role="button">
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>
                        </section>
                    </div>
                    </footer>
            </div>
        </>
    );
}

export default NavbarComponent;
