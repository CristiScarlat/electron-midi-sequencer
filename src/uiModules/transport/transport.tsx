import React, { useState } from 'react';
import CustomButon from '../../uiComponents/button/button';
import InputNumber from '../../uiComponents/inputNumber/inputNumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faPause } from '@fortawesome/free-solid-svg-icons';
import LedComponent from '../../uiComponents/led/led'
import { ticker } from '../../services/tempo'
import './transport.css';


interface ITransportBarProps {
    onClick: (x: string) => void
    onChange: (x: string, v: number) => void
    play: boolean
    defaultTempo: number
}

let state: boolean = false;

export default function TransportBar(props: ITransportBarProps) {
    
    return (
        <div className="transport-wrapper">
            <div className="tempo-setting">
                <InputNumber label={"Tempo"} onChange={(value: number) => props.onChange('tempo', value)} defaultValue={props.defaultTempo}/>
            </div>
            <div className="led-wrapper">
                <LedComponent/>
            </div>
            <div>
                <CustomButon onClick={() => props.onClick('pause')} icon={<FontAwesomeIcon icon={faPause}/>} />
                <CustomButon onClick={() => props.onClick('play')} icon={props.play ? <FontAwesomeIcon icon={faStop}/> : <FontAwesomeIcon icon={faPlay}/> } />
            </div>
        </div>
    )
}