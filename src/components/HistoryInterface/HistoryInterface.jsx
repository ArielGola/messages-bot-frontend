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
                        <div className="sup-bar">
                            <button class="btn btn-primary ml-3"><i className="fas fa-bars fa-lg"></i></button>
                        </div>
                        <div className="comp-content">

                            <div className="mt-4 align-title"> 
                                <h3 className='text-white'>Messages History</h3>
                            </div>

                            <IndividualMsg />
                            <IndividualMsg />
                            <IndividualMsg />
                            <IndividualMsg />
                            <IndividualMsg />
                            <IndividualMsg />

                        </div>
                        <div className="down-bar">
                            <button 
                                class="btn btn-primary ml-3"
                                onClick={() => navigate('/messages')}
                            >
                                Messages
                            </button>
                            <button class="btn btn-primary ml-3">Clear History</button>
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