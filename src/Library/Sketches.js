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


export const rotatingcubes = {    
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
    p5.rotateX(rotatingcubes.b);
    p5.rotateY(rotatingcubes.b);
    p5.rotateZ(rotatingcubes.b);

    let maxT = 200;// maxH - w;

    if (rotatingcubes.T > maxT) {
        rotatingcubes.speed = -0.5;
    } else if (rotatingcubes.T < 0) {
        rotatingcubes.speed = 0.5;
    }

    rotatingcubes.a = p5.map(rotatingcubes.T, 0, 200, 0, p5.PI);

    p5.push();
    p5.rotateZ(rotatingcubes.a);
    p5.translate(0, 0, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingcubes.a);
    p5.translate(-rotatingcubes.T-100, 0, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingcubes.a);
    p5.translate(0, 100+rotatingcubes.T, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingcubes.a);
    p5.translate(0, 0, 100+rotatingcubes.T);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingcubes.a);
    p5.translate(0, 0, -100-rotatingcubes.T);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingcubes.a);
    p5.translate(0, -100-rotatingcubes.T, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingcubes.a);
    p5.translate(rotatingcubes.T+100, 0, 0);
    p5.box(100, 100, 100);
    p5.pop();

    rotatingcubes.T = rotatingcubes.T + rotatingcubes.speed

    rotatingcubes.b += 0.008;

  }


  let angle = 0;
let w = 45;
let maxDist;
function setup(){
    createCanvas(500,500, WEBGL);
    maxDist = dist(0, 0, 500, 500);
}



function draw(){
    background(200, 0, 120);
    directionalLight(0, 20, 120, 0, 1, -1);
    translate(60, 0, -400);
    rectMode(CENTER);
    rotateX(PI/5);
    rotateY(PI/4);
    scale(0.8);

    for (let i = 0; i < height; i += w) {
        for (let j = 0; j < width; j += w) {
            push();
            let d = dist(j, i, width / 2, height / 2);
            let offset = map(d, 0, maxDist, -1, 1);
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 0, 200);
            let w = map(sin(a), -1, 1, 0, 50);
            translate(j - width / 2, i - height / 2, 0);

            box(w, w,  h);
            pop();
        }

    }
        angle += 0.01;
}
