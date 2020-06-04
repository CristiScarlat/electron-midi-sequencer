import React, { ChangeEvent } from 'react';
import "./inputNumber.css";

interface IInputNumberProps {
    onChange: (v: number) => void
    label?: string
    defaultValue: number
}

export default function InputNumber(props: IInputNumberProps) {
    function _onChange(e: ChangeEvent<HTMLInputElement>): void {
        props.onChange && props.onChange(Number(e.target.value));
    }
    return (
        <div className="input-number-wrapper">
            {props.label && <div className="input-number-label">{props.label}</div>}
            <input className="input-number" type="number" onChange={_onChange} defaultValue={props.defaultValue}/>
        </div>
    )
}