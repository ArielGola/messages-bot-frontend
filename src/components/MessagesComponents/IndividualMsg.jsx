import React, {useState} from 'react';

function IndividualMsg(props) {

    const [MsgData, setMsgData] = useState(props.msg);

    return (
        <div class="msg-w-container mt-2">
            <div class="list-group p-2">
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1">To: {MsgData.numSend}</p>
                        <small>{MsgData.timeSend}</small>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1">Text: {MsgData.content}</p>
                        <small class="text-muted">{MsgData.createdAt}</small>
                    </div>
                </a>
            </div>
        </div> 
    )
}

export default IndividualMsg