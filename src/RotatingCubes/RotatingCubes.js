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

  rotatingcubes = {
    a: 0,
    b: 0,
    T: 0,
    speed: 0.5,
    w: 50
  }

  rotatingCubesDraw = p5 => {
    p5.background(this.state.color);
    p5.directionalLight(232, 200, 219, 0, -400, 0);
    p5.directionalLight(103, 255, 121, 0, 400, 0);
    p5.directionalLight(75, 110, 116, 200, 400, -400);
    p5.ambientMaterial(120);
    p5.strokeWeight(4);
    p5.scale(0.8);
    p5.rotateX(this.rotatingcubes.b);
    p5.rotateY(this.rotatingcubes.b);
    p5.rotateZ(this.rotatingcubes.b);

    let maxT = 200;

    if (this.rotatingcubes.T > maxT) {
      this.rotatingcubes.speed = -0.5;
    } else if (this.rotatingcubes.T < 0) {
      this.rotatingcubes.speed = 0.5;
    }

    this.rotatingcubes.a = p5.map(this.rotatingcubes.T, 0, 200, 0, p5.PI);

    p5.push();
    p5.rotateZ(this.rotatingcubes.a);
    p5.translate(0, 0, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(this.rotatingcubes.a);
    p5.translate(-this.rotatingcubes.T - 100, 0, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(this.rotatingcubes.a);
    p5.translate(0, 100 + this.rotatingcubes.T, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(this.rotatingcubes.a);
    p5.translate(0, 0, 100 + this.rotatingcubes.T);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(this.rotatingcubes.a);
    p5.translate(0, 0, -100 - this.rotatingcubes.T);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(this.rotatingcubes.a);
    p5.translate(0, -100 - this.rotatingcubes.T, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(this.rotatingcubes.a);
    p5.translate(this.rotatingcubes.T + 100, 0, 0);
    p5.box(100, 100, 100);
    p5.pop();

    this.rotatingcubes.T = this.rotatingcubes.T + this.rotatingcubes.speed
    this.rotatingcubes.b += 0.008 * this.state.speed;
  }


  render() {
    return <Sketch setup={this.state.setup} draw={this.rotatingCubesDraw} />
  }
}

