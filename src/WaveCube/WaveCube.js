import React, { Component } from "react";
import Sketch from '../SketchViewer/Sketch';


export default class WaveCube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      speed: this.props.speed,
      setup: this.props.setup
    };
  }

  componentWillReceiveProps(next) {
    this.setState({
      color: next.color,
      speed: next.speed
    })
  }

  wavecube = {
    angle: 0,
    w: 30
  }

  wavecubeDraw = p5 => {
    var maxDist = p5.dist(0, 0, 500, 500);
    p5.background(this.state.color);
    p5.fill(255)
    p5.directionalLight(203, 157, 247, 1, 0, -5);
    p5.translate(0, -50, -200);
    p5.scale(0.5);

    p5.rectMode(p5.CENTER);

    p5.rotateX(p5.PI / 4);
    p5.rotateZ(-p5.PI / 3.5);

    for (let i = 0; i < p5.height; i += this.wavecube.w) {
      for (let j = 0; j < p5.width; j += this.wavecube.w) {
        p5.push();
        let d = p5.dist(j, i, p5.width / 2, p5.height / 2);
        let offset = p5.map(d, 0, maxDist, -2, 2);
        let a = this.wavecube.angle + offset;
        let h = p5.map(p5.sin(a), -1, 1, 0, 800);
        p5.translate(j - p5.width / 2, i - p5.height / 2, 0);

        p5.box(this.wavecube.w, this.wavecube.w, h);
        p5.pop();
      }
    }
    this.wavecube.angle += 0.04 * this.state.speed;
  }

  render() {
    return <Sketch setup={this.state.setup} draw={this.wavecubeDraw} />
  }
}

