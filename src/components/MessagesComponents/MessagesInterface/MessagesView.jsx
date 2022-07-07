import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const GETMSG_URL = 'http://localhost:4000/mba/message/';

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

    if (Selected) {
        return (
            <div class="card border-primary desc-w-container">
                <h3 class="card-header bg-primary text-white">Message Description</h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">To: {Msg.numSend}</li>
                    <li class="list-group-item">Date: {String(Msg.createdAt).split('T')[0]} At: {Msg.timeSend}</li>
                    <li class="list-group-item">Text: {Msg.content}</li>
                    <li class="list-group-item">Category: {Msg.category}</li>
                    <li class="list-group-item">
                        Frequency
                        <div className='d-flex justify-content-center m-2'>
                            <div class="form-check form-check-inline mr-3">
                                <input 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Mon}
                                />
                                <label class="form-check-label" for="">Mon</label>
                            </div>
                            <div class="form-check form-check-inline mr-3">
                                <input 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Tue}
                                />
                                <label class="form-check-label" for="">Tue</label>
                            </div>
                            <div class="form-check form-check-inline mr-3">
                                <input 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Wed}
                                />
                                <label class="form-check-label" for="">Wed</label>
                            </div>
                            <div class="form-check form-check-inline mr-3">
                                <input 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Thu}
                                />
                                <label class="form-check-label" for="">Thu</label>
                            </div>
                            <div class="form-check form-check-inline mr-3">
                                <input 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Fri}
                                />
                                <label class="form-check-label" for="">Fri</label>
                            </div>
                            <div class="form-check form-check-inline mr-3">
                                <input 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Sat}
                                />
                                <label class="form-check-label" for="">Sat</label>
                            </div>
                            <div class="form-check form-check-inline mr-3">
                                <input 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    id="" 
                                    defaultChecked={Msg.frequency.Sun}
                                />
                                <label class="form-check-label" for="">Sun</label>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="card-footer text-muted">
                    <button className='btn btn-primary' onClick={() => handleIsEdit(true)}>Edit</button>
                    <button className='btn btn-secondary ml-3'>Delete</button>
                </div>
            </div>   
        )
    } else {
        <div className="title">no</div>
    }
}

export default MessagesView