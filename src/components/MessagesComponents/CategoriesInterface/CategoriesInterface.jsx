import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

import IndividualMsg from '../IndividualMsg';
import MessagesView from '../MessagesInterface/MessagesView';
import EditMsg from '../EditMsg';

import 'datejs';

const GETMSGS_URL = 'http://localhost:4000/mba/message/all';

function CategoriesInterface() {

    useEffect(() => {

        async function getMessages() {
            try {
    
                const res = await Axios.get(GETMSGS_URL);
                const msgs = res.data.messages;
    
                setMessages(msgs);
    
            } catch (error) {
                console.log("no va");
                setError(true);
            };
        };

        getMessages();

    }, []);
    

    let Interval;

    let category;

    let navigate = useNavigate();
    
    const [Messages, setMessages] = useState(false);

    const [MsgsFilter, setMsgsFilter] = useState(false);

    const [SelectedMsg, setSelectedMsg] = useState(false);

    //const [Category, setCategory] = useState("");

    const [Loader, setLoader] = useState(true);
    const [Error, setError] = useState(false);

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

    const handleSelectedId = (newValue) => {
        setSelectedMsg(newValue);
    };


    const timeIteration = () => {
        Interval = setInterval(() => {

            let today = new Date().toLocaleDateString('en-US', {weekday: 'long'}).slice(0,3);

            let timeNow = `${new Date().getHours()}:${new Date().getMinutes()}`;

            matchDayTime(today, timeNow);

        }, 1000*60);
    };


    function matchDayTime(today, timeNow) {
        let dayFilter = Messages.filter(msg => msg.frequency.key(today) === today);

        dayFilter.filter(msg => {
            if (msg.timeSend === timeNow) {
                //sendMessage();
            };
        });
    };


    const changeCategory = (value) => {
        try {
            //setCategory(value);
            category = value;
        } finally {
            filterMsgs();
        };
    };


    async function filterMsgs() {
        try {

            const filtered = Messages.filter(msg => msg.categor === category);

            setMsgsFilter(filtered);
            setLoader(false);

        } catch (error) {
            console.log("no va");
            setError(true);
        };
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
                                <button 
                                    className='btn btn-primary m-2'
                                    onClick={(e) => changeCategory(e.target.innerText)}
                                >Family</button>
                                <button 
                                    className='btn btn-primary m-2'
                                    onClick={(e) => changeCategory(e.target.innerText)}
                                >Friends</button>
                                <button 
                                    className='btn btn-primary m-2'
                                    onClick={(e) => changeCategory(e.target.innerText)}
                                >Coworkers</button>
                                <button 
                                    className='btn btn-primary m-2'
                                    onClick={(e) => changeCategory(e.target.innerText)}
                                >Training</button>
                                <button 
                                    className='btn btn-primary m-2'
                                    onClick={(e) => changeCategory(e.target.innerText)}
                                >Entertainment</button>
                                <button 
                                    className='btn btn-primary m-2'
                                    onClick={(e) => changeCategory(e.target.innerText)}
                                >Others</button>
                            </div>

                            {
                                MsgsFilter ?
                                MsgsFilter.map((msg) => 
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
                        SelectedMsg ?
                        <MessagesView 
                            getMsgs={filterMsgs}
                            functionEdit={handleEditConst} 
                            selectedId={SelectedMsg} 
                            key={SelectedMsg} 
                        />
                        :
                        <div className="">Select a Message</div>
                    :
                    <EditMsg 
                        getMsgs={filterMsgs}
                        functionDoneBack={handleDoneBackBtn}
                        selectedId={SelectedMsg}
                    />
                }
            </div>
        </div>
    )
}

export default CategoriesInterface