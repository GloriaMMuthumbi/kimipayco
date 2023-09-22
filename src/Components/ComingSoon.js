import React from "react";

const ComingSoonComponent = () => {
    return ( 
        <div className="container-fluid">
            <div className="row coming-soon-container">
                <div className="col-4">
                    <h1 className="coming-soon-heading">Coming soon...</h1>
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