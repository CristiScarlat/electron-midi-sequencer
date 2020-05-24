import React from 'react';
import "./inputNumber.css";


export default function InputNumber() {
    return (
        <div className="input-number-wrapper">
            <div className="input-number-label">Tempo</div>
            <input className="input-number" type="number" />
        </div>
    )
}