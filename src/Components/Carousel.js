import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage'; 
import '../App.css';

const CarouselComponent = () => {
    return (
        <div className='container-fluid'>
            <Carousel>
            <Carousel.Item interval={3500}>
                <ExampleCarouselImage
                text="First slide"
                imageSrc="./carousel-1.jpg"
                />
                <div className="rectangle"></div>
                <Carousel.Caption>
                <h6>Providing you</h6>
                <h1><span className="blue-text">Secure</span> & <span className="blue-text">Reliable</span> e-Payment Platform</h1>
                <p>Experience the future of hassle-free e-payments with Kimipay's cutting-edge solutions that set new standards for security and reliability.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3500}>
                <ExampleCarouselImage
                text="Second slide"
                imageSrc="./carousel-2.jpg"
                />
                <div className="rectangle"></div>
                <Carousel.Caption>
                <h6>We are leaders in</h6>
                <h1><span className="blue-text">Plug</span> & <span className="blue-text">Play</span> Solutions</h1>
                <p>At Kimipay, we simplify your e-payment needs, offering intuitive solutions that guarantee both safety and dependability</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3500}>
                <ExampleCarouselImage
                text="Second slide"
                imageSrc="./carousel-3.jpg"
                />
                <div className="rectangle"></div>
                <Carousel.Caption>
                <h6>We offer the</h6>
                <h1><span className="blue-text">Fastest</span> SMS Speeds</h1>
                <p>Unlock the swiftness of out bulk SMS services.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselComponent;

