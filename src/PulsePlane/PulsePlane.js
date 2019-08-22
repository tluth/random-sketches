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


  pulseplane = {
    angle: 0,
    w: 20,
  }

  pulseplaneDraw = p5 => {
    p5.background(this.state.color);
    p5.fill(255)
    p5.directionalLight(0, 40, 240, 0, 1, -1);
    p5.translate(60, 0, -400);
    p5.rectMode(p5.CENTER);
    p5.rotateX(p5.PI / 5);
    p5.rotateY(p5.PI / 4);
    p5.scale(0.8);
    let maxDist = p5.dist(0, 0, 500, 500)

    for (let i = 0; i < p5.height; i += this.pulseplane.w) {
      for (let j = 0; j < p5.width; j += this.pulseplane.w) {
        p5.push();
        let d = p5.dist(j, i, p5.width / 2, p5.height / 2);
        let offset = p5.map(d, 0, maxDist, -1, 1);
        let a = this.pulseplane.angle + offset;
        let h = p5.map(p5.sin(a*9), -1, 1, 0, 100);
        let w = p5.map(p5.sin(a), -1, 1, 0, 50);
        p5.translate(j - p5.width / 2, i - p5.height / 2, 0);

        p5.box(this.pulseplane.w, this.pulseplane.w, h);
        p5.pop();
      }

    }
    this.pulseplane.angle += 0.009 * this.state.speed / 15;
  }

  render() {
    return <Sketch setup={this.state.setup} draw={this.pulseplaneDraw} />
  }
}

