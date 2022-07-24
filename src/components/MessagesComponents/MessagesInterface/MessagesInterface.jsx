import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

import MessagesView from './MessagesView';
import IndividualMsg from '../IndividualMsg';
import CreateMsg from '../CreateMsg';
import EditMsg from '../EditMsg';
import LoaderComponent from '../../Others/Loader';
import ErrorView from '../../Others/ErrorView';

import { timeIteration } from '../../../helpers/timer';
import { sessionOut, deleteAccount } from '../../../helpers/authentication';

const GETMSGS_URL = 'http://localhost:4000/mba/message/all';

function MessagesInterface() {

    useEffect(() => {
        try {

            //clearInterval(Interval);
            getMessages();

        } catch (error) {
            console.log("no");
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


    let HandleMsgs;

    let navigate = useNavigate();

    const [Create, setCreate] = useState(false);
    const [Edit, setEdit] = useState(false);
    const [View, setView] = useState(true);

    const [Messages, setMessages] = useState(false);
    const [Error, setError] = useState(false);
    const [Loader, setLoader] = useState(true);

    const [SelectedMsg, setSelectedMsg] = useState(false);


    const refreshComp = () => {
        getMessages();
    };

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
                        <a className="dropdown-item" href='#' onClick={() => sessionOut()}>Session Out</a>
                        <a className="dropdown-item" href='#' onClick={() => deleteAccount()}>Delete Account</a>
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