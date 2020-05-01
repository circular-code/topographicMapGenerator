'use strict';

function setup() {
    createCanvas(document.body.clientWidth, document.body.clientHeight);
}

const inc = 0.01;
let start = 0;

function draw() {

    //perlin noise
    background(51);
    stroke(255);
    noFill();

    beginShape();

    let xoff = start;

    for (let x = 0; x < width; x++){
        let y = noise(xoff) * height;
        vertex(x, y);
        xoff += inc;
    }

    endShape();

    //sinus wave with added perlin noise
    stroke(125,125,255);

    beginShape();

    let xoff3 = start;

    for (let x = 0; x < width; x++){
        let y = noise(xoff3) * 300 + height/2 - 125 + sin(xoff3) * height/2;
        vertex(x, y);
        xoff3 += inc;
    }

    endShape();

    start += inc;
}

setup();
draw();