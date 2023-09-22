import React, { useState, useEffect } from "react";
import CountUp from "react-countup";


const InforgraphComponent = () => {

    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("countup-section");
            if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setIsInView(true);
            }
            }
        };

        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        }, []);
    
    return ( 
        <div className="container-fluid mt-4 infograph-container">
            <div className="row card-row infographs">
                <div className="col-md-3 col-sm-12 card-container">
                    <div className="card circular-card">
                        <div className="card-body">
                            <h5 className="card-title countup-animation" id="countup-section">+
                                {isInView && (
                                    <CountUp end={100} duration={4} separator="," />
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
                                {isInView && (
                                    <CountUp end={1} duration={4} separator="," />
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
                                {isInView && (
                                    <CountUp end={14} duration={4} />
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
                                {isInView && (
                                    <CountUp end={24} duration={4} />
                                )}
                            /
                                {isInView && (
                                    <CountUp end={7} duration={4} />
                                )}
                            </h5>
                            <p className="card-text">Technical Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InforgraphComponent;