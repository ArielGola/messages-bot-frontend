import React from 'react';
import {useNavigate} from 'react-router-dom';

import IndividualMsg from '../IndividualMsg';
import MessagesView from '../MessagesInterface/MessagesView';

function CategoriesInterface() {

    let navigate = useNavigate();

    return (
        <div className="one-container">
            <div className="two-container tl-background tl-format">
                <div className="two-container tl-background tl-format">
                    <div className="sup-bar">
                        <button class="btn btn-primary ml-3"><i className="fas fa-bars fa-lg"></i></button>
                    </div>
                    <div className="comp-content">
                        
                            <div className="mt-4 align-title"> 
                                <h3 className='text-white'>Messages Categories</h3>
                            </div>

                            <div className="categories-labels">
                                <button className='btn btn-primary disabled m-2'>Family</button>
                                <button className='btn btn-primary disabled m-2'>Friends</button>
                                <button className='btn btn-primary disabled m-2'>Coworkers</button>
                                <button className='btn btn-primary disabled m-2'>Training</button>
                                <button className='btn btn-primary m-2'>Entertainment</button>
                                <button className='btn btn-primary disabled m-2'>Others</button>
                            </div>

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
                        <button 
                            class="btn btn-primary ml-3"
                            onClick={() => navigate('/history')}
                        >
                            Show History
                        </button>
                    </div>
                </div>
            </div>
            <div className="two-container tr-background tr-format">
                <MessagesView />
            </div>
        </div>
    )
}

export default CategoriesInterface