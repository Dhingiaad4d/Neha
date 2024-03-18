import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-regular-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

const Timer = () => {
    const [isStopper, setIsStopper] = useState(false);
    const [stopValue,setStopValue]=useState(0);
    const [btnActive, setBtnActive] = useState('');
    const [time, setTime] = useState(300);
    const [timerunning, settimeRunning] = useState(false);
    let timer;
    let interval;


    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs}h  ${mins < 10 ? '0' : ''}${mins}m   ${secs < 10 ? '0' : ''}${secs} s`;
    };
    const stopwatch = (stopValue) => {
        const stophrs =Math.floor(stopValue/3600);
        const stopmins=Math.floor((stopValue % 3600)/60);
        const stopsec=stopValue%60;
        return 
    }

    useEffect(() => {
        if (timerunning) {
            timer = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime > 0) {
                        return prevTime - 1
                    }
                    else {
                        clearInterval(timer);
                        settimeRunning(false);
                        return 0;
                    }
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timerunning]);

    useEffect(()=>{
        if(isStopper){
            interval=setInterval(() => {
                setStopValue(prevtime=>prevtime+1)
            }, 10);
        }
        else{
            setIsStopper(false)
            clearInterval(interval)
        }
    })
    useEffect(() => {
        if (time === 0) {
            clearInterval(timer);
            // alert("Countdown has ended!");
        }
    }, [time]);

    const handleStop = () => {
        settimeRunning(!timerunning)
    }
    const handleReset = () => {
        clearInterval(timer);
        setTime(30);
        settimeRunning(true)
    }
    const hanldetoggle = (btnName) => {
        setBtnActive(btnName);
    }

    return (
        <div className='section' style={{ margin: "auto", marginTop: "200px" }}>
            <div className='container border border-secondary rounded-top p-0 mt-5' >
                <div className='tab-header row h-auto mx-auto w-100' >
                    <button className={`col ${btnActive === 'timer' ? "active timer-btn" : "timer-btn"} `} onClick={() => hanldetoggle('timer')}>
                        <span><FontAwesomeIcon className='icon' icon={faHourglass} style={{ color: btnActive === 'timer' ? 'dodgerblue' : 'grey' }} ></FontAwesomeIcon></span>
                        Timer</button>
                    <button className={`col ${btnActive === 'stopwatch' ? "active timer-btn" : "timer-btn"} `} onClick={() => hanldetoggle('stopwatch')} >
                        <span><FontAwesomeIcon className='icon' icon={faStopwatch} style={{ color: btnActive === 'stopwatch' ? 'dodgerblue' : 'grey' }}></FontAwesomeIcon></span>
                        StopWatch</button>
                </div>
                <div className='timer-div'>
                    <h1>{formatTime(time)}</h1>
                </div>
                <div style={{ height: "10px" }}>
                    <hr />
                </div>
                <div className='' style={{ display: "block", justifyContent: "center", alignItems: "center", margin: '10px' }}>
                    <button style={{ width: "130px", height: "45px", background: "#0d6efd", color: "white", marginRight: '10px', border: "none" }} onClick={handleStop}>{timerunning ? "Stop" : "Start"}</button>
                    <button style={{ width: "130px", height: "45px", background: "#0d6efd", color: "white", border: "none" }} onClick={handleReset}>Reset</button>
                </div>
            </div>

        </div >
    );
};

export default Timer;








