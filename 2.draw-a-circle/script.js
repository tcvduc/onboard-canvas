function generateCanvasForDrawACircle() {
  const draw_a_circle = document.getElementById("draw_a_circle");
  const practise_1 = document.getElementById("practise_1");
  const practise_2 = document.getElementById("practise_2");

  for (let i = 9; i >= 1; --i) {
    const draw_circle_canvas_i = document.createElement("canvas");
    draw_circle_canvas_i.id = `draw_circle_canvas_${i}`;
    draw_circle_canvas_i.width = 200;
    draw_circle_canvas_i.height = 100;
    draw_circle_canvas_i.style = "border:3px solid #111;margin:12px;";
    draw_a_circle.appendChild(draw_circle_canvas_i);

    const function_name = document.createElement("div");
    function_name.textContent = `drawACicle${i}`;
    function_name.style = "margin-left:12px;font-weight:bold;";

    draw_circle_canvas_i.insertAdjacentElement("afterend", function_name);
  }
}

function initSection() {
  const draw_a_circle = document.getElementById("draw_a_circle");
  const drawACicleTitle = document.createElement("h2");
  drawACicleTitle.textContent = "1. Draw A Circle";
  draw_a_circle.appendChild(drawACicleTitle);

  const practise_1 = document.getElementById("practise_1");
  const practise_1_title = document.createElement("h2");
  practise_1_title.textContent = "2. Practise 1";
  practise_1.appendChild(practise_1_title);

  const practise_2 = document.getElementById("practise_2");
  const practise_2_title = document.createElement("h2");
  practise_2_title.textContent = "3. Practise 2";
  practise_2.appendChild(practise_2_title);

  const practise_3 = document.getElementById("practise_3");
  const practise_3_title = document.createElement("h2");
  practise_3_title.textContent = "4. Practise 3";
  practise_3.appendChild(practise_3_title);
}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function drawACicle9(canvas) {
  const c = canvas.getContext("2d");
  c.beginPath();
  c.arc(100, 50, 40, 0, 2 * Math.PI);
  c.stroke();
}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function drawACicle8(canvas) {
  const c = canvas.getContext("2d");
  let arcx = 50;
  let arcy = 50;
  let arcradius = 50;
  let arcstartangle = 0;
  let arcendangle = 2 * Math.PI;

  c.beginPath();
  c.arc(arcx, arcy, arcradius, arcstartangle, arcendangle);
  c.stroke();
}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function drawACicle7(canvas) {
  const c = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  let arcx = w - 50;
  let arcy = 50;
  let arcradius = 50;
  let arcstartangle = 0;
  let arcendangle = 2 * Math.PI;
  c.beginPath();
  c.arc(arcx, arcy, arcradius, arcstartangle, arcendangle);
  c.stroke();
}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function drawACicle6(canvas) {
  const c = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  let arcx = 0;
  let arcy = 0;
  let arcradius = 50;
  let arcstartangle = 0;
  let arcendangle = 2 * Math.PI;
  c.beginPath();
  c.arc(arcx, arcy, arcradius, arcstartangle, arcendangle);
  c.stroke();
}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function drawACicle5(canvas) {
  const c = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  let arcx = w;
  let arcy = 0;
  let arcradius = 50;
  let arcstartangle = 0;
  let arcendangle = 2 * Math.PI;
  c.beginPath();
  c.arc(arcx, arcy, arcradius, arcstartangle, arcendangle);
  c.stroke();
}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function drawACicle4(canvas) {
  const c = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  let arcx = w;
  let arcy = h;
  let arcradius = 50;
  let arcstartangle = 0;
  let arcendangle = 2 * Math.PI;

  c.beginPath();
  c.arc(arcx, arcy, arcradius, arcstartangle, arcendangle);
  c.stroke();
}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function drawACicle3(canvas) {
  const c = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  let arcx = 0;
  let arcy = h;
  let arcradius = 50;
  let arcstartangle = 0;
  let arcendangle = 2 * Math.PI;

  c.beginPath();
  c.arc(arcx, arcy, arcradius, arcstartangle, arcendangle);
  c.stroke();
}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function drawACicle2(canvas) {
  const c = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  let arcx = w / 2;
  let arcy = h / 2;
  let arcradius = 50;
  let arcstartangle = 0;
  let arcendangle = 2 * Math.PI;

  c.beginPath();
  c.arc(arcx, arcy, arcradius, arcstartangle, arcendangle);
  c.stroke();
}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function drawACicle1(canvas) {
  const c = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  let arcx = w / 2;
  let arcy = h / 2;
  let arcradius = 50;
  let arcstartangle = 0;
  let arcendangle = (3 / 4) * 2 * Math.PI;
  let rotateAngle = Math.PI;

  c.beginPath();

  c.arc(arcx, arcy, arcradius, arcstartangle, arcendangle);
  c.stroke();
  c.closePath();

  c.beginPath();
  c.moveTo(w / 2, h / 2);
  c.lineTo(w / 2, 0);
  c.stroke();

  c.beginPath();
  c.moveTo(w / 2 + arcradius, h / 2);
  c.lineTo(w / 2, h / 2);
  c.stroke();

  c.beginPath();
  c.arc(w / 2 - 25, h / 2 - 25, 5, 0, 2 * Math.PI);
  c.fillStyle = "black";
  c.stroke();
  c.fill();
}

function generateCanvasForPractise1() {
  const practise_1 = document.getElementById("practise_1");

  for (let i = 9; i >= 1; --i) {
    const practise_1_canvas_i = document.createElement("canvas");
    practise_1_canvas_i.id = `practise_1_canvas_${i}`;
    practise_1_canvas_i.width = 200;
    practise_1_canvas_i.height = 100;
    practise_1_canvas_i.style = "border:3px solid #111;margin:12px;";
    practise_1.appendChild(practise_1_canvas_i);

    const function_name = document.createElement("div");
    function_name.textContent = `practiseOne${i}`;
    function_name.style = "margin-left:12px;font-weight:bold;";

    practise_1_canvas_i.insertAdjacentElement("afterend", function_name);
  }
}

/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function practiseOne9(canvas) {
  const c = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  let x = w / 2,
    y = h / 2,
    radius = 40,
    startAngle = 0,
    endAngle = 2 * Math.PI,
    counterclockwise = false;

  c.beginPath();
  c.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  c.fillStyle = "black";
  c.strokeStyle = "transparent";
  c.fill();
  c.stroke();
}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function practiseOne8(canvas) {
  const c = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  const pi = Math.PI;
  let x = w / 2,
    y = h / 2,
    radius = 40,
    startAngle = 0,
    endAngle = 2 * Math.PI,
    counterclockwise = false; // !
  // counterclockwise = true; // !
  c.fillStyle = "black";

  c.beginPath();
  c.moveTo(w / 2, h / 2);
  c.lineTo(w / 2, h / 2 - radius);
  c.stroke();

  c.beginPath();
  c.moveTo(w / 2, h / 2);
  c.lineTo(w / 2 - radius, h / 2);
  c.fill();

  c.stroke();

  c.beginPath();
  c.arc(x, y, radius, -pi / 2, -pi, true);
  // c.arc(x, y, radius, startAngle, endAngle, counterclockwise);

  c.fill();
  c.stroke();
}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function practiseOne7(canvas) {}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function practiseOne6(canvas) {}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function practiseOne5(canvas) {}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function practiseOne4(canvas) {}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function practiseOne3(canvas) {}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function practiseOne2(canvas) {}
/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function practiseOne1(canvas) {}

{
  initSection();
  generateCanvasForDrawACircle();
  generateCanvasForPractise1();

  const draw_circle_canvas_9 = document.getElementById("draw_circle_canvas_9");
  const draw_circle_canvas_8 = document.getElementById("draw_circle_canvas_8");
  const draw_circle_canvas_7 = document.getElementById("draw_circle_canvas_7");
  const draw_circle_canvas_6 = document.getElementById("draw_circle_canvas_6");
  const draw_circle_canvas_5 = document.getElementById("draw_circle_canvas_5");
  const draw_circle_canvas_4 = document.getElementById("draw_circle_canvas_4");
  const draw_circle_canvas_3 = document.getElementById("draw_circle_canvas_3");
  const draw_circle_canvas_2 = document.getElementById("draw_circle_canvas_2");
  const draw_circle_canvas_1 = document.getElementById("draw_circle_canvas_1");

  drawACicle9(draw_circle_canvas_9);
  drawACicle8(draw_circle_canvas_8);
  drawACicle7(draw_circle_canvas_7);
  drawACicle6(draw_circle_canvas_6);
  drawACicle5(draw_circle_canvas_5);
  drawACicle4(draw_circle_canvas_4);
  drawACicle3(draw_circle_canvas_3);
  drawACicle2(draw_circle_canvas_2);
  drawACicle1(draw_circle_canvas_1);
  // practise 1

  const practise_1_canvas_9 = document.getElementById("practise_1_canvas_9");
  const practise_1_canvas_8 = document.getElementById("practise_1_canvas_8");
  const practise_1_canvas_7 = document.getElementById("practise_1_canvas_7");
  const practise_1_canvas_6 = document.getElementById("practise_1_canvas_6");
  const practise_1_canvas_5 = document.getElementById("practise_1_canvas_5");
  const practise_1_canvas_4 = document.getElementById("practise_1_canvas_4");
  const practise_1_canvas_3 = document.getElementById("practise_1_canvas_3");
  const practise_1_canvas_2 = document.getElementById("practise_1_canvas_2");
  const practise_1_canvas_1 = document.getElementById("practise_1_canvas_1");

  practiseOne9(practise_1_canvas_9);
  practiseOne8(practise_1_canvas_8);
  practiseOne7(practise_1_canvas_7);
  practiseOne6(practise_1_canvas_6);
  practiseOne5(practise_1_canvas_5);
  practiseOne4(practise_1_canvas_4);
  practiseOne3(practise_1_canvas_3);
  practiseOne2(practise_1_canvas_2);
  practiseOne1(practise_1_canvas_1);

  // practise 2

  // practise 3
}
