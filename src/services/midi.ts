import { IMidiDevice } from './interface';

export async function midiInit() {
    const inputs: any[] = [];
    const outputs: any[] = [];
    try {
        const midiAccess = await navigator.requestMIDIAccess()
        midiAccess.inputs.forEach((input) => {
            inputs.push(input)
        });
        midiAccess.outputs.forEach(output => {
            outputs.push(output)
        });
    } catch (error) {
        console.log("no midi capabilities!")
    }
    return { midiIn: inputs, midiOut: outputs }
}

export let midiIn: IMidiDevice;
export let midiOut: IMidiDevice;

export function saveMidiIn(midiIn: IMidiDevice) {
    midiIn = midiIn
}

export function saveMidiOut(midiOut: IMidiDevice) {
    midiOut = midiOut
}