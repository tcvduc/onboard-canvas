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
  my_canvas.width = 400;
  my_canvas.height = 300;
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
   * 1. X axis - done
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
  const spaceBetweenArrowAndTheLastUnit = 10;
  const xAxisBarOneUnit =
    (xAxisBarWidth - spaceBetweenArrowAndTheLastUnit) / xAxisBarWidthTotalUnit;

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
  const spaceBetweenLetterToBarAxis = 4;
  c.beginPath();
  c.fillText("x", lineToX + spaceBetweenLetterToBarAxis, lineToY);

  // + coordinate 0 - done
  //   + coordinate verticle bar - done
  //   + coordinate number indicate 0 - done
  const coordinateNumberIndicateX0 = w / 5; // w/5 <=> 0 in this context
  const coordinateNumberIndicateY0 = h - h / 3; // h - h / 3; <=> 0 in this context

  for (let indicateNumber = 0; indicateNumber <= 5; ++indicateNumber) {
    if (indicateNumber === 0) {
      c.beginPath();
      c.moveTo(
        coordinateNumberIndicateX0 + xAxisBarOneUnit * indicateNumber,
        coordinateNumberIndicateY0 - barSize
      );
      c.lineTo(
        coordinateNumberIndicateX0 + xAxisBarOneUnit * indicateNumber,
        coordinateNumberIndicateY0
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
    if (indicateNumber !== 0) {
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
  }

  /**
   * 2. Y axis
   * + y axis large vertical bar - done
   *
   * + y axis arrow - done
   *   + y axis left diagonal bar - done
   *   + y axis right diagonal bar - done
   *
   * + y letter - done
   *
   * + y axis coordinates
   *    + coordinate 0 - done
   *     + coordinate horizontal bar - done
   *     + coordinate number indicate 0 - done
   *   + coordinate 1
   *     + coordinate horizontal bar
   *     + coordinate number indicate 1
   *   + coordinate 2
   *     + coordinate horizontal bar
   *     + coordinate number indicate 2
   *   + coordinate 3
   *     + coordinate horizontal bar
   *     + coordinate number indicate 3
   *   + coordinate 4
   *     + coordinate horizontal bar
   *     + coordinate number indicate 4
   *   + coordinate 5
   *     + coordinate horizontal bar
   *     + coordinate number indicate 5
   *
   *
   *
   *
   *
   * */

  // y axis large vertical bar
  c.beginPath();
  c.moveTo(
    coordinateNumberIndicateX0 + xAxisBarOneUnit * 0,
    coordinateNumberIndicateY0 - barSize
  );
  c.lineTo(coordinateNumberIndicateX0, h / 8);
  c.stroke();

  /**
   *   + y axis arrow - done
   *     + y axis left diagonal bar - done
   *     + y axis right diagonal bar - done
   */
  c.beginPath();
  c.moveTo(coordinateNumberIndicateX0, h / 8);
  c.lineTo(coordinateNumberIndicateX0 - barSize, h / 8 + barSize);
  c.stroke();

  c.beginPath();
  c.moveTo(coordinateNumberIndicateX0, h / 8);
  c.lineTo(coordinateNumberIndicateX0 + barSize, h / 8 + barSize);
  c.stroke();

  // + y letter
  c.beginPath();
  c.fillText(
    "y",
    coordinateNumberIndicateX0 + xAxisBarOneUnit * 0 - barSize / 2,
    h / 8 - barSize
  );

  // + y axis coordinates

  const yAxisBarHeight = Math.abs(
    h / 8 -
      (coordinateNumberIndicateY0 - barSize) +
      spaceBetweenArrowAndTheLastUnit
  );
  const yAxisBarOneUnit = yAxisBarHeight / 5;

  for (let i = 5; i >= 1; --i) {
    c.beginPath();
    c.moveTo(
      coordinateNumberIndicateX0,
      coordinateNumberIndicateY0 - barSize - yAxisBarOneUnit * i
    );
    c.lineTo(
      coordinateNumberIndicateX0 + barSize,
      coordinateNumberIndicateY0 - barSize - yAxisBarOneUnit * i
    );
    c.stroke();

    c.beginPath();
    c.moveTo(
      coordinateNumberIndicateX0,
      coordinateNumberIndicateY0 - barSize - yAxisBarOneUnit * i
    );
    c.lineTo(
      coordinateNumberIndicateX0 - barSize,
      coordinateNumberIndicateY0 - barSize - yAxisBarOneUnit * i
    );
    c.stroke();

    c.beginPath();
    c.fillText(
      i,
      coordinateNumberIndicateX0 - barSize * 3,
      coordinateNumberIndicateY0 - barSize - yAxisBarOneUnit * i + barSize / 2
    );
  }

  /**
   * 3. f(x) graph
   * - y = f(x) = -x + 1
   * + a = -1
   * + b = 1
   *
   * +  f(0) = -1 x 0 + 1 = 1 = a * 0 + b
   * -> moveToX = 0, 0 x-axis = coordinateNumberIndicateX0
   * -> moveToY = f0,
   * f0 y-axis = coordinateNumberIndicateY0 - barSize - yAxisBarOneUnit * f0
   *
   * +  f(1) = -1 x 1 + 1 = 0 = a * 1 + b
   * -> lineToX = 1,
   * 1 x-axis =  coordinateNumberIndicateX0 + xAxisBarOneUnit * 1,
   * -> lineToY = f1
   *
   *
   *
   */
  if (a === "" && b === "") {
    return;
  }

  const f0 = +a * 0 + +b;
  const f1 = +a * 1 + +b;
  console.log("a: ", a);
  console.log("b: ", b);
  console.log("f0: ", f0);
  console.log("f1: ", f1);

  const moveToMaxLengthGraph = w;
  const lineToMaxLengthGraph = h;

  c.beginPath();
  // c.moveTo(
  //   coordinateNumberIndicateX0,
  //   coordinateNumberIndicateY0 - barSize - yAxisBarOneUnit * f0
  // );
  c.moveTo(
    coordinateNumberIndicateX0 - moveToMaxLengthGraph,
    coordinateNumberIndicateY0 -
      barSize -
      yAxisBarOneUnit * f0 -
      moveToMaxLengthGraph
  );
  c.lineTo(
    coordinateNumberIndicateX0 + xAxisBarOneUnit * 1 + lineToMaxLengthGraph,
    coordinateNumberIndicateY0 + lineToMaxLengthGraph
  );
  c.lineWidth = 2.5;
  c.strokeStyle = "#eea833";
  c.stroke();
}

{
  const my_canvas = document.getElementById("my_canvas");

  displayFunctionInfo();
  drawFunction1(my_canvas);
}
