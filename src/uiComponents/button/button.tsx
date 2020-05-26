import React, { DOMElement, ReactElement } from 'react';
import Button from 'react-bootstrap/Button';

interface ICustomButtonProps {
    label?: string
    icon: ReactElement
    onClick: (x: any) => any
}

export default function CustomButton(props: ICustomButtonProps) {
    return <Button onClick={props.onClick} className="m-2" size="lg" variant="secondary">{props.label}{props.icon}</Button>
}