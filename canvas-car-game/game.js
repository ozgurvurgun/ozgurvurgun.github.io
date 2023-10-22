//setup
let c = document.createElement("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
document.body.appendChild(c);
let context = c.getContext("2d");
let pts = [];

while (pts.length < 254) {
  while (pts.includes((val = Math.floor(Math.random() * 255))));
  pts.push(val);
}

pts.push(pts[0]);

const lerp = (a, b, t) => a + ((b - a) * (1 - Math.cos(t * Math.PI))) / 2;

const noise = (x) => {
  x = (x * 0.01) % 254;
  return lerp(pts[Math.floor(x)], pts[Math.ceil(x)], x - Math.floor(x));
};

//init
let bgcolor = "#ff4301";
let forecolor = "#4a3f35";
let linecolor = "#2f2519";
let linewidth = 3;
let offset = -10;
let t = 0;

//draw
function draw() {
  t++;
  console.log(t);
  context.fillStyle = bgcolor;
  context.fillRect(0, 0, c.width, c.height);

  context.fillStyle = forecolor;
  context.strokeStyle = linecolor;
  context.lineWidth = linewidth;
  context.beginPath();
  context.moveTo(offset, c.height - offset);
  //   context.lineTo(offset, 200);

  for (let i = offset; i < c.width - offset; i++) {
    context.lineTo(i, c.height * 0.9 - noise(i + t) * 0.5); //enine cizgi
  }

  context.lineTo(c.width - offset, c.height - offset);
  context.closePath();
  context.fill();
  context.stroke();

  requestAnimationFrame(draw);
}

draw();
