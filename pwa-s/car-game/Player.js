// let highScore = localStorage.getItem("highScore") ?? 0;
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
      context.fillText("High Score: " + score, 10, 10);
      context.fillText("Score: " + score, 10, 35);
      if (isMobil) {
        context.drawImage(this.leftBtn, 20, c.height - 90, 70, 70);
        context.drawImage(this.rightBtn, 110, c.height - 90, 70, 70);
        context.drawImage(this.fireBtn, c.width - 90, c.height - 90, 70, 70);
      }
    } else {
      context.font = "22px Impact";
      context.fillStyle = "white";
      context.textAlign = "start";
      context.textBaseline = "top";
      context.fillText("High Score: " + score, 10, 10);
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

    //fall check
    if (!playing || (gnd && Math.abs(this.rot) > Math.PI * 0.5)) {
      playing = false;
      this.rSpeed = 5;
      k.ArrowUp = 0;
      this.x -= speed * 5;
    }

    if (k.ArrowUp == 1) {
      score += 10;
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
