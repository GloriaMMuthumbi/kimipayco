import React from 'react';

const FooterComponent = () => {
  return (
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
                <a className="text-white link" href="#!">Home</a>
              </p>
              <p>
                <a className="text-white link" href="#!">About Us</a>
              </p>
              <p>
                <a className="text-white link" href="#!">Services</a>
              </p>
              <p>
                <a className="text-white link" href="#!">Contact Us</a>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 footer-col">
              <h6 className="text-uppercase mb-4 font-weight-bold">Our Services</h6>
              <p>
                <a className="text-white link" href="#!">Remittance</a>
              </p>
              <p>
                <a className="text-white link" href="#!">Revenue Management</a>
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
                © 2023 Copyright :
                <a className="text-white" href="#!"> KimiPay</a>

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
  );
};

export default FooterComponent;
