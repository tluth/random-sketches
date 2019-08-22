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
 
  metaballs = {
    a: 0,
    b: 0,
    speed: 0.5,
    w: 50,
    T: 0,
    spin: 0,
  }

  metaballsDraw = p5 => {
    p5.background(this.state.color);
    p5.fill(255)
    p5.ambientMaterial(190, 1500, 250);
    p5.directionalLight(0, 0, 247, 0, 0, -1);
    p5.directionalLight(180, 20, 200, -1, 0, 0);
    p5.directionalLight(200, 70, 100, 0, 1, -1);
    p5.directionalLight(0, 240, 180, 0, 1, 0);
    this.metaballs.spin += 0.0009;
    this.metaballs.b = p5.map(this.metaballs.T, 0, 200, 0, p5.PI);
    p5.rotateX(this.metaballs.spin * 3);
    p5.rotateY(this.metaballs.spin / 2);
    p5.rotateZ(this.metaballs.spin);
    p5.strokeWeight(4);

    let maxT = 100;

    if (this.metaballs.T > maxT) {
      this.metaballs.speed = -0.5;
    } else if (this.metaballs.T < 0) {
      this.metaballs.speed = 0.5;
    }

    if (this.metaballs.speed == -0.5) {
      this.metaballs.a = this.metaballs.b;
    } else if (this.metaballs.speed == 0.5) {
      this.metaballs.a = 0;
    }

    // FRONT
    //top left
    p5.push();
    p5.translate(-this.metaballs.T - 50, -50 - this.metaballs.T, -this.metaballs.T - 50);
    p5.rotateY(-this.metaballs.a);
    p5.rotateX(this.metaballs.a);
    p5.rotateZ(this.metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    //top right
    p5.push();
    p5.translate(this.metaballs.T + 50, -this.metaballs.T - 50, -this.metaballs.T - 50);
    p5.rotateY(this.metaballs.a);
    p5.rotateX(this.metaballs.a);
    p5.rotateZ(this.metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    //bottom left
    p5.push();
    p5.translate(-this.metaballs.T - 50, this.metaballs.T + 50, -this.metaballs.T - 50);
    p5.rotateY(-this.metaballs.a);
    p5.rotateX(-this.metaballs.a);
    p5.rotateZ(this.metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    //bottom right
    p5.push();
    p5.translate(this.metaballs.T + 50, this.metaballs.T + 50, -this.metaballs.T - 50);
    p5.rotateY(this.metaballs.a);
    p5.rotateX(-this.metaballs.a);
    p5.rotateZ(this.metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    // BACk
    //top left
    p5.push();
    p5.translate(-this.metaballs.T - 50, -50 - this.metaballs.T, this.metaballs.T + 50);
    p5.rotateY(this.metaballs.a);
    p5.rotateX(-this.metaballs.a);
    p5.rotateZ(this.metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    //top right
    p5.push();
    p5.translate(this.metaballs.T + 50, -this.metaballs.T - 50, this.metaballs.T + 50);
    p5.rotateY(-this.metaballs.a);
    p5.rotateX(-this.metaballs.a);
    p5.rotateZ(this.metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    //bottom left
    p5.push();
    p5.translate(-this.metaballs.T - 50, this.metaballs.T + 50, this.metaballs.T + 50);
    p5.rotateY(this.metaballs.a);
    p5.rotateX(this.metaballs.a);
    p5.rotateZ(this.metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    //bottom right
    p5.push();
    p5.translate(this.metaballs.T + 50, this.metaballs.T + 50, this.metaballs.T + 50);
    p5.rotateY(-this.metaballs.a);
    p5.rotateX(this.metaballs.a);
    p5.rotateZ(this.metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    this.metaballs.T = this.metaballs.T + this.metaballs.speed * this.state.speed / 15;
    this.metaballs.b += this.metaballs.b;
  }


  render() {
    return <Sketch setup={this.state.setup} draw={this.metaballsDraw} />
  }
}

