import React, { useEffect, useState } from 'react';
import SettingsModule from './uiModules/settings/settings';
import TransportBar from './uiModules/transport/transport';
import { midiInit } from './services/midi';
import { generateClock } from './services/tempo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [midiDevices, getMidiDevices] = useState<any>();

  useEffect(() => {
    console.log("ComponentDidMount")
    async function getMidi() {
      const midiObj = await midiInit()
      getMidiDevices(midiObj)
    }
    getMidi()
    generateClock(120);
    document.addEventListener("tempo", tick)
  }, [])

  let tempoCounter = 0;  
  function tick(e: any) {  
    console.log(">>>>>>> tempo", tempoCounter);
    tempoCounter++;
  }

  return (
    <div id='App'>
      {midiDevices && <SettingsModule midiDevices={midiDevices} />}
      <TransportBar/>
    </div>
  );
}

export default App;
