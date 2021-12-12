import React, { useState, useEffect } from 'react'
import { BiSkipNext } from 'react-icons/bi';
import Timer from './Timer';
import {
    Wrapper,
    SimpleButton,
    Button,
    Container,
    ButtonPomodoro,
    Nav,
    ActionPomodoroFocus
} from "./StyledHome"

export default function Home() {

    const [buttonSelected, setButtonSelected] = useState(null);
    const [buttonPomodoroStart, setButtonPomodoroStart] = useState(true);
    const [buttonPomodoroStop, setButtonPomodoroStop] = useState(false);

    const [ minutes, setMinutes ] = useState(25);
    const [seconds, setSeconds ] =  useState(0);

    const [startPomodoro, setStartPomodoro ] =  useState(false);

    const handleButtonSelected = (buttonValueSelected) => {

        if(startPomodoro){
            const windowConfirm = window.confirm("Deseja encerrar este ciclo?"); 

            if(!windowConfirm){
                return ;
            }
        }
        if(buttonValueSelected === 'shortBreak'){
            setMinutes(5);
            setSeconds(0);
            setStartPomodoro(false);
        }

        if(buttonValueSelected === 'longBreak'){
            setMinutes(15);
            setSeconds(0);
            setStartPomodoro(false);
        }

        if(buttonValueSelected === 'pomodoro'){
            setMinutes(25);
            setSeconds(0);
            setStartPomodoro(false);
        }
        setButtonSelected(buttonValueSelected);
    }

    const handleButtonPomdoroStart = () => {
        setButtonPomodoroStop(false);
        setStartPomodoro(true);

    }

    const handleButtonPomdoroStop = () => {
        setButtonPomodoroStart(false);
        setStartPomodoro(false);
        setMinutes(25);
        setSeconds(0);
    }

    useEffect(() => {
        setButtonSelected('pomodoro');
    }, [])


    return (
        
        <Wrapper>
            <Nav>
                <ActionPomodoroFocus href="/">Pomodoro Focus</ActionPomodoroFocus>
            </Nav>
            <Container>
                <div className="text-center">
                    <div className="wrapper-timer">
                        <div className="button-options">
                            <div className="buttons">
                                <SimpleButton 
                                    onClick={ () => handleButtonSelected('pomodoro')}
                                    style={{ background : (buttonSelected === 'pomodoro') ? 'none rgba(255, 255, 255, 0.2)':  'none'}}
                                >
                                    Pomodoro
                                </SimpleButton>
                                <SimpleButton 
                                    onClick={ () => handleButtonSelected('shortBreak')}
                                    style={{ background : (buttonSelected === 'shortBreak') ? 'none rgba(255, 255, 255, 0.2)': 'none'}}
                                >
                                    Short Break
                                </SimpleButton>
                                <SimpleButton 
                                    onClick={ () => handleButtonSelected('longBreak')}
                                    style={{ background : (buttonSelected === 'longBreak') ? 'none rgba(255, 255, 255, 0.2)' : 'none'}}
                                >
                                    Long Break
                                </SimpleButton>
                            </div>
                            <Timer  
                                startPomodoro={startPomodoro}
                                minutes={minutes}
                                setMinutes={setMinutes}
                                seconds={seconds}
                                setSeconds={setSeconds}
                            />
                            <div style={{textAlign: 'center'}}>
                                {
                                    startPomodoro === false
                                    && <ButtonPomodoro
                                        className="action-start"
                                            onClick={handleButtonPomdoroStart}
                                            hidden={buttonPomodoroStop}
                                        >
                                             Start
                                        </ButtonPomodoro>
                                }
                                {   
                                    startPomodoro === true
                                    && minutes === 0
                                    && seconds === 0
                                    && <ButtonPomodoro
                                            onClick={handleButtonPomdoroStop}
                                            className="action"
                                        >
                                            Finalizar
                                        </ButtonPomodoro>
                                }
                                {   
                                    startPomodoro === true
                                    && minutes !== 0
                                    && seconds !== 0
                                    && <ButtonPomodoro className="action" onClick={handleButtonPomdoroStop}>Stop</ButtonPomodoro>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Wrapper>
    )
}




