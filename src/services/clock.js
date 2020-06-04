import Tone from 'tone'

const clock = Tone.Transport

export function initClock(tempo, step) {  
    clock.scheduleRepeat(function (time) {
        // console.log("transport", time, clock.bpm.value)
        ticker()
    }, "16n")
}

export function startClock() {
    console.log("running...")
    clock.start()
}

export function stopClock() {
    console.log("stop")
    clock.stop()
}

export function setTempo(bpm) {
    const debounce = setTimeout(() => {
        clock.bpm.rampTo(bpm, 1);
        clearTimeout(debounce)
    }, 3000)
    clearTimeout(debounce);
}

const taskQueue = [];
export function registerTask({ eventName, callback }) {
    const duplicate = taskQueue.find(task => task.eventName === eventName)
    if(duplicate)return;
    taskQueue.push({ eventName, callback })
}

export function ticker() {
    taskQueue.forEach(task => task.callback());
}