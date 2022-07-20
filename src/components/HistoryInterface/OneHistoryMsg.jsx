import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const HISTORY_MSG_URL = "http://localhost:4000/mba/history/";

function OneHistoryMsg(props) {

    useEffect(() => {
        const getMsg = async () => {
            try {

                const res = await Axios.get(`${HISTORY_MSG_URL}${props.selectedId}`);

                setMsg(res.data.message);
                setSelected(res.data.message._id);
                
            } catch (error) {
                setError(true);
            };
        };

        getMsg();
    }, []);
    

    const [Msg, setMsg] = useState(false);

    const [Selected, setSelected] = useState(false);

    const [Error, setError] = useState(false);


    const handleSelectedId = (newValue) => {
        const handleSelected = props.handleSelectedId;
        handleSelected(newValue);
    };


    return (
        <div className="card border-primary desc-w-container">
            <h3 className="card-header bg-primary text-white">Message Description</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">To: {Msg.numSend}</li>
                <li className="list-group-item">Date: {String(Msg.createdAt).split('T')[0]} At: {Msg.timeSended}</li>
                <li className="list-group-item">Text: {Msg.content}</li>
                <li className="list-group-item">Category: {Msg.categor}</li>
            </ul>
        </div>  
    )
}

export default OneHistoryMsg