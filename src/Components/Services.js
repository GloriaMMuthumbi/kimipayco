import React from 'react';

const ServicesComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row section">
        <div className="title">
          <div className="lines">
            <div className="short-line left"></div>
            <div className="long-line left"></div>
          </div>
          <h3 className="section-title">Services</h3>
          <div className="lines">
            <div className="short-line right"></div>
            <div className="long-line right"></div>
          </div>
        </div>
        <p className="section-intro">We Focus On Making The Best In All Sectors</p>
      </div>
      <div className='d-flex justify-content-center'>
      <div className='row card-row'>
        <div className='col-md-3 col-sm-12 service'>
          <div className="card services-card">
            <img className="card-img-top" src="./service-5.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">REMMITANCE</h5>
              <a href="#" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
        <div className='col-md-3 col-sm-12 service'>
          <div className="card services-card">
            <img className="card-img-top" src="./service-3.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">REVENUE MANAGEMENT</h5>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
          </div>
          <div className='col-md-3 col-sm-12 service'>
          <div className="card services-card">
            <img className="card-img-top" src="./service-2.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">BULK SMS</h5>
              <a href="https://sms.kimipay.com/" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ServicesComponent;
