import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import IndividualMsg from '../IndividualMsg';
import MessagesView from '../MessagesInterface/MessagesView';
import EditMsg from '../EditMsg';

function CategoriesInterface() {

    let navigate = useNavigate();
    
    const [Edit, setEdit] = useState(false);
    const [View, setView] = useState(true);

    const handleEditConst = (newValue) => {
        setEdit(newValue);
        setView(!newValue);
    };

    const handleDoneBackBtn = (newValue) => {
        setEdit(!newValue);
        setView(newValue);
    };

    return (
        <div className="one-container">
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

                            <div>fwfw</div>
                        
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
                {
                    View ?
                    <MessagesView functionEdit={handleEditConst} />
                    :
                    <EditMsg functionDoneBack={handleDoneBackBtn} />
                }
            </div>
        </div>
    )
}

export default CategoriesInterface