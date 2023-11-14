//mobil check
let isMobil = false;
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
if (isMobile) {
  isMobil = true;
}

//setup
let c = document.createElement("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
document.body.appendChild(c);
let context = c.getContext("2d");

let pts = [];
(function () {
  for (let i = 0; i <= 254; i++) {
    pts.push(i);
  }
  //fisher yates algorithm
  for (let i = pts.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = pts[i];
    pts[i] = pts[j];
    pts[j] = temp;
  }
  pts.push(pts[0]);
})();

function lerp(a, b, t) {
  return a + ((b - a) * (1 - Math.cos(t * Math.PI))) / 2;
}

function noise(x) {
  x = (x * 0.01) % 254;
  return lerp(pts[Math.floor(x)], pts[Math.ceil(x)], x - Math.floor(x));
}

//init
let bgcolor = "#ff4301";
let forecolor = "#4a3f35";
let linecolor = "#2f2519";
let linewidth = 5;
let offset = -10;
let yRatio = 0.3;
let t = 0;
let speed = 0;
let playing = true;
let k = { ArrowUp: 0, ArrowLeft: 0, ArrowRight: 0 };
let score = 0;
let highScore = localStorage.getItem("highScore") ?? 0;

class Player {
  constructor() {
    this.x = c.width / 2;
    this.y = 50;
    this.truck = new Image();
    this.truck.src = "images/game-images/truck.png";
    this.rot = 0;
    this.ySpeed = 0;
    this.rSpeed = 0;
    //interface
    this.startBtn = new Image();
    this.startBtn.src = "images/game-images/restart.png";
    //left button
    this.leftBtn = new Image();
    this.leftBtn.src = "images/game-images/left.png";
    //right button
    this.rightBtn = new Image();
    this.rightBtn.src = "images/game-images/right.png";
    //speed button
    this.fireBtn = new Image();
    this.fireBtn.src = "images/game-images/speed.png";
  }

  drawInterface() {
    if (playing) {
      //interface draw

      context.font = "22px Impact";
      context.fillStyle = "white";
      context.textAlign = "start";
      context.textBaseline = "top";
      context.fillText("High Score: " + highScore, 10, 10);
      context.fillText("Score: " + score, 10, 35);
      if (isMobil) {
        context.drawImage(this.leftBtn, 20, c.height - 90, 70, 70);
        context.drawImage(this.rightBtn, 110, c.height - 90, 70, 70);
        context.drawImage(this.fireBtn, c.width - 90, c.height - 90, 70, 70);
      }
    } else {
      if (score > highScore) {
        localStorage.setItem("highScore", score);
        highScore = score;
      }
      context.font = "22px Impact";
      context.fillStyle = "white";
      context.textAlign = "start";
      context.textBaseline = "top";
      context.fillText("High Score: " + highScore, 10, 10);
      context.fillText("Score: " + score, 10, 35);

      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = "32px Impact";
      context.fillStyle = "white";
      context.fillText("OYUN BİTTİ", c.width / 2, c.height / 3);
      context.drawImage(
        this.startBtn,
        c.width / 2 - 25,
        c.height / 3 + 50,
        50,
        50
      );
    }
  }

  draw() {
    let p1 = c.height * 0.9 - noise(this.x + t) * yRatio;
    let p2 = c.height * 0.9 - noise(this.x + t + 5) * yRatio;

    let gnd = 0;
    let offset = 38;
    if (p1 - offset > this.y) {
      this.ySpeed += 0.1;
    } else {
      this.ySpeed -= this.y - (p1 - offset);
      this.y = p1 - offset;
      gnd = 1;
    }

    if (k.ArrowUp == 1) {
      score += 10;
    }
    //fall check
    if (!playing || (gnd && Math.abs(this.rot) > Math.PI * 0.5)) {
      playing = false;
      this.rSpeed = 5;
      k.ArrowUp = 0;
      this.x -= speed * 5;
    }

    //rotation calc
    let angle = Math.atan2(p2 - offset - this.y, this.x + 5 - this.x);
    if (gnd && playing) {
      this.rot -= (this.rot - angle) * 0.5;
      this.rSpeed = this.rSpeed - (angle - this.rot);
    }

    this.rSpeed += (k.ArrowLeft - k.ArrowRight) * 0.05;
    this.rot -= this.rSpeed * 0.05;
    this.rot -= this.rSpeed * 0.1;
    if (this.rot > Math.PI) {
      this.rot = -Math.PI;
    }
    if (this.rot < -Math.PI) {
      this.rot = Math.PI;
    }

    this.y += this.ySpeed;
    //drawing

    //truck draw
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rot);

    context.drawImage(this.truck, -45, -45, 90, 90);
    context.restore();
  }
}

let player = new Player();

//draw
function draw() {
  speed -= (speed - k.ArrowUp) * 0.01;
  t += 10 * speed;

  //background
  context.fillStyle = bgcolor;
  context.fillRect(0, 0, c.width, c.height);

  //player
  player.draw();

  //ground
  context.fillStyle = forecolor;
  context.strokeStyle = linecolor;
  context.lineWidth = linewidth;
  context.beginPath();
  context.moveTo(offset, c.height - offset);
  for (let i = offset; i < c.width - offset; i++) {
    context.lineTo(i, c.height * 0.9 - noise(i + t) * yRatio);
  }
  context.lineTo(c.width - offset, c.height - offset);
  context.closePath();
  context.fill();
  context.stroke();

  player.drawInterface();

  //animation
  requestAnimationFrame(draw);
}

draw();

//mobile control
if (isMobil) {
  c.addEventListener("touchstart", handleStart, false);
  c.addEventListener("touchend", handleEnd, false);

  function handleStart(e) {
    e.preventDefault();
    let touches = e.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      let touch = touches[i];
      checkBtnPress(touch.pageX, touch.pageY);
    }
  }

  function handleEnd(e) {
    e.preventDefault();
    let touches = e.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      let touch = touches[i];
      checkBtnRelase(touch.pageX, touch.pageY);
    }
  }
} else {
  //desktop control
  onkeydown = (d) => {
    k[d.key] = 1;
  };
  onkeyup = (d) => (k[d.key] = 0);
  c.addEventListener("click", handleClick, false);
  function handleClick(e) {
    e.preventDefault();
    checkBtnPress(e.clientX, e.clientY);
  }
}

window.onresize = function () {
  window.location.reload();
};

function checkBtnPress(x, y) {
  //restart button
  if (
    !playing &&
    x > c.width / 2 - 25 &&
    x < c.width / 2 + 25 &&
    y > c.height / 3 + 50 &&
    y < c.height / 3 + 100
  ) {
    window.location.reload();
  }
  // left button
  if (playing && x > 20 && x < 90 && y > c.height - 90 && y < c.height - 20) {
    k.ArrowLeft = 1;
  }

  //right button
  if (playing && x > 110 && x < 180 && y > c.height - 90 && y < c.height - 20) {
    k.ArrowRight = 1;
  }

  //speed button
  if (
    playing &&
    x > c.width - 90 &&
    x < c.width - 20 &&
    y > c.height - 90 &&
    y < c.height - 20
  ) {
    k.ArrowUp = 1;
  }
}

function checkBtnRelase(x, y) {
  //restart button
  if (
    !playing &&
    x > c.width / 2 - 25 &&
    x < c.width / 2 + 25 &&
    y > c.height / 3 + 50 &&
    y < c.height / 3 + 100
  ) {
    window.location.reload();
  }
  // left button
  if (playing && x > 20 && x < 90 && y > c.height - 90 && y < c.height - 20) {
    k.ArrowLeft = 0;
  }

  //right button
  if (playing && x > 110 && x < 180 && y > c.height - 90 && y < c.height - 20) {
    k.ArrowRight = 0;
  }

  //speed button
  if (
    playing &&
    x > c.width - 90 &&
    x < c.width - 20 &&
    y > c.height - 90 &&
    y < c.height - 20
  ) {
    score += 10;
    k.ArrowUp = 0;
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
