let ret = "";
let startIndex = 9;
let endIndex = 1;
for (let i = startIndex; i >= endIndex; --i) {
  const code = `
  function drawAline${i}() {
    const canvas = document.getElementById("draw_a_line_canvas_${i}");
  
    const canvas_index = document.createElement("div");
    canvas_index.textContent = "drawAline${i}";
    canvas_index.style = "padding-left:12px;";
    canvas.insertAdjacentElement("afterend", canvas_index);
  
    /**
     *
     * @param {HTMLCanvasElement} canvas
     */
    function draw(canvas) {}
    draw(canvas);
  }
  `;
  ret += code + "\n";
}

function generateFunctionName() {
  let ret = "";
  const startIndex = 9;
  const endIndex = 1;
  for (let i = startIndex; i >= endIndex; --i) {
    ret += `/**
    *
    * @param {HTMLCanvasElement} canvas
    */
   function drawACicle${i}(canvas) {}\n`;
  }

  require("fs").writeFileSync("./code.txt", ret);
}

function generateVariableNameForDrawACircle() {
  const startIndex = 9;
  const endIndex = 1;
  let ret = "";
  for (let i = startIndex; i >= endIndex; --i) {
    ret += `const draw_circle_canvas_${i} = document.getElementById('draw_circle_canvas_${i}');\n`;
  }
  require("fs").writeFileSync("./code.txt", ret);
}

function generateCallFunctionForDrawACircle() {
  const startIndex = 9;
  const endIndex = 1;
  let ret = "";
  for (let i = startIndex; i >= endIndex; --i) {
    ret += `drawACicle${i}(draw_circle_canvas_${i})\n`;
  }
  require("fs").writeFileSync("./code.txt", ret);
}

function generatePractiseOneFunction() {
  let ret = "";
  for (let i = 9; i >= 1; --i) {
    ret += `/**
    *
    * @param {HTMLCanvasElement} canvas
    */
   function practiseOne${i}(canvas) {}\n`;
  }
  require("fs").writeFileSync("./code.txt", ret);
}

function generateCallPractiseOneFunction() {
  let ret = "";
  for (let i = 9; i >= 1; --i) {
    ret += `practiseOne${i}(practise_1_canvas_${i})\n`;
  }
  require("fs").writeFileSync("./code.txt", ret);
}
function generateCreateVariableForPractiseOne() {
  let ret = "";
  for (let i = 9; i >= 1; --i) {
    ret += `const practise_1_canvas_${i} = document.getElementById("practise_1_canvas_${i}");\n`;
  }
  require("fs").writeFileSync("./code.txt", ret);
}

// generateFunctionName();
// generateVariableNameForDrawACircle();
// generateCallFunctionForDrawACircle();
// generatePractiseOneFunction();
generateCallPractiseOneFunction();
// generateCreateVariableForPractiseOne();
