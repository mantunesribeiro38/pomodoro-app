import styled from 'styled-components'

const ActionPomodoroFocus = styled.a`
    font-size:20px; 
    color: #fff; 
    font-weight: bold; 
    text-decoration: none;
`;
const ButtonPomodoro = styled.button`
    cursor: pointer;
    border: none;
    margin: 20px 0px 0px;
    padding: 0px 12px;
    border-radius: 4px;
    font-size: 22px;
    height: 55px;
    color: rgb(70, 142, 145);
    font-weight: bold;
    width: 200px;
    background-color: white;
    transition: color 0.5s ease-in-out 0s;

    &.action {
        color: #db524d;
    }

    &.action-start {
        color: #db524d; 
        box-shadow: rgb(235 235 235) 0px 6px 0px;
    }
`;

const Button = styled.button`
    align-items: center; 
    justify-content: center; 
    border-radius: 4px; 
    cursor: pointer;
    opacity: 0.9;
    box-shadow: none;
    font-size: 13px;
    padding: 8px 12px;
    min-width: 70px;
    border: none;
    color: #fff;
    background: none rgba(0, 0, 0, 0.15);
    font-weight: 100;
    margin-left: 10px; 
`

const Wrapper = styled.section`
    padding: 0px 12px;
    max-width: 620px; 
    margin: auto;
`;

const Nav = styled.section`
    display: flex ;
    text-decoration: none ;
    height: 60px ;
    justify-content: space-between ;
    align-items: center;
    margin-bottom: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const SimpleButton = styled.button`
    border: none;
    margin: 0px;
    border-radius: 4px;
    font-size: 16px;
    padding: 2px 12px;
    height: 28px;
    cursor: pointer;
    box-shadow: none;
    color: white;
    opacity: 1;
    font-weight: bold;
`; 

const Container = styled.section`
    padding: 0px 12px;
    max-width: 620px;
    margin: auto;

    .wrapper-timer {
        max-width: 480px;
        margin: auto;

        .button-options{
            background-color: rgba(255, 255, 255, 0.1); 
            padding: 20px 0px 30px; 
            border-radius: 6px;
            margin-bottom: 20px; 
            width: 100%;

            .buttons{
                justify-content: center;
                display: flex;
            }
        }
    }
`;

const TimerContent = styled.div`
font-size: 120px; 
font-Weight: bold; 
margin-top: 20px; 
text-align: center;
`;
 
export  {
    ButtonPomodoro,
    Button,
    Wrapper,
    Nav,
    SimpleButton,
    Container,
    ActionPomodoroFocus,
    TimerContent
}

