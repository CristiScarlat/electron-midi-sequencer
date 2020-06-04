import React from 'react';
import './led.css'

interface ILedComponentProps {
    state?: boolean
}

export default function LedComponent(props: ILedComponentProps) {
    return (
        <div className="led-outer">
            <div className={`led-inner ${props.state ? 'on' : 'off'}`} id="led" />
        </div>
    )
}
