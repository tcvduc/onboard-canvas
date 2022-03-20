let ret = "";
let startIndex = 19;
let endIndex = 19 + 9 - 1;
for (let i = startIndex; i <= endIndex; ++i) {
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

require("fs").writeFileSync("./code.txt", ret);
