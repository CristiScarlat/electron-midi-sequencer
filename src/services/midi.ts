
interface IMidiDevice {
    connection: string
    id: string
    manufacturer: string
    name: string
    onmidimessage: () => void
    onstatechange: () => void
    state: string
    type: string
    version: string
}

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
