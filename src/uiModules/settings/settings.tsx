import React, { useState } from 'react';
import DropdownList from '../../uiComponents/dropDown/dropDown';
import './settings.css'
import { ticker } from '../../services/tempo';

export default function SettingsModule(props: any) {
    const midiInDevices = props.midiDevices.midiIn;
    const midiOutDevices = props.midiDevices.midiOut;
    const [selectedMidiInDevice, saveMidiInDevice] = useState<any>();
    const [selectedMidiOutDevice, saveMidiOutDevice] = useState<any>();
    console.log(props.counter)

    function handleSlectedDevice(deviceName: any, deviceType: string) {
        if (deviceType === 'midiIn') {
            const selDevObj = midiInDevices.find((device: any) => device.name === deviceName);
            console.log("midi-in", selDevObj)
            saveMidiInDevice(selDevObj);
        }
        if (deviceType === 'midiOut') {
            const selDevObj = midiOutDevices.find((device: any) => device.name === deviceName);
            console.log("midi-out", selDevObj)
            saveMidiOutDevice(selDevObj);
        }

    }

    function getMidiInDevicesList() {
        const items = midiInDevices.map((device: any) => device.name);
        return items;
    }

    function getMidiOutDevicesList() {
        const items = midiOutDevices.map((device: any) => device.name);
        return items;
    }

    return (
        <div className="settings-wrapper">
            <div className="midi-devices">
                <DropdownList label={"MIDI IN"} items={getMidiInDevicesList()} selectedItem={selectedMidiInDevice?.name} onSelect={(item: any) => handleSlectedDevice(item, 'midiIn')} />
                <DropdownList label={"MIDI OUT"} items={getMidiOutDevicesList()} selectedItem={selectedMidiOutDevice?.name} onSelect={(item: any) => handleSlectedDevice(item, 'midiOut')} />
            </div>
            <h1>{props.counter}</h1>
        </div>
    )
}
