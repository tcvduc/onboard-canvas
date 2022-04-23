const myCanvas = document.getElementById("myCanvas");

/**
 *
 * @param {HTMLCanvasElement} canvas
 */
function imageBitmap(canvas) {
  const c = canvas.getContext("2d");
  const image = new Image();
  const w = image.width;
  const h = image.height;

  // Wait for the sprite sheet to load
  image.onload = function () {
    Promise.all([
      // Cut out two sprites from the sprite sheet
      createImageBitmap(image, 0, 0, 32, 32),
    ]).then(function (image) {
      // Draw each sprite onto the canvas
      for (let i = 200; i >= 0; --i) {
        c.drawImage(image[0], i, i);
        c.drawImage(image[0], i * 2, i);
      }

      // c.drawImage(image[1], 32, 32);
    });
  };

  // Load the sprite sheet from an image file
  image.src = "image.jpg";
}

/**
 *
 * @param {HTMLCanvasElement} myCanvas
 */
function canvasBitMapRenderContext(myCanvas) {
  // const c = myCanvas.getContext("bitmaprenderer");
  // const h = myCanvas.height;
  // const w = myCanvas.width;

  imageBitmap(myCanvas);
}

canvasBitMapRenderContext(myCanvas);
