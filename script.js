function appendToBody() {
  const code = `
  <div class="onboard_title" >
  3. Two intersecting rectangles
</div>
<canvas id="two_intersecting_rectangles" ></canvas>
  `;
  const body = document.body;
  body.innerHTML = code;
}

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

/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function drawTwoIntersectingRectangles(canvas) {
  if (canvas.getContext) {
    const context = canvas.getContext("2d");
    context.fillStyle = "rgb(200,0,0)";
    context.fillRect(10, 10, 50, 50);

    context.fillStyle = "rgba(0,0,200,0.5)";
    context.fillRect(30, 30, 50, 50);
  }
}

function generateCanvasForPractiseDrawALine() {
  const draw_a_line_practise = document.getElementById("draw_a_line_practise");
  for (let i = 1; i <= 9; ++i) {
    const canvas_i = document.createElement("canvas");
    canvas_i.width = 200;
    canvas_i.height = 100;
    canvas_i.style = "border:1px solid #111; margin:12px;";
    canvas_i.id = `draw_a_line_canvas_${i}`;

    draw_a_line_practise.appendChild(canvas_i);
  }
}

function drawAline1() {
  const canvas = document.getElementById("draw_a_line_canvas_1");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {
    const canvas_width = canvas.width;
    const canvas_height = canvas.height;
    const context = canvas.getContext("2d");
    context.moveTo(0, 0);
    context.lineTo(canvas_width, canvas_height);
    context.stroke();
  }
  draw(canvas);
}

function drawAline2() {
  const canvas = document.getElementById("draw_a_line_canvas_2");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {
    const context_2d = canvas.getContext("2d");
    context_2d.moveTo(canvas.width, 0);
    context_2d.lineTo(0, canvas.height);
    context_2d.stroke();
  }
  draw(canvas);
}

function drawAline3() {
  const canvas = document.getElementById("draw_a_line_canvas_3");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {
    const c = canvas.getContext("2d");
    c.moveTo(canvas.width / 2, 0);
    c.lineTo(canvas.width / 2, canvas.height);
    c.stroke();
  }
  draw(canvas);
}
function drawAline4() {
  const canvas = document.getElementById("draw_a_line_canvas_4");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {
    const c = canvas.getContext("2d");
    c.moveTo(0, canvas.height / 2);
    c.lineTo(canvas.width, canvas.height / 2);
    c.stroke();
  }
  draw(canvas);
}
function drawAline5() {
  const canvas = document.getElementById("draw_a_line_canvas_5");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {
    const c = canvas.getContext("2d");
    c.moveTo(20, 0);
    c.lineTo(0, 20);
    c.stroke();
  }
  draw(canvas);
}
function drawAline6() {
  const canvas = document.getElementById("draw_a_line_canvas_6");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {
    const c = canvas.getContext("2d");
    c.moveTo(canvas.width - 20, 0);
    c.lineTo(canvas.width, 20);
    c.stroke();
  }
  draw(canvas);
}
function drawAline7() {
  const canvas = document.getElementById("draw_a_line_canvas_7");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {
    const c = canvas.getContext("2d");
    c.moveTo(canvas.width - 70, 30);
    c.lineTo(60, 60);
    c.stroke();
  }
  draw(canvas);
}
function drawAline8() {
  const canvas = document.getElementById("draw_a_line_canvas_8");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {
    const c = canvas.getContext("2d");
    c.moveTo(0, canvas.height - 20);
    c.lineTo(20, canvas.height);
    c.stroke();
  }
  draw(canvas);
}
function drawAline9() {
  const canvas = document.getElementById("draw_a_line_canvas_9");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {
    const c = canvas.getContext("2d");
    c.moveTo(canvas.width, canvas.height - 20);
    c.lineTo(canvas.width - 20, canvas.height);
    c.stroke();
  }
  draw(canvas);
}

