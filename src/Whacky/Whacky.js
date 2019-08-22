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


  whacky = {
    angle: 0,
    rot: 0,
    w: 60
  }

  whackyDraw = p5 => {
    p5.background(this.state.color);
    p5.translate(0, -50, -200);

    p5.rectMode(p5.CENTER);
    p5.scale(0.6);
    p5.rotateX(p5.PI / 4);
    p5.rotateZ(-p5.PI / 3.5);
    let maxDist = p5.dist(0, 0, 600, 600);

    for (let i = 0; i < p5.height; i += this.whacky.w) {
      for (let j = 0; j < p5.width; j += this.whacky.w) {
        p5.push();
        let d = p5.dist(j, i, p5.width / 2, p5.height / 2);
        let offset = p5.map(d, 0, maxDist, -3, 3);
        let a = this.whacky.angle + offset;
        let h = p5.map(p5.sin(a), -1, 1, 0, 200);
        let col = p5.map(p5.sin(a), -1, 1, 50, 210);
        p5.directionalLight(col / 2, col, 247, 1, 0, -1);
        p5.directionalLight(col / 2, col, 247, 0, 0, 1);
        p5.translate(j - p5.width / 2, i - p5.height / 2, h * 2.5);
        p5.rotateY(this.whacky.rot);
        p5.box(50, 50, 50);
        p5.pop();
        p5.rotateZ(this.whacky.rot);
      }
    }
    this.whacky.angle += 0.01 * this.state.speed / 15;
    this.whacky.rot += 0.000001 * this.state.speed / 15;
  }

  render() {
    return <Sketch setup={this.state.setup} draw={this.whackyDraw} />
  }
}

