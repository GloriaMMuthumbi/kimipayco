const InforgraphComponent = () => {
    return ( 
        <div className="container-fluid mt-4">
            <div className="row card-row">
                <div className="col-md-3 col-sm-12 card-container">
                    <div className="card circular-card">
                        <div className="card-body">
                            <h5 className="card-title">+100k</h5>
                            <p className="card-text">Transactions Processed</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 card-container">
                    <div className="card circular-card">
                        <div className="card-body">
                            <h5 className="card-title">+1M</h5>
                            <p className="card-text">SMS Units Processed</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 card-container">
                    <div className="card circular-card">
                        <div className="card-body">
                            <h5 className="card-title">14</h5>
                            <p className="card-text">Number of Clients</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 card-container">
                    <div className="card circular-card">
                        <div className="card-body">
                            <h5 className="card-title">24/7</h5>
                            <p className="card-text">Technical Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InforgraphComponent;