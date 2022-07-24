import React from 'react';

function ErrorView() {
    return (
        <div className="card">
            <div className="card-header">
                Sorry, There was an error
            </div>
            <div className="card-body">
                <p className="card-text">
                    Something went wrong in the process.
                    We are going work for fix it.
                </p>
            </div>
        </div>
    )
}

export default ErrorView;