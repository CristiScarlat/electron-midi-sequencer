import React, { useEffect, useState, ChangeEvent } from 'react';
import SettingsModule from './uiModules/settings/settings';
import TransportBar from './uiModules/transport/transport';
import { midiInit } from './services/midi';
import { generateClock, registerTask } from './services/tempo';
import 'bootstrap/dist/css/bootstrap.min.css';

let play: boolean = false; 
let stepCount = 0;

function App() {

  const [midiDevices, getMidiDevices] = useState<any>();
  const [clockId, saveClockId] = useState<any>();
  const [tempo, saveTempo] = useState<number>(60);
  const [counter, incCounter] = useState<number>(0);

  useEffect(() => {
    console.log("ComponentDidMount")
    async function getMidi() {
      const midiObj = await midiInit()
      getMidiDevices(midiObj)
    }
    getMidi()
    registerTask({ eventName: "tick", callback: stepCounter });
  }, [])

  function stepCounter() {
    incCounter(stepCount++);
  }

  function startTick() {
    const id = generateClock(tempo);
    saveClockId(id);
  }

  function stopTick()  {
    clearInterval(clockId)
    saveClockId(null);
  }

  function handleTransportButtons(type: string) {
    if(type === 'play'){
      incCounter(0);
      play = !play;
      play ? startTick() : stopTick()

    }
    else if(type === 'pause')return;
  }
  function handleTransportInput(type: string, value: number) {
    console.log(type, value)
    if(type === "tempo")saveTempo(value);
  }

  return (
    <div id='App'>
      {midiDevices && <SettingsModule midiDevices={midiDevices} counter={counter}/>}
      <TransportBar onChange={handleTransportInput} onClick={handleTransportButtons} play={play} defaultTempo={60}/>
    </div>
  );
}

export default App;
