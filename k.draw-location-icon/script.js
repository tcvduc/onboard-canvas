/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function draw(canvas) {
  canvas.width = 150;
  canvas.height = 280;
  // canvas.style = "border:1px solid #111;";
  const w = canvas.width;
  const h = canvas.height;
  const c = canvas.getContext("2d");

  const pi = Math.PI;

  let arcx = w / 2,
    arcy = 75,
    radius = 25,
    startAngle = 0,
    endAngle = 2 * pi,
    counterclockwise = false;

  // 1 - large circle
  radius = 65;
  c.beginPath();
  c.fillStyle = "#141e4d";
  c.arc(arcx, arcy, radius, startAngle, endAngle, counterclockwise);
  c.stroke();
  c.fill();
  c.closePath();

  // 2 - left line
  let temporary = (w - 65 * 2) / 2;

  c.beginPath();
  c.moveTo(temporary + 5, arcy + 25);
  c.lineTo(w / 2 - 5, h - 25);
  c.stroke();
  c.closePath();

  c.strokeStyle = "#141e4d";

  // 3 - right line
  c.beginPath();
  console.log("x1: ", w - (temporary + 5));
  console.log("y1: ", arcy + 25);
  console.log("x2: ", w / 2 + 5);
  console.log("y2: ", h - 25);

  let movetoy;
  let rightlinemovetoy;
  c.lineWidth = 2.09;

  // colorize
  for (let k = 10; k >= 0; --k) {
    for (
      let movetox = 15, rightlinemovetox = 135;
      movetox <= 70, rightlinemovetox >= 80;
      ++movetox, --rightlinemovetox
    ) {
      movetoy = (31 / 11) * movetox + 635 / 11;
      c.moveTo(movetox, movetoy);

      rightlinemovetoy = (-31 / 11) * rightlinemovetox + 5285 / 11;
      c.lineTo(rightlinemovetox, rightlinemovetoy);
      c.stroke();
    }
  }

  // 4 - small circle in the top middle
  radius = 25;
  c.beginPath();
  c.fillStyle = "#fff";
  c.arc(arcx, arcy, radius, startAngle, endAngle, counterclockwise);
  c.stroke();
  c.fill();
  c.closePath();

  c.moveTo(w - (temporary + 5), arcy + 25);
  c.lineTo(w / 2 + 5, h - 25);
  c.stroke();
  c.closePath();

  // 5 - small circle at the end
  radius = 5;
  arcx = w / 2;
  arcy = h - 27;
  c.fillStyle = "#141e4d";
  c.beginPath();
  c.arc(arcx, arcy, radius, startAngle, endAngle, counterclockwise);
  c.stroke();
  c.fill();
  c.closePath();

  // #141e4d
}

{
  const location_canvas = document.getElementById("location_canvas");
  draw(location_canvas);
}
