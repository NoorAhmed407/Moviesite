import React from 'react';

function Spinner() {
    return (
        <React.Fragment>
        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        </React.Fragment>
    )
}

export default Spinner;
