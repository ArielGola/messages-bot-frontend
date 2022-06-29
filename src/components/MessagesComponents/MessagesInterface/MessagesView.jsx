import React from 'react';

function MessagesView(props) {

    const handleIsEdit = (newValue) => {
        const changeIsEdit = props.functionIsEdit;
        changeIsEdit(newValue);
    };

    return (
        <div class="card border-primary desc-w-container">
            <h3 class="card-header bg-primary text-white">Message Description</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">To: 43524567</li>
                <li class="list-group-item">Date: 05/06/2022 At: 09:44</li>
                <li class="list-group-item">Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, quisquam.</li>
                <li class="list-group-item">Category: Family</li>
                <li class="list-group-item">
                    Frequency
                    <div className='d-flex justify-content-center m-2'>
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
                </li>
            </ul>
            <div class="card-footer text-muted">
                <button className='btn btn-primary' onClick={() => handleIsEdit(true)}>Edit</button>
                <button className='btn btn-secondary ml-3'>Delete</button>
            </div>
        </div>   
    )
}

export default MessagesView