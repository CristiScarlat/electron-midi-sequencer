
export function generateClock(bpm: number) {
  const interval = (60 / bpm) * 1000;
  const timerId = setInterval(ticker, interval);
  return timerId;
}

interface ITask {
  eventName: string
  callback: (x: any) => void
}

const taskQueue: ITask[] = [];
export function registerTask({ eventName, callback}: ITask) {
  taskQueue.push({eventName, callback})
}

let tick = false
export function ticker() {
  tick = !tick
  taskQueue.forEach(task => task.callback(tick));
}