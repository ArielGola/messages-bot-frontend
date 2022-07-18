import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

import MessagesView from './MessagesView';
import IndividualMsg from '../IndividualMsg';
import CreateMsg from '../CreateMsg';
import EditMsg from '../EditMsg';

const GETMSGS_URL = 'http://localhost:4000/mba/message/all';

function MessagesInterface(props) {

    useEffect(() => {
        try {

            clearInterval(Interval);
            getMessages();

        } finally {
            //timeIteration();
        };
    }, []);
    

    async function getMessages() {
        try {

            clearInterval(Interval);
            setMessages(false);
            HandleMsgs = [];
            const res = await Axios.get(GETMSGS_URL);
            HandleMsgs = res.data.messages;
            setMessages(HandleMsgs);
            console.log(HandleMsgs);
            setLoader(false);

        } catch (error) {
            console.log("no");
            setError(true);
        } finally {
            Interval = setInterval(async () => {

                //console.log("Vuelta");
        
                //let today = new Date().toLocaleDateString('en-US', {weekday: 'long'}).slice(0,3);
                let today = new Date().getDay();
        
                //let timeNow = `${new Date().getHours()}:${new Date().getMinutes()}`;
                let timeNow = new Date().toLocaleTimeString([], {
                    timeStyle: 'short'
                });
        
                await matchDayTime(today, timeNow);
        
            }, 1000*30);
        }
    };

    let CompKey;

    let HandleMsgs;

    let Interval;

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
        console.log("MessageInterface well");
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

    /*
    const timeIteration = () => {
        clearInterval(Interval);

        Interval = setInterval(async () => {

            //console.log("Vuelta");

            //let today = new Date().toLocaleDateString('en-US', {weekday: 'long'}).slice(0,3);
            let today = new Date().getDay();

            //let timeNow = `${new Date().getHours()}:${new Date().getMinutes()}`;
            let timeNow = new Date().toLocaleTimeString([], {
                timeStyle: 'short'
            });

            await matchDayTime(today, timeNow);

        }, 1000*30);
    };
    */


    function matchDayTime(today, timeNow) {
        let dayFilter = [];

        HandleMsgs.map(msg => {
            const arr = Object.entries(msg.frequency);
            if (arr[today][1]) { dayFilter.push(msg); };
        });

        //console.log(dayFilter);

        dayFilter.map(msgF => {
            console.log(msgF.timeSend, timeNow);
            if (msgF.timeSend === timeNow) {
                sendMessage();
            };
        });
    };


    function sendMessage() {
        console.log("Sended a grat message!!!");
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
                <div className="comp-content" key={CompKey}>

                    <div className="mt-4 align-title"> 
                        <h3 className='text-white'>Messages List</h3>
                    </div>
                    
                    {
                        Messages ?
                        Messages.map((msg) => 
                            <IndividualMsg msg={msg} key={msg._id} handleSelectedId={handleSelectedId} />
                        )
                        :
                        <div>
                            Nothing
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