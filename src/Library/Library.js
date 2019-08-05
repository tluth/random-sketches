import React from "react";
import SketchViewer from '../SketchViewer/SketchViewer'
import ColorSelector from '../ColorSelector/ColorSelector';

export default class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0,
      speed: 15,
      color: '#9EDFF7'
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
    this.playAudio = this.playAudio.bind(this);
  }

  handleNext() {
    if (this.state.selection < 6 - 1) {
      this.setState({ selection: this.state.selection + 1 })
    }
  }

  handlePrevious() {
    if (this.state.selection > 0) {
      this.setState({ selection: this.state.selection - 1 })
    }
  }

  handleColorChange(e) {
    this.setState({ color: e.hex })
  }

  handleSpeedChange(e) {
    this.setState({ speed: e.target.value })
  }

  playAudio() {
    let url = "https://www.freesoundeffects.com/files/mp3_89456.mp3";
    let audio = new Audio(url);
    audio.play()
  }

  render() {
    return (
      <div className="container-fluid">
        <br />
        <div className="row">
          <div className="col-md-1">
          </div>
          <div className="col-md-4">
            <h2>Random Sketches</h2>
            <br /> <br />
            <div className="row">
              <div className="col-md-6">
                <button type="button" className="btn btn-primary btn-lg" onClick={this.handlePrevious}> Previous </button>
              </div>
              <button type="button" className="btn btn-primary btn-lg" onClick={this.handleNext}> Next </button>
            </div>
            <br /> <br />
            <div className="row">
              <div className="col-md-6">
                <ColorSelector handler={this.handleColorChange} />
              </div>
              <button type="button" className="btn btn-primary btn-lg" onClick={this.playAudio}> bork </button>
            </div>
            <br />
            <div className="row">
              <div className="col-md-8">
                <label htmlFor="customRange1">S p e e e e e e e e e d</label>
                <input
                  type="range"
                  className="custom-range"
                  id="customRange1"
                  defaultValue={this.state.speed}
                  min={1}
                  max={29}
                  onClick={this.handleSpeedChange}
                />
              </div>
            </div>
          </div>
          <br />
          <div className="col-md-3">
            <SketchViewer speed={this.state.speed} color={this.state.color} selection={this.state.selection} />
          </div>
        </div>
        <br />
      </div>
    );
  }
}