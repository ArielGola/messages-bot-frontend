import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const GETMSG_URL = 'http://localhost:4000/mba/message/';
const DELMSG_URL = 'http://localhost:4000/mba/message/delete/';

function MessagesView(props) {

    useEffect(() => {
        const getMsg = async () => {
            try { 

                const res = await Axios.get(`${GETMSG_URL}${props.selectedId}`);

                setMsg(res.data.message);
                setSelected(res.data.message._id);

            } catch (error) {
                setError(true);
                console.log('all wrong', {error});
            };
        };

        getMsg();
    }, []);
    
    const [Error, setError] = useState(false);

    const [Selected, setSelected] = useState(false);

    const [Msg, setMsg] = useState(false);


    const handleIsEdit = (newValue) => {
        const changeIsEdit = props.functionEdit;
        changeIsEdit(newValue);
    };

    const refreshFunction = () => {
        const refreshF = props.refresh;
        refreshF();
    };


    const deleteMsg = async () => {
        try {

            if (window.confirm('Are you sure of delete this message?')) {
                await Axios.delete(`${DELMSG_URL}${Msg._id}`);

                refreshFunction();

                setSelected(false);
            };
            
        } catch (error) {
            setError(true);
        }
    };

    if (Selected) {
        return (
            <div className="card border-primary desc-w-container">
                <h3 className="card-header bg-primary text-white">Message Description</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">To: {Msg.numSend}</li>
                    <li className="list-group-item">Date: {String(Msg.createdAt).split('T')[0]} At: {Msg.timeSend}</li>
                    <li className="list-group-item">Text: {Msg.content}</li>
                    <li className="list-group-item">Category: {Msg.categor}</li>
                    <li className="list-group-item">
                        Frequency
                        <div className='d-flex justify-content-center m-2'>
                            <div className="form-check form-check-inline mr-3">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Mon}
                                />
                                <label className="form-check-label" for="">Mon</label>
                            </div>
                            <div className="form-check form-check-inline mr-3">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Tue}
                                />
                                <label className="form-check-label" for="">Tue</label>
                            </div>
                            <div className="form-check form-check-inline mr-3">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Wed}
                                />
                                <label className="form-check-label" for="">Wed</label>
                            </div>
                            <div className="form-check form-check-inline mr-3">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Thu}
                                />
                                <label className="form-check-label" for="">Thu</label>
                            </div>
                            <div className="form-check form-check-inline mr-3">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Fri}
                                />
                                <label className="form-check-label" for="">Fri</label>
                            </div>
                            <div className="form-check form-check-inline mr-3">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Sat}
                                />
                                <label className="form-check-label" for="">Sat</label>
                            </div>
                            <div className="form-check form-check-inline mr-3">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Sun}
                                />
                                <label className="form-check-label" for="">Sun</label>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="card-footer text-muted">
                    <button className='btn btn-primary' onClick={() => handleIsEdit(true)}>Edit</button>
                    <button className='btn btn-secondary ml-3' onClick={() => deleteMsg()}>Delete</button>
                </div>
            </div>   
        )
    } else {
        <div className="title">no</div>
    }
}

export default MessagesView