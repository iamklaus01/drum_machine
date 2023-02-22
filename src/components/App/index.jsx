import { useEffect } from 'react';
import DrumMachine from '../DrumMachine'

function App() {
  useEffect(() => {
    document.getElementById('volume').addEventListener('input', (e)=>{
      [...document.getElementsByTagName("audio")].forEach(i =>{i.volume = parseInt(e.currentTarget.value) / 100});
    });
  }, []);

  return (
    <div>
      <DrumMachine />
    </div>
  );
}


export default App