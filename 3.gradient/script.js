/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function canvasDrawALine(canvas) {
  const canvasContext = canvas.getContext("2d");

  canvasContext.moveTo(100, 50);
  canvasContext.lineTo(200, 100);
  canvasContext.stroke();
}

/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function logCanvasInfo(canvas) {
  const canvas_width = document.getElementById("canvas_width");
  const canvas_height = document.getElementById("canvas_height");

  canvas_width.innerHTML = `Canvas width: ${canvas.width}px`;
  canvas_height.innerHTML = `Canvas height: ${canvas.height}px`;
}

/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function canvasDrawACircle(canvas) {
  const canvasContext = canvas.getContext("2d");
  canvasContext.beginPath();

  const x = 95;
  const y = 50;
  const radius = 40;
  const startAngle = 0;
  const endAngle = 2 * Math.PI;
  const counterclockwise = false;

  canvasContext.arc(x, y, radius, startAngle, endAngle, counterclockwise);

  canvasContext.stroke();
}

{
  const my_canvas = document.getElementById("my_canvas");
  const canvas_circle = document.getElementById("canvas_circle");

  canvasDrawALine(my_canvas);

  logCanvasInfo(my_canvas);

  canvasDrawACircle(canvas_circle);
}
