import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import MessagesView from './MessagesView';
import IndividualMsg from '../IndividualMsg';
import EditOrCreateMsg from '../EditOrCreateMsg';

function MessagesInterface() {

    let navigate = useNavigate();

    const [EditCreate, setEditCreate] = useState(false);

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
                        onClick={() => setEditCreate(!EditCreate)}
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
                    EditCreate ?
                    <EditOrCreateMsg />
                    :
                    <MessagesView />
                }
            </div>
        </div>
    )
}

export default MessagesInterface