// Modules
import React from 'react';

function Modal(props) {

    // State handlers
    const handleModal = () => {
        const modalF = props.handleModal;
        modalF();
    };

    return (
        <div className="bg-modal">
            
            <div className="card bg-light mb-3">
                <div className="card-header">Introduction</div>
                <div className="card-body">
                    <h4 className="card-title">Welcome to app</h4>
                    <p>This app is a bot for help us to send messages with certain time and date in Whatsapp.</p>
                    <p>First we need to know somethings:</p>
                    <ul>
                        <li>It work as complement of Whatsapp Web and Whatsapp for Desktop.</li>
                        <li>At the moment of send any message you must be logged into Whatsapp of your computer.</li>
                        <li>This app don't answer messages that you have recived.</li>
                        <li>For the moment Whatsapp don't let us send messages automatically, so you just click on send button.</li>
                    </ul>
                    <p>In this app you can separate the messages per categories, and you have the history messages.</p>
                    <div className="btn btn-primary" onClick={() => handleModal()}>
                        I Understand it
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal;