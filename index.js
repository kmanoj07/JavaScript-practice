let mySound, amplitude, fft, amp;
let particles = [];

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("sound/love");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  amplitude = new p5.Amplitude();
  fft = new p5.FFT();
}

function draw() {
  background(0);
  strokeWeight(0.5);
  rotateX(60);

  let level = amplitude.getLevel(); //0.0 - 1.0
  //mapping the 0 to 1 to larger number range
  //let dim = map(level,0, 1, 10, 200); // map to new size
  fft.analyze();
  amp = fft.getEnergy(20, 200);
  console.log(amp);

  let wave = fft.waveform();
  noFill();
  beginShape();
  for (let i = 0; i <= 180; i++) {
    let index = floor(map(i, 0, 180, 0, wave.length - 1));

    let r = map(wave[index], -1, 1, 150, 350);

    let x = r * sin(i);
    let y = r * cos(i);
    vertex(x, y);
  }
  endShape();
  beginShape();
  for (let i = 0; i <= 180; i++) {
    let index = floor(map(i, 0, 180, 0, wave.length - 1));

    let r = map(wave[index], -1, 1, 150, 350);

    let x = r * -sin(i);
    let y = r * cos(i);
    vertex(x, y);
  }
  endShape();

  let particle = new Particle();
  particles.push(particle);
  for (let i = particles.length-1; i >= 0; i--) {
    if (!particles[i].edges()) {
      particles[i].update(amp > 230);
      particles[i].show();
    } else {
      particles.splice(i, 1);
    }
  }

  noFill();
  for (let i = 0; i < 50; i++) {
    let r = map(sin(frameCount), -1, 1, 100, 200);
    let g = map(i, 0, 100, 100, 200);
    let b = map(cos(frameCount), -1, 1, 200, 100);

    stroke(r, g, b);
    rotate(frameCount);

    beginShape();
    for (let j = 0; j < 360; j += 90) {
      let rad = i * 3;
      let x = rad * cos(j);
      let y = rad * sin(j);
      let z = sin(frameCount * level + i * 5) * 100;
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
  //ellipse(displayWidth / 2, displayHeight / 2, level * 100, level * 100);
}

function mousePressed() {
  console.log({ amplitude });
  if (mySound.isPlaying()) {
    mySound.pause();
    noLoop();
  } else {
    mySound.play();
    loop();
  }
}

class Particle {
  constructor() {
    this.pos = p5.Vector.random2D().mult(250);
    this.vel = createVector(0, 0);
    this.acc = this.pos.copy().mult(random(0.0001, 0.00001));

    this.w = random(3, 5);
    this.c = [random(200, 255), random(200, 255), random(200, 255),];
  }
  edges() {
    if (
      this.pos.x < -width / 2 ||
      this.pos.x > width / 2 ||
      this.pos.y < -height / 2 ||
      this.pos.y > height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
  update(cond) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    if (cond) {
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
    }
  }
  show() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.w);
  }
}
