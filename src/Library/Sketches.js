

export const setup = (p5, parent) => {
    p5.createCanvas(600, 600, p5.WEBGL).parent(parent);
}

const wavecube = {
    angle: 0,
    w: 30
}

export const wavecubeDraw = p5 => {
    var maxDist = p5.dist(0, 0, 500, 500);
    p5.background('#9EDFF7');
    p5.directionalLight(203, 157, 247, 1, 0, -5);
    p5.translate(0, -50, -200);
    p5.scale(0.5);

    p5.rectMode(p5.CENTER);

    p5.rotateX(p5.PI / 4);
    p5.rotateZ(-p5.PI / 3.5);

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
    a: 0,
    b: 0,
    T: 0,
    speed: 0.5,
    w: 50
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
    p5.translate(-rotatingcubes.T - 100, 0, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingcubes.a);
    p5.translate(0, 100 + rotatingcubes.T, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingcubes.a);
    p5.translate(0, 0, 100 + rotatingcubes.T);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingcubes.a);
    p5.translate(0, 0, -100 - rotatingcubes.T);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingcubes.a);
    p5.translate(0, -100 - rotatingcubes.T, 0);
    p5.box(100, 100, 100);
    p5.pop();

    p5.push();
    p5.rotateZ(rotatingcubes.a);
    p5.translate(rotatingcubes.T + 100, 0, 0);
    p5.box(100, 100, 100);
    p5.pop();

    rotatingcubes.T = rotatingcubes.T + rotatingcubes.speed

    rotatingcubes.b += 0.008;

}


const pulseplane = {
    angle: 0,
    w: 20,
}


export const pulseplaneDraw = p5 => {
    p5.background(200, 0, 120);
    p5.directionalLight(0, 20, 120, 0, 1, -1);
    p5.translate(60, 0, -400);
    p5.rectMode(p5.CENTER);
    p5.rotateX(p5.PI / 5);
    p5.rotateY(p5.PI / 4);
    p5.scale(0.8);
    let maxDist = p5.dist(0, 0, 500, 500)

    for (let i = 0; i < p5.height; i += pulseplane.w) {
        for (let j = 0; j < p5.width; j += pulseplane.w) {
            p5.push();
            let d = p5.dist(j, i, p5.width / 2, p5.height / 2);
            let offset = p5.map(d, 0, maxDist, -1, 1);
            let a = pulseplane.angle + offset;
            let h = p5.map(p5.sin(a), -1, 1, 0, 200);
            let w = p5.map(p5.sin(a), -1, 1, 0, 50);
            p5.translate(j - p5.width / 2, i - p5.height / 2, 0);

            p5.box(pulseplane.w, pulseplane.w, h);
            p5.pop();
        }

    }
    pulseplane.angle += 0.01;
}

const whacky = {
    angle: 0,
    rot: 0,
    w: 60
}


export const whackyDraw = p5 => {
    p5.background(158, 223, 247);
    p5.translate(0, -50, -200);

    p5.rectMode(p5.CENTER);
    p5.scale(0.6);
    p5.rotateX(p5.PI / 4);
    p5.rotateZ(-p5.PI / 3.5);
    let maxDist = p5.dist(0, 0, 600, 600);

    for (let i = 0; i < p5.height; i += whacky.w) {
        for (let j = 0; j < p5.width; j += whacky.w) {
            p5.push();
            let d = p5.dist(j, i, p5.width / 2, p5.height / 2);
            let offset = p5.map(d, 0, maxDist, -3, 3);
            let a = whacky.angle + offset;
            let h = p5.map(p5.sin(a), -1, 1, 0, 200);
            let col = p5.map(p5.sin(a), -1, 1, 50, 210);
            p5.directionalLight(col / 2, col, 247, 1, 0, -1);
            p5.directionalLight(col / 2, col, 247, 0, 0, 1);
            p5.translate(j - p5.width / 2, i - p5.height / 2, h * 2.5);
            p5.rotateY(whacky.rot);
            p5.box(50, 50, 50);
            p5.pop();
            p5.rotateZ(whacky.rot);
            // translate(rot*100, 0, 0 );

        }
    }
    whacky.angle += 0.009;
    whacky.rot += 0.000001;
}
const metaballs = {
    a : 0,
    b : 0,
    speed : 0.5,
    w : 50,
    T : 0,
    spin : 0,
}


export const metaballsDraw = p5 => {
    p5.background(220, 255, 250);
    p5.ambientMaterial(190, 1500, 250);
    p5.directionalLight(0, 0, 247, 0, 0, -1);
    p5.directionalLight(180, 20, 200, -1, 0, 0);
    p5.directionalLight(200, 70, 100, 0, 1, -1);
    p5.directionalLight(0, 240, 180, 0, 1, 0);
    metaballs.spin += 0.0009;
    metaballs.b = p5.map(metaballs.T, 0, 200, 0, p5.PI);
    p5.rotateX(metaballs.spin*3);
    p5.rotateY(metaballs.spin/2);
    p5.rotateZ(metaballs.spin);
    p5.strokeWeight(4);

    let maxT = 100;

    if (metaballs.T > maxT) {
        metaballs.speed = -0.5;
    } else if (metaballs.T < 0) {
        metaballs.speed = 0.5;
    }

    if (metaballs.speed == -0.5) {
        metaballs.a = metaballs.b;
    } else if (metaballs.speed == 0.5) {
        metaballs.a = 0;
    }

    // FRONT
    //top left
    p5.push();
    p5.translate(-metaballs.T-50, -50-metaballs.T, -metaballs.T-50);
    p5.rotateY(-metaballs.a);
    p5.rotateX(metaballs.a);
    p5.rotateZ(metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    //top right
    p5.push();
    p5.translate(metaballs.T+50, -metaballs.T-50, -metaballs.T-50);
    p5.rotateY(metaballs.a);
    p5.rotateX(metaballs.a);
    p5.rotateZ(metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    //bottom left
    p5.push();
    p5.translate(-metaballs.T-50, metaballs.T+50, -metaballs.T-50);
    p5.rotateY(-metaballs.a);
    p5.rotateX(-metaballs.a);
    p5.rotateZ(metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    //bottom right
    p5.push();
    p5.translate(metaballs.T+50, metaballs.T+50, -metaballs.T-50);
    p5.rotateY(metaballs.a);
    p5.rotateX(-metaballs.a);
    p5.rotateZ(metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    // BACk
    //top left
    p5.push();
    p5.translate(-metaballs.T-50, -50-metaballs.T, metaballs.T+50);
    p5.rotateY(metaballs.a);
    p5.rotateX(-metaballs.a);
    p5.rotateZ(metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    //top right
    p5.push();
    p5.translate(metaballs.T+50, -metaballs.T-50, metaballs.T+50);
    p5.rotateY(-metaballs.a);
    p5.rotateX(-metaballs.a);
    p5.rotateZ(metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    //bottom left
    p5.push();
    p5.translate(-metaballs.T-50, metaballs.T+50, metaballs.T+50);
    p5.rotateY(metaballs.a);
    p5.rotateX(metaballs.a);
    p5.rotateZ(metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    //bottom right
    p5.push();
    p5.translate(metaballs.T+50, metaballs.T+50, metaballs.T+50);
    p5.rotateY(-metaballs.a);
    p5.rotateX(metaballs.a);
    p5.rotateZ(metaballs.a);
    p5.box(100, 100, 100);
    p5.pop();

    metaballs.T = metaballs.T + metaballs.speed
    metaballs.b += metaballs.b;
}
