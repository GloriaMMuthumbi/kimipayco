const InforgraphComponent = () => {
    return ( 
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="row justify-content-between">
                    <div class="col-md-auto infograph">
                        <div className="outer">
                            <div className="inner">
                                <p className="number">+100k</p>
                                <p className="description">Transactions Processed</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-auto infograph">
                        <div className="outer">
                            <div className="inner">
                                <p className="number">+1M</p>
                                <p className="description">SMS Units Processed</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-auto infograph">
                        <div className="outer">
                            <div className="inner">
                                <p className="number">14</p>
                                <p className="description">Number of Clients</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-auto infograph">
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