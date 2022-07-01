import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

import MessagesView from './MessagesView';
import IndividualMsg from '../IndividualMsg';
import CreateMsg from '../CreateMsg';
import EditMsg from '../EditMsg';

const GETMSGS_URL = 'http://localhost:4000/mba/message/all';

function MessagesInterface() {

    useEffect(() => {

        async function getMessages() {
            try {
                const res = await Axios.get(GETMSGS_URL);
                setMessages(res.data);
                setLoader(false);
            } catch (error) {
                setError(true);
            };
        };

        getMessages();

        console.log(Messages);

    }, []);
    

    let navigate = useNavigate();

    const [Create, setCreate] = useState(false);
    const [Edit, setEdit] = useState(false);
    const [View, setView] = useState(true);

    const [Messages, setMessages] = useState([]);
    const [Error, setError] = useState(false);
    const [Loader, setLoader] = useState(true);

    const handleEditConst = (newValue) => {
        setEdit(newValue);
        setCreate(!newValue);
        setView(!newValue);
    };

    const handleDoneBackBtn = (newValue) => {
        setCreate(!newValue);
        setEdit(!newValue);
        setView(newValue);
    };

    const newMsgBtn = () => {
        if (View) {
            setCreate(!Create);
            setEdit(Create);
            setView(Create);
        } else {
            setCreate(View);
            setEdit(View);
            setView(!View);
        };
    };

    return (
        <div className="one-container">
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
                        <h3 className='text-white'>Messages List</h3>
                    </div>
                    
                    {
                        Messages.map(msg => 
                            <IndividualMsg msg={msg} />
                        )
                    }

                </div>
                <div className="down-bar">
                    <button 
                        className="btn btn-primary ml-3"
                        onClick={() => newMsgBtn()}
                    >
                        New Message
                    </button>
                    <button 
                        className="btn btn-primary ml-3"
                        onClick={() => navigate('/messages/categories')}
                    >
                        Categories
                    </button>
                    <button 
                        className="btn btn-primary ml-3"
                        onClick={() => navigate('/history')}
                    >
                        Show History
                    </button>
                </div>
            </div>
            <div className="two-container tr-background tr-format">
                {
                    Create ?
                    <CreateMsg functionDoneBack={handleDoneBackBtn} />
                    :
                    View ?
                    <MessagesView functionEdit={handleEditConst} />
                    :
                    <EditMsg functionDoneBack={handleDoneBackBtn} />
                }
            </div>
        </div>
    )
}

export default MessagesInterface