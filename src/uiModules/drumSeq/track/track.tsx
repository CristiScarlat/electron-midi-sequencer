import React, { useEffect, useState } from 'react'
import './track.css'
import { Button, ButtonGroup } from 'react-bootstrap';
import InputNumber from '../../../uiComponents/inputNumber/inputNumber';
import LedComponent from '../../../uiComponents/led/led'
import { ITrackObj, ITrackProps } from '../interface'

export default function TrackComponent(props: ITrackProps) {

    const [trackData, setTrackData ] = useState<Array<number>>([])

    function buildTrack() {
        const arr: any[] = [];
        for (let i = 0; i < props.stepsCount; i++) {
            arr.push(
                <Button 
                key={`${props.label}-track-step-${i}`} 
                variant="secondary" 
                className="rounded mr-2 ml-2 mb-1 mt-1" 
                size="lg" 
                value={i}
                style={{backgroundColor: trackData.includes(i) ? "#772323" : i%4 ? "#343a40": "rgb(75, 73, 84)"}}
                >
                    {props.showStepNo ? i : ""}
                    {props.showLed && <LedComponent state={props.activeStep === i}/>}
                </Button>
            )
        }
        return arr
    }

    function handleChange(e: any) {
        const value = Number(e.target.value);
        let arr: number[] = trackData;
        
        if(arr.includes(value)){
            arr = arr.filter(data => data !== value)
        }
        else {
            arr.push(value);
        }
        
        setTrackData([...arr])
        const trackObj: ITrackObj = {[props.label]: arr}
        props.onChange && props.onChange(trackObj)
    }

    return (
        <div className="track-wrapper">
            <ButtonGroup className="btn-group ml-2 mr-2 mb-2" onClick={handleChange}>
                <div className="track-label">{props.label}</div>
                {buildTrack()}
            </ButtonGroup>
            {props.pitch && <InputNumber onChange={() => { }}  defaultValue={10} />}
            {props.velocity && <InputNumber onChange={() => { }}  defaultValue={10} />}
        </div>
    )
}