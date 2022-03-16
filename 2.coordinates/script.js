/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function logCursorCoordinateInCanvasRectangle(canvas) {
  canvas.onmouseover = (event) => {
    const canvas_width = canvas.width;
    const canvas_height = canvas.height;
    const canvas_context = canvas.getContext("2d");

    canvas_context.arc();
    const coordinate_info = document.getElementById("coordinate_info");

    coordinate_info.innerHTML = "";
    coordinate_info.innerHTML = event.clientX;
    return;
  };
}

/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function drawALine(canvas) {
  const canvas_context = canvas.getContext("2d");

  for (let i = 0; i <= 200; ++i) {
    canvas_context.moveTo(i, i);
    canvas_context.lineTo(200, 100);

    canvas_context.stroke();
  }
}

/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function drawCircle(canvas) {
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
}

{
  const my_canvas = document.getElementById("my_canvas");
  const canvas_draw_circle = document.getElementById("canvas_draw_circle");

  //   logCursorCoordinateInCanvasRectangle(my_canvas);
  drawALine(my_canvas);
  drawCircle(canvas_draw_circle);
}
