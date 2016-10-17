var color = 0;

window.onload = function() {

  var canvas = document.getElementById("canvas-2d");
  var context = canvas.getContext("2d");
  
  // Закрашенный прямоугольник
  // context.fillStyle = "red";
  // context.fillRect(10, 10, 100, 100);

  // context.strokeRect(x, y, width, height);

  // Обводка прямоугольника
  // context.strokeStyle = "red";
  // context.strokeRect(10, 10, 100, 100);

  // Окружность
  // context.lineWidth = 2;
  // arc (x, y, radius, startAngle, endAngle, anticlockwise)
  // context.strokeStyle = "blue";
  // context.arc(50, 50, 20, 0, Math.PI*2, false);
  // context.stroke();

  setInterval(line, 300);
  setInterval(blank, 200);

  function line () {
    context.save();

    context.lineWidth = 5 + 10 * Math.random();
    color = color + 10 * Math.random();
    context.moveTo(75, 40);
    console.log(color);
    context.bezierCurveTo(75,37,70,25,50,25);
    context.bezierCurveTo(20,25,20,62.5,20,62.5);
    context.bezierCurveTo(20,80,40,102,75,120);
    context.bezierCurveTo(110,102,130,80,130,62.5);
    context.bezierCurveTo(130,62.5,130,25,100,25);
    context.bezierCurveTo(85,25,75,37,75,40);

    context.strokeStyle = 'hsl(' + color + ', 50%, 50%)';
    context.shadowColor = 'white';
    context.shadowBlur = 10;
    context.stroke();
    context.restore();
  }

  function blank () {
    context.fillStyle = 'rgba(0,0,0,0.1)';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }

}

