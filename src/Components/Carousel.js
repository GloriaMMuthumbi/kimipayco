import React from 'react'; 
import '../App.css';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

const CarouselComponent = () => {
    return (
        <div className='container-fluid carousel-container'>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    data-mdb-toggle="animation"
                    data-mdb-animation-reset="false"
                    data-mdb-animation="fade-in"
                    data-mdb-animation-start="onLoad"
                    className='w-100 d-block'
                    itemId={1}
                    src='./carousel-1.jpg'
                    alt='...'
                >
                    <div className="carousel-item-text">
                        <h6 className="text-light fw-bolder">Providing you</h6>
                        <h1><span className="blue-text">Secure</span> &amp; <span className="blue-text">Reliable</span> e-Payment Platform</h1>
                        <p className="fs-5 text">Experience the future of hassle-free e-payments with Kimipay's cutting-edge solutions that set new standards for security and reliability.</p>
                    </div>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='./carousel-2.jpg'
                    alt='...'
                >
                    <h6 className="text-light fw-bolder">We are leaders in</h6>
                    <h1><span className="blue-text">Plug</span> &amp; <span className="blue-text">Play</span> Solutions</h1>
                    <p className="fs-5 text">At Kimipay, we simplify your e-payment needs, offering intuitive solutions that guarantee both safety and dependability</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='./carousel-3.jpg'
                    alt='...'
                >
                    <h6 className="text-light fw-bolder">We offer the</h6>
                    <h1><span className="blue-text">Fastest</span> SMS Speeds</h1>
                    <p className="fs-5 text">Unlock the swiftness of out bulk SMS services.</p>
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    );
};

export default CarouselComponent;

