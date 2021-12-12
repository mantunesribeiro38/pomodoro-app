import React from 'react'
import { useEffect } from 'react';
import { TimerContent } from './StyledHome';

const Timer = (props) => {
    
    const {seconds, setSeconds, minutes, setMinutes} = props;

    const { startPomodoro } = props;


    useEffect(()=>{
        if(startPomodoro === false){
            return;
        }

        let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
            };
    });

    return (
        <TimerContent>
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </TimerContent>
    )
}

export default Timer;