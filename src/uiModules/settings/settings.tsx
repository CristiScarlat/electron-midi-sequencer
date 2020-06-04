import React from 'react';
import DropdownList from '../../uiComponents/dropDown/dropDown';
import { saveMidiIn, saveMidiOut, midiIn, midiOut } from '../../services/midi';
import './settings.css';

export default function SettingsModule(props: any) {
    const midiInDevices = props.midiDevices.midiIn;
    const midiOutDevices = props.midiDevices.midiOut;

    function handleSlectedDevice(deviceName: any, deviceType: string) {
        if (deviceType === 'midiIn') {
            const selDevObj = midiInDevices.find((device: any) => device.name === deviceName);
            console.log("midi-in", selDevObj)
            saveMidiIn(selDevObj);
        }
        if (deviceType === 'midiOut') {
            const selDevObj = midiOutDevices.find((device: any) => device.name === deviceName);
            console.log("midi-out", selDevObj)
            saveMidiOut(selDevObj);
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
                <DropdownList label={"MIDI IN"} items={getMidiInDevicesList()} selectedItem={midiIn?.name} onSelect={(item: any) => handleSlectedDevice(item, 'midiIn')} />
                <DropdownList label={"MIDI OUT"} items={getMidiOutDevicesList()} selectedItem={midiOut?.name} onSelect={(item: any) => handleSlectedDevice(item, 'midiOut')} />
            </div>
        </div>
    )
}
