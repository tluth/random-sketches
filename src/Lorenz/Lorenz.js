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

  
  lorenz = {
    x: 0.01,
    y: 0,
    z: 0,
    a: 18,
    b: 42,
    c: 4,
    r: 0,
    points: new Array()
  }

  lorenzDraw = p5 => {
    p5.stroke(0);
    p5.background(this.state.color);
    p5.rotateY(this.lorenz.r);
    p5.rotateZ(this.lorenz.r / 5);
    let dt = 0.005;
    let dx = (this.lorenz.a * (this.lorenz.y - this.lorenz.x)) * dt;
    let dy = (this.lorenz.x * (this.lorenz.b - this.lorenz.z) - this.lorenz.y) * dt;
    let dz = (this.lorenz.x * this.lorenz.y - this.lorenz.c * this.lorenz.z) * dt;
    this.lorenz.x += dx;
    this.lorenz.y += dy;
    this.lorenz.z += dz;
    this.lorenz.points.push({ x: this.lorenz.x, y: this.lorenz.y, z: this.lorenz.z });
    p5.translate(0, 0, -200);
    p5.scale(4);

    p5.beginShape();
    p5.noFill();
    p5.strokeWeight(2);
    for (let v of this.lorenz.points) {
      p5.vertex(v.x, v.y, v.z);
    }
    p5.endShape();
    this.lorenz.r += 0.001 * this.state.speed / 15
    if (this.lorenz.points.length > 1000) {
      this.lorenz.points.shift()
    }
  }

  render() {
    return <Sketch setup={this.state.setup} draw={this.lorenzDraw} />
  }
}

