// Modules
import React, {useState} from 'react';


function IndividualMsg(props) {

    // State
    const [MsgData] = useState(props.msg);

    // State handler
    const handleSelectedId = (newValue) => {
        const handleSelected = props.handleSelectedId;
        handleSelected(newValue);
    };

    
    return (
        <div className="msg-w-container mt-2">
            <div className="list-group p-2">
                <a 
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start active"
                    onClick={(e) => {e.preventDefault(); handleSelectedId(MsgData._id)}}
                >
                    <div className="d-flex w-100 justify-content-between">
                        <p className="mb-1">To: {MsgData.numSend}</p>
                        <small>{MsgData.timeSend}</small>
                    </div>
                </a>
                <a 
                    href="#" 
                    className="list-group-item list-group-item-action flex-column align-items-start"
                    onClick={(e) => {e.preventDefault(); handleSelectedId(MsgData._id)}}
                >
                    <div className="d-flex w-100 justify-content-between">
                        <p className="mb-1">Text: {MsgData.content}</p>
                        <small className="text-muted">{String(MsgData.createdAt).split('T')[0]}</small>
                    </div>
                </a>
            </div>
        </div> 
    )
}

export default IndividualMsg