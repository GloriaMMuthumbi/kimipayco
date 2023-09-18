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
          <p className="section-title">Services</p>
          <div className="lines">
            <div className="short-line right"></div>
            <div className="long-line right"></div>
          </div>
        </div>
        <p className="section-intro">We Focus On Making The Best In All Sectors</p>
      </div>
      <div className='row card-row'>
        <div className='col-md-3 col-sm-12'>
          <div className="card services-card border-0">
            <img className="card-img-top" src="./service-5.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">REMITTANCE</h5>
              <a href="#" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
        <div className='col-md-3 col-sm-12'>
          <div className="card services-card border-0">
            <img className="card-img-top" src="./service-3.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">REVENUE MANAGEMENT</h5>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
          </div>
          <div className='col-md-3 col-sm-12'>
          <div className="card services-card border-0">
            <img className="card-img-top" src="./service-2.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">BULK SMS</h5>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row section">
        <div className="title">
          <div className="lines">
            <div className="short-line left"></div>
            <div className="long-line left"></div>
          </div>
          <p className="section-title">Services</p>
          <div className="lines">
            <div className="short-line right"></div>
            <div className="long-line right"></div>
          </div>
        </div>
        <p className="section-intro">We Focus On Making The Best In All Sectors</p>
      </div>
      <div className="row justify-content-center services">
        <div className="col-sm d-flex">
          <div className="service">
            <img className="service-img" src="./service-5.jpg" alt="Remittance" />
            <p className="service-name">REMITTANCE</p> 
          </div>
        </div>
        <div className="col-sm d-flex"> 
          <div className="service">
            <img className="service-img" src="./service-3.jpg" alt="Revenue Management" />
            <p className="service-name">REVENUE MANAGEMENT</p> 
          </div>
        </div>
        <div className="col-sm d-flex"> 
          <div className="service">
            <img className="service-img" src="./service-2.jpg" alt="Bulk SMS" />
            <p className="service-name">BULK SMS</p> 
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ServicesComponent;
