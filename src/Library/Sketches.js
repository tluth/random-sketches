export const setup = (p5, parent) => {
    p5.createCanvas(500, 500, p5.WEBGL).parent(parent);
  }

const wavecube ={
    angle : 0,
    w : 30  
}
export const wavecubeDraw = p5 => {
      var maxDist = p5.dist(0, 0, 500, 500);
      p5.background(158, 223, 247);
      p5.directionalLight(203, 157, 247, 1, 0, -5);
      p5.translate(0, -50, -200);
      p5.scale(0.5);
  
      p5.rectMode(p5.CENTER);
  
      p5.rotateX(p5.PI/4);
      p5.rotateZ(-p5.PI/3.5);
  
      for (let i = 0; i < p5.height; i += wavecube.w) {
          for (let j = 0; j < p5.width; j += wavecube.w) {
              p5.push();
              let d = p5.dist(j, i, p5.width / 2, p5.height / 2);
              let offset = p5.map(d, 0, maxDist, -2, 2);
              let a = wavecube.angle + offset;
              let h = p5.map(p5.sin(a), -1, 1, 0, 800);
              p5.translate(j - p5.width / 2, i - p5.height / 2, 0);
  
              p5.box(wavecube.w, wavecube.w, h);
              p5.pop();
          }
      }
      wavecube.angle += 0.04;
  }


export const rotatingCubesVars = {    
    a : 0,
    b : 0,
    T : 0,
    speed : 0.5,
    w : 50
}
  
export const rotatingCubesDraw = p5 => {
    p5.background(255);
    p5.directionalLight(232, 200, 219, 0, -400, 0);
    p5.directionalLight(103, 255, 121, 0, 400, 0);
    p5.directionalLight(75, 110, 116, 200, 400, -400);
    p5.ambientMaterial(120);
    p5.strokeWeight(4);
    p5.scale(0.8);
    p5.rotateX(rotatingCubesVars.b);
    p5.rotateY(rotatingCubesVars.b);
    p5.rotateZ(rotatingCubesVars.b);

    // let T = H - w;
    let maxT = 200;// maxH - w;
    // let T = map(H, 0, maxH, 0, maxH - w);
    // if (H > maxH) {
    //     T = -T;
    // }

    if (rotatingCubesVars.T > maxT) {
        rotatingCubesVars.speed = -0.5;
    } else if (rotatingCubesVars.T < 0) {
        rotatingCubesVars.speed = 0.5;
    }

    rotatingCubesVars.a = p5.map(rotatingCubesVars.T, 0, 200, 0, p5.PI);

    p5.push();
    p5.rotateZ(rotatingCubesVars.a);
    p5.translate(0, 0, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingCubesVars.a);
    p5.translate(-rotatingCubesVars.T-100, 0, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingCubesVars.a);
    p5.translate(0, 100+rotatingCubesVars.T, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingCubesVars.a);
    p5.translate(0, 0, 100+rotatingCubesVars.T);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingCubesVars.a);
    p5.translate(0, 0, -100-rotatingCubesVars.T);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingCubesVars.a);
    p5.translate(0, -100-rotatingCubesVars.T, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingCubesVars.a);
    p5.translate(rotatingCubesVars.T+100, 0, 0);
    p5.box(100, 100, 100);
    p5.pop();

    rotatingCubesVars.T = rotatingCubesVars.T + rotatingCubesVars.speed

    rotatingCubesVars.b += 0.008;

  }