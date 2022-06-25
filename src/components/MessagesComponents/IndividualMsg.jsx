import React from 'react';

function IndividualMsg() {
    return (
        <div class="msg-w-container mt-2">
            <div class="list-group p-2">
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1">To: 4903423</p>
                        <small>09:44</small>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1">Text: Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small class="text-muted">05/06/2022</small>
                    </div>
                </a>
            </div>
        </div> 
    )
}

export default IndividualMsg