import React, { Component } from "react";
import Sketch from './Sketch'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: this.props.selection,
      color: this.props.color,
      speed: this.props.speed
    };
  }

  componentWillReceiveProps(next) {
    this.setState({
      selection: next.selection,
      color: next.color,
      speed: next.speed
    })
  }

  setup = (p5, parent) => {
    p5.createCanvas(600, 600, p5.WEBGL).parent(parent);
  }

  wavecube = {
    angle: 0,
    w: 30
  }

  wavecubeDraw = p5 => {
    var maxDist = p5.dist(0, 0, 500, 500);
    p5.background(this.state.color);
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
    this.wavecube.angle += 0.04 * this.state.speed/15;
  }

  pulseplane = {
    angle: 0,
    w: 20,
  }


  pulseplaneDraw = p5 => {
    p5.background(this.state.color);
    p5.directionalLight(0, 20, 120, 0, 1, -1);
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
        let h = p5.map(p5.sin(a), -1, 1, 0, 100);
        let w = p5.map(p5.sin(a), -1, 1, 0, 50);
        p5.translate(j - p5.width / 2, i - p5.height / 2, 0);

        p5.box(this.pulseplane.w, this.pulseplane.w, h);
        p5.pop();
      }

    }
    this.pulseplane.angle += 0.009 * this.state.speed/15;
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
    this.whacky.angle += 0.01 * this.state.speed/15;
    this.whacky.rot += 0.000001 * this.state.speed/15;
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
    this.rotatingcubes.b += 0.008 * this.state.speed/15;
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

    this.metaballs.T = this.metaballs.T + this.metaballs.speed * this.state.speed/15;
    this.metaballs.b += this.metaballs.b;
  }

  sketchList = [
    this.wavecubeDraw,
    this.pulseplaneDraw,
    this.whackyDraw,
    this.rotatingCubesDraw,
    this.metaballsDraw
  ]

  render() {
    return <Sketch setup={this.setup} draw={this.sketchList[this.state.selection]} />
  }
}

