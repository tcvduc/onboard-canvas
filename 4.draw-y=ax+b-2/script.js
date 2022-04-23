const colors = {
  canvasBackgroundLineColor: "#d4d4d4",
};

/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function initCanvas(canvas) {
  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function initVerticalLineCanvasBackground(canvas) {
    const w = canvas.width;
    const h = canvas.height;
    const c = canvas.getContext("2d");
    const verticalLineSpacing = w / 4;

    let moveToX = verticalLineSpacing;
    let moveToY = 0;

    let lineToX = verticalLineSpacing;
    let lineToY = h;

    c.strokeStyle = `${colors.canvasBackgroundLineColor}`;
    c.strokeStyle = `orange`;

    c.lineWidth = 15;

    c.beginPath();
    c.moveTo(moveToX, moveToY);
    c.lineTo(lineToX, lineToY);
    c.fillStyle = "orange";
    // #fff6e6
    // #ffa500

    c.stroke();
    c.closePath();

    for (let i = 2; i <= 3; ++i) {
      moveToX = verticalLineSpacing * i;
      lineToX = verticalLineSpacing * i;

      c.beginPath();
      c.moveTo(moveToX, moveToY);
      c.lineTo(lineToX, lineToY);
      c.stroke();
      c.closePath();
    }
  }

  //
  initVerticalLineCanvasBackground(canvas);
}

function draw() {
  const graphCanvas = document.getElementById("graphCanvas");
  initCanvas(graphCanvas);
}

draw();
