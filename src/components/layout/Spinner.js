import React from 'react';

function Spinner() {
    return (
        <React.Fragment>
        <div className="spinner-border text-center" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        </React.Fragment>
    )
}

export default Spinner;
 