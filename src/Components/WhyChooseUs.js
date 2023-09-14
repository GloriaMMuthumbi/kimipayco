const WhyChooseUsComponent = () => {
    return (  
        <div class="container">
            <div class="row">
            <div className="title">
                <div className="lines">
                    <div className="short-line left"></div>
                    <div className="long-line left"></div>
                </div>
                <p className="section-title">Why Choose Us</p>
                <div className="lines">
                    <div className="short-line right"></div>
                    <div className="long-line right"></div>
                </div>
                </div>
                    <p className="section-intro">Why people choose us...</p>
                </div>
            <div className="row">
                <div class="col-sm">
                    <div className="choose-item-outer">
                        <div className="choose-item-inner">
                            <img className="icon" src="./timely-icon.svg" alt="" />
                            <p className="description">Timely Services.</p>
                        </div>
                        <p className="more-description">Timely Services ensure your financial transactions are swift and secure, allowing you to send money and manage your finances effortlessly, backed by 24/7 customer support.</p>
                    </div>
                </div>
                <div class="col-sm">
                    <div className="choose-item-outer">
                        <div className="choose-item-inner">
                            <img className="icon" src="./secure-icon.svg" alt="" />
                            <p className="description">Secure way to transfer funds.</p>
                        </div>
                        <p className="more-description">Secure fund transfers, ensuring your money is safely and promptly delivered to its destination.</p>
                    </div>
                </div>
                <div class="col-sm">
                    <div className="choose-item-outer">
                        <div className="choose-item-inner">
                            <img className="icon" src="./borderless-icon.svg" alt="" />
                            <p className="description">Borderless remittance services.</p>
                        </div>
                        <p className="more-description">Experience seamless and borderless remittance services with KimiPay, ensuring fast and secure international money transfers without the hassle of traditional borders.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default WhyChooseUsComponent;