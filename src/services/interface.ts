export interface IMidiDevice {
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