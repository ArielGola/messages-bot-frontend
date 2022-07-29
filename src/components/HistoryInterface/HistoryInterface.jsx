// Modules
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

// Components
import IndividualMsg from '../MessagesComponents/IndividualMsg';
import OneHistoryMsg from './OneHistoryMsg';
import LoaderComponent from '../Others/Loader';
import ErrorView from '../Others/ErrorView';


const HISTORY_MSGS_URL = "http://localhost:4000/mba/history/";


function HistoryInterface() {

    useEffect(() => {
      
        getMessages();

    }, []);


    // State
    const [HisMsgs, setHisMsgs] = useState(false);
    const [SelectedMsg, setSelectedMsg] = useState(false);
    const [Error, setError] = useState(false);
    const [, setLoader] = useState(true);


    let navigate = useNavigate();


    async function getMessages() {
        try {
            
            const res = await Axios.get(HISTORY_MSGS_URL);

            setHisMsgs(res.data.history);
            setLoader(false);

        } catch (error) {
            setError(true);  
        };
    };

    
    const handleSelectedId = (newValue) => {
        setSelectedMsg(newValue);
    };


    return (
        <div className="one-container">
            <div className="two-container tl-background tl-format">
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
                                <button className="dropdown-item">Session Out</button>
                                <button className="dropdown-item">Delete Account</button>
                            </div>
                        </div>
                        <div className="comp-content">

                            <div className="mt-4 align-title"> 
                                <h3 className='text-white'>Messages History</h3>
                            </div>

                            {
                                !Error ?
                                    HisMsgs ?
                                    HisMsgs.map(msg => 
                                        <IndividualMsg msg={msg} key={msg._id} handleSelectedId={handleSelectedId} />
                                    )
                                    :
                                    <div className='loader-div'>
                                        <LoaderComponent />
                                    </div>
                                :
                                <div className="loader-div">
                                    <ErrorView />
                                </div>
                            }

                        </div>
                        <div className="down-bar">
                            <button 
                                className="btn btn-primary ml-3"
                                onClick={() => navigate('/messages')}
                            >
                                Messages
                            </button>
                            <button className="btn btn-primary ml-3">Clear History</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="two-container tr-background tr-format">
                {
                    SelectedMsg ?
                    <OneHistoryMsg 
                        selectedId={SelectedMsg} 
                        key={SelectedMsg} 
                    />
                    :
                    <div className="">Select a Message</div>
                }
            </div>
        </div>
    )
}

export default HistoryInterface