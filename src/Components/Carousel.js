import React from 'react'; 
import '../App.css';

const CarouselComponent = () => {
    return (
        <div className='container-fluid'>
            <div class="carousel slide">
                <div class="carousel-inner">
                    <ol class="carousel-indicators">
                        <li data-mdb-target="0" class="active"></li>
                        <li data-mdb-target="1" class=""></li>
                        <li data-mdb-target="2" class=""></li>
                    </ol>
                    <div class="carousel-item">
                        <img class="w-100 d-block" src="./carousel-1.jpg" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <div class="position-absolute top-50  align-items-center">
                                <h6 class="text-light fw-bolder ">Providing you</h6>
                                <h1><span class="blue-text">Secure</span> &amp; <span class="blue-text">Reliable</span> e-Payment Platform</h1>
                                <p class="fs-5 text">Experience the future of hassle-free e-payments with Kimipay's cutting-edge solutions that set new standards for security and reliability.</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100 d-block" src="./carousel-2.jpg" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <div class="position-absolute top-50  align-items-center">
                                    <h6 class="text-light fw-bolder ">We are leaders in</h6>
                                    <h1><span class="blue-text">Plug</span> &amp; <span class="blue-text">Play</span> Solutions</h1>
                                    <p class="fs-5 text">At Kimipay, we simplify your e-payment needs, offering intuitive solutions that guarantee both safety and dependability</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item active">
                                <img class="w-100 d-block" src="./carousel-3.jpg" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <div class="position-absolute top-50  align-items-center">
                                        <h6 class="text-light fw-bolder">We offer the</h6>
                                        <h1><span class="blue-text">Fastest</span> SMS Speeds</h1>
                                        <p class="fs-5 text">Unlock the swiftness of out bulk SMS services.</p>
                                        </div>
                                    </div>
                                </div>
                                <a role="button" class="carousel-control-prev">
                                    <span class="carousel-control-prev-icon"></span>
                                    <span class="visually-hidden"></span>
                                </a>
                                <a role="button" class="carousel-control-next">
                                    <span class="carousel-control-next-icon"></span>
                                    <span class="visually-hidden"></span>
                                </a>
                            </div>
                        </div>
            {/* <Carousel>
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
            </Carousel> */}
        </div>
    );
};

export default CarouselComponent;

