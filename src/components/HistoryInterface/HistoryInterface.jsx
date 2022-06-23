import React from 'react';
import {useNavigate} from 'react-router-dom';

function HistoryInterface() {

    let navigate = useNavigate();

    return (
        <div className="one-container">
            <div className="two-container tl-background tl-format">
                <div className="two-container tl-background tl-format">
                    <div className="two-container tl-background tl-format">
                        <div className="sup-bar">
                            <button class="btn btn-primary ml-3"><i className="fas fa-bars fa-lg"></i></button>
                        </div>
                        <div className="comp-content">
                            hreherhef
                        </div>
                        <div className="down-bar">
                            <button 
                                class="btn btn-primary ml-3"
                                onClick={() => navigate('/messages/categories')}
                            >
                                Messages
                            </button>
                            <button class="btn btn-primary ml-3">Clear History</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="two-container tr-background tr-format">

            </div>
        </div>
    )
}

export default HistoryInterface