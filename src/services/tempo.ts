export function generateClock(bpm: number) {
    // create and dispatch the event
let event = new CustomEvent("tempo", {
    detail: {
      hazcheeseburger: true
    }
  });

    let interval = (60 / bpm) * 1000;
    let tempoTimer = setInterval(function () {
        console.log("tempo")
        document.dispatchEvent(event)
    }, interval);
}