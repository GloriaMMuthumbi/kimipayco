import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";


const InforgraphComponent = () => {

    const [isVisible, setIsVisible] = useState(false);

    const onVisibilityChange = (newisVisible) => {
        if (newisVisible) {
            setIsVisible(true);
            }
        };

    return ( 
        <div className="container-fluid mt-4 infograph-container">
            <div className="row card-row infographs">
                <div className="col-md-3 col-sm-12 card-container">
                    <div className="card circular-card">
                        <div className="card-body">
                            <h5 className="card-title">+
                                    {isVisible && (
                                        <CountUp end={100} duration={2} separator="," />
                                    )}
                            k</h5>
                            <p className="card-text">Transactions Processed</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 card-container">
                    <div className="card circular-card">
                        <div className="card-body">
                            <h5 className="card-title">+
                                {isVisible && (
                                    <CountUp end={1} duration={2} separator="," />
                                )}
                            M</h5>
                            <p className="card-text">SMS Units Processed</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 card-container">
                    <div className="card circular-card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {isVisible && (
                                    <CountUp end={14} duration={2} />
                                )}
                            </h5>
                            <p className="card-text">Number of Clients</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 card-container">
                    <div className="card circular-card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {isVisible && (
                                    <CountUp end={24} duration={2} />
                                )}
                            /
                                {isVisible && (
                                    <CountUp end={7} duration={2} />
                                )}
                            </h5>
                            <p className="card-text">Technical Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <VisibilitySensor onChange={onVisibilityChange}>
                <div style={{ height: "1px" }}></div>
            </VisibilitySensor>
        </div>
    );
}

export default InforgraphComponent;