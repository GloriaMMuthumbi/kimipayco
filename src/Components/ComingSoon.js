import React from "react";

const ComingSoonComponent = () => {
    return ( 
        <div className="container-fluid coming-soon">
            <div className="row coming-soon-container">
                <div className=" col-md-6 col-6 col-sm-12 coming-soon-text">
                <img
                        src="./logo22.png"
                        width="200px"
                        height="auto"
                        alt="logo"
                        />
                    <h1 className="coming-soon-heading">Coming soon...</h1>
                    <p>
                        This page is currently under construction. We are sorry for 
                        any inconvinienced caused.
                    </p>
                    <a href="/">Go Back</a>
                </div>
                <div className="col-md-6 col-6 col-sm-12 coming-soon-img">
                    <img
                        src="./cooming-soon.svg"
                        width="450px"
                        height="auto"
                        alt="coming soon"
                        />
                    </div>
            </div>
        </div>
    );
}

export default ComingSoonComponent;