// Modules
import React, {useState} from 'react';
import Axios from 'axios';
import jwt from 'jsonwebtoken';


const CREATEMSG_URL = 'http://localhost:4000/mba/message/create';


function CreateMsg(props) {

    // State
    const [NumSend, setNumSend] = useState("");
    const [Time, setTime] = useState("");
    const [Text, setText] = useState("");
    const [Category, setCategory] = useState("Family");
    
    const [Mon, setMon] = useState(false);
    const [Tue, setTue] = useState(false);
    const [Wed, setWed] = useState(false);
    const [Thu, setThu] = useState(false);
    const [Fri, setFri] = useState(false);
    const [Sat, setSat] = useState(false);
    const [Sun, setSun] = useState(false);

    // State handlers
    const backToMsgs = (newValue) => {
        const doneBack = props.functionDoneBack;
        doneBack(newValue);
    }; 

    const refreshFunction = () => {
        const refreshF = props.refresh;
        refreshF();
    };


    const createMsgFunction = async () => {
        try {
            const token = document.cookie.split('=')[1];

            const decoded = jwt.verify(token, process.env.REACT_APP_JWT_SECRET);

            const newMsg = {
                numUser: decoded.id,
                numSend: NumSend,
                content: Text,
                timeSend: Time,
                categor: Category,
                frequency: {
                    Sun,
                    Mon,
                    Tue,
                    Wed,
                    Thu,
                    Fri,
                    Sat
                }
            };

            await Axios.post(CREATEMSG_URL, newMsg);
            
            backToMsgs(true);
            
        } catch (error) {
            console.error(error);
        } finally {
            refreshFunction();
        };
    };

    
    return (
        <div className="card border-primary desc-w-container">
            <h3 className="card-header bg-primary text-white">New Message</h3>
            <div className="card-body flex-wrap">
                <div className="form-row">  
                    <div className="form-group col-md-6">
                        <label className="col-form-label" htmlFor="inputDefault">Message To</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Message to..." 
                            onChange={(e) => setNumSend(e.target.value)} 
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="col-form-label" htmlFor="inputDefault">Time</label>
                        <input type="time" className="form-control" onChange={(e) => setTime(e.target.value)} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Text</label>
                    <textarea 
                        className='form-control' 
                        rows="3" 
                        maxLength="300" 
                        placeholder="Text..." 
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Category</label>
                    <select 
                        className="form-control" 
                        id="exampleFormControlSelect1" 
                        onChange={(e) => setCategory(String(e.target.value))}
                    >
                        <option>Family</option>
                        <option>Friends</option>
                        <option>Coworkers</option>
                        <option>Training</option>
                        <option>Entertainment</option>
                        <option>Others</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="col-form-label">Frequency</label>
                    <div className='d-flex justify-content-center'>
                        <div className="form-check form-check-inline mr-3">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setMon(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="">Mon</label>
                        </div>
                        <div className="form-check form-check-inline mr-3">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setTue(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="">Tue</label>
                        </div>
                        <div className="form-check form-check-inline mr-3">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setWed(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="">Wed</label>
                        </div>
                        <div className="form-check form-check-inline mr-3">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setThu(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="">Thu</label>
                        </div>
                        <div className="form-check form-check-inline mr-3">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setFri(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="">Fri</label>
                        </div>
                        <div className="form-check form-check-inline mr-3">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setSat(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="">Sat</label>
                        </div>
                        <div className="form-check form-check-inline mr-3">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setSun(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="">Sun</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer text-muted">
                <button className='btn btn-primary mr-3' onClick={() => createMsgFunction()}>Done</button>
                <button className='btn btn-secondary' onClick={() => backToMsgs(true)}>Back</button>
            </div>
        </div>
    )
}

export default CreateMsg