import React from "react";
import SketchViewer from '../SketchViewer/SketchViewer'
import {
  setup,
  wavecubeDraw,
  rotatingCubesDraw
} from './Sketches'



const sketches = [
  wavecubeDraw,
  rotatingCubesDraw 
]

export default class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleNext() {
    if (this.state.selection < sketches.length -1) {
      this.setState({ selection: this.state.selection + 1 })
    }
  }

  handlePrevious() {
    if (this.state.selection > 0) {
      this.setState({ selection: this.state.selection - 1 })
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <br />
        <div className="row">
          <div className="col-md-3">
            <h2>Random Sketches</h2>
          </div>
          <br />
          <div className="col-md-3">
            <SketchViewer setup={setup} draw={sketches[this.state.selection]} />
          </div>
        </div>
        <br />
          <div className="row">
        <div className="col-md-4">
        </div>
            <div className="col-md-2">
              <button type="button" className="btn btn-primary btn-lg" onClick={this.handlePrevious}> Previous </button>
            </div>
              <button type="button" className="btn btn-primary btn-lg" onClick={this.handleNext}> Next </button>
            </div>
          </div>
    );
  }
}