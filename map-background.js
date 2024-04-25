// First canvas
var canvas1 = document.getElementById("myCanvas");
var ctx1 = canvas1.getContext("2d");

function setupCanvas1() {
  resizeCanvas1();

  window.addEventListener('resize', resizeCanvas1);

  drawCanvas1();
}

function drawCanvas1() {
  clearCanvas1();

  if (true) {
    var padfactor = 1e3;
    var e = 3e4;
    for (; e--; ) {
      var x = random(canvas1.width);
      var y = random(canvas1.height);
      ctx1.save();
      ctx1.lineWidth = 0.02;
      ctx1.strokeStyle = "hsl(100, 0%, " + random(60, 95) + "%)";
      ctx1.beginPath();
      ctx1.moveTo(random(-padfactor, canvas1.width + padfactor), random(-padfactor, canvas1.height + padfactor));
      ctx1.bezierCurveTo(
        random(-padfactor, canvas1.width + padfactor),
        random(-padfactor, canvas1.height + padfactor),
        random(-padfactor, canvas1.width + padfactor),
        random(-padfactor, canvas1.height + padfactor),
        random(-padfactor, canvas1.width + padfactor),
        random(-padfactor, canvas1.height + padfactor)
      );
      ctx1.stroke();
      ctx1.closePath();
      ctx1.restore();
    }
  }
}

function clearCanvas1() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function resizeCanvas1() {
  canvas1.width = window.innerWidth;
  canvas1.height = window.innerHeight;
  drawCanvas1();
}

setupCanvas1();


// // Second canvas
// var canvas2 = document.getElementById("yourCanvas");
// var ctx2 = canvas2.getContext("2d");

// function setupCanvas2() {
//   resizeCanvas2();

//   window.addEventListener('resize', resizeCanvas2);

//   drawCanvas2();
// }

// function drawCanvas2() {
//   clearCanvas2();

//   if (true) {
//     var padfactor = 1e3;
//     var e = 3e4;
//     for (; e--; ) {
//       var x = random(canvas2.width);
//       var y = random(canvas2.height);
//       ctx2.save();
//       ctx2.lineWidth = 0.01;
//       ctx2.strokeStyle = "hsl(100, 0%, " + random(60, 95) + "%)";
//       ctx2.beginPath();
//       ctx2.moveTo(random(-padfactor, canvas2.width + padfactor), random(-padfactor, canvas2.height + padfactor));
//       ctx2.bezierCurveTo(
//         random(-padfactor, canvas2.width + padfactor),
//         random(-padfactor, canvas2.height + padfactor),
//         random(-padfactor, canvas2.width + padfactor),
//         random(-padfactor, canvas2.height + padfactor),
//         random(-padfactor, canvas2.width + padfactor),
//         random(-padfactor, canvas2.height + padfactor)
//       );
//       ctx2.stroke();
//       ctx2.closePath();
//       ctx2.restore();
//     }
//   }
// }

// function clearCanvas2() {
//   ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
// }

// function resizeCanvas2() {
//   canvas2.width = window.innerWidth;
//   canvas2.height = window.innerHeight;
//   drawCanvas2();
// }

// setupCanvas2();