import React, { useEffect, useState } from 'react';
import CustomButon from '../../uiComponents/button/button';
import InputNumber from '../../uiComponents/inputNumber/inputNumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faPause } from '@fortawesome/free-solid-svg-icons';
import LedComponent from '../../uiComponents/led/led'
import { registerTask } from '../../services/clock'
import { startClock, stopClock, setTempo } from '../../services/clock';
import './transport.css';


interface ITransportBarProps {
    defaultTempo: number
    activeStep?: number
}

let blink: boolean = false;
let counter: number = 0;

export default function TransportBar(props: ITransportBarProps) {
    const [ledState, setLedState] = useState<boolean>(false);
    const [play, setPlay] = useState<boolean>(false);

    useEffect(() => {
        if(props.activeStep === 0)setLedState(true);
        else if(props.activeStep === 2)setLedState(false);
    }) 

    function handleTransportButtons(type: string) {
        if(type === 'play'){
          setPlay(!play);
          !play ? startClock() : stopClock()
    
        }
        else if(type === 'pause')return;
      }
      
      function handleTransportInput(type: string, value: number) {
        if(type === "tempo")setTempo(value);
      }

    return (
        <div className="transport-wrapper">
            <div className="tempo-setting">
                <InputNumber label={"Tempo"} onChange={(value: number) => handleTransportInput('tempo', value)} defaultValue={props.defaultTempo}/>
            </div>
            <div className="led-wrapper">
                <LedComponent state={ledState}/>
            </div>
            <div>
                <CustomButon onClick={() => handleTransportButtons('pause')} icon={<FontAwesomeIcon icon={faPause}/>} />
                <CustomButon onClick={() => handleTransportButtons('play')} icon={!play ? <FontAwesomeIcon icon={faPlay}/> : <FontAwesomeIcon icon={faStop}/> } />
            </div>
        </div>
    )
}