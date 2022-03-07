import Moment from 'react-moment';
const { useState, useEffect } = React;


const App = () => {
    let fomatDate = moment(new Date()).format("DD/MM/YYYY");
    console.log(fomatDate);
    return(
        <>
            <div id="break-label">Break Length</div>
            <div id="session-label">Session Length</div>

            <button id="break-decrement" >+break</button>
            <button id="break-increment" >-break</button>

            <button id="session-decrement" >+session</button>
            <button id="session-increment" >-session</button>
            
            <div id="break-length" ></div>
            <div id="session-length" ></div>

            <div id="timer-label">Sesson</div>

            <div id="time-left" ></div>

            <button id="start_stop" >start-stop</button>
            <button id="reset" value="reset" >reset</button>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))