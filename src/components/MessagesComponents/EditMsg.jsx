import React from 'react'

function EditMsg(props) {

    const backToMsgs = (newValue) => {
        const doneBack = props.functionDoneBack;
        doneBack(newValue);
    };

    const editMsgFunction = () => {
        
        backToMsgs(true);

    };

    return (
        <div class="card border-primary desc-w-container">
            <h3 class="card-header bg-primary text-white">Edit Message</h3>
            <div className="card-body flex-wrap">
                <div className="form-row">  
                    <div class="form-group col-md-6">
                        <label class="col-form-label" for="inputDefault">Message To</label>
                        <input type="text" class="form-control" placeholder="Message to..." />
                    </div>
                    <div class="form-group col-md-6">
                        <label class="col-form-label" for="inputDefault">Date & Time</label>
                        <input type="time" class="form-control" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Text</label>
                    <textarea className='form-control' rows="3" maxLength="300" placeholder="Text..." />
                </div>
                <div class="form-group">
                    <label class="col-form-label" for="inputDefault">Category</label>
                    <select class="form-control" id="exampleFormControlSelect1">
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
                            <input class="form-check-input" type="checkbox" id="" value="" />
                            <label class="form-check-label" for="">Mon</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input class="form-check-input" type="checkbox" id="" value="" />
                            <label class="form-check-label" for="">Tue</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input class="form-check-input" type="checkbox" id="" value="" />
                            <label class="form-check-label" for="">Wed</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input class="form-check-input" type="checkbox" id="" value="" />
                            <label class="form-check-label" for="">Thu</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input class="form-check-input" type="checkbox" id="" value="" />
                            <label class="form-check-label" for="">Fri</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input class="form-check-input" type="checkbox" id="" value="" />
                            <label class="form-check-label" for="">Sat</label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                            <input class="form-check-input" type="checkbox" id="" value="" />
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
}

export default EditMsg