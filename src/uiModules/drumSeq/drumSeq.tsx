import React from 'react';
import TrackComponent from './track/track' ;
import { IDrumSeqModule } from './interface';
import './drumSeq.css'

export default function DrumSeqModule(props: IDrumSeqModule) {
    const tracks = ['Kick', 'Snare', 'HHClosed', 'HHOpen', 'Clap', 'RimShot', 'HiTom', 'MidTom', 'LowTom']
    function _onChange(data: any) {
        console.log(data)
    }
    return (
        <div className="drumseq-wrapper">
            <TrackComponent stepsCount={16} pitch={false} velocity={false} showStepNo={false} disabled={true} activeStep={props.activeStep} showLed={true} label={''}/>
            {tracks.map((track, index) => (
            <TrackComponent key={track + index} stepsCount={16} label={track} pitch={true} velocity={true} onChange={_onChange}/>
            ))}
        </div>
    )
}