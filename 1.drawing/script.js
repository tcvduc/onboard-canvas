/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function drawing(canvas) {
  const canvas_context = canvas.getContext("2d");

  canvas_context.fillStyle = "#ff0000";

  canvas_context.fillRect(0, 0, 150, 75);
}

{
  const my_canvas = document.getElementById("my_canvas");

  drawing(my_canvas);
}
