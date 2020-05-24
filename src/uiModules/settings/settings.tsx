import React, { useState } from 'react';
import DropdownList from '../../uiComponents/dropDown/dropDown';
import InputNumber from '../../uiComponents/inputNumber/inputNumber';
import './settings.css'

export default function SettingsModule(props: any) {
    const midiInDevices = props.midiDevices.midiIn;
    const midiOutDevices = props.midiDevices.midiOut;
    const [selectedMidiInDevice, saveMidiInDevice] = useState<any>();
    const [selectedMidiOutDevice, saveMidiOutDevice] = useState<any>();


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

    document.addEventListener("tempo", sendMidiMsg)

    function sendMidiMsg() {
        selectedMidiOutDevice?.send([0x90, 0x3C, 0x20])
        console.log("send midi msg");
    }

    return (
        <div className="settings-wrapper">
            <div className="midi-devices">
                <DropdownList label={"MIDI IN"} items={getMidiInDevicesList()} selectedItem={selectedMidiInDevice?.name} onSelect={(item: any) => handleSlectedDevice(item, 'midiIn')} />
                <DropdownList label={"MIDI OUT"} items={getMidiOutDevicesList()} selectedItem={selectedMidiOutDevice?.name} onSelect={(item: any) => handleSlectedDevice(item, 'midiOut')} />
            </div>
            <div className="settings-tempo">
                <InputNumber />
            </div>
        </div>
    )
}
