import React, { useState, useEffect, useMemo } from 'react';
import { registerTask } from '../../services/tempo'
import './led.css'

interface ILedComponentProps {
    state?: boolean
}

export default function LedComponent(props: ILedComponentProps) {
    const [ledState, setLedState] = useState<boolean>(false);
    console.log("render-led-component", ledState)

    useEffect(() => {
        registerTask({ eventName: "tick", callback: ledSyncAnim });
        console.log("mount-led-component")
    }, [])
    function ledSyncAnim(tick: any) {
        setLedState(!tick);
    }

    return (
        <div className="led-outer">
            <div className={`led-inner ${ledState ? 'on' : 'off'}`} id="led" />
        </div>
    )
}
