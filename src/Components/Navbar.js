import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavbarComponent() {

    return (
        <div className="container-fluid mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            <Navbar expand="lg" className="bg-body-tertiary container-fluid">
                <Container>
                <a href="/" className="pull-left"><img src="./logo22.png" alt='' height={50} /></a> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href='#!' className="navbar-item nav-link-custom" >About us</Nav.Link>
                        <Nav.Link href='#!' className="navbar-item" >Services</Nav.Link>
                        <Nav.Link href="#!" className="navbar-item" >Contact Us</Nav.Link>
                    </Nav>
                    <Button className='submit-btn'>Get Started</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;