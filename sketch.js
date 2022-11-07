var ball={
  x:20,
  y:30,
  r:30,
  xspeed:4,
  color:["red","blue","green","turquoise"]
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r);
fill(ball.color[3])
ball.x=ball.x+ball.xspeed
}
