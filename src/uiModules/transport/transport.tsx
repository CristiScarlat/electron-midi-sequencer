import React from 'react';
import CustomButon from '../../uiComponents/button/button'
import './transport.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

export default function TransportBar() {
    return(
        <div className="transport-wrapper">
            <CustomButon icon={<FontAwesomeIcon icon={faStop}/>}/>
            <CustomButon icon={<FontAwesomeIcon icon={faPlay}/>}/>
        </div>
    )
}