window.onload = function() {
  canvas = document.getElementsByTagName('canvas')[0];
  context = canvas.getContext('2d');

  // context.strokeRect(2, 2, 100, 100);
  // context.fillStyle = "red";
  // context.fillRect(105, 2, 100, 100);

  // context.arc(102, 205, 100, 0, Math.PI * 2, true);
  // context.lineWidth = "3";
  // context.strokeStyle = "pink";
  // context.stroke();

  context.bezierCurveTo(75,37,70,25,50,25);
  context.bezierCurveTo(20,25,20,62.5,20,62.5);
  context.bezierCurveTo(20,80,40,102,75,120);
  context.bezierCurveTo(110,102,130,80,130,62.5);
  context.bezierCurveTo(130,62.5,130,25,100,25);
  context.bezierCurveTo(85,25,75,37,75,40);
  draw();
  setInterval(draw, 500);
}

function draw() {
  random = Math.floor(Math.random() * 10);
  context.lineWidth = random;
  R = Math.floor(Math.random() * 255);
  G = Math.floor(Math.random() * 255);
  B = Math.floor(Math.random() * 255);
  color = "rgb(" + R + "," + G + "," + B + ")";
  context.strokeStyle = color;
  context.stroke();
}