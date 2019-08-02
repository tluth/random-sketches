import React, { Component } from "react";
import Sketch from './Sketch'


export default class App extends Component {
  render() {
    return <Sketch setup={this.props.setup} draw={this.props.draw} />
  }
}





// let angle = 0;
// let w = 30;

// function setup(){
//     p5.createCanvas(1000,1000, WEBGL);
//     maxDist = dist(0, 0, 500, 500);
// }

// export default function draw(){
//     background(158, 223, 247);
//     directionalLight(203, 157, 247, 1, 0, -5);
//     translate(0, -50, -200);
//     scale(0.5);

//     rectMode(CENTER);

//     rotateX(PI/4);
//     rotateZ(-PI/3.5);

//     for (let i = 0; i < height; i += w) {
//         for (let j = 0; j < width; j += w) {
//             push();
//             let d = dist(j, i, width / 2, height / 2);
//             let offset = map(d, 0, maxDist, -2, 2);
//             let a = angle + offset;
//             let h = map(sin(a), -1, 1, 0, 800);
//             translate(j - width / 2, i - height / 2, 0);

//             box(w, w, h);
//             pop();
//         }
//     }
//         angle += 0.04;
// }
