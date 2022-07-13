import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

import IndividualMsg from '../IndividualMsg';
import MessagesView from '../MessagesInterface/MessagesView';
import EditMsg from '../EditMsg';

const GETMSGS_URL = 'http://localhost:4000/mba/message/all';

function CategoriesInterface() {

    //useEffect(() => {

        //getMessages();

    //}, []);
    
    let category;

    let navigate = useNavigate();
    
    const [Messages, setMessages] = useState(false);

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


    const changeCategory = (value) => {
        try {
            //setCategory(value);
            category = value;
        } finally {
            getMessages();
        };
    };


    async function getMessages() {
        try {

            setMessages(false);

            const res = await Axios.get(GETMSGS_URL);
            const msgs = res.data.messages;

            //const filt = Object.entries(msgs);
            //console.log(filt);

            //console.log(Category);

            const filtered = msgs.filter(msg => msg.categor === category);

            //console.log(filtered);

            setMessages(filtered);
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
                                Messages ?
                                Messages.map((msg) => 
                                    <IndividualMsg msg={msg} key={msg._id} />
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
                    <MessagesView functionEdit={handleEditConst} />
                    :
                    <EditMsg functionDoneBack={handleDoneBackBtn} />
                }
            </div>
        </div>
    )
}

export default CategoriesInterface