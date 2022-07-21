import Axios from 'axios';


const NEW_HISTORY_MSG_URL = "http://localhost:4000/mba/history/add";


export function timeIteration(HandleMsgs) {
    //Interval = setInterval(() => {
    window.timer = setInterval(() => {
    
        //let today = new Date().toLocaleDateString('en-US', {weekday: 'long'}).slice(0,3);
        let today = new Date().getDay();

        //let timeNow = `${new Date().getHours()}:${new Date().getMinutes()}`;
        let timeNow = new Date().toLocaleTimeString([], {
            timeStyle: 'short'
        });

        matchDayTime(today, timeNow, HandleMsgs);

    }, 1000*59.99);
};


function matchDayTime(today, timeNow, HandleMsgs) {
    let dayFilter = [];

    HandleMsgs.map(msg => {
        const arr = Object.entries(msg.frequency);
        if (arr[today][1]) { dayFilter.push(msg); };
    });

    //console.log(dayFilter);

    dayFilter.map(msgF => {
        let time = String(msgF.timeSend);
        if (time.startsWith("0")) {
            time = time.slice(1,5);
        };
        if (time === timeNow) {
            sendMessage(msgF);
        };
        console.log(time, timeNow);
    });
};


async function sendMessage(msgF) {
    try {

        const newHistoryMsg = {
            numUser: msgF.numUser,
            numSend: msgF.numSend,
            timeSended: msgF.timeSend,
            content: msgF.content,
            categor: msgF.categor
        };

        await Axios.post(NEW_HISTORY_MSG_URL, newHistoryMsg);

        const encodedText = encodeURIComponent(msgF.content);

        window.open(`Https://web.whatsapp.com/send?phone=${msgF.numSend}&text=${encodedText}&app_absent=0`, "_blank");
        
        console.log("Sended a grat message!!!");
        
    } catch (error) {
        console.log("The things was going wrong");  
    };
};