import React from "react";
import DrumPad from '../DrumPad';
import './style.css';

const audio_tracks = ["Cev_H2.mp3", "Dsc_Oh.mp3", "Heater-1.mp3", "Heater-2.mp3", "Heater-3.mp3", "Heater-4_1.mp3", "Heater-6.mp3", "Kick_n_Hat.mp3", "RP4_KICK_1.mp3"]
const letters = ["Q","W","E","A","S","D","Z","X","C"]


class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener('keypress', this.handleKeyPress)
    }
    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleKeyPress)
    }
    
    handleKeyPress(e) {
        if(letters.includes(e.key)){
        document.getElementById("btn-"+e.key).click();
        document.getElementById('display').innerText = document.getElementById("btn-"+e.key).dataset.track;
        }
    }
  
    render(){
        const drumpads = audio_tracks.map((item, i) => <DrumPad key={letters[i]} letter={letters[i]} track={item} />);
        
        return(
            <div id="drum-machine">
                <div className="drum-pad-container">
                    {drumpads}
                </div>
                <div className="drum-settings">
                    <div id="display"></div>
                    <div>
                        <input type="range" id="volume" name="audio_volume" min="0" max="100" />
                    </div>
                </div>
            </div>
        );
    }
}

export default DrumMachine
