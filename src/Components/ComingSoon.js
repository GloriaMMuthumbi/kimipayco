import React from "react";

const ComingSoonComponent = () => {
    return ( 
        <div className="container-fluid">
            <div className="row coming-soon-container">
                <div className="col-4 coming-soon-text">
                    <h1 className="coming-soon-heading">Coming soon...</h1>
                    <p>
                        This page is currently under construction. We are sorry for 
                        any inconvinienced caused.
                    </p>
                    <a href="/">Go Back</a>
                </div>
                <div className="col-4">
                    <img
                        src="./cooming-soon.svg"
                        width="500px"
                        height="auto"
                        alt="coming soon"
                        />
                    </div>
            </div>
        </div>
    );
}

export default ComingSoonComponent;