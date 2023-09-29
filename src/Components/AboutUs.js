const AboutUsComponent = () => {
    return ( 
        <div className="container-fluid section-section">
            <div className="row section">
                <div className="title">
                    <div className="lines">
                        <div className="short-line left"></div>
                        <div className="long-line left"></div>
                    </div>
                    <h3 className="section-title">About Us</h3>
                    <div className="lines">
                        <div className="short-line right"></div>
                        <div className="long-line right"></div>
                    </div>
                </div>
            </div>
            <div className="row aboutus-ex">
                <div className="col-sm">
                    <img src="./about.jpg" alt="about us" className="aboutus-img" />
                </div>
                <div className="col-sm aboutus-text">
                <h4 className="heading">#1 Digital Solution With <span className="blue-text">2 years</span> of Experience</h4>
                    <p className="paragraph">Kimipay is an e-payment platform that makes it easier, 
                        secure and reliable to transfer funds within and across 
                        the borders. We endavour to bring you an agile platform 
                        for your remmitance purposes in over 16 major currencies.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsComponent;