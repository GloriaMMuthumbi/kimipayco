import React from 'react'; 
import '../App.css';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

const CarouselComponent = () => {
    return (
        <div className='container-fluid'>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='./carousel-1.jpg'
                    alt='...'
                >
                    <h6 class="text-light fw-bolder ">Providing you</h6>
                    <h1><span class="blue-text">Secure</span> &amp; <span class="blue-text">Reliable</span> e-Payment Platform</h1>
                    <p class="fs-5 text">Experience the future of hassle-free e-payments with Kimipay's cutting-edge solutions that set new standards for security and reliability.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='./carousel-2.jpg'
                    alt='...'
                >
                    <h6 class="text-light fw-bolder ">We are leaders in</h6>
                    <h1><span class="blue-text">Plug</span> &amp; <span class="blue-text">Play</span> Solutions</h1>
                    <p class="fs-5 text">At Kimipay, we simplify your e-payment needs, offering intuitive solutions that guarantee both safety and dependability</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='./carousel-3.jpg'
                    alt='...'
                >
                    <h6 class="text-light fw-bolder">We offer the</h6>
                    <h1><span class="blue-text">Fastest</span> SMS Speeds</h1>
                    <p class="fs-5 text">Unlock the swiftness of out bulk SMS services.</p>
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    );
};

export default CarouselComponent;

