import React from 'react';
import {useNavigate} from 'react-router-dom';

import IndividualMsg from '../MessagesComponents/IndividualMsg';
import OneHistoryMsg from './OneHistoryMsg';

function HistoryInterface() {

    let navigate = useNavigate();

    return (
        <div className="one-container">
            <div className="two-container tl-background tl-format">
                <div className="two-container tl-background tl-format">
                    <div className="two-container tl-background tl-format">
                        <div className="sup-bar dropdown">
                            <button 
                                className="btn btn-primary ml-3 dropdown-toggle" 
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true" 
                                aria-expanded="false"><i className="fas fa-bars fa-lg"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href='#'>Session Out</a>
                                <a className="dropdown-item" href='#'>Delete Account</a>
                            </div>
                        </div>
                        <div className="comp-content">

                            <div className="mt-4 align-title"> 
                                <h3 className='text-white'>Messages History</h3>
                            </div>

                            <div>ewfwqf</div>

                        </div>
                        <div className="down-bar">
                            <button 
                                className="btn btn-primary ml-3"
                                onClick={() => navigate('/messages')}
                            >
                                Messages
                            </button>
                            <button className="btn btn-primary ml-3">Clear History</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="two-container tr-background tr-format">
                <OneHistoryMsg />
            </div>
        </div>
    )
}

export default HistoryInterface