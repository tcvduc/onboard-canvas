function drawAline11() {
  const canvas = document.getElementById("draw_a_line_canvas_11");

  const canvas_index = document.createElement("div");
  canvas_index.textContent = "drawAline11";
  canvas_index.style = "padding-left:12px";
  canvas.insertAdjacentElement("afterend", canvas_index);

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {
    const w = canvas.width;
    const h = canvas.height;
    const c = canvas.getContext("2d");

    let moveToX = 0;
    let moveToY = 0;
    let lineToX = w;
    let lineToY = h;

    c.beginPath();
    c.moveTo(moveToX, moveToY);
    c.lineTo(lineToX, lineToY);
    c.stroke();
    c.closePath();
  }
  draw(canvas);
}
