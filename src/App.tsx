import React, { useEffect, useState } from 'react';
import Track from './uiComponents/track';
import SettingsModule from './uiModules/settings/settings';
import { midiInit } from './services/midi'
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
  }, [])

  return (
    <div className="App">
      {midiDevices && <SettingsModule midiDevices={midiDevices}/>}
    </div>
  );

}

export default App;
