import React, {useState} from 'react';

function IndividualMsg(props) {

    const [MsgData, setMsgData] = useState(props.msg);

    const handleSelectedId = (newValue) => {
        const handleSelected = props.handleSelectedId;
        handleSelected(newValue);
    };

    return (
        <div class="msg-w-container mt-2">
            <div class="list-group p-2">
                <a 
                    href="" 
                    class="list-group-item list-group-item-action flex-column align-items-start active"
                    onClick={(e) => {e.preventDefault(); handleSelectedId(MsgData._id)}}
                >
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1">To: {MsgData.numSend}</p>
                        <small>{MsgData.timeSend}</small>
                    </div>
                </a>
                <a 
                    href="" 
                    class="list-group-item list-group-item-action flex-column align-items-start"
                    onClick={(e) => {e.preventDefault(); handleSelectedId(MsgData._id)}}
                >
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1">Text: {MsgData.content}</p>
                        <small class="text-muted">{String(MsgData.createdAt).split('T')[0]}</small>
                    </div>
                </a>
            </div>
        </div> 
    )
}

export default IndividualMsg