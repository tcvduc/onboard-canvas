let ret = "";
let startIndex = 19;
let endIndex = 19 + 9;
for (let i = startIndex; i < endIndex; ++i) {
  const code = `
  function drawAline${i}() {
    const canvas = document.getElementById("draw_a_line_canvas_${i}");
  
    /**
     *
     * @param {HTMLCanvasElement} canvas
     */
    function draw(canvas) {}
    draw(canvas);
  }`;
  ret += code + "\n";
}

require("fs").writeFileSync("./code.txt", ret);
