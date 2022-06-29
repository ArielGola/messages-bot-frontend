import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import MessagesView from './MessagesView';
import IndividualMsg from '../IndividualMsg';
import CreateMsg from '../CreateMsg';

function MessagesInterface() {

    let navigate = useNavigate();

    const [Create, setCreate] = useState(false);
    const [IsEdit, setIsEdit] = useState(false);

    const handleEditConst = (newValue) => {
        setIsEdit(newValue);
        setCreate(!newValue);
    };

    return (
        <div className="one-container">
            <div className="two-container tl-background tl-format">
                <div className="sup-bar">
                    <button class="btn btn-primary ml-3"><i className="fas fa-bars fa-lg"></i></button>
                </div>
                <div className="comp-content">

                    <div className="mt-4 align-title"> 
                        <h3 className='text-white'>Messages List</h3>
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
                        onClick={() => setCreate(!Create)}
                    >
                        New Message
                    </button>
                    <button 
                        class="btn btn-primary ml-3"
                        onClick={() => navigate('/messages/categories')}
                    >
                        Categories
                    </button>
                    <button 
                        class="btn btn-primary ml-3"
                        onClick={() => navigate('/history')}
                    >
                        Show History
                    </button>
                </div>
            </div>
            <div className="two-container tr-background tr-format">
                {
                    Create ?
                    <CreateMsg />
                    :
                    <MessagesView functionIsEdit={handleEditConst} />
                }
            </div>
        </div>
    )
}

export default MessagesInterface