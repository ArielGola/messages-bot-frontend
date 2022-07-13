import React, {useState, useEffect} from 'react';
import jwt from 'jsonwebtoken';
import Axios from 'axios';

const GETMSG_URL = 'http://localhost:4000/mba/message/';
const EDITMSG_URL = 'http://localhost:4000/mba/message/edit/';

function EditMsg(props) {

    useEffect(() => {
        const getMsg = async () => {
            try { 

                const res = await Axios.get(`${GETMSG_URL}${props.selectedId}`);
                const msg = res.data.message;

                setNumSend(msg.numSend);
                setTime(msg.timeSend);
                setText(msg.content);
                setCategory(msg.categor);

                setMon(msg.frequency.Mon);
                setTue(msg.frequency.Tue);
                setWed(msg.frequency.Wed);
                setThu(msg.frequency.Thu);
                setFri(msg.frequency.Fri);
                setSat(msg.frequency.Sat);
                setSun(msg.frequency.Sun);

                setMsgOn(true);

            } catch (error) {
                setError(true);
                console.log('all wrong', {error});
            };
        };

        getMsg();
    }, []);
    
    const [Error, setError] = useState(false);

    const [MsgOn, setMsgOn] = useState(false);

    const [NumSend, setNumSend] = useState("");
    const [Time, setTime] = useState("");
    const [Text, setText] = useState("");
    const [Category, setCategory] = useState("");
    
    const [Mon, setMon] = useState(false);
    const [Tue, setTue] = useState(false);
    const [Wed, setWed] = useState(false);
    const [Thu, setThu] = useState(false);
    const [Fri, setFri] = useState(false);
    const [Sat, setSat] = useState(false);
    const [Sun, setSun] = useState(false);

    const backToMsgs = (newValue) => {
        const doneBack = props.functionDoneBack;
        doneBack(newValue);
    };

    const getMsgs = () => {
        const getMsgsF = props.getMsgs;
        getMsgsF();
    };

    const editMsgFunction = async () => {
        try {

            const newMsg = {
                numSend: NumSend,
                content: Text,
                timeSend: Time,
                categor: Category,
                frequency: {
                    Mon,
                    Tue,
                    Wed,
                    Thu,
                    Fri,
                    Sat,
                    Sun
                }
            };

            await Axios.put(`${EDITMSG_URL}${props.selectedId}`, newMsg);
            
            backToMsgs(true);
            
            getMsgs();

        } catch (error) {
            setError(true);  
        };
    };

    if (MsgOn) {
    return (
        <div class="card border-primary desc-w-container">
            <h3 class="card-header bg-primary text-white">Edit Message</h3>
            <div className="card-body flex-wrap">
                <div className="form-row">  
                    <div class="form-group col-md-6">
                        <label class="col-form-label" for="inputDefault">Message To</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Message to..." 
                            defaultValue={NumSend}
                            onChange={(e) => setNumSend(e.target.value)} 
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label class="col-form-label" for="inputDefault">Date & Time</label>
                        <input 
                            defaultValue={Time} 
                            type="time" 
                            class="form-control"
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Text</label>
                    <textarea 
                        defaultValue={Text} 
                        className='form-control' 
                        rows="3" maxLength="300" 
                        placeholder="Text..." 
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Category</label>
                    <select 
                        defaultValue={Category} 
                        class="form-control" 
                        id="exampleFormControlSelect1"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option>Family</option>
                        <option>Friends</option>
                        <option>Coworkers</option>
                        <option>Training</option>
                        <option>Entertainment</option>
                        <option>Others</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="col-form-label">Frequency</label>
                    <div className='d-flex justify-content-center'>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                defaultChecked={Mon}
                                onChange={(e) => setMon(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Mon</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                defaultChecked={Tue}
                                onChange={(e) => setTue(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Tue</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                defaultChecked={Wed}
                                onChange={(e) => setWed(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Wed</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                defaultChecked={Thu}
                                onChange={(e) => setThu(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Thu</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                defaultChecked={Fri}
                                onChange={(e) => setFri(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Fri</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                defaultChecked={Sat}
                                onChange={(e) => setSat(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Sat</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                defaultChecked={Sun}
                                onChange={(e) => setSun(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Sun</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-muted">
                <button className='btn btn-primary mr-3' onClick={() => editMsgFunction()}>Done</button>
                <button className='btn btn-secondary' onClick={() => backToMsgs(true)}>Back</button>
            </div>
        </div>
    )
    } else {
        return (
            <div>
                Error
            </div>
        )
    }
}

export default EditMsg