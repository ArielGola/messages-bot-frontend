import React, {useState} from 'react';
import Axios from 'axios';
//import Jwt from 'jsonwebtoken';
//const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';

const CREATEMSG_URL = 'http://localhost:4000/mba/message/create';

function CreateMsg(props) {

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

    const createMsgFunction = async () => {
        try {
            const token = document.cookie.split('=')[1];
            console.log(token);
            //console.log(process.env.REACT_APP_JWT_SECRET);

            const decoded = jwt.verify(token, /*process.env.REACT_APP_JWT_SECRET*/ "maNivela_30/9");

            const newMsg = {
                numUser: decoded.id,
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

            console.log(newMsg);

            await Axios.post(CREATEMSG_URL, newMsg);
            
            backToMsgs(true);

            getMsgs();
            
        } catch (error) {
            console.log("mal", {error});
        };
    };

    return (
        <div class="card border-primary desc-w-container">
            <h3 class="card-header bg-primary text-white">New Message</h3>
            <div className="card-body flex-wrap">
                <div className="form-row">  
                    <div class="form-group col-md-6">
                        <label class="col-form-label" for="inputDefault">Message To</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Message to..." 
                            onChange={(e) => setNumSend(e.target.value)} 
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label class="col-form-label" for="inputDefault">Time</label>
                        <input type="time" class="form-control" onChange={(e) => setTime(e.target.value)} />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Text</label>
                    <textarea 
                        className='form-control' 
                        rows="3" 
                        maxLength="300" 
                        placeholder="Text..." 
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Category</label>
                    <select 
                        class="form-control" 
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
                <div class="form-group">
                    <label class="col-form-label">Frequency</label>
                    <div className='d-flex justify-content-center'>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setMon(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Mon</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setTue(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Tue</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setWed(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Wed</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setThu(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Thu</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setFri(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Fri</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setSat(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Sat</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="" 
                                onChange={(e) => setSun(e.target.checked)}
                            />
                            <label class="form-check-label" for="">Sun</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-muted">
                <button className='btn btn-primary mr-3' onClick={() => createMsgFunction()}>Done</button>
                <button className='btn btn-secondary' onClick={() => backToMsgs(true)}>Back</button>
            </div>
        </div>
    )
}

export default CreateMsg