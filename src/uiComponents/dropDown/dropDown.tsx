import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './dropDown.css'

type DropdownListProps = {
    label: string
    items: any[]
    onSelect: (arg: string) => void
    selectedItem: any
}

export default function DropdownList(props: DropdownListProps) {

    return (
        <div className="dropdown-wrapper">
            <div className="dropdown-label">{props.label || ''}</div>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="lg"> 
                    {props.selectedItem || props.label }
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {props.items.map((item, index) => (
                        <Dropdown.Item  as="button" onSelect={() => props.onSelect(item)} key={String(item) + String(index)}>{item}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
        )
}