export interface ITrackObj {
    [key: string]: number[];
}

export interface ITrackProps {
    stepsCount: number
    label: string
    pitch?: boolean
    velocity?: boolean
    showStepNo?: boolean
    disabled?: boolean
    activeStep?: number
    showLed?: boolean
    onChange?: (x: ITrackObj) => void
}

export interface IDrumSeqModule {
    activeStep?: number
}