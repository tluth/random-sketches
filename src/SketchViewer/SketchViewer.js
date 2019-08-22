import React, { Component } from "react";
import WaveCube from '../WaveCube/WaveCube';
import PulsePlane from '../PulsePlane/PulsePlane';
import Whacky from '../Whacky/Whacky';
import RotatingCubes from '../RotatingCubes/RotatingCubes';
import Metaballs from '../Metaballs/Metaballs';
import Lorenz from '../Lorenz/Lorenz';
import Lines from '../Lines/Lines';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: this.props.selection,
      color: this.props.color,
      speed: this.props.speed / 15,
      setup: null
    };
  }

  componentWillReceiveProps(next) {
    this.setState({
      selection: next.selection,
      color: next.color,
      speed: next.speed / 15
    })
  }

  componentWillMount() {
    let setup = (p5, parent) => {
      p5.createCanvas(600, 600, p5.WEBGL).parent(parent);
    }
    this.setState({ setup: setup });
  }

  render() {
    const sketchList = [
      <WaveCube color={this.state.color} speed={this.state.speed} setup={this.state.setup}/>,
      <PulsePlane color={this.state.color} speed={this.state.speed} setup={this.state.setup}/>,
      <Whacky color={this.state.color} speed={this.state.speed} setup={this.state.setup}/>,
      <RotatingCubes color={this.state.color} speed={this.state.speed} setup={this.state.setup}/>,
      <Metaballs color={this.state.color} speed={this.state.speed} setup={this.state.setup}/>,
      <Lorenz color={this.state.color} speed={this.state.speed} setup={this.state.setup}/>,
      <Lines color={this.state.color} speed={this.state.speed} setup={this.state.setup}/>,
    ]
    return (
      sketchList[this.state.selection]
    )
  }
}

