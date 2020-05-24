import React, { DOMElement, ReactElement } from 'react';
import Button from 'react-bootstrap/Button';

interface ICustomButtonProps {
    label?: string
    icon: ReactElement
}

export default function CustomButton(props: ICustomButtonProps) {
    return <Button className="m-2" size="lg" variant="secondary">{props.label}{props.icon}</Button>
}