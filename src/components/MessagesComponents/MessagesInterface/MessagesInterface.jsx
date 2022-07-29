// Modules
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

// Components
import MessagesView from './MessagesView';
import IndividualMsg from '../IndividualMsg';
import CreateMsg from '../CreateMsg';
import EditMsg from '../EditMsg';
import LoaderComponent from '../../Others/Loader';
import ErrorView from '../../Others/ErrorView';

// Helpers
import { timeIteration } from '../../../helpers/timer';
import { sessionOut, deleteAccount } from '../../../helpers/authentication';


const GETMSGS_URL = 'http://localhost:4000/mba/message/all';


function MessagesInterface() {

    useEffect(() => {
        try {

            getMessages();

        } catch (error) {
            setError(true);
        };
    }, []);
    

    async function getMessages() {
        try {

            clearInterval(window.timer);

            setMessages(false);
            HandleMsgs = [];

            const res = await Axios.get(GETMSGS_URL);

            HandleMsgs = res.data.messages;
            setMessages(HandleMsgs);
            setLoader(false);

        } catch (error) {
            setError(true);
        } finally {
            timeIteration(HandleMsgs);
        };
    };

    // Workout variables
    let HandleMsgs;
    let navigate = useNavigate();

    // State
    const [Create, setCreate] = useState(false);
    const [, setEdit] = useState(false);
    const [View, setView] = useState(true);

    const [Messages, setMessages] = useState(false);
    const [Error, setError] = useState(false);
    const [, setLoader] = useState(true);

    const [SelectedMsg, setSelectedMsg] = useState(false);

    // State handlers
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

    const handleSelectedId = (newValue) => {
        setSelectedMsg(newValue);
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

    const refreshComp = () => {
        getMessages();
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
                        <button className="dropdown-item" onClick={() => sessionOut()}>Session Out</button>
                        <button className="dropdown-item" onClick={() => deleteAccount()}>Delete Account</button>
                    </div>
                </div>
                <div className="comp-content">

                    <div className="mt-4 align-title"> 
                        <h3 className='text-white'>Messages List</h3>
                    </div>
                    
                    {
                        !Error ?
                            Messages ?
                            Messages.map((msg) => 
                                <IndividualMsg msg={msg} key={msg._id} handleSelectedId={handleSelectedId} />
                            )
                            :
                            <div className='loader-div'>
                                <LoaderComponent />
                            </div>
                        :
                        <div className='loader-div'>
                            <ErrorView />
                        </div>
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
                    <CreateMsg refresh={refreshComp} functionDoneBack={handleDoneBackBtn} />
                    :
                    View ?
                        SelectedMsg ?
                        <MessagesView 
                            refresh={refreshComp}
                            functionEdit={handleEditConst} 
                            selectedId={SelectedMsg} 
                            key={SelectedMsg} 
                        />
                        :
                        <div className="">Select a Message</div>
                    :
                    <EditMsg 
                        refresh={refreshComp}
                        functionDoneBack={handleDoneBackBtn}
                        selectedId={SelectedMsg}
                    />
                }
            </div>
        </div>
    )
}

export default MessagesInterface