import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage'; 

const CarouselComponent = () => {
    return (
        <div className='container-fluid'>
            <Carousel fade>
            <Carousel.Item key={1}>
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
            <Carousel.Item key={2}>
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
            <Carousel.Item key={3}>
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

// import React from "react";
// import "../App.css";

// function CarouselComponent() {
//     return (
//         <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//         <div className="carousel-indicators">
//             <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//             ></button>
//             <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//             ></button>
//             <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//             ></button>
//         </div>
//             <div className="carousel-item active">
//                 <div className="rectangle"></div>
//                 <img src="./carousel-1.jpg" className="d-block w-100" alt="Wild Landscape" />
//                 <div className="carousel-caption d-md-block d-md-block position-absolute top-0 start-0">
//                     <h6>Providing you</h6>
//                     <h1><span className="blue-text">Secure</span> & <span className="blue-text">Reliable</span> e-Payment Platform</h1>
//                     <p>Experience the future of hassle-free e-payments with Kimipay's cutting-edge solutions that set new standards for security and reliability.</p>
//                 </div>
//             </div>
//             <div className="carousel-item">
//                 <div className="rectangle"></div>
//                 <img src="./carousel-2.jpg" className="d-block w-100" alt="Camera" />
//                 <div className="carousel-caption d-none d-md-block">
//                     <h5>Second slide label</h5>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </div>
//             </div>
//             <div className="carousel-item">
//                 <div className="rectangle"></div>
//                 <img src="./carousel-3.jpg" className="d-block w-100" alt="Exotic Fruits" />
//                 <div className="carousel-caption d-none d-md-block">
//                     <h5>Third slide label</h5>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                 </div>
//             </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden"></span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden"></span>
//         </button>
//         </div>
//     );
// }

// export default CarouselComponent;
