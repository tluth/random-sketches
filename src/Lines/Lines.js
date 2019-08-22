import React, { Component } from "react";
import Sketch from '../SketchViewer/Sketch';


export default class Lines extends Component {
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

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  lines = {
    n_lines: 35,
    t: 0
  }

  linesDraw = p5 => {
    p5.background(this.state.color);
    p5.stroke(255);
    p5.strokeWeight(3);
    let bgColor = this.hexToRgb(this.state.color)

    let x1 = t => {
      return (p5.sin(t / 10) * 100 + p5.sin(t / 5) * 20);
    }

    let y1 = t => {
      return (p5.cos(t / 10) * 100);
    }

    let x2 = t => {
      return (p5.sin(t / 10) * 200 + p5.cos(t) * 2);
    }

    let y2 = t => {
      return (p5.cos(t / 20) * 200 + p5.sin(t / 12) * 20 / p5.sin(p5.sin(10 + t / 1000)));
    }

    let targetColor = { r: 20, g: 20, b: 20 };
    let rStepSize = Math.abs(targetColor.r - bgColor.r) / this.lines.n_lines;
    let gStepSize = Math.abs(targetColor.g - bgColor.g) / this.lines.n_lines;
    let bStepSize = Math.abs(targetColor.b - bgColor.b) / this.lines.n_lines;

    let currentR = targetColor.r;
    let currentG = targetColor.g;
    let currentB = targetColor.b;

    for (let i = 0; i < this.lines.n_lines; i++) {
      p5.stroke(i * rStepSize, i * gStepSize, i * bStepSize)
      p5.line(x1(this.lines.t + i), y1(this.lines.t + i), x2(this.lines.t + i), y2(this.lines.t + i));
    }
    this.lines.t -= 0.2;
  }

  render() {
    return <Sketch setup={this.state.setup} draw={this.linesDraw} />
  }
}

