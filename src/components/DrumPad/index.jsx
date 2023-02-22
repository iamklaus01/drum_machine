import React from "react"
import './style.css';
const link_root = "https://s3.amazonaws.com/freecodecamp/drums/";

class DrumPad extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
    
  handleClick(e){
    let id_value = e.currentTarget.id.split('-');
    document.getElementById(id_value[1]).play();
    document.getElementById('display').innerText = e.currentTarget.dataset.track;
  }
    
  render(){
    
    return(
      <button onClick={this.handleClick} className="drum-pad" data-track={this.props.track} id={"btn-"+this.props.letter}>
        <audio id={this.props.letter} className="clip" >
          <source src={link_root+this.props.track} type="audio/mpeg" />
          Audio not supported
        </audio> {this.props.letter}
      </button>
    )
  }
    
}

export default DrumPad;