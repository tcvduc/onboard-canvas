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
  c.lineTo(w / 2 - 5, h - 60);
  c.stroke();
  c.closePath();

  // 3 - right line
  c.beginPath();

  c.moveTo(w - (temporary + 5), arcy + 25);
  c.lineTo(w / 2 + 5, h - 60);
  c.stroke();

  let rightlinemovetoy;
  for (let rightlinemovetox = 135; rightlinemovetox >= 80; --rightlinemovetox) {
    rightlinemovetoy = (-24 / 11) * rightlinemovetox + 4340 / 11;

    c.moveTo(rightlinemovetox, rightlinemovetoy);
    c.lineTo(w / 2, h / 2);
    c.stroke();
  }

  c.moveTo(w - (temporary + 5), arcy + 25);
  c.lineTo(w / 2 + 5, h - 60);
  c.stroke();
  c.closePath();

  // colorize left line and right line
  let leftlinemovetoy;
  c.lineWidth = 1.9;
  c.strokeStyle = "#141e4d";
  for (
    let leftlinemovetox = 15, rightlinemovetox = 135;
    leftlinemovetox <= 70, rightlinemovetox >= 80;
    ++leftlinemovetox, --rightlinemovetox
  ) {
    leftlinemovetoy = (24 / 11) * leftlinemovetox + 740 / 11;
    rightlinemovetoy = (-24 / 11) * rightlinemovetox + 4340 / 11;

    c.moveTo(leftlinemovetox, leftlinemovetoy);
    c.lineTo(rightlinemovetox, rightlinemovetoy);
    c.stroke();
  }

  // 4 - small circle in the top middle
  radius = 25;
  c.beginPath();
  c.fillStyle = "#fff";
  c.arc(arcx, arcy, radius, startAngle, endAngle, counterclockwise);
  c.stroke();
  c.fill();
  c.closePath();

  c.beginPath();

  c.moveTo(w - (temporary + 5), arcy + 25);
  c.lineTo(w / 2 + 5, h - 60);
  c.stroke();

  // 5 - small circle at the end
  radius = 5;
  arcx = w / 2 + 0.2;
  arcy = h - 62;
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
