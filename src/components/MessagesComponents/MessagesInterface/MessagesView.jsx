import React from 'react';

function MessagesView() {
    return (
        <div class="card desc-w-container">
            <h3 class="card-header bg-primary text-white">Message Description</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">To: 43524567</li>
                <li class="list-group-item">Date: 05/06/2022 At: 09:44</li>
                <li class="list-group-item">Text: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, quisquam.</li>
                <li class="list-group-item">Category: Family</li>
                <li class="list-group-item">Frequency</li>
            </ul>
            <div class="card-footer text-muted">
                <button className='btn btn-primary'>Edit</button>
                <button className='btn btn-secondary ml-3'>Delete</button>
            </div>
        </div>   
    )
}

export default MessagesView