import React from 'react'
import DrumSequencer from '../drumSeq/drumSeq'
import './mainSeq.css'

interface IMainSeqModuleProps {
    activeStep?: number
}

export default function MainSeqModule(props: IMainSeqModuleProps) {
    return (
        <div className="main-seq-wrapper">
            <DrumSequencer activeStep={props.activeStep}/>
        </div>
    )
}