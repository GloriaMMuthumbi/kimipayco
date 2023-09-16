const InforgraphComponent = () => {
    return ( 
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="row justify-content-between infograph-container">
                    <div className="col-md-auto infograph">
                        <div className="outer">
                            <div className="inner">
                                <p className="number">+100k</p>
                                <p className="description">Transactions Processed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-auto infograph">
                        <div className="outer">
                            <div className="inner">
                                <p className="number">+1M</p>
                                <p className="description">SMS Units Processed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-auto infograph">
                        <div className="outer">
                            <div className="inner">
                                <p className="number">14</p>
                                <p className="description">Number of Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-auto infograph">
                        <div className="outer">
                            <div className="inner">
                                <p className="number">24/7</p>
                                <p className="description">Technical Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default InforgraphComponent;