function generateCanvasForDrawALinePractise2() {
  const draw_a_line_practise_2 = document.getElementById(
    "draw_a_line_practise_2"
  );
  for (let i = 10; i <= 18; ++i) {
    const canvas_draw_a_line_practise_i = document.createElement("canvas");
    canvas_draw_a_line_practise_i.id = `draw_a_line_canvas_${i}`;
    canvas_draw_a_line_practise_i.width = 200;
    canvas_draw_a_line_practise_i.height = 100;
    canvas_draw_a_line_practise_i.style = "border:1px solid #111;margin:12px";
    draw_a_line_practise_2.appendChild(canvas_draw_a_line_practise_i);
  }
}

function generateCanvasForDrawALinePractise3() {
  const draw_a_line_practise_3 = document.getElementById(
    "draw_a_line_practise_3"
  );

  let startIndex = 19;
  let endIndex = startIndex + 9;
  for (let i = startIndex; i < endIndex; ++i) {
    const canvas_draw_a_line_practise_i = document.createElement("canvas");
    canvas_draw_a_line_practise_i.id = `draw_a_line_canvas_${i}`;
    canvas_draw_a_line_practise_i.width = 200;
    canvas_draw_a_line_practise_i.height = 100;
    canvas_draw_a_line_practise_i.style = "border:1px solid #111;margin:12px";
    draw_a_line_practise_3.appendChild(canvas_draw_a_line_practise_i);
  }
}
function drawAline10() {
  const canvas = document.getElementById("draw_a_line_canvas_10");
  const canvas_index = document.createElement("div");
  canvas_index.textContent = "drawAline10";
  canvas.insertAdjacentElement("afterend", canvas_index);
  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {
    const c = canvas.getContext("2d");
    let moveToX = 0;
    let moveToY = 0;
    let lineToX = canvas.width;
    let lineToY = canvas.height;
    const ten = 10;
    const twenty = 20;
    c.moveTo(moveToX, moveToY);
    c.lineTo(lineToX, lineToY);
    c.stroke();

    moveToX += 20;
    moveToY = 0;

    lineToX = canvas.width;
    lineToY -= 10;

    c.moveTo(moveToX, moveToY);
    c.lineTo(lineToX, lineToY);
    c.stroke();

    moveToX = 0;
    moveToY = 0;
    lineToX = canvas.width;
    lineToY = canvas.height;

    moveToX = 0;
    moveToY += 10;
    lineToX = canvas.width - 20;
    lineToY = canvas.height;

    c.moveTo(moveToX, moveToY);
    c.lineTo(lineToX, lineToY);
    c.stroke();

    moveToX = 0;
    moveToY = 0;
    lineToX = canvas.width;
    lineToY = canvas.height;

    moveToX += 0;
    moveToY += 10 + 10;
    lineToX = canvas.width - 20 - 20;
    lineToY = canvas.height;

    c.moveTo(moveToX, moveToY);
    c.lineTo(lineToX, lineToY);
    c.stroke();

    moveToX = 0;
    moveToY += 10;
    lineToX -= 20;
    lineToY = canvas.height;

    c.moveTo(moveToX, moveToY);
    c.lineTo(lineToX, lineToY);
    c.stroke();

    moveToX = 0;
    moveToY += ten;
    lineToX -= twenty;
    lineToY = canvas.height;

    c.moveTo(moveToX, moveToY);
    c.lineTo(lineToX, lineToY);
    c.stroke();

    moveToX = 0;
    moveToY += ten;
    lineToX -= twenty;
    lineToY = canvas.height;

    c.moveTo(moveToX, moveToY);
    c.lineTo(lineToX, lineToY);
    c.stroke();

    moveToX = 0;
    moveToY += ten;
    lineToX -= twenty;
    lineToY = canvas.height;

    c.moveTo(moveToX, moveToY);
    c.lineTo(lineToX, lineToY);
    c.stroke();

    moveToX = 0;
    moveToY += ten;
    lineToX -= twenty;
    lineToY = canvas.height;

    c.moveTo(moveToX, moveToY);
    c.lineTo(lineToX, lineToY);
    c.stroke();
  }
  draw(canvas);
}

function drawAline11() {
  const canvas = document.getElementById("draw_a_line_canvas_11");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline12() {
  const canvas = document.getElementById("draw_a_line_canvas_12");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline13() {
  const canvas = document.getElementById("draw_a_line_canvas_13");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline14() {
  const canvas = document.getElementById("draw_a_line_canvas_14");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline15() {
  const canvas = document.getElementById("draw_a_line_canvas_15");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline16() {
  const canvas = document.getElementById("draw_a_line_canvas_16");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline17() {
  const canvas = document.getElementById("draw_a_line_canvas_17");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline18() {
  const canvas = document.getElementById("draw_a_line_canvas_18");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline19() {
  const canvas = document.getElementById("draw_a_line_canvas_19");

  const canvas_index = document.createElement("div");
  canvas_index.textContent = "drawAline19";
  canvas.insertAdjacentElement("afterend", canvas_index);
  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {
    const c = canvas.getContext("2d");
    let moveToX = 0;
    let moveToY = 0;
    let lineToX = canvas.width;
    let lineToY = canvas.height;
    const ten = 10;
    const twenty = 20;

    c.moveTo(moveToX, moveToY);
    c.lineTo(lineToX, lineToY);
    c.stroke();
    // bottom rectangle

    for (let i = 20; i >= 1; --i) {
      moveToX = 0;
      moveToY += ten;
      lineToX -= twenty;
      lineToY = canvas.height;

      c.moveTo(moveToX, moveToY);
      c.lineTo(lineToX, lineToY);
      c.stroke();
    }

    // top rectangle
    moveToX = 0;
    moveToY = 0;
    lineToX = canvas.width;
    lineToY = canvas.height;
    for (let i = 10; i >= 1; --i) {
      moveToX += twenty;
      moveToY = 0;
      lineToX = canvas.width;
      lineToY -= ten;
      c.moveTo(moveToX, moveToY);
      c.lineTo(lineToX, lineToY);
      c.stroke();
    }
  }
  draw(canvas);
}

function drawAline20() {
  const canvas = document.getElementById("draw_a_line_canvas_20");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline21() {
  const canvas = document.getElementById("draw_a_line_canvas_21");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline22() {
  const canvas = document.getElementById("draw_a_line_canvas_22");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline23() {
  const canvas = document.getElementById("draw_a_line_canvas_23");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline24() {
  const canvas = document.getElementById("draw_a_line_canvas_24");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline25() {
  const canvas = document.getElementById("draw_a_line_canvas_25");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline26() {
  const canvas = document.getElementById("draw_a_line_canvas_26");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

function drawAline27() {
  const canvas = document.getElementById("draw_a_line_canvas_27");

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  function draw(canvas) {}
  draw(canvas);
}

{
  const my_canvas = document.getElementById("my_canvas");
  const canvas_circle = document.getElementById("canvas_circle");
  const two_intersecting_rectangles = document.getElementById(
    "two_intersecting_rectangles"
  );

  canvasDrawALine(my_canvas);
  // logCanvasInfo(my_canvas);
  // canvasDrawACircle(canvas_circle);
  drawTwoIntersectingRectangles(two_intersecting_rectangles);
  generateCanvasForPractiseDrawALine();
  drawAline1();
  drawAline2();
  drawAline3();
  drawAline4();
  drawAline5();
  drawAline6();
  drawAline7();
  drawAline8();
  drawAline9();
  generateCanvasForDrawALinePractise2();
  drawAline10();
  drawAline11();
  drawAline12();
  drawAline13();
  drawAline14();
  drawAline15();
  drawAline16();
  drawAline17();
  drawAline18();
  generateCanvasForDrawALinePractise3();
  drawAline19();
  drawAline20();
  drawAline21();
  drawAline22();
  drawAline23();
  drawAline24();
  drawAline25();
  drawAline26();
  drawAline27();
}
