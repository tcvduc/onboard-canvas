function displayFunctionInfo() {
  const fx_form = document.getElementById("fx_form");

  fx_form.addEventListener(
    "submit",
    /**
     *
     * @param {SubmitEvent} event
     */
    function (event) {
      event.preventDefault();
      const a = document.getElementById("a");
      const b = document.getElementById("b");

      const fx_info = document.getElementById("fx_info");
      fx_info.innerHTML = `y = <span>${a.value}</span>x + <span>${b.value}</span>`;

      const my_canvas = document.getElementById("my_canvas");
      drawFunction1(my_canvas);
    }
  );
}

/**
 *
 * @param {HTMLCanvasElement} my_canvas
 */
function drawFunction1(my_canvas) {
  my_canvas.width = 200;
  my_canvas.height = 100;
  my_canvas.style = "border:1px solid #111;";

  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  /**
   * + y = ax + b
   *   + f(0) = a x 0 + b
   *   + f(1) = a x 1 + b
   *
   */

  const c = my_canvas.getContext("2d");

  let moveToX = 0;
  let lineToX = 0;
  let moveToY = 0;
  let lineToY = 0;

  const w = my_canvas.width;
  const h = my_canvas.height;

  /**
   * 1. X axis
   * + x axis large horizontal bar - done
   *
   * + x axis arrow - done
   *   + x axis top diagonal bar - done
   *   + x axis bottom diagonal bar - done
   * + x letter - done
   *
   * + x axis coordinates - done
   *    + coordinate 0 - done
   *     + coordinate verticle bar - done
   *     + coordinate number indicate 0 - done
   *   + coordinate 1 - done
   *     + coordinate verticle bar - done
   *     + coordinate number indicate 1 - done
   *   + coordinate 2 - done
   *     + coordinate verticle bar - done
   *     + coordinate number indicate 2 - done
   *   + coordinate 3 - done
   *     + coordinate verticle bar - done
   *     + coordinate number indicate 3 - done
   *   + coordinate 4 - done
   *     + coordinate verticle bar - done
   *     + coordinate number indicate 4 - done
   *   + coordinate 5 - done
   *     + coordinate verticle bar - done
   *     + coordinate number indicate 5 - done
   *
   *
   *
   *
   *
   * */

  // x axis large horizontal bar - done
  moveToX = w / 5;
  moveToY = h - h / 3;

  lineToX = w - w / 5;
  lineToY = h - h / 3;

  const barSize = 5;
  const textFontSize = 10;
  c.font = `${textFontSize}px cambria`;
  const xAxisBarWidth = lineToX - moveToX;
  const xAxisBarWidthTotalUnit = 5;
  const xAxisBarOneUnit = (xAxisBarWidth - 10) / xAxisBarWidthTotalUnit;
  console.log("xAxisBarWidth: ", xAxisBarWidth);

  c.beginPath();
  c.moveTo(moveToX, moveToY);
  c.lineTo(lineToX, lineToY);
  c.stroke();

  // x axis top diagonal bar - done
  c.beginPath();
  c.moveTo(lineToX, lineToY);
  c.lineTo(lineToX - barSize, lineToY - barSize);
  c.stroke();

  // x axis bottom diagonal bar - done
  c.beginPath();
  c.moveTo(lineToX, lineToY);
  c.lineTo(lineToX - barSize, lineToY + barSize);
  c.stroke();

  // x letter - done
  c.beginPath();
  c.fillText("x", lineToX + 2, lineToY);

  // + coordinate 0 - done
  //   + coordinate verticle bar - done
  //   + coordinate number indicate 0 - done
  const coordinateNumberIndicateX0 = w / 5; // w/5 <=> 0 in this context
  const coordinateNumberIndicateY0 = h - h / 3; // h - h / 3; <=> 0 in this context

  for (let indicateNumber = 0; indicateNumber <= 5; ++indicateNumber) {
    c.beginPath();
    c.moveTo(
      coordinateNumberIndicateX0 + xAxisBarOneUnit * indicateNumber,
      coordinateNumberIndicateY0 - barSize
    );
    c.lineTo(
      coordinateNumberIndicateX0 + xAxisBarOneUnit * indicateNumber,
      coordinateNumberIndicateY0 + barSize
    );
    c.stroke();

    c.beginPath();
    c.fillText(
      indicateNumber,
      coordinateNumberIndicateX0 -
        barSize / 2 +
        xAxisBarOneUnit * indicateNumber,
      coordinateNumberIndicateY0 + barSize + barSize + barSize
    );
  }

  // 2. Y axis
}

{
  const my_canvas = document.getElementById("my_canvas");

  displayFunctionInfo();
  drawFunction1(my_canvas);
}
