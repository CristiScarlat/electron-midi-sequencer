import React, { useEffect, useState, ChangeEvent } from 'react';
import SettingsModule from './uiModules/settings/settings';
import TransportBar from './uiModules/transport/transport';
import { midiInit } from './services/midi';
import { initClock , registerTask} from './services/clock';
import MainSeqModule from './uiModules/mainSeq/maiSeq'
import 'bootstrap/dist/css/bootstrap.min.css';


let counter = 0;

function App() {
  const [midiDevices, getMidiDevices] = useState<any>();
  const [tickCounter, setTickCounter] = useState<number>();

  useEffect(() => {
    console.log("ComponentDidMount")
    async function getMidi() {
      const midiObj = await midiInit()
      getMidiDevices(midiObj)
    }
    getMidi()
    initClock()
    registerTask({ eventName: "drum-seq-sync", callback: Tick })
  }, [])

  function Tick() {
      counter++;
      if (counter === 16) {
          counter = 0;
      }
      setTickCounter(counter)
  }
  console.log(midiDevices)
  return (
    <div id='App'>
      {midiDevices && <SettingsModule midiDevices={midiDevices} />}
      <TransportBar defaultTempo={60} activeStep={tickCounter}/>
      <MainSeqModule activeStep={tickCounter}/>
    </div>
  );
}

export default App;